import cx from "classnames";

interface ButtonTabProps {
  filter: string;
  title: string;
  isActive?: boolean;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { filter, title, isActive = false } = props;
  const dataFilterClass = cx({
    "*": filter === "*",
    success: filter === "success",
    pending: filter === "pending",
    failed: filter === "failed",
  });
  const ButtonTabClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": isActive,
  });

  return (
    <a
      data-filter={dataFilterClass}
      href="#"
      className={ButtonTabClass}
    >
      {title}
    </a>
  );
}
