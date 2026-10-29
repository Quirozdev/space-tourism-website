import LaunchVehiclePortraitImg from "@/pages/technology/ui/images/image-launch-vehicle-portrait.jpg";
import { LargePagination } from "./pagination/LargePagination";

export function TechnologyDetail() {
  return (
    <div className="flex w-full flex-col gap-8 xl:flex-row-reverse xl:gap-x-16">
      <div className="-mx-6 overflow-x-hidden md:-mx-10 xl:-mr-44">
        <img
          src={LaunchVehiclePortraitImg}
          alt="Launch vehicle"
          className="max-h-64.5 w-full max-w-none object-cover object-bottom md:max-h-89.25 md:object-center xl:max-h-none xl:min-w-[600px]"
        />
      </div>
      <div className="flex flex-col items-center gap-y-10 xl:shrink-0 xl:flex-row xl:gap-x-16">
        <LargePagination />
        <div className="flex flex-col gap-y-4 md:max-w-lg xl:gap-y-6">
          <div className="flex flex-col gap-y-4 text-center xl:text-left">
            <h3 className="text-preset-4 text-white uppercase opacity-50">
              The terminology...
            </h3>
            <h2 className="text-preset-3 text-white uppercase">
              Launch vehicle
            </h2>
          </div>
          <p className="text-preset-9 font-barlow text-center text-blue-300 xl:text-left">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
    </div>
  );
}
