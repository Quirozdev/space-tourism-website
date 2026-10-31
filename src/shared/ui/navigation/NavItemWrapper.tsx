import { handleBackgroundImagePreloading } from "@/app/config/page-background";
import { NavItem } from "./NavItem";
import { menuOptions } from "./navigation-items.constants";

export function NavItemWrapper() {
  return (
    <>
      {menuOptions.map((menuOption) => {
        return (
          <NavItem
            key={menuOption.index}
            index={menuOption.index}
            label={menuOption.label}
            to={{ pathname: menuOption.path }}
            onPointerEnter={() => {
              handleBackgroundImagePreloading(menuOption.path);
            }}
            onFocus={() => {
              handleBackgroundImagePreloading(menuOption.path);
            }}
          />
        );
      })}
    </>
  );
}
