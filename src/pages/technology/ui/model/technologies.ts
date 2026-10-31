import LaunchVehiclePortraitImg from "@/pages/technology/ui/images/image-launch-vehicle-portrait.jpg";
import SpacePortPortraitImg from "@/pages/technology/ui/images/image-spaceport-portrait.jpg";
import SpaceCapsulePortraitImg from "@/pages/technology/ui/images/image-space-capsule-portrait.jpg";

export const technologies = [
  {
    name: "Launch vehicle",
    path: "launch-vehicle",
    images: {
      portrait: LaunchVehiclePortraitImg,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    path: "spaceport",
    images: {
      portrait: SpacePortPortraitImg,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    path: "space-capsule",
    images: {
      portrait: SpaceCapsulePortraitImg,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export function getTechnologyByPath(path: string | undefined) {
  return technologies.find((technology) => technology.path === path);
}
