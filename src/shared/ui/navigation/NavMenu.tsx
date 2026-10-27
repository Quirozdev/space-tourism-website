import HamburgerMenuIcon from "@/shared/ui/icons/icon-hamburger.svg";
import CloseIcon from "@/shared/ui/icons/icon-close.svg";
import { useState } from "react";
import { NavItem } from "./NavItem";
import { menuOptions } from "./navigation-items.constants";

export function NavMenu() {
  const [isMobileNavigationMenuOpen, setIsMobileNavigationMenuOpen] =
    useState(false);

  return (
    <>
      <button
        className="cursor-pointer md:hidden"
        onClick={() => {
          setIsMobileNavigationMenuOpen(true);
        }}
      >
        <img src={HamburgerMenuIcon} alt="Open menu" className="w-6" />
      </button>

      <nav className="hidden flex-1 bg-white/5 backdrop-blur-[80px] md:flex">
        <ul className="flex w-full items-center justify-end gap-x-12 px-10">
          {menuOptions.map((menuOption) => {
            return (
              <NavItem
                key={menuOption.index}
                index={menuOption.index}
                label={menuOption.label}
                path={menuOption.path}
              />
            );
          })}
        </ul>
      </nav>

      {isMobileNavigationMenuOpen && (
        <nav className="fixed top-0 right-0 z-10 flex min-h-screen w-64 flex-col gap-y-12 bg-blue-900/15 pl-8 backdrop-blur-[80px] md:hidden">
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
            {menuOptions.map((menuOption) => {
              return (
                <NavItem
                  key={menuOption.index}
                  index={menuOption.index}
                  label={menuOption.label}
                  path={menuOption.path}
                />
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
