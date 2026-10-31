import { technologies } from "../../model/technologies";
import { LargePaginationElement } from "./LargePaginationElement";

export function LargePagination() {
  return (
    <ul className="flex items-center gap-x-4 xl:flex-col xl:gap-y-8">
      {technologies.map((technology, index) => {
        return (
          <LargePaginationElement
            key={technology.path}
            path={`/technology/${technology.path}`}
            index={index + 1}
            technologyName={technology.name}
          />
        );
      })}
    </ul>
  );
}
