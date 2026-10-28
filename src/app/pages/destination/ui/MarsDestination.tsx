import { Tabs } from "./tabs/Tabs";
import MarsImg from "@/app/pages/destination/ui/images/image-mars.webp";

export function MarsDestination() {
  return (
    <div className="flex w-full flex-col gap-8 xl:flex-1 xl:flex-row xl:items-center">
      <div className="flex items-center justify-center xl:flex-1">
        <img
          src={MarsImg}
          alt="Mars"
          className="h-37.5 w-37.5 md:h-75 md:w-75 xl:h-120 xl:w-120"
        />
      </div>
      <div className="flex flex-col items-center gap-y-6 xl:flex-1 xl:items-start xl:gap-y-10">
        <Tabs />
        <article className="flex flex-col gap-y-6 md:max-w-128.5">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-preset-2 text-center text-white uppercase xl:text-left">
              Mars
            </h2>
            <p className="text-preset-9 font-barlow text-center text-blue-300 xl:text-left">
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
          </div>
          <div className="h-px w-full bg-white opacity-25"></div>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center xl:justify-start">
            <div className="flex flex-1 flex-col gap-y-3 text-center xl:text-left">
              <p className="text-preset-7 font-barlow-condensed text-blue-300 uppercase">
                Avg. Distance
              </p>
              <p className="text-preset-6 text-white uppercase">225 MIL. km</p>
            </div>
            <div className="flex flex-1 flex-col gap-y-3 text-center xl:text-left">
              <p className="text-preset-7 font-barlow-condensed text-blue-300 uppercase">
                Est. travel time
              </p>
              <p className="text-preset-6 text-white uppercase">9 months</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
