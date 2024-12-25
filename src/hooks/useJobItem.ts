import { useEffect, useState } from "react";
import { BASE_API_URL } from "../constant/api";
import { JobItemExpanded } from "../constant/types";

const useJobItem = (id: number | null) => {
  const [jobItem, setJobItem] = useState<JobItemExpanded | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_API_URL}/${id}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItem(data.jobItem);
    };

    fetchData();
  }, [id]);

  return { jobItem, isLoading };
};
export default useJobItem;
