import { SortBy } from "../constant/types";

type SortingControlsProps = {
  sortBy: SortBy;
  onClick: (newSortBy: SortBy) => void;
};

export default function SortingControls({
  onClick,
  sortBy,
}: SortingControlsProps) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>
      <SortingButton
        onClick={() => {
          onClick("relevant");
        }}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingButton>
      <SortingButton
        onClick={() => {
          onClick("recent");
        }}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

const SortingButton = ({ children, onClick, isActive }: SortingButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`sorting__button sorting__button--relevant ${
        isActive ? "sorting__button--active" : ""
      }`}
    >
      {children}
    </button>
  );
};
