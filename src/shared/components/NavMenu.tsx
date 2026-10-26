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
                      "flex w-full cursor-pointer items-center gap-x-3",
                      selectedMenuOption === menuOption.index &&
                        "border-r-[3px] border-white",
                    )}
                    onClick={() => {
                      setSelectedMenuOption(menuOption.index);
                    }}
                  >
                    <span className="text-preset-8 font-bold text-white">
                      {menuOption.index}
                    </span>
                    <span className="text-preset-8 text-white uppercase">
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
