import { preload } from "react-dom";

import HomeBgMobile from "@/app/assets/backgrounds/home/background-home-mobile.jpg";
import HomeBgTablet from "@/app/assets/backgrounds/home/background-home-tablet.jpg";
import HomeBgDesktop from "@/app/assets/backgrounds/home/background-home-desktop.jpg";

import DestinationBgMobile from "@/app/assets/backgrounds/destination/background-destination-mobile.jpg";
import DestinationBgTablet from "@/app/assets/backgrounds/destination/background-destination-tablet.jpg";
import DestinationBgDesktop from "@/app/assets/backgrounds/destination/background-destination-desktop.jpg";

import CrewBgMobile from "@/app/assets/backgrounds/crew/background-crew-mobile.jpg";
import CrewBgTablet from "@/app/assets/backgrounds/crew/background-crew-tablet.jpg";
import CrewBgDesktop from "@/app/assets/backgrounds/crew/background-crew-desktop.jpg";

import TechnologyBgMobile from "@/app/assets/backgrounds/technology/background-technology-mobile.jpg";
import TechnologyBgTablet from "@/app/assets/backgrounds/technology/background-technology-tablet.jpg";
import TechnologyBgDesktop from "@/app/assets/backgrounds/technology/background-technology-desktop.jpg";

export function handleBackgroundImagePreloading(path: string) {
  const mapping = {
    "/": [HomeBgMobile, HomeBgTablet, HomeBgDesktop],
    destination: [
      DestinationBgMobile,
      DestinationBgTablet,
      DestinationBgDesktop,
    ],
    crew: [CrewBgMobile, CrewBgTablet, CrewBgDesktop],
    technology: [TechnologyBgMobile, TechnologyBgTablet, TechnologyBgDesktop],
  };

  const backgrounds = mapping[path as keyof typeof mapping];

  if (backgrounds) {
    backgrounds.forEach((background) => {
      preload(background, { as: "image" });
    });
  }
}

export function getBackgroundImageClasses(pathname: string) {
  const [route] = pathname.replace("/", "").split("/");
  if (route === "") {
    return "bg-[url(@/app/assets/backgrounds/home/background-home-mobile.jpg)] md:bg-[url(@/app/assets/backgrounds/home/background-home-tablet.jpg)] xl:bg-[url(@/app/assets/backgrounds/home/background-home-desktop.jpg)]";
  } else if (route === "destination") {
    return "bg-[url(@/app/assets/backgrounds/destination/background-destination-mobile.jpg)] md:bg-[url(@/app/assets/backgrounds/destination/background-destination-tablet.jpg)] xl:bg-[url(@/app/assets/backgrounds/destination/background-destination-desktop.jpg)]";
  } else if (route === "crew") {
    return "bg-[url(@/app/assets/backgrounds/crew/background-crew-mobile.jpg)] md:bg-[url(@/app/assets/backgrounds/crew/background-crew-tablet.jpg)] xl:bg-[url(@/app/assets/backgrounds/crew/background-crew-desktop.jpg)]";
  } else if (route === "technology") {
    return "bg-[url(@/app/assets/backgrounds/technology/background-technology-mobile.jpg)] md:bg-[url(@/app/assets/backgrounds/technology/background-technology-tablet.jpg)] xl:bg-[url(@/app/assets/backgrounds/technology/background-technology-desktop.jpg)]";
  }
  return "";
}
