export function MoonDestination() {
  return (
    <article className="flex flex-col gap-y-6 md:max-w-128.5">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-preset-2 text-center text-white uppercase xl:text-left">
          Moon
        </h2>
        <p className="text-preset-9 font-barlow text-center text-blue-300 xl:text-left">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
      </div>
      <div className="h-px w-full bg-white opacity-25"></div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center xl:justify-start">
        <div className="flex flex-1 flex-col gap-y-3 text-center xl:text-left">
          <p className="text-preset-7 font-barlow-condensed text-blue-300 uppercase">
            Avg. Distance
          </p>
          <p className="text-preset-6 text-white uppercase">384,400 km</p>
        </div>
        <div className="flex flex-1 flex-col gap-y-3 text-center xl:text-left">
          <p className="text-preset-7 font-barlow-condensed text-blue-300 uppercase">
            Est. travel time
          </p>
          <p className="text-preset-6 text-white uppercase">3 days</p>
        </div>
      </div>
    </article>
  );
}
