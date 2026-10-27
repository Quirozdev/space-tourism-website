import { Header } from "@/shared/ui/header/Header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[url(@/app/pages/home/ui/backgrounds/background-home-mobile.jpg)] bg-cover bg-no-repeat md:bg-[url(@/app/pages/home/ui/backgrounds/background-home-tablet.jpg)] xl:bg-[url(@/app/pages/home/ui/backgrounds/background-home-desktop.jpg)]">
      <Header />
      <main className="flex flex-1 flex-col p-6 md:px-10 md:py-32 xl:mx-auto xl:w-full xl:max-w-277.5 xl:px-0">
        <Outlet />
      </main>
    </div>
  );
}
