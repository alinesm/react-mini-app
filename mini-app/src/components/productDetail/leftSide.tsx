import { ProjectStatus, type Project } from "@/services/projects.types";

export default function LeftSide({
  projectDetail,
}: {
  projectDetail: Project;
}) {
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={`Project detail content left side: name: ${
        projectDetail.name
      }, owner: ${projectDetail.owner}, status: ${
        projectDetail.status
      }, updated at: ${new Date(projectDetail.updatedAt).toLocaleDateString(
        "en-US"
      )}`}
      className="flex flex-col items-center md:w-1/3 bg-gray-100 dark:bg-gray-900 px-6 py-8"
    >
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
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : projectDetail.status === ProjectStatus.Paused
            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
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
  );
}
