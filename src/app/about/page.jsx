// import { useEffect } from "react";
import AboutMe from "./AboutMe";
import Connect from "./Connect";
import Experience from "./Experience";
import HobbiesInterests from "./HobbiesInterests";
import MyProjects from "./MyProjects";

export const metadata = {
  title: 'About Me - Benjamin Gottschalk',
  description: 'Learn more about Benjamin Gottschalk and how to connect with him.',
}

export default function About() {
  return (
    <div className="p-4">
      <AboutMe />
      <HobbiesInterests />
      <Experience />
      <MyProjects />
      <Connect />
    </div>
  )
}
