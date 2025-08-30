import type { Request, Response, NextFunction } from "express"

const VALID_COLORS = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "magenta", "brown"]

export const validateTodo = (req: Request, res: Response, next: NextFunction) => {
  const { title, color } = req.body

  // Validate title for POST requests
  if (req.method === "POST" && (!title || typeof title !== "string" || title.trim().length === 0)) {
    return res.status(400).json({ error: "Title is required and must be a non-empty string" })
  }

  // Validate title for PUT requests if provided
  if (req.method === "PUT" && title !== undefined && (typeof title !== "string" || title.trim().length === 0)) {
    return res.status(400).json({ error: "Title must be a non-empty string" })
  }

  // Validate color if provided
  if (color !== undefined && !VALID_COLORS.includes(color)) {
    return res.status(400).json({
      error: `Color must be one of: ${VALID_COLORS.join(", ")}`,
    })
  }

  next()
}
