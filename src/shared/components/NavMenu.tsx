import HamburgerMenuIcon from "@/assets/images/shared/icon-hamburger.svg";
import CloseIcon from "@/assets/images/shared/icon-close.svg";
import { useState } from "react";
import { cn } from "../lib/cn";

export function NavMenu() {
  const [isMobileNavigationMenuOpen, setIsMobileNavigationMenuOpen] =
    useState(false);

  const [selectedMenuOption, setSelectedMenuOption] = useState("00");

  const menuOptions = [
    {
      index: "00",
      label: "Home",
    },
    {
      index: "01",
      label: "Destination",
    },
    {
      index: "02",
      label: "Crew",
    },
    {
      index: "03",
      label: "Technology",
    },
  ] as const;

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
              <li key={menuOption.index} className="h-full">
                <button
                  className={cn(
                    "flex h-full cursor-pointer items-center gap-x-3 border-b-[3px] border-transparent",
                    selectedMenuOption === menuOption.index && "border-white",
                  )}
                  onClick={() => {
                    setSelectedMenuOption(menuOption.index);
                  }}
                >
                  <span className="text-preset-8 bold font-barlow-condensed text-white">
                    {menuOption.index}
                  </span>
                  <span className="text-preset-8 font-barlow-condensed text-white uppercase">
                    {menuOption.label}
                  </span>
                </button>
              </li>
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
                <li key={menuOption.index}>
                  <button
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-x-3 border-r-[3px] border-transparent",
                      selectedMenuOption === menuOption.index && "border-white",
                    )}
                    onClick={() => {
                      setSelectedMenuOption(menuOption.index);
                    }}
                  >
                    <span className="text-preset-8 font-barlow-condensed font-bold text-white">
                      {menuOption.index}
                    </span>
                    <span className="text-preset-8 font-barlow-condensed text-white uppercase">
                      {menuOption.label}
                    </span>
                    <span></span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
