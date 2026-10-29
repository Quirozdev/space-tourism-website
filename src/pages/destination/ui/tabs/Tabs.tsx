import { destinations } from "../model/destinations";
import { Tab } from "./Tab";

export function Tabs() {
  return (
    <ul className="flex items-center gap-x-8">
      {destinations.map((destination) => {
        return (
          <Tab
            key={destination.path}
            label="Moon"
            path={`/destination/${destination.path}`}
          />
        );
      })}
    </ul>
  );
}
