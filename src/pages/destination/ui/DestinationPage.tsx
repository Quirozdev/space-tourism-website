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
      <Outlet />
    </section>
  );
}
