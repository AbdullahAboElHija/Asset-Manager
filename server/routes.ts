import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProjectSchema } from "@shared/schema";

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const token = authHeader.slice(7);
  if (token !== process.env.ADMIN_PASSWORD) {
    res.status(403).json({ message: "Forbidden" });
    return;
  }
  next();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/api/projects", async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post("/api/admin/login", (req, res) => {
    const { password } = req.body;
    if (password === process.env.ADMIN_PASSWORD) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: "Invalid password" });
    }
  });

  app.post("/api/projects", requireAdmin, async (req, res) => {
    const parsed = insertProjectSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ message: "Invalid project data", errors: parsed.error.flatten() });
      return;
    }
    const project = await storage.createProject(parsed.data);
    res.status(201).json(project);
  });

  app.patch("/api/projects/:id", requireAdmin, async (req, res) => {
    const { id } = req.params;
    const project = await storage.updateProject(id, req.body);
    if (!project) {
      res.status(404).json({ message: "Project not found" });
      return;
    }
    res.json(project);
  });

  app.delete("/api/projects/:id", requireAdmin, async (req, res) => {
    const { id } = req.params;
    const deleted = await storage.deleteProject(id);
    if (!deleted) {
      res.status(404).json({ message: "Project not found" });
      return;
    }
    res.json({ success: true });
  });

  return httpServer;
}
