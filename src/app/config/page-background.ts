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

export const responsiveBackgroundClasses =
  "bg-(image:--page-background-mobile) md:bg-(image:--page-background-tablet) xl:bg-(image:--page-background-desktop)";

export const pageBackgrounds = {
  home: {
    images: {
      mobile: HomeBgMobile,
      tablet: HomeBgTablet,
      desktop: HomeBgDesktop,
    },
    className: responsiveBackgroundClasses,
  },
  destination: {
    images: {
      mobile: DestinationBgMobile,
      tablet: DestinationBgTablet,
      desktop: DestinationBgDesktop,
    },
    className: responsiveBackgroundClasses,
  },
  crew: {
    images: {
      mobile: CrewBgMobile,
      tablet: CrewBgTablet,
      desktop: CrewBgDesktop,
    },
    className: responsiveBackgroundClasses,
  },
  technology: {
    images: {
      mobile: TechnologyBgMobile,
      tablet: TechnologyBgTablet,
      desktop: TechnologyBgDesktop,
    },
    className: responsiveBackgroundClasses,
  },
} as const;

export type BackgroundPage = keyof typeof pageBackgrounds;

export function getPageBackground(pathname: string) {
  let [route] = pathname.replace("/", "").split("/");
  if (route === "") {
    route = "home";
  }
  return pageBackgrounds[route as BackgroundPage];
}

export function handleBackgroundImagePreloading(path: string) {
  const background = getPageBackground(path);

  if (!background) return;

  const { mobile, tablet, desktop } = background.images;

  const image = window.matchMedia("(min-width: 80rem)").matches
    ? desktop
    : window.matchMedia("(min-width: 48rem)").matches
      ? tablet
      : mobile;

  preload(image, { as: "image" });
}
