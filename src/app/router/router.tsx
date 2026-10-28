import { createBrowserRouter, Navigate } from "react-router";
import { AppLayout } from "@/app/layouts/AppLayout";
import { HomePage } from "@/app/pages/home/ui/HomePage";
import { DestinationPage } from "@/app/pages/destination/ui/DestinationPage";
import { CrewPage } from "@/app/pages/crew/ui/CrewPage";
import { TechnologyPage } from "@/app/pages/technology/ui/TechnologyPage";
import { MoonDestination } from "../pages/destination/ui/MoonDestination";
import { MarsDestination } from "../pages/destination/ui/MarsDestination";
import { EuropaDestination } from "../pages/destination/ui/EuropaDestination";
import { TitanDestination } from "../pages/destination/ui/TitanDestination";

export const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "destination",
          element: <DestinationPage />,
          children: [
            {
              index: true,
              element: <Navigate to="moon" replace />,
            },
            {
              path: "moon",
              element: <MoonDestination />,
            },
            {
              path: "mars",
              element: <MarsDestination />,
            },
            {
              path: "europa",
              element: <EuropaDestination />,
            },
            {
              path: "titan",
              element: <TitanDestination />,
            },
          ],
        },
        {
          path: "crew",
          element: <CrewPage />,
        },
        {
          path: "technology",
          element: <TechnologyPage />,
        },
      ],
    },
  ],
  {
    basename: "/space-tourism-website/",
  },
);
