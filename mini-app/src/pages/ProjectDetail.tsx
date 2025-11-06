import { useParams, useNavigate } from 'react-router-dom';
import { Loading } from '../components/shared/loading';
import { ProjectStatus } from '@/services/projects.types';
import { useProjects } from '@/hooks/useProjects';
import { useEffect } from 'react';
import ErrorMessage from '@/components/shared/errorMessage';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { projectDetail, projectDetailLoading, projectDetailError, getProjectById } = useProjects();

  useEffect(() => {
    if (id) {
      getProjectById(id);
    }
  }, [id, getProjectById]);

  if (projectDetailLoading) {
    return <Loading />;
  }

  if (projectDetailError) {
    return <ErrorMessage message="Error loading project details" />;
  }

  if (!projectDetail) {
    return (
      <ErrorMessage message="Project Not Found" />
    );
  }

  return (
    <div role="article" tabIndex={0} aria-label="Project detail" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 flex flex-col items-center">
      <div className="w-full max-w-3xl px-0">
        <button
          tabIndex={0}
          role="button"
          aria-label="Back to projects"
          onClick={() => navigate('/')}
          className="inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 border-0 bg-transparent font-medium mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>
        <div tabIndex={0} role="region" aria-label="Project detail content" className="flex flex-col md:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          
          <div tabIndex={0} role="region" aria-label="Project detail content" className="flex flex-col items-center md:w-1/3 bg-gray-100 dark:bg-gray-900 px-6 py-8">
            <div className="mb-6">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 text-blue-600 text-4xl font-extrabold uppercase select-none">
                {projectDetail.name ? projectDetail.name[0] : "?"}
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
              {projectDetail.name}
            </h2>
            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                projectDetail.status === ProjectStatus.Active
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : projectDetail.status === ProjectStatus.Paused
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              {projectDetail.status}
            </span>
            <div className="mt-5 text-xs text-gray-500 dark:text-gray-400">
              Last updated <br />
              <span className="font-mono">
                {new Date(projectDetail.updatedAt).toLocaleDateString("en-US")}
              </span>
            </div>
          </div>
          
          <div tabIndex={0} role="region" aria-label="Project detail content" className="flex-1 px-8 py-8 md:py-10 flex flex-col gap-8 justify-center">
            <div>
              <h3 className="uppercase tracking-wide text-xs text-gray-400 dark:text-gray-500 font-semibold mb-1">
                Owner
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">
                {projectDetail.owner}
              </p>
            </div>
            <div>
              <h3 className="uppercase tracking-wide text-xs text-gray-400 dark:text-gray-500 font-semibold mb-1">
                Project ID
              </h3>
              <p className="text-base font-mono text-gray-600 dark:text-gray-400">
                {projectDetail.id}
              </p>
            </div>
            <div>
              <h3 className="uppercase tracking-wide text-xs text-gray-400 dark:text-gray-500 font-semibold mb-1">
                Description
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {projectDetail.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

