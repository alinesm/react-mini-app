import { useParams, useNavigate } from 'react-router-dom';
import { Loading } from '../components/shared/loading';
import { useProjects } from '@/hooks/useProjects';
import { useEffect } from 'react';
import ErrorMessage from '@/components/shared/errorMessage';
import LeftSide from '@/components/productDetail/leftSide';
import RightSide from '@/components/productDetail/rightSide';

export default function ProjectDetailPage() {
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
          <LeftSide projectDetail={projectDetail} />
          <RightSide projectDetail={projectDetail} />                   
        </div>
      </div>
    </div>
  );
}

