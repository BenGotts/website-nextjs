import getCompetitions from "../api/competitions"
import Competitions from "./Competitions"

export const metadata = {
  title: "Competitions",
}

export default async function CompetitionsPage() {
  const competitions = await getCompetitions();
  competitions.sort((a, b) => a.start_date.localeCompare(b.start_date) || a.end_date.localeCompare(b.end_date))

  return (
    <div className="m-4">
      <Competitions competitions={competitions} />
    </div>
  )
}
