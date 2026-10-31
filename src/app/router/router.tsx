import { createBrowserRouter, Navigate } from "react-router";
import { AppLayout } from "@/app/layouts/AppLayout";
import { HomePage } from "@/pages/home/ui/HomePage";
import { DestinationPage } from "@/pages/destination/ui/DestinationPage";
import { CrewPage } from "@/pages/crew/ui/CrewPage";
import { TechnologyPage } from "@/pages/technology/ui/TechnologyPage";
import { DestinationDetails } from "../../pages/destination/ui/DestinationDetails";
import { CrewMemberDetail } from "@/pages/crew/ui/CrewMemberDetail";
import { TechnologyDetail } from "@/pages/technology/ui/TechnologyDetail";
import { technologies } from "@/pages/technology/ui/model/technologies";
import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage";
import { destinationLoader } from "@/pages/destination/api/destination-loader";
import { crewMemberLoader } from "@/pages/crew/api/crew-member-loader";
import { destinations } from "@/pages/destination/ui/model/destinations";
import { crewMembers } from "@/pages/crew/ui/model/crew-members";
import { technologyLoader } from "@/pages/technology/api/technology-loader";

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
              element: <Navigate to={destinations[0].path} replace />,
            },
            {
              path: ":planet",
              loader: destinationLoader,
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
              element: <Navigate to={crewMembers[0].path} replace />,
            },
            {
              path: ":crewMember",
              loader: crewMemberLoader,
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
              element: <Navigate to={technologies[0].path} replace />,
            },
            {
              path: ":technology",
              loader: technologyLoader,
              element: <TechnologyDetail />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: "/space-tourism-website/",
  },
);
