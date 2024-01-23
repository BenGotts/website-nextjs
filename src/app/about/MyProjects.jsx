import { Card, CardBody, CardHeader, CardFooter, Divider, Link } from "@nextui-org/react";

export default function MyProjects() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center md:text-left mb-6">Projects</h2>
          
          {/* Personal Website */}
            <Card fullWidth>
                <CardHeader className="m-2">
                    Personal Website
                </CardHeader>
                <Divider />
                <CardBody className="m-2">
                    <p className="text-md text-gray-600">Technologies: Next.js, NextUI, React.js, Tailwind CSS, Node.js, Firebase</p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Revamped personal website with Next.js, NextUI, and Tailwind CSS for modern design; hosted on Firebase.</li>
                        <li>Enhanced site with Next.js for server-side rendering and static generation, boosting performance and SEO.</li>
                        <li>Employed Tailwind CSS and NextUI for efficient styling and cohesive UI.</li>
                    </ul>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/BenGotts/website-nextjs"
                    >
                        Visit source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>
    
        {/* Cuble Game */}

          <a href="https://cuble.app" 
             target="_blank"
             className="m-2"
            >
            <Card fullWidth>
                <CardHeader className="m-2">
                    Cuble Game
                </CardHeader>
                <Divider />
                <CardBody className="m-2">
                    <p className="text-md text-gray-600">Technologies: React.js, MUI, Netlify, GitHub Actions</p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Developed a Rubik's Cube-themed game using React/MUI with daily-scripted WCA data updates in Firestore.</li>
                        <li>Hosted on Netlify with GitHub Actions CI/CD ensuring efficient deployment and maintenance.</li>
                    </ul>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/BenGotts/cuble-app"
                    >
                        Visit source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>
        </a>
    
          {/* Rubik’s Cube Scrambling Program */}
          <Card fullWidth>
                <CardHeader className="m-2">
                    Rubik's Cube Scrambling Program
                </CardHeader>
                <Divider />
                <CardBody className="m-2">
                    <p className="text-md text-gray-600">Technologies: Python, OpenCV</p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Created a program for generating random Rubik's Cube scrambles with a visual representation using OpenCV.</li>
                        <li>Utilized innovative Python techniques for an engaging and functional application.</li>
                    </ul>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/BenGotts/website-nextjs"
                    >
                        Visit source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>
        </section>
      );
}
