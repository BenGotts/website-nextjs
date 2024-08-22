import YoutubeVideo from "@/components/YoutubeVideo";
import Connect from "@/components/about/Connect";

export const revalidate = 3600;
export const metadata = {
  title: 'Home | bengottschalk.com',
  description: 'The official website for Benjamin Gottschalk.',
}

export default async function Home() {
  const videoId = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=1&playlistId=UUY4J5vw3Ed8Rc3Njc-2qzfg&key=${process.env.YOUTUBE_API_KEY}`)
  .then(response => response.json())
  .then(data => { return data['items'][0]['contentDetails']['videoId'] })
  .catch(err => console.error(err))

  return (
    <div className="flex flex-col flex-grow justify-center items-center m-6">
      <YoutubeVideo videoId={videoId} />
      <Connect />
    </div>
  );
}
