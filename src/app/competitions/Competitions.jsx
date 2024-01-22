import { Card, CardBody, CardHeader, CardFooter, Divider, Link } from "@nextui-org/react";
import "@cubing/icons";
import ReactCountryFlag from "react-country-flag";


function formatDateRange(startDate, endDate) {
    const start = new Date(startDate + "T00:00:00");
    const end = new Date(endDate + "T00:00:00");
  
    // Extracting parts of the date for comparison and formatting
    const startMonth = start.toLocaleDateString('en-US', { month: 'short' });
    const startDay = start.getDate();
    const startYear = start.getFullYear();
  
    const endMonth = end.toLocaleDateString('en-US', { month: 'short' });
    const endDay = end.getDate();
    const endYear = end.getFullYear();
  
    if (startDate === endDate) return `${endMonth} ${endDay}, ${endYear}`
    // Constructing the date range string based on whether the start and end dates are in the same month/year
    if (startYear === endYear) {
      if (startMonth === endMonth) {
        // Same month and year
        return `${startMonth} ${startDay} - ${endDay}, ${endYear}`;
      } else {
        // Different months, but same year
        return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${endYear}`;
      }
    } else {
      // Different years
      return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
    }
  }


export default function Competitions({ competitions }) {
    return (
        <>
            {competitions ? 
            competitions.map((comp) => (
                <a key={comp.id} 
                   href={comp.url} 
                   target="_blank"
                   className="m-2"
                >
                <Card
                      fullWidth
                      isHoverable
                      >
                    <CardHeader>
                        <div className="flex h-5 items-center space-x-2">
                            <div className="text-lg">{comp.name}</div>
                            <Divider orientation="vertical" />
                            <div>{comp.city}</div>
                            <ReactCountryFlag countryCode={comp.country_iso2} svg />
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                    <p>{formatDateRange(comp.start_date, comp.end_date)}</p>

                        <div>{comp.event_ids.map((id) => (
                            <span key={id} className={`m-2 text-lg cubing-icon event-${id}`}></span>
                        ))}</div>
                    </CardBody>
                    {/* <Divider/>
                    <CardFooter>
                        <Link
                        isExternal
                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                        >
                        Visit source code on GitHub.
                        </Link>
                    </CardFooter> */}
                </Card>
            </a>
            ))
            : <div>No upcoming competitions</div>}
        </>
    )
}
