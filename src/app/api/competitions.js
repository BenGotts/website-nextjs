export default async function getCompetitions() {
    return await fetch('https://www.worldcubeassociation.org/api/v0/users/6836?upcoming_competitions=true', {
        cache: 'force-cache'
    })
      .then(response => response.json())
      .then(data => { return data["upcoming_competitions"] })
      .catch(err => { console.error(err); return []});
}