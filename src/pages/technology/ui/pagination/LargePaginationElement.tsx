import { cn } from "@/shared/lib/cn";
import { NavLink } from "react-router";

interface Props {
  path: string;
  index: number;
  technologyName: string;
}

export function LargePaginationElement({ path, index, technologyName }: Props) {
  return (
    <li className="h-14 w-14 xl:h-20 xl:w-20">
      <NavLink
        to={path}
        aria-label={`${index} - ${technologyName}`}
        viewTransition
        className={({ isActive }) => {
          return cn(
            "flex h-full w-full items-center justify-center rounded-full border border-white/25 text-white hover:border-white",
            isActive && "border-none bg-white text-blue-900",
          );
        }}
      >
        <span className="text-preset-4 text-center">{index}</span>
      </NavLink>
    </li>
  );
}
