import { cn } from "@/shared/lib/cn";
import { Header } from "@/shared/ui/header/Header";
import { Outlet, useLocation } from "react-router";
import { getBackgroundImageClasses } from "../config/page-background";

export function AppLayout() {
  const location = useLocation();

  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col overflow-x-hidden bg-blue-900 bg-cover bg-no-repeat",
        getBackgroundImageClasses(location.pathname),
      )}
    >
      <Header />
      <main className="flex flex-1 flex-col p-6 md:p-10 xl:mx-auto xl:w-full xl:max-w-277.5 xl:px-0 xl:py-12">
        <Outlet />
      </main>
    </div>
  );
}
