import type { Request, Response, NextFunction } from "express"

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(`[v0] Error in ${req.method} ${req.path}:`, error)

  // Prisma errors
  if (error.code) {
    switch (error.code) {
      case "P2002":
        return res.status(409).json({ error: "A record with this data already exists" })
      case "P2025":
        return res.status(404).json({ error: "Record not found" })
      default:
        return res.status(500).json({ error: "Database error occurred" })
    }
  }

  // Validation errors
  if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message })
  }

  // Default error
  res.status(500).json({
    error: "Internal server error",
    message: process.env.NODE_ENV === "development" ? error.message : undefined,
  })
}
