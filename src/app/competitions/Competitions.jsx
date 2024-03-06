"use client"

import { Card, CardBody, CardHeader, CardFooter, Divider} from "@nextui-org/react";
import "@cubing/icons";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";

export default function Competitions({ competitions }) {
    const currentDate = new Date()

    const isCompetitionLive = (startDate, endDate) => {
      const start = new Date(startDate + "T00:00:00");
      const end = new Date(endDate + "T23:59:59");
      return currentDate >= start && currentDate <= end;
    };

    return (
        <>
            {competitions ? 
            competitions.map((comp) => (
                <Link href={comp.url} 
                      target="_blank"
                      key={comp.id}
                    >
                    <Card
                        className="m-2"
                        fullWidth
                        isHoverable
                        >
                        <CardHeader className="m-2">
                            <div className="flex h-5 items-center space-x-2">
                                <div className="text-lg">{comp.name}</div>
                                <Divider orientation="vertical" />
                                <div>{comp.city}</div>
                                <ReactCountryFlag countryCode={comp.country_iso2} svg className="text-xl" />
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="m-2">
                        <p>{comp.date_range}</p>

                            <div>{comp.event_ids.map((id) => (
                                <span key={id} className={`m-1 text-lg cubing-icon event-${id}`}></span>
                            ))}</div>
                        </CardBody>
                        {isCompetitionLive(comp.start_date, comp.end_date) && (<Divider />)}
                        {isCompetitionLive(comp.start_date, comp.end_date) && (
                        <CardFooter>
                            <Link
                            isExternal
                            showAnchorIcon
                            href={`https://live.worldcubeassociation.org/link/competitions/${comp.id}`}
                            >
                            <p className="text-red-500 m-1">[Live]</p><p>View results here</p>
                            </Link>
                        </CardFooter>)}
                    </Card>
                </Link>
            ))
            : <div>No upcoming competitions</div>}
        </>
    )
}
