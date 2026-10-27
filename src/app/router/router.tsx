import { createBrowserRouter } from "react-router";
import { AppLayout } from "@/app/layouts/AppLayout";
import { HomePage } from "@/app/pages/home/ui/HomePage";
import { DestinationPage } from "@/app/pages/destination/ui/DestinationPage";
import { CrewPage } from "@/app/pages/crew/ui/CrewPage";
import { TechnologyPage } from "@/app/pages/technology/ui/TechnologyPage";

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
