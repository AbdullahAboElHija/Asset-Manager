import express from "express";
import { registerRoutes } from "../server/routes.js";
import { connectDB } from "../server/db.js";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ensure DB is connected for serverless functions
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
});

const httpServer = createServer(app);
registerRoutes(httpServer, app);

export default app;
