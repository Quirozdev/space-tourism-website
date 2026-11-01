import { NavItem } from "./NavItem";
import { menuOptions } from "./navigation-items.constants";

interface Props {
  onNavigationIntent: (path: string) => void;
  onSelect: () => void;
}

export function NavItemWrapper({ onSelect, onNavigationIntent }: Props) {
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
              onNavigationIntent(menuOption.path);
            }}
            onFocus={() => {
              onNavigationIntent(menuOption.path);
            }}
            onClick={onSelect}
          />
        );
      })}
    </>
  );
}
