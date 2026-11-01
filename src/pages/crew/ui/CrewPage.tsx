import { Outlet } from "react-router";

export function CrewPage() {
  return (
    <section className="flex flex-col items-center gap-y-6 xl:flex-1 xl:items-start">
      <h1 className="flex items-center gap-x-6 md:self-start">
        <span className="text-preset-6 md:text-preset-5 font-barlow-condensed md:font-bellefair font-bold text-white opacity-25">
          02
        </span>
        <span className="text-preset-6 md:text-preset-5 font-barlow-condensed md:font-bellefair text-white uppercase">
          Meet your crew
        </span>
      </h1>
      <Outlet />
    </section>
  );
}
