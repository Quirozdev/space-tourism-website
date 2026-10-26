import { Header } from "@/shared/components/Header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[url(./assets/images/home/background-home-mobile.jpg)] bg-cover bg-no-repeat md:bg-[url(./assets/images/home/background-home-tablet.jpg)] xl:bg-[url(./assets/images/home/background-home-desktop.jpg)]">
      <Header />
      <main className="flex flex-1 flex-col p-6 md:px-10 md:py-32 xl:px-0">
        <Outlet />
      </main>
    </div>
  );
}
