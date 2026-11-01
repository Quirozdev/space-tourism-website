import HamburgerMenuIcon from "@/shared/ui/icons/icon-hamburger.svg";
import CloseIcon from "@/shared/ui/icons/icon-close.svg";
import { useCallback, useId, useRef, useState } from "react";
import { useClickOutside } from "@/shared/lib/dom/use-click-outside";
import { useKeyDown } from "@/shared/lib/dom/use-key-down";
import { cn } from "@/shared/lib/cn";
import { NavItemWrapper } from "./NavItemWrapper";

interface Props {
  onNavigationIntent: (path: string) => void;
}

export function NavMenu({ onNavigationIntent }: Props) {
  const [isMobileNavigationMenuOpen, setIsMobileNavigationMenuOpen] =
    useState(false);

  const mobileMenuRef = useRef(null);

  const mobileMenuId = useId();

  const hideMobileMenu = useCallback(() => {
    setIsMobileNavigationMenuOpen(false);
  }, []);

  useClickOutside({
    ref: mobileMenuRef,
    onClickOutside: hideMobileMenu,
  });

  useKeyDown({
    key: "Escape",
    onKeyDown: hideMobileMenu,
  });

  return (
    <>
      <button
        type="button"
        className="cursor-pointer md:hidden"
        aria-expanded={isMobileNavigationMenuOpen}
        aria-controls={mobileMenuId}
        aria-label="Open navigation menu"
        onClick={() => {
          setIsMobileNavigationMenuOpen(true);
        }}
      >
        <img src={HamburgerMenuIcon} alt="" className="w-6" />
      </button>

      <nav className="hidden flex-1 bg-white/5 backdrop-blur-[80px] md:flex">
        <ul className="flex w-full items-center justify-end gap-x-12 px-10">
          <NavItemWrapper
            onNavigationIntent={onNavigationIntent}
            onSelect={hideMobileMenu}
          />
        </ul>
      </nav>

      <nav
        id={mobileMenuId}
        aria-label="Mobile navigation"
        ref={mobileMenuRef}
        inert={!isMobileNavigationMenuOpen}
        className={cn(
          "fixed top-0 right-0 z-10 flex min-h-screen w-64 flex-col gap-y-12 bg-blue-900/15 pl-8 backdrop-blur-[80px] transition-transform duration-700 ease-in-out md:hidden",
          isMobileNavigationMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-end py-8 pr-6">
          <button
            className="cursor-pointer"
            onClick={() => {
              setIsMobileNavigationMenuOpen(false);
            }}
          >
            <img src={CloseIcon} alt="Close menu" className="w-6" />
          </button>
        </div>
        <ul className="flex flex-col gap-y-8">
          <NavItemWrapper
            onNavigationIntent={onNavigationIntent}
            onSelect={hideMobileMenu}
          />
        </ul>
      </nav>
    </>
  );
}
