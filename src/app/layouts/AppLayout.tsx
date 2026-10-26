import { Header } from "@/shared/components/Header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="min-h-screen w-full bg-[url(./assets/images/home/background-home-mobile.jpg)] bg-cover bg-no-repeat md:bg-[url(./assets/images/home/background-home-tablet.jpg)] xl:bg-[url(./assets/images/home/background-home-desktop.jpg)]">
      <Header />
      <Outlet />
    </div>
  );
}
