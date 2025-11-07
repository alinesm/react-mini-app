import SearchInput from "@/components/productList/searchInput";
import { Loading } from "@/components/shared/loading";
import { useProjects } from "@/hooks/useProjects";
import ErrorMessage from "@/components/shared/errorMessage";
import TableHeader from "@/components/productList/tableHeader";
import TableBody from "@/components/productList/tableBody";

export default function ProjectListPage() {
  const {
    filteredProjects,
    handleSearchChange,
    loadingProjects,
    errorProjects,
    search,
  } = useProjects();

  if (loadingProjects) {
    return <Loading />;
  }

  if (errorProjects) {
    return <ErrorMessage message="Error loading projects" />;
  }

  return (
    <div role="list" tabIndex={0} aria-label="List of projects" className="relative overflow-x-auto shadow-md sm:rounded-lg pt-2 px-2 pb-8 my-10 mx-10">
     <h1 tabIndex={0} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Projects</h1>
      <SearchInput handleSearchChange={handleSearchChange} search={search} />

      <table tabIndex={0} role="table" aria-label="Projects table" className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHeader />
        <TableBody filteredProjects={filteredProjects} />
      </table>
    </div>
  );
}
