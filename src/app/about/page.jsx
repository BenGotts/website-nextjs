import AboutMe from "./AboutMe";
import Connect from "./Connect";
import Experience from "./Experience";
import HobbiesInterests from "./HobbiesInterests";
import MyProjects from "./MyProjects";

export default function About() {
  return (
    <>
      <title>About Me - Benjamin Gottschalk</title>
      <meta name="description" content="Learn more about Benjamin Gottschalk and how to connect with him." />
      
      <main className="p-4">
        <AboutMe />
        <HobbiesInterests />
        <Experience />
        <MyProjects />
        <Connect />
      </main>
    </>
  )
}
