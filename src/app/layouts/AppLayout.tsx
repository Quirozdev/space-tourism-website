import { cn } from "@/shared/lib/cn";
import { Header } from "@/shared/ui/header/Header";
import { Outlet, useLocation } from "react-router";
import {
  getPageBackground,
  handleBackgroundImagePreloading,
} from "../config/page-background";
import type { CSSProperties } from "react";

export function AppLayout() {
  const location = useLocation();

  const background = getPageBackground(location.pathname);

  const backgroundStyle = background
    ? ({
        "--page-background-mobile": `url("${background.images.mobile}")`,
        "--page-background-tablet": `url("${background.images.tablet}")`,
        "--page-background-desktop": `url("${background.images.desktop}")`,
      } as CSSProperties)
    : undefined;

  return (
    <div
      style={backgroundStyle}
      className={cn(
        "flex min-h-screen w-full flex-col overflow-x-hidden bg-blue-900 bg-cover bg-no-repeat",
        background?.className,
      )}
    >
      <Header onNavigationIntent={handleBackgroundImagePreloading} />
      <main className="flex flex-1 flex-col p-6 md:p-10 xl:mx-auto xl:w-full xl:max-w-277.5 xl:px-0 xl:py-12">
        <Outlet />
      </main>
    </div>
  );
}
