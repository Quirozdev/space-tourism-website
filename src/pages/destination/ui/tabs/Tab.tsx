import { cn } from "@/shared/lib/cn";
import { NavLink } from "react-router";

interface Props {
  label: string;
  path: string;
  destinationName: string;
}

export function Tab({ label, path, destinationName }: Props) {
  return (
    <li className="h-8">
      <NavLink
        to={{ pathname: path }}
        aria-label={destinationName}
        viewTransition
        className={({ isActive }) => {
          return cn(
            "inline-block h-full cursor-pointer border-b-[3px] border-transparent text-blue-300 hover:border-white/50 hover:text-white",
            isActive && "border-white text-white hover:border-white",
          );
        }}
      >
        <span className="text-preset-8 font-barlow-condensed text-center uppercase">
          {label}
        </span>
      </NavLink>
    </li>
  );
}
