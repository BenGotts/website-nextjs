'use client'
import { useState, useEffect } from 'react';
import YoutubeVideo from "@/components/YoutubeVideo";
import getRecetVideo from "./api/recentVideo";
import Connect from "./about/Connect";

export default function Home() {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    const fetchVideoId = async () => {
      const id = await getRecetVideo();
      setVideoId(id);
    };

    fetchVideoId();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center m-6">
      <YoutubeVideo videoId={videoId} />
      <Connect />
    </div>
  );
}
