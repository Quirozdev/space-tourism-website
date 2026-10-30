import { useParams } from "react-router";
import { SmallPagination } from "./pagination/SmallPagination";
import { getCrewMemberByPath } from "./model/crew-members";

export function CrewMemberDetail() {
  const { crewMember } = useParams();

  const crewMemberInfo = getCrewMemberByPath(crewMember);

  return (
    <div className="flex flex-1 flex-col items-center gap-8 xl:flex-row xl:items-stretch">
      <div className="flex flex-1 flex-col items-center gap-y-6 md:max-w-lg xl:max-w-none xl:items-start xl:gap-y-10">
        <div className="flex flex-1 flex-col gap-y-6 text-center xl:justify-center xl:text-left">
          <div className="flex flex-col gap-y-2 pt-10 md:gap-y-4 xl:pt-0">
            <h3 className="text-preset-4 text-white uppercase opacity-50">
              {crewMemberInfo.role}
            </h3>
            <h2 className="text-preset-3 text-white uppercase">
              {crewMemberInfo.name}
            </h2>
          </div>
          <p className="text-preset-9 font-barlow min-h-[6lh] text-blue-300 md:min-h-[4lh]">
            {crewMemberInfo.bio}
          </p>
        </div>
        <SmallPagination />
      </div>
      <div className="flex items-center justify-center">
        <img
          src={crewMemberInfo.images.webp}
          alt={crewMemberInfo.name}
          className="w-[85%] mask-b-from-77% mask-b-to-100%"
        />
      </div>
    </div>
  );
}
