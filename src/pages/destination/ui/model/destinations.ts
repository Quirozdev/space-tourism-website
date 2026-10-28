import MoonImg from "@/pages/destination/ui/images/image-moon.webp";
import MarsImg from "@/pages/destination/ui/images/image-mars.webp";
import EuropaImg from "@/pages/destination/ui/images/image-europa.webp";
import TitanImg from "@/pages/destination/ui/images/image-titan.webp";

export const destinations = [
  {
    name: "Moon",
    path: "moon",
    images: {
      webp: MoonImg,
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    path: "mars",
    images: {
      webp: MarsImg,
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    path: "europa",
    images: {
      webp: EuropaImg,
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    path: "titan",
    images: {
      webp: TitanImg,
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

export function getDestinationByPath(path: string | undefined) {
  return (
    destinations.find((destination) => destination.path === path) ||
    destinations[0]
  );
}
