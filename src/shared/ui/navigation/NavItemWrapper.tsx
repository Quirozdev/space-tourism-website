import { handleBackgroundImagePreloading } from "@/app/config/page-background";
import { NavItem } from "./NavItem";
import { menuOptions } from "./navigation-items.constants";

interface Props {
  onSelect: () => void;
}

export function NavItemWrapper({ onSelect }: Props) {
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
            onClick={onSelect}
          />
        );
      })}
    </>
  );
}
