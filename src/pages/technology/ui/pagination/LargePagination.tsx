import { LargePaginationElement } from "./LargePaginationElement";

export function LargePagination() {
  return (
    <ul className="flex items-center gap-x-4 xl:flex-col xl:gap-y-8">
      <LargePaginationElement path="/technology/launch-vehicle" index={1} />
      <LargePaginationElement path="/technology/spaceport" index={2} />
      <LargePaginationElement path="/technology/space-capsule" index={3} />
    </ul>
  );
}
