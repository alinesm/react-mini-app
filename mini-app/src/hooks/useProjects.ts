import {
  getProjectByIdFromAPI,
  getProjectsFromAPI,
} from "@/services/projects.api";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Project } from "@/services/projects.types";
import { debounce } from "lodash";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [errorProjects, setErrorProjects] = useState<Error | null>(null);

  const [projectDetail, setProjectDetail] = useState<Project | null>(null);
  const [projectDetailLoading, setProjectDetailLoading] = useState(true);
  const [projectDetailError, setProjectDetailError] = useState<Error | null>(null);
  
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const getProjects = useCallback(async () => {
    try {
      const data = await getProjectsFromAPI();
      setProjects(data);
      setLoadingProjects(false);
    } catch (error) {
      setErrorProjects(error as Error);
      setLoadingProjects(false);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  const getProjectById = useCallback(async (id: string) => {
    setProjectDetailLoading(true);
    setProjectDetailError(null);
    try {
      const data = await getProjectByIdFromAPI(id);
      setProjectDetail(data || null);
      setProjectDetailLoading(false);
      return data;
    } catch (error) {
      setProjectDetailError(error as Error);
      setProjectDetailLoading(false);
    }
  }, []);

  const debouncedSetSearch = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearch(value);
      }, 300),
    []
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearch(value);
      debouncedSetSearch(value);
    },
    [debouncedSetSearch]
  );

  useEffect(() => {
    return () => {
      debouncedSetSearch.cancel();
    };
  }, [debouncedSetSearch]);

  const filteredProjects = projects.filter(
    (project) =>
      project.id.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.owner.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.description.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return {
    filteredProjects,
    loadingProjects,
    errorProjects,
    projectDetail,
    projectDetailLoading,
    projectDetailError,
    search,    
    getProjectById,
    handleSearchChange
  };
}
