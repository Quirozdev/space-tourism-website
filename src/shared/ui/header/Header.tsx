import Logo from "@/shared/ui/icons/logo.svg";
import { NavMenu } from "../navigation/NavMenu";
import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="flex justify-between gap-x-12 px-6 md:pr-0 md:pl-10 xl:pt-10 xl:pl-16">
      <NavLink to={{ pathname: "/" }} viewTransition className="py-6">
        <img src={Logo} alt="Space Tourism logo" />
      </NavLink>
      <div className="z-10 mr-[-5%] hidden h-px flex-1 self-center bg-[#979797] opacity-25 xl:block"></div>
      <NavMenu />
    </header>
  );
}
