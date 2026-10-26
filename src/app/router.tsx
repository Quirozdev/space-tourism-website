import { createBrowserRouter } from "react-router";
import { AppLayout } from "./layouts/AppLayout";
import { HomePage } from "@/features/home/pages/HomePage";
import { DestinationPage } from "@/features/destination/pages/DestinationPage";
import { CrewPage } from "@/features/crew/pages/CrewPage";
import { TechnologyPage } from "@/features/technology/pages/TechnologyPage";

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
