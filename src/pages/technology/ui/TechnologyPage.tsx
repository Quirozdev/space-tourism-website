import { Outlet } from "react-router";

export function TechnologyPage() {
  return (
    <section className="flex flex-col items-center gap-y-6 xl:flex-1 xl:items-start">
      <h1 tabIndex={-1} className="flex items-center gap-x-6 md:self-start">
        <span className="text-preset-6 md:text-preset-5 font-barlow-condensed md:font-bellefair font-bold text-white opacity-25">
          03
        </span>
        <span className="text-preset-6 md:text-preset-5 font-barlow-condensed md:font-bellefair text-white uppercase">
          Space Launch 101
        </span>
      </h1>
      <Outlet />
    </section>
  );
}
