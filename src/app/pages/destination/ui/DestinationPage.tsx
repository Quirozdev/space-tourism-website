import MoonImg from "@/app/pages/destination/ui/images/image-moon.webp";
import { Tabs } from "./tabs/Tabs";
import { Outlet } from "react-router";

export function DestinationPage() {
  return (
    <section className="flex flex-col items-center gap-y-6 xl:flex-1 xl:items-start">
      <div className="flex items-center gap-x-6">
        <p className="text-preset-6 md:text-preset-5 font-barlow-condensed md:font-bellefair font-bold text-white opacity-25">
          01
        </p>
        <p className="text-preset-6 md:text-preset-5 font-barlow-condensed md:font-bellefair text-white uppercase xl:text-left">
          Pick your destination
        </p>
      </div>
      <div className="flex w-full flex-col gap-8 xl:flex-1 xl:flex-row xl:items-center">
        <div className="flex items-center justify-center xl:flex-1">
          <img
            src={MoonImg}
            alt="Moon"
            className="h-37.5 w-37.5 md:h-75 md:w-75 xl:h-120 xl:w-120"
          />
        </div>
        <div className="flex flex-col items-center gap-y-6 xl:flex-1 xl:items-start xl:gap-y-10">
          <Tabs />
          <Outlet />
        </div>
      </div>
    </section>
  );
}
