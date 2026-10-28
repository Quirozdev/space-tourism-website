import { SmallPaginationElement } from "./SmallPaginationElement";

export function SmallPagination() {
  return (
    <ul className="flex items-center gap-x-4 xl:gap-x-10">
      <SmallPaginationElement path="/crew/douglas-hurley" />
      <SmallPaginationElement path="/crew/mark-shuttleworth" />
      <SmallPaginationElement path="/crew/victor-glover" />
      <SmallPaginationElement path="/crew/anousheh-ansari" />
    </ul>
  );
}
