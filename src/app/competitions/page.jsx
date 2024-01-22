import getCompetitions from "../api/competitions"
import Competitions from "./Competitions"

export const metadata = {
  title: "Competitons",
}

export default async function CompetitionsPage() {
  const competitions = await getCompetitions();

  return (
    <div className="m-4">
      <Competitions competitions={competitions} />
    </div>
  )
}
