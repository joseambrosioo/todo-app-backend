-- Create todos table for Prisma
CREATE TABLE IF NOT EXISTS "todos" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT 'blue',
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS "todos_completed_idx" ON "todos"("completed");
CREATE INDEX IF NOT EXISTS "todos_created_at_idx" ON "todos"("created_at");

-- Add constraint for color validation
ALTER TABLE "todos" ADD CONSTRAINT "todos_color_check" 
CHECK ("color" IN ('red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'magenta', 'brown'));
