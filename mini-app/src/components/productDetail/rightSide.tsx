import type { Project } from "@/services/projects.types";

export default function RightSide({
  projectDetail,
}: {
  projectDetail: Project;
}) {
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={`Project detail content right side: owner: ${projectDetail.owner}, project id: ${projectDetail.id}, description: ${projectDetail.description}`}
      className="flex-1 px-8 py-8 md:py-10 flex flex-col gap-8 justify-center"
    >
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
  );
}
