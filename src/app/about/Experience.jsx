export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center md:text-left mb-6">Experience</h2>
      
      {/* Marchex Experience */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Software Development Engineer, Marchex (MPS)</h3>
        <p className="text-md text-gray-600">Oct 2022 - Sep 2023</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Engineered Node.js backend for a high-volume API processing thousands of hours of call data.</li>
          <li>Developed Python scripts for Sentry monitoring, enhancing system reliability.</li>
          <li>Managed Node.js deployment using PM2, utilized AWS EC2 and Lambda for API development.</li>
          <li>Crafted and executed complex SQL queries for data manipulation and analysis.</li>
          <li>Enhanced features in existing EJS codebase, improving functionality.</li>
          <li>Aided in the growth and development of the MPS team, similar to a startup environment.</li>
        </ul>
      </div>

      {/* Intel Experience */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Software Development Engineer in Test, Intel</h3>
        <p className="text-md text-gray-600">Mar 2022 - Oct 2022</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Developed automation tools in C# and Python supporting both automation and validation teams.</li>
          <li>Utilized C# and Gherkin to automate existing manual test cases from Jira, enhancing testing efficiency.</li>
          <li>Designed test cases for manual validation, later automated for consistency and efficiency.</li>
          <li>Assisted in migrating automation processes from Team City to Jenkins, improving development workflow.</li>
          <li>Performed lab technician duties including system troubleshooting, manual validation, and general tech support.</li>
        </ul>
      </div>

      {/* Pour Soul Systems Experience */}
      <div>
        <h3 className="text-xl font-semibold">Software Developer, Pour Soul Systems</h3>
        <p className="text-md text-gray-600">Sep 2020 - Jun 2021</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Co-developed a Flutter mobile app for a startup, focusing on aiding bars in reducing waste and saving costs.</li>
          <li>Implemented BLoC pattern for effective state management.</li>
          <li>Practiced Agile Scrum framework, ensuring disciplined project management.</li>
          <li>Demonstrated strong communication skills and accountability in team collaborations and external partnerships.</li>
        </ul>
      </div>

    </section>
  )
}
