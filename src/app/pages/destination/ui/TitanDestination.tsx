import { Tabs } from "./tabs/Tabs";
import TitanImg from "@/app/pages/destination/ui/images/image-titan.webp";

export function TitanDestination() {
  return (
    <div className="flex w-full flex-col gap-8 xl:flex-1 xl:flex-row xl:items-center">
      <div className="flex items-center justify-center xl:flex-1">
        <img
          src={TitanImg}
          alt="Titan"
          className="h-37.5 w-37.5 md:h-75 md:w-75 xl:h-120 xl:w-120"
        />
      </div>
      <div className="flex flex-col items-center gap-y-6 xl:flex-1 xl:items-start xl:gap-y-10">
        <Tabs />
        <article className="flex flex-col gap-y-6 md:max-w-128.5">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-preset-2 text-center text-white uppercase xl:text-left">
              Titan
            </h2>
            <p className="text-preset-9 font-barlow text-center text-blue-300 xl:text-left">
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
          </div>
          <div className="h-px w-full bg-white opacity-25"></div>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center xl:justify-start">
            <div className="flex flex-1 flex-col gap-y-3 text-center xl:text-left">
              <p className="text-preset-7 font-barlow-condensed text-blue-300 uppercase">
                Avg. Distance
              </p>
              <p className="text-preset-6 text-white uppercase">1.6 BIL. km</p>
            </div>
            <div className="flex flex-1 flex-col gap-y-3 text-center xl:text-left">
              <p className="text-preset-7 font-barlow-condensed text-blue-300 uppercase">
                Est. travel time
              </p>
              <p className="text-preset-6 text-white uppercase">7 years</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
