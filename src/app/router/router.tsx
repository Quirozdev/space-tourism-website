import { createBrowserRouter, Navigate } from "react-router";
import { AppLayout } from "@/app/layouts/AppLayout";
import { HomePage } from "@/pages/home/ui/HomePage";
import { DestinationPage } from "@/pages/destination/ui/DestinationPage";
import { CrewPage } from "@/pages/crew/ui/CrewPage";
import { TechnologyPage } from "@/pages/technology/ui/TechnologyPage";
import { DestinationDetails } from "../../pages/destination/ui/DestinationDetails";
import { CrewMemberDetail } from "@/pages/crew/ui/CrewMemberDetail";
import { TechnologyDetail } from "@/pages/technology/ui/TechnologyDetail";
import { getTechnologyByPath } from "@/pages/technology/ui/model/technologies";
import { getCrewMemberByPath } from "@/pages/crew/ui/model/crew-members";
import { getDestinationByPath } from "@/pages/destination/ui/model/destinations";

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
              element: (
                <Navigate to={getDestinationByPath(undefined).path} replace />
              ),
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
              element: (
                <Navigate to={getCrewMemberByPath(undefined).path} replace />
              ),
            },
            {
              path: ":crewMember",
              element: <CrewMemberDetail />,
            },
          ],
        },
        {
          path: "technology",
          element: <TechnologyPage />,
          children: [
            {
              index: true,
              element: (
                <Navigate to={getTechnologyByPath(undefined).path} replace />
              ),
            },
            {
              path: ":technology",
              element: <TechnologyDetail />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/space-tourism-website/",
  },
);
