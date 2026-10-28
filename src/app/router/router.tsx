import { createBrowserRouter, Navigate } from "react-router";
import { AppLayout } from "@/app/layouts/AppLayout";
import { HomePage } from "@/pages/home/ui/HomePage";
import { DestinationPage } from "@/pages/destination/ui/DestinationPage";
import { CrewPage } from "@/pages/crew/ui/CrewPage";
import { TechnologyPage } from "@/pages/technology/ui/TechnologyPage";
import { DestinationDetails } from "../../pages/destination/ui/DestinationDetails";
import { CrewMemberDetail } from "@/pages/crew/ui/CrewMemberDetail";

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
              path: ":planet",
              element: <DestinationDetails />,
            },
          ],
        },
        {
          path: "crew",
          element: <CrewPage />,
          children: [
            {
              index: true,
              element: <Navigate to="douglas-hurley" />,
            },
            {
              path: ":crew-member",
              element: <CrewMemberDetail />,
            },
          ],
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
