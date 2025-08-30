import { Router } from "express";
import { prisma } from "../lib/prisma";
import type { CreateTodoRequest, UpdateTodoRequest } from "../types/todo";
import { validateTodo } from "../middleware/validation";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const router = Router();

// GET /api/todos - Get all todos
router.get("/", async (req, res, next) => {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: "desc" },
    });

    console.log(`[v0] Retrieved ${todos.length} todos`);
    res.json(todos);
  } catch (error) {
    next(error);
  }
});

// POST /api/todos - Create a new todo
router.post("/", validateTodo, async (req, res, next) => {
  try {
    const { title, color = "blue" }: CreateTodoRequest = req.body;

    const todo = await prisma.todo.create({
      data: {
        title,
        color,
        completed: false,
      },
    });

    console.log(`[v0] Created todo: ${todo.title}`);
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
});

// PUT /api/todos/:id - Update a todo
router.put("/:id", validateTodo, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, color, completed }: UpdateTodoRequest = req.body;

    const todo = await prisma.todo.update({
      where: { id },
      data: {
        ...(title !== undefined && { title }),
        ...(color !== undefined && { color }),
        ...(completed !== undefined && { completed }),
      },
    });

    console.log(`[v0] Updated todo: ${todo.id}`);
    res.json(todo);
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return res.status(404).json({ error: "Todo not found" });
    }
    next(error);
  }
});

// DELETE /api/todos/:id - Delete a todo
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    await prisma.todo.delete({
      where: { id },
    });

    console.log(`[v0] Deleted todo: ${id}`);
    res.status(204).send();
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return res.status(404).json({ error: "Todo not found" });
    }
    next(error);
  }
});

export { router as todoRoutes };
