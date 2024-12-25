type ResultCountProps = {
  totalNumberOfJobItems: number;
};

export default function ResultsCount({
  totalNumberOfJobItems,
}: ResultCountProps) {
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfJobItems}</span> results
    </p>
  );
}
