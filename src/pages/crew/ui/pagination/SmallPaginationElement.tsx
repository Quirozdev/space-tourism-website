import { cn } from "@/shared/lib/cn";
import { NavLink } from "react-router";

interface Props {
  path: string;
}

export function SmallPaginationElement({ path }: Props) {
  return (
    <li className="h-2.5 w-2.5 xl:h-3.75 xl:w-3.75">
      <NavLink
        to={path}
        className={({ isActive }) => {
          return cn(
            "inline-block h-full w-full rounded-full bg-white opacity-[17.44%] hover:opacity-50",
            isActive && "opacity-100 hover:opacity-100",
          );
        }}
      />
    </li>
  );
}
