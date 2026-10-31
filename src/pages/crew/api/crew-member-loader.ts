import { redirect, type LoaderFunctionArgs } from "react-router";
import { getCrewMemberByPath } from "../ui/model/crew-members";

export function crewMemberLoader({ params }: LoaderFunctionArgs) {
  const crewMember = getCrewMemberByPath(params.crewMember);
  if (!crewMember) {
    throw redirect("/not-found");
  }
  return crewMember;
}
