import { useQueries } from "@tanstack/react-query";
import { fetchJobItem } from "./useJobItem";
import { handleError } from "../utils/utils";
import { JobItemExpanded } from "../constant/types";

const useJobItems = (ids: number[]) => {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => fetchJobItem(id),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    })),
  });

  const jobItems = results
    .map((result) => result.data?.jobItem)
    .filter(Boolean) as JobItemExpanded[];
  const isLoading = results.some((results) => results.isLoading);

  return {
    jobItems,
    isLoading,
  };
};

export default useJobItems;
