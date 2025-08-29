# Todo App Backend

Express.js API backend for the Todo application with Prisma ORM and MySQL database.

## Features

- RESTful API endpoints for CRUD operations
- MySQL database with Prisma ORM
- Input validation with Zod
- Error handling middleware
- CORS enabled
- TypeScript support

## Setup

### Prerequisites

- Node.js 18+
- MySQL 9.3+
- npm

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL=mysql://root:password@localhost:3306/todo_app
   PORT=3001
   FRONTEND_URL=http://localhost:3000
   ```

3. **Generate Prisma client:**

   ```bash
   npm run db:generate
   ```

4. **Push database schema:**

   ```bash
   npm run db:push
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

## Environment Variables

- `DATABASE_URL`: MySQL connection string
- `PORT`: Server port (default: 3001)
- `FRONTEND_URL`: Frontend URL for CORS

## Database

This project uses MySQL with Prisma ORM. The database schema includes:

- `todos` table with fields:
  - `id`: Unique identifier
  - `title`: Todo title
  - `color`: Todo color
  - `completed`: Completion status
  - `createdAt`: Creation timestamp
  - `updatedAt`: Last update timestamp

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push database schema
- `npm run db:migrate` - Run database migrations

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions.
