import { z } from "zod";

export const insertProjectSchema = z.object({
  titleEn: z.string().min(1),
  titleAr: z.string().min(1),
  titleHe: z.string().min(1),
  descEn: z.string().min(1),
  descAr: z.string().min(1),
  descHe: z.string().min(1),
  category: z.string().min(1),
  imageUrl: z.string().min(1),
  sortOrder: z.number().int().default(0),
});

export type InsertProject = z.infer<typeof insertProjectSchema>;

export interface Project extends InsertProject {
  _id: string;
}
