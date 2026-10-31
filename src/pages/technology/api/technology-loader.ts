import { redirect, type LoaderFunctionArgs } from "react-router";
import { getTechnologyByPath } from "../model/technologies";

export function technologyLoader({ params }: LoaderFunctionArgs) {
  const technology = getTechnologyByPath(params.technology);
  if (!technology) {
    throw redirect("/not-found");
  }
  return technology;
}
