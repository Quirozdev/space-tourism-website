import { Tab } from "./Tab";

export function Tabs() {
  return (
    <ul className="flex items-center gap-x-8">
      <Tab label="Moon" path="/destination/moon" />
      <Tab label="Mars" path="/destination/mars" />
      <Tab label="Europa" path="/destination/europa" />
      <Tab label="Titan" path="/destination/titan" />
    </ul>
  );
}
