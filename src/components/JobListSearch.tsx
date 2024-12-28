import { useJobItemsContext } from "../hooks/contexts/useJobItemsContext";
import JobList from "./JobList";

export default function JobListSearch() {
  const { isLoading, jobItemsSortedAndSliced } = useJobItemsContext();

  return <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />;
}
