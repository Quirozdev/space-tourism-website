import { NavLink, type NavLinkProps } from "react-router";
import { cn } from "@/shared/lib/cn";

interface Props extends NavLinkProps {
  index: string;
  label: string;
}

export function NavItem({ index, label, to, ...props }: Props) {
  return (
    <li className="md:h-full">
      <NavLink
        to={to}
        viewTransition
        className={({ isActive }) => {
          return cn(
            "flex w-full cursor-pointer items-center gap-x-3 border-r-[3px] border-transparent hover:border-white/50 md:h-full md:border-r-0 md:border-b-[3px]",
            isActive && "border-white hover:border-white",
          );
        }}
        {...props}
      >
        <span className="text-preset-8-bold font-barlow-condensed text-white">
          {index}
        </span>
        <span className="text-preset-8 font-barlow-condensed text-white uppercase">
          {label}
        </span>
      </NavLink>
    </li>
  );
}
