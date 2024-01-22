export default function MyProjects() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center md:text-left mb-6">Projects</h2>
          
          {/* Personal Website */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Personal Website</h3>
            <p className="text-md text-gray-600">Technologies: HTML, CSS, JavaScript, Node.js, Firebase, Handlebars</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Engineered a dynamic website on Google Firebase with a custom domain for a professional online presence.</li>
              <li>Deployed Firebase functions using Node.js and Handlebars for dynamic content management.</li>
              <li>Integrated various APIs for dynamic data loading and employed CSS for website design.</li>
            </ul>
          </div>
    
          {/* Cuble Game */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Cuble Game</h3>
            <p className="text-md text-gray-600">Technologies: React.js, MUI, Netlify, GitHub Actions</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Developed a Rubik’s Cube-themed game using React/MUI with daily-scripted WCA data updates in Firestore.</li>
              <li>Hosted on Netlify with GitHub Actions CI/CD ensuring efficient deployment and maintenance.</li>
            </ul>
          </div>
    
          {/* Rubik’s Cube Scrambling Program */}
          <div>
            <h3 className="text-xl font-semibold">Rubik’s Cube Scrambling Program</h3>
            <p className="text-md text-gray-600">Technologies: Python, OpenCV</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Created a program for generating random Rubik’s Cube scrambles with a visual representation using OpenCV.</li>
              <li>Utilized innovative Python techniques for an engaging and functional application.</li>
            </ul>
          </div>
    
        </section>
      );
}
