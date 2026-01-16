import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useAgentsFilters } from "../../hooks/use-agents-filters";

export const AgentsSearchFilter = () => {
  const [filters, setFilters] = useAgentsFilters();

  const handleSetFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => {
      return {
        ...prev,
        search: e.target.value,
      };
    });
  };

  return (
    <div className="relative">
      <Input
        value={filters.search}
        onChange={handleSetFilter}
        placeholder="Filter by name"
        className="h-9 bg-white w-50 pl-7"
      />
      <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
};
