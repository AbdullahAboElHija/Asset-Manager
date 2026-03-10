import { type Project, type InsertProject } from "@shared/schema";
import { ProjectModel } from "./db";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: string): Promise<boolean>;
}

function toProject(doc: any): Project {
  const obj = doc.toObject();
  return {
    _id: obj._id.toString(),
    titleEn: obj.titleEn,
    titleAr: obj.titleAr,
    titleHe: obj.titleHe,
    descEn: obj.descEn,
    descAr: obj.descAr,
    descHe: obj.descHe,
    category: obj.category,
    imageUrl: obj.imageUrl,
    sortOrder: obj.sortOrder,
  };
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    const docs = await ProjectModel.find().sort({ sortOrder: 1 });
    return docs.map(toProject);
  }

  async getProject(id: string): Promise<Project | undefined> {
    const doc = await ProjectModel.findById(id);
    return doc ? toProject(doc) : undefined;
  }

  async createProject(project: InsertProject): Promise<Project> {
    const doc = await ProjectModel.create(project);
    return toProject(doc);
  }

  async updateProject(id: string, project: Partial<InsertProject>): Promise<Project | undefined> {
    const doc = await ProjectModel.findByIdAndUpdate(id, project, { new: true });
    return doc ? toProject(doc) : undefined;
  }

  async deleteProject(id: string): Promise<boolean> {
    const result = await ProjectModel.findByIdAndDelete(id);
    return !!result;
  }
}

export const storage = new DatabaseStorage();
