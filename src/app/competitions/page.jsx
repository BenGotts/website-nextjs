import Competitions from "@/components/competitions/Competitions"

export const revalidate = 3600;
export const metadata = {
  title: "Competitions | bengottschalk.com",
  description: "List of competitions that Benjamin Gottschalk is attending.",
}

export default async function CompetitionsPage() {
  const competitions = await fetch('https://www.worldcubeassociation.org/api/v0/users/6836?upcoming_competitions=true')
    .then(response => response.json())
    .then(data => { return data["upcoming_competitions"] })
    .catch(err => { console.error(err); return []});

  competitions.sort((a, b) => a.start_date.localeCompare(b.start_date) || a.end_date.localeCompare(b.end_date))

  return (
    <div className="m-4">
      <Competitions competitions={competitions} />
    </div>
  )
}
