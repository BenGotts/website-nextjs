"use client";

import CompetitionCard from "./CompetitionCard";

export default function OngoingCompetitions({ competitions }) {
    if (!competitions || competitions.length === 0) {
        return null;
    }

    return (
        <div className="space-y-4">
            {competitions.map((comp) => (
                <CompetitionCard key={comp.id} competition={comp} isOngoing={true} />
            ))}
        </div>
    );
}