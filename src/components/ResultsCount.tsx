import { useJobItemsContext } from "../hooks/contexts/useJobItemsContext";

export default function ResultsCount() {
  const { totalNumberOfJobItems } = useJobItemsContext();
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfJobItems}</span> results
    </p>
  );
}
