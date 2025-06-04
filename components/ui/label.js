import { cx } from "@/utils/all";

export default function Label(props) {
  const margin = props.nomargin;

  return (
    <span
      className={cx(
        "inline-block px-2 py-2 text-[12px] font-semibold leading-normal rounded-lg", // Typography styles
        !margin && "mt-2",
        "text-[#1F1F1F] bg-[#D9D9D9]" // Custom green text and light gray background
      )}
    >
      {props.children}
    </span>
  );
}
