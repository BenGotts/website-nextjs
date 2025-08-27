"use client";

import { Card, CardBody, CardHeader, Divider, Link, Chip } from "@nextui-org/react";
import "@cubing/icons";
import ReactCountryFlag from "react-country-flag";
import { WCA_ID } from "@/consts";

export default function CompetitionCard({ competition, isOngoing = false }) {
    // Check if I'm a delegate or organizer for this competition
    const isMyDelegate = competition.delegates?.some(delegate => delegate.wca_id === WCA_ID);
    const isMyOrganizer = competition.organizers?.some(organizer => organizer.wca_id === WCA_ID);

    return (
        <div
            className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group bg-white hover:bg-gray-50"
            onClick={() => window.open(competition.url, '_blank')}
        >
            <div className="space-y-2 sm:space-y-3">
                {/* Competition Name */}
                <div className="font-semibold text-sm sm:text-base line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span className="flex-1 pr-2">{competition.name}</span>
                    <span className="text-blue-500 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                        Click to view →
                    </span>
                </div>
                
                {/* Date and Location */}
                <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <div className="font-medium">{competition.date_range}</div>
                    <div className="flex items-center space-x-1">
                        <span>{competition.city}</span>
                        <ReactCountryFlag 
                            countryCode={competition.country_iso2} 
                            svg 
                            className="text-sm sm:text-base" 
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
                
                {/* Events - Show all events */}
                <div className="flex flex-wrap gap-1">
                    {competition.event_ids.map((id) => (
                        <span 
                            key={id} 
                            className={`text-lg sm:text-xl cubing-icon event-${id} text-gray-700`}
                            title={id}
                        ></span>
                    ))}
                </div>
                
                {/* Results Link - Separate from card click */}
                {isOngoing && (
                    <div className="pt-2">
                        <Link
                            href={`https://live.worldcubeassociation.org/link/competitions/${competition.id}`}
                            target="_blank"
                            isExternal
                            className="text-red-600 hover:text-red-800 text-xs sm:text-sm font-semibold bg-red-50 hover:bg-red-100 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-colors inline-flex items-center justify-center w-full sm:w-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
                            [Live] Results
                        </Link>
                    </div>
                )}
                
                {competition.results_posted_at && (
                    <div className="pt-2">
                        <Link
                            href={`https://www.worldcubeassociation.org/competitions/${competition.id}/results/all`}
                            target="_blank"
                            isExternal
                            className="text-green-700 hover:text-green-900 text-xs sm:text-sm font-medium text-center block w-full sm:w-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            View Results
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
