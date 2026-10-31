import { redirect, type LoaderFunctionArgs } from "react-router";
import { getDestinationByPath } from "../model/destinations";

export function destinationLoader({ params }: LoaderFunctionArgs) {
  const destination = getDestinationByPath(params.planet);
  if (!destination) {
    throw redirect("/not-found");
  }
  return destination;
}
