import { cn } from "@/shared/lib/cn";
import { Header } from "@/shared/ui/header/Header";
import { Outlet, useLocation } from "react-router";

export function AppLayout() {
  const location = useLocation();

  function getBackgroundImageClasses() {
    const [route] = location.pathname.replace("/", "").split("/");
    if (route === "") {
      return "bg-[url(@/pages/home/ui/backgrounds/background-home-mobile.jpg)] md:bg-[url(@/pages/home/ui/backgrounds/background-home-tablet.jpg)] xl:bg-[url(@/pages/home/ui/backgrounds/background-home-desktop.jpg)]";
    } else if (route === "destination") {
      return "bg-[url(@/pages/destination/ui/backgrounds/background-destination-mobile.jpg)] md:bg-[url(@/pages/destination/ui/backgrounds/background-destination-tablet.jpg)] xl:bg-[url(@/pages/destination/ui/backgrounds/background-destination-desktop.jpg)]";
    } else if (route === "crew") {
      return "bg-[url(@/pages/crew/ui/backgrounds/background-crew-mobile.jpg)] md:bg-[url(@/pages/crew/ui/backgrounds/background-crew-tablet.jpg)] xl:bg-[url(@/pages/crew/ui/backgrounds/background-crew-desktop.jpg)]";
    } else if (route === "technology") {
      return "bg-[url(@/pages/technology/ui/backgrounds/background-technology-mobile.jpg)] md:bg-[url(@/pages/technology/ui/backgrounds/background-technology-tablet.jpg)] xl:bg-[url(@/pages/technology/ui/backgrounds/background-technology-desktop.jpg)]";
    }
    return "";
  }

  const backgroundClasses = getBackgroundImageClasses();

  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col overflow-x-hidden bg-cover bg-no-repeat",
        backgroundClasses,
      )}
    >
      <Header />
      <main className="flex flex-1 flex-col p-6 md:p-10 xl:mx-auto xl:w-full xl:max-w-277.5 xl:px-0 xl:py-12">
        <Outlet />
      </main>
    </div>
  );
}
