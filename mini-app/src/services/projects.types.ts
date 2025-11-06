
export const ProjectStatus = {
  Active: 'Active',
  Paused: 'Paused',
  Planning: 'Planning',
  Completed: 'Completed',
  Inactive: 'Inactive',
} as const;

export type ProjectStatusType = (typeof ProjectStatus)[keyof typeof ProjectStatus];

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatusType;
  owner: string;
  updatedAt: string;
}

export type ProjectsResponse = Project[];
export type ProjectResponse = Project | null;