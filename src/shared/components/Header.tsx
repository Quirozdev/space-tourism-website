import Logo from "@/assets/images/shared/logo.svg";
import { NavMenu } from "./NavMenu";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 md:pr-0 md:pl-10 xl:pt-10 xl:pl-16">
      <a href="/space-tourism-website/">
        <img src={Logo} alt="Space Tourism logo" />
      </a>
      <NavMenu />
    </header>
  );
}
