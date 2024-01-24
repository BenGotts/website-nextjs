import { Card, CardBody, CardHeader, CardFooter, Divider, Link } from "@nextui-org/react";

const projects = [
    {
      title: "Next.js Personal Website",
      startDate: "Dec 2023",
      endDate: "",
      technologies: "Next.js, NextUI, React.js, Tailwind CSS, Node.js, Firebase",
      details: [
        "Revamped personal website with Next.js, NextUI, and Tailwind CSS for modern design; hosted on Firebase.",
        "Enhanced site with Next.js for server-side rendering and static generation, boosting performance and SEO.",
        "Employed Tailwind CSS and NextUI for efficient styling and cohesive UI."
      ],
      githubLink: "https://github.com/BenGotts/website-nextjs"
    },
    {
        title: "Personal Website",
        startDate: "Nov 2019",
        endDate: "Dec 2023",
        technologies: "HTML, CSS, Javascript, Node.js, Firebase, handlebars",
        details: [
          "Engineered a dynamic website on Google Firebase with a custom domain for a professional online presence.",
          "Deployed Firebase functions using Node.js and Handlebars for dynamic content management.",
          "Integrated various APIs for dynamic data loading and employed CSS for website design."
        ],
        githubLink: "https://github.com/BenGotts/website"
      },
    {
      title: "Cuble Game",
      startDate: "Mar 2022",
      endDate: "Mar 2022",
      technologies: "React.js, Firebase, Firestore, Material UI (MUI), Netlify, GitHub Actions",
      details: [
        "Developed a Rubik's Cube-themed game using React/MUI with daily-scripted WCA data updates in Firestore.",
        "Hosted on Netlify with GitHub Actions CI/CD ensuring efficient deployment and maintenance."
      ],
      githubLink: "https://github.com/BenGotts/cuble-app",
      projectLink: "https://cuble.app"
    },
    {
      title: "Rubik's Cube Scrambling Program",
      startDate: "Dec 2018",
      endDate: "Dec 2018",
      technologies: "Python, OpenCV",
      details: [
        "Created a program for generating random Rubik's Cube scrambles with a visual representation using OpenCV.",
        "Utilized innovative Python techniques for an engaging and functional application."
      ],
      githubLink: "https://github.com/BenGotts/website-nextjs"
    },
    {
        title: "smallsh",
        startDate: "Jul 2020",
        endDate: "Jul 2020",
        technologies: "C, Shell, Operating Systems",
        details: [
          "Used C to write a simple shell program.",
          "smallsh supports exit, cd, status, and # (for comments).",
          "Ignores ctrl+C and has background/foreground with ctrl+Z (using signals)."
        ],
        githubLink: "https://github.com/BenGotts/smallsh"
      },
      {
        title: "Cube Data",
        startDate: "Apr 2023",
        endDate: "Apr 2023",
        technologies: "React.js, Firebase, Firestore, Material UI (MUI), Netlify, GitHub Actions",
        details: [
          "Utilized React and MUI to create a visual interface for a local unofficial Rubik's Cube competiiton.",
          "Fetch uploaded data from Firestore.",
          "Hosted on Netlify with GitHub Actions to build and redeploy on main branch commits."
        ],
        githubLink: "https://github.com/BenGotts/LocalCubeData",
        projectLink: "https://cubedata.netlify.app/"
      },
  ];
  
  const parseDate = (dateStr) => {
    if (!dateStr) return new Date(); // Treat projects without an end date as ongoing, i.e., very recent
    const [monthStr, year] = dateStr.split(' ');
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(monthStr);
    return new Date(year, month);
  };
  
  // Sort projects by startDate and endDate, newest first
projects.sort((a, b) => {
    const startDiff = parseDate(b.startDate) - parseDate(a.startDate);
    if (startDiff !== 0) return startDiff;
    // If startDate is the same, sort by endDate, considering ongoing projects as the newest
    return parseDate(b.endDate || "Dec 9999") - parseDate(a.endDate || "Dec 9999"); // Treat no endDate as far future
  });
  

export default function MyProjects() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-8" id="Projects">
          <h2 className="text-3xl font-bold text-center md:text-left mb-6">Projects</h2>
          
          <div className="space-y-4">
            {projects.map((project, index) => (
            <Card fullWidth key={index}>
                    <CardHeader className="m-2 text-lg font-semibold">
                        <div className="flex h-5 items-center space-x-2">
                            <div>{project.projectLink ? 
                                <Link
                                    isExternal
                                    showAnchorIcon
                                    href={project.projectLink}
                                >
                                    {project.title}
                                </Link> : project.title}
                            </div>
                            <Divider orientation="vertical" />
                            <p className="font-normal text-sm text-gray-600">{project.startDate === project.endDate ? project.startDate : `${project.startDate} - ${project.endDate ? project.endDate : "Present"}`}</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className="m-2">
                        <p className="text-md text-gray-600">Technologies: {project.technologies}</p>
                        <ul className="list-disc pl-5 text-gray-700">
                        {project.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                        ))}
                        </ul>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Link
                        isExternal
                        showAnchorIcon
                        href={project.githubLink}
                        >
                            Visit source code on GitHub.
                        </Link>
                    </CardFooter>
                </Card>))}
            </div>
        </section>
      );
}