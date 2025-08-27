import OngoingCompetitions from "@/components/competitions/OngoingCompetitions";
import UpcomingCompetitions from "@/components/competitions/UpcomingCompetitions"
import PastCompetitions from "@/components/competitions/PastCompetitions"
import { WCA_ID } from "@/consts";
import { Divider } from "@nextui-org/react";

export const revalidate = 3600;
export const metadata = {
  title: "Competitions | bengottschalk.com",
  description: "List of competitions that Benjamin Gottschalk is attending.",
}

export default async function CompetitionsPage() {
  const userInfo = await fetch(`https://www.worldcubeassociation.org/api/v0/users/${WCA_ID}?upcoming_competitions=true&ongoing_competitions=true`)
  .then(response => response.json())
  .then(data => { return data})
  .catch(err => { console.error(err); return []});
  
  const upcomingCompetitions = userInfo.upcoming_competitions.sort((a, b) => a.start_date.localeCompare(b.start_date) || a.end_date.localeCompare(b.end_date))
  const ongoingCompetitions = userInfo.ongoing_competitions.sort((a, b) => a.start_date.localeCompare(b.start_date) || a.end_date.localeCompare(b.end_date))

  const pastCompetitions = await fetch(`https://www.worldcubeassociation.org/api/v0/persons/${WCA_ID}/competitions`)
  .then(response => response.json())
  .then(data => { return data.sort((a, b) => b.start_date.localeCompare(a.start_date))})
  .catch(err => { console.error(err); return []});

  return (
    <div className="m-4 space-y-4 flex-grow">
      <OngoingCompetitions competitions={ongoingCompetitions} />
      <UpcomingCompetitions competitions={upcomingCompetitions} />
      <Divider />
      <PastCompetitions competitions={pastCompetitions} />
    </div>
  )
}
