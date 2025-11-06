import { useNavigate } from 'react-router-dom';

export default function ErrorMessage({ message }: { message: string }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {message}
        </h2>
        <button onClick={() => navigate('/')} className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 border border-blue-500 hover:border-blue-700 dark:border-blue-400 dark:hover:border-blue-300 rounded-md px-4 py-2">Back to Projects</button>
      </div>
    </div>
  );
}