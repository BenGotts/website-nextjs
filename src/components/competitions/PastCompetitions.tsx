"use client";

import { Accordion, AccordionItem, Card, CardBody, CardHeader, Divider, Link, Chip } from "@nextui-org/react";
import "@cubing/icons";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
import { WCA_ID } from "@/consts";

export default function PastCompetitions({ competitions }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Calculate stats
    const myDelegateCount = competitions.filter(comp => 
        comp.delegates?.some(delegate => delegate.wca_id === WCA_ID)
    ).length;
    
    const myOrganizerCount = competitions.filter(comp => 
        comp.organizers?.some(organizer => organizer.wca_id === WCA_ID)
    ).length;

    if (competitions.length === 0) {
        return <div className="text-center text-gray-500 py-8">No past competitions found.</div>;
    }

    return (
        <div className="w-full">
            <Accordion
                selectionMode="single"
                selectedKeys={isExpanded ? ["past-competitions"] : []}
                onSelectionChange={(keys) => setIsExpanded(keys !== "all" && keys.size > 0)}
                className="w-full"
            >
                <AccordionItem
                    key="past-competitions"
                    aria-label="Past Competitions"
                    title={
                        <div className="w-full">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-3">
                                    <span className="text-xl font-semibold">Past Competitions</span>
                                    <Chip size="sm" variant="flat" color="default">
                                        {competitions.length} total
                                    </Chip>
                                    {myDelegateCount > 0 && (
                                        <Chip size="sm" variant="flat" color="primary">
                                            {myDelegateCount} Delegate
                                        </Chip>
                                    )}
                                    {myOrganizerCount > 0 && (
                                        <Chip size="sm" variant="flat" color="success">
                                            {myOrganizerCount} Organizer
                                        </Chip>
                                    )}
                                </div>
                                <div className="text-sm text-gray-600">
                                    {isExpanded ? "Click to collapse" : "Click to expand"}
                                </div>
                            </div>
                            
                            {/* Preview when collapsed */}
                            {!isExpanded && (
                                <div className="px-4 py-3 bg-gray-50 rounded-lg">
                                    <div className="text-sm text-gray-600 mb-2">Recent competitions:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {competitions.slice(0, 8).map((comp) => (
                                            <div
                                                key={comp.id}
                                                className="inline-flex items-center space-x-1 px-2 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-700 hover:border-gray-300 transition-colors cursor-pointer"
                                                onClick={() => window.open(comp.url, '_blank')}
                                                title={`${comp.name} - ${comp.date_range}`}
                                            >
                                                <ReactCountryFlag 
                                                    countryCode={comp.country_iso2} 
                                                    svg 
                                                    className="text-xs" 
                                                />
                                                <span className="truncate max-w-24">{comp.name}</span>
                                                <span className="text-gray-500">({comp.date_range})</span>
                                            </div>
                                        ))}
                                        {competitions.length > 8 && (
                                            <span className="text-xs text-gray-500 self-center px-2">
                                                +{competitions.length - 8} more...
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    }
                >
                    {/* Full expanded view */}
                    <Card className="w-full">
                        <CardBody className="p-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                                {competitions.map((comp) => {
                                    const isMyDelegate = comp.delegates?.some(delegate => delegate.wca_id === WCA_ID);
                                    const isMyOrganizer = comp.organizers?.some(organizer => organizer.wca_id === WCA_ID);
                                    
                                    return (
                                        <div
                                            key={comp.id}
                                            className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group bg-white hover:bg-gray-50"
                                            onClick={() => window.open(comp.url, '_blank')}
                                        >
                                            <div className="space-y-2">
                                                {/* Competition Name */}
                                                <div className="font-medium text-sm line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                                                    <span>{comp.name}</span>
                                                    <span className="text-blue-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                                        Click to view →
                                                    </span>
                                                </div>
                                                
                                                {/* Date and Location */}
                                                <div className="text-xs text-gray-600 space-y-1">
                                                    <div className="font-medium">{comp.date_range}</div>
                                                    <div className="flex items-center space-x-1">
                                                        <span>{comp.city}</span>
                                                        <ReactCountryFlag 
                                                            countryCode={comp.country_iso2} 
                                                            svg 
                                                            className="text-sm" 
                                                        />
                                                    </div>
                                                </div>
                                                
                                                {/* Role Badges */}
                                                <div className="flex flex-wrap gap-1">
                                                    {isMyDelegate && (
                                                        <Chip size="sm" color="primary" variant="flat">
                                                            Delegate
                                                        </Chip>
                                                    )}
                                                    {isMyOrganizer && (
                                                        <Chip size="sm" color="success" variant="flat">
                                                            Organizer
                                                        </Chip>
                                                    )}
                                                </div>
                                                
                                                {/* Events */}
                                                <div className="flex flex-wrap gap-1">
                                                    {comp.event_ids.slice(0, 6).map((id) => (
                                                        <span 
                                                            key={id} 
                                                            className={`text-lg cubing-icon event-${id}`}
                                                            title={id}
                                                        ></span>
                                                    ))}
                                                    {comp.event_ids.length > 6 && (
                                                        <span className="text-xs text-gray-500 self-center">
                                                            +{comp.event_ids.length - 6} more
                                                        </span>
                                                    )}
                                                </div>
                                                
                                                {/* Results Link - Separate from card click */}
                                                {comp.results_posted_at && (
                                                    <div className="pt-2">
                                                        <Link
                                                            href={`https://www.worldcubeassociation.org/competitions/${comp.id}/results/all`}
                                                            target="_blank"
                                                            isExternal
                                                            className="text-green-600 hover:text-green-800 text-xs font-medium"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            View Results
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardBody>
                    </Card>
                </AccordionItem>
            </Accordion>
        </div>
    );
}