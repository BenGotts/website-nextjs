export default async function getRecetVideo() {
    return await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=1&playlistId=UUY4J5vw3Ed8Rc3Njc-2qzfg&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
    .then(response => response.json())
    .then(data => { return data['items'][0]['contentDetails']['videoId'] })
    .catch(err => console.error(err))
  }