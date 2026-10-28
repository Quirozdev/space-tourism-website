import { SmallPagination } from "./pagination/SmallPagination";
import DouglasHurleyImg from "@/pages/crew/ui/images/image-douglas-hurley.webp";

export function CrewMemberDetail() {
  return (
    <div className="flex flex-1 flex-col gap-8 xl:flex-row">
      <div className="flex flex-1 flex-col items-center gap-y-6 md:max-w-lg xl:max-w-none xl:items-start xl:gap-y-10">
        <div className="flex flex-1 flex-col gap-y-6 text-center xl:justify-center xl:text-left">
          <div className="flex flex-col gap-y-2 pt-10 md:gap-y-4 xl:pt-0">
            <h3 className="text-preset-4 text-white uppercase opacity-50">
              Commander
            </h3>
            <h2 className="text-preset-3 text-white uppercase">
              Douglas Hurley
            </h2>
          </div>
          <p className="text-preset-9 font-barlow text-blue-300">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <SmallPagination />
      </div>
      <div className="flex items-center justify-center">
        <img
          src={DouglasHurleyImg}
          alt="Douglas Hurley"
          className="w-[85%] mask-b-from-77% mask-b-to-100%"
        />
      </div>
    </div>
  );
}
