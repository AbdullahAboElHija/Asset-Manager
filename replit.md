# Itqan Agency - Landing Page & Portfolio

## Overview
A trilingual (EN/AR/HE) landing page for Itqan Agency, a Software House & AI Agency. Features a strict geometric design following the brand style guide with Electric Blue (#2563EB), Midnight Black (#0B1121), and Pure White (#FFFFFF).

## Architecture
- **Frontend**: React + Vite + Tailwind CSS v4 + wouter routing
- **Backend**: Express.js with REST API
- **Database**: MongoDB Atlas with Mongoose ODM
- **Fonts**: Inter (English), Cairo (Arabic), Heebo (Hebrew)

## Pages
- `/` - Landing page (Hero, Services, About, Value Props, Offer, Contact)
- `/portfolio` - Public portfolio page showing projects from database
- `/admin` - Password-protected admin panel for managing projects

## API Routes
- `GET /api/projects` - Public: list all projects
- `POST /api/admin/login` - Verify admin password
- `POST /api/projects` - Admin: create project (requires Bearer token)
- `PATCH /api/projects/:id` - Admin: update project (requires Bearer token)
- `DELETE /api/projects/:id` - Admin: delete project (requires Bearer token)

## Key Files
- `shared/schema.ts` - Zod schemas and TypeScript types (Project, InsertProject)
- `server/db.ts` - Mongoose connection and Project model
- `server/storage.ts` - Storage interface (DatabaseStorage with Mongoose)
- `server/routes.ts` - API routes with admin middleware
- `client/src/contexts/LanguageContext.tsx` - Language switching (EN/AR/HE)
- `client/src/lib/api.ts` - Admin auth helpers (sessionStorage token)

## Environment Variables
- `MONGODB_URI` - MongoDB Atlas connection string
- `ADMIN_PASSWORD` - Password for the admin panel

## Design Rules
- No shadows, no gradients, no rounded corners
- Flat vector design with strict geometry
- High contrast borders (4px black)
- Brand colors only: Electric Blue, Midnight Black, Pure White

## Deployment
- See `.agents/skills/vercel-deployment/SKILL.md` for Vercel deployment instructions
- MongoDB Atlas IP whitelist must include `0.0.0.0/0` for cloud deployments