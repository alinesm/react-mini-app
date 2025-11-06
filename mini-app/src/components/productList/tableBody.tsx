import { ProjectStatus, type Project } from "@/services/projects.types";
import { Link } from "react-router-dom";

export default function TableBody({
  filteredProjects,
}: {
  filteredProjects: Project[];
}) {
  if (filteredProjects.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
            No projects found
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {filteredProjects.map((project) => (
        <tr 
          key={project.id}
          tabIndex={0}
          role="row"
          aria-label={`Project ${project.name}`}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td className="w-4 p-4">{project.id}</td>
          <td className="w-4 p-4">{project.name}</td>
          <td className="w-4 p-4">{project.owner}</td>
          <td className="w-4 p-4">{project.description}</td>
          <td className="w-4 p-4">
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                project.status === ProjectStatus.Active
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : project.status === ProjectStatus.Paused
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {project.status}
            </span>
          </td>
          <td className="w-4 p-4">{new Date(project.updatedAt).toLocaleDateString("en-US")}</td>
          <td className="w-4 p-4">
            <Link
              to={`/project/${project.id}`}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Detail
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
