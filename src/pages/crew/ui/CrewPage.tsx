import { Outlet } from "react-router";

export function CrewPage() {
  return (
    <section className="flex flex-col items-center gap-y-6 xl:flex-1 xl:items-start">
      <div className="flex items-center gap-x-6 md:self-start">
        <p className="text-preset-6 md:text-preset-5 font-barlow-condensed md:font-bellefair font-bold text-white opacity-25">
          02
        </p>
        <p className="text-preset-6 md:text-preset-5 font-barlow-condensed md:font-bellefair text-white uppercase">
          Meet your crew
        </p>
      </div>
      <Outlet />
    </section>
  );
}
