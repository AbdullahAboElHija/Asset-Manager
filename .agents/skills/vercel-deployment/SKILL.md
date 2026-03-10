---
name: vercel-deployment
description: Step-by-step guide to deploy the Itqan Agency project (Vite React frontend + Express backend) to Vercel. Use when the user asks about deploying or hosting on Vercel.
---

# Vercel Deployment Guide — Itqan Agency

This guide explains how to deploy this project (Vite React frontend + Express.js backend + MongoDB) to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com)
- The project pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- MongoDB Atlas cluster with `0.0.0.0/0` IP whitelisted (or Vercel's IPs)

## Project Structure for Vercel

Vercel runs the backend as **serverless functions**. The Express server needs to be wrapped in a Vercel-compatible handler.

### Step 1: Create the Vercel API Entry Point

Create a file at `api/index.ts` that wraps the Express app for serverless:

```typescript
import express from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const httpServer = createServer(app);
registerRoutes(httpServer, app);

export default app;
```

### Step 2: Create `vercel.json`

Create `vercel.json` in the project root:

```json
{
  "buildCommand": "vite build",
  "outputDirectory": "dist/public",
  "framework": "vite",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/index.ts" },
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "functions": {
    "api/index.ts": {
      "runtime": "@vercel/node@3"
    }
  }
}
```

### Step 3: Update Vite Config for Output

Make sure `vite.config.ts` outputs to `dist/public`:

```typescript
export default defineConfig({
  build: {
    outDir: "dist/public",
  },
  // ... rest of config
});
```

### Step 4: Set Environment Variables in Vercel

Go to your Vercel project **Settings > Environment Variables** and add:

| Variable | Value | Environment |
|----------|-------|-------------|
| `MONGODB_URI` | `mongodb+srv://...` | All |
| `ADMIN_PASSWORD` | Your admin password | All |

### Step 5: Deploy

#### Option A: Via Vercel Dashboard
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Vercel will auto-detect the Vite framework
4. Add the environment variables from Step 4
5. Click **Deploy**

#### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Important Notes

### Serverless Limitations
- Vercel serverless functions have a **10-second timeout** on the free plan (60s on Pro)
- Each API request creates a new connection; consider using MongoDB connection pooling
- No persistent WebSocket connections in serverless

### MongoDB Connection Pooling for Serverless
To avoid creating new connections on every request, cache the connection in `server/db.ts`:

```typescript
import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;
  
  await mongoose.connect(process.env.MONGODB_URI!, {
    serverSelectionTimeoutMS: 5000,
  });
  isConnected = true;
}
```

Then call `await connectDB()` at the top of your API handler before processing requests.

### SPA Routing
The `rewrites` rule in `vercel.json` sends all non-API routes to `index.html`, which lets wouter handle client-side routing for pages like `/portfolio` and `/admin`.

### Custom Domain
1. Go to your Vercel project **Settings > Domains**
2. Add your domain (e.g., `itqan.agency`)
3. Update DNS records as instructed by Vercel
4. Vercel automatically provisions SSL/TLS certificates

## Troubleshooting

| Issue | Solution |
|-------|----------|
| API returns 500 | Check Vercel Function Logs in the dashboard |
| MongoDB connection fails | Verify `MONGODB_URI` is set in Vercel env vars and Atlas IP whitelist includes `0.0.0.0/0` |
| Pages return 404 | Ensure `vercel.json` rewrites are correct |
| Build fails | Run `npm run build` locally first to catch errors |
| Static assets missing | Verify `outputDirectory` in `vercel.json` matches Vite's `build.outDir` |
