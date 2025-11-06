import type { Project, ProjectsResponse, ProjectResponse } from "./projects.types";
import { ProjectStatus } from "./projects.types";

export const API_CONFIG = {
  FETCH_PROJECTS_DELAY: 1000,
  FETCH_PROJECT_DELAY: 500,
} as const;

// Mock data with proper typing
const mockProjects: Project[] = [
  {
    id: "p1",
    name: "Apollo",
    owner: "Alice",
    status: ProjectStatus.Active,
    description: "Greenfield project focused on a new booking experience.",
    updatedAt: "2025-10-12",
  },
  {
    id: "p2",
    name: "Zephyr",
    owner: "Bob",
    status: ProjectStatus.Paused,
    description: "Internal tooling to streamline content publishing workflows.",
    updatedAt: "2025-09-03",
  },
  {
    id: "p3",
    name: "Orion",
    owner: "Carla",
    status: ProjectStatus.Active,
    description: "Analytics revamp with dashboarding and cohort analysis.",
    updatedAt: "2025-08-21",
  },
  {
    id: "p4",
    name: "Nimbus",
    owner: "Diego",
    status: ProjectStatus.Planning,
    description: "Payment gateway unification and multi-provider failover.",
    updatedAt: "2025-07-30",
  },
];

export async function getProjectsFromAPI(): Promise<ProjectsResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProjects);
    }, API_CONFIG.FETCH_PROJECTS_DELAY);
  });
}

export async function getProjectByIdFromAPI(id: string): Promise<ProjectResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = mockProjects.find((p) => p.id === id);
      resolve(project || null);
    }, API_CONFIG.FETCH_PROJECT_DELAY);
  });
}