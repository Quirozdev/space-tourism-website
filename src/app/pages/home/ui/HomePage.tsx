import { ExploreButton } from "./ExploreButton";

export function HomePage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-evenly xl:flex-row xl:justify-around">
      <div className="flex flex-col items-center gap-y-6 text-center md:max-w-lg xl:max-w-135 xl:items-start xl:text-left">
        <p className="text-preset-5 text-blue-300 uppercase">
          So, You want to travel to
        </p>
        <h1 className="text-preset-1 text-white uppercase">Space</h1>
        <p className="text-preset-9 text-blue-300">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <ExploreButton />
    </section>
  );
}
