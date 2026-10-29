import { crewMembers } from "../model/crew-members";
import { SmallPaginationElement } from "./SmallPaginationElement";

export function SmallPagination() {
  return (
    <ul className="flex items-center gap-x-4 xl:gap-x-10">
      {crewMembers.map((crewMember) => {
        return (
          <SmallPaginationElement
            key={crewMember.path}
            path={`/crew/${crewMember.path}`}
          />
        );
      })}
    </ul>
  );
}
