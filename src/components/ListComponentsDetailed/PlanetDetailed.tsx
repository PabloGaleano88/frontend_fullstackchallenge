import * as React from 'react';
import { PlanetType } from "../../types/types";
import CardDetailedItem from "../DetailedCard/DetailedCard";

interface PlanetCardProps {
    planet: PlanetType;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => (
    <CardDetailedItem
        title={`${planet.name}`}
        details={[
            { label: "Population", value: planet.population || "Unknown" },
            { label: "Climate", value: planet.climate || "Unknown" },
            { label: "Rotation Period", value: planet.rotation_period || "Unknown" },
            { label: "Orbital Period", value: planet.orbital_period || "Unknown" },
            { label: "Diameter", value: planet.diameter || "Unknown" },
            { label: "Gravity", value: planet.gravity || "Unknown" },
            { label: "Terrain", value: planet.terrain || "Unknown" },
            { label: "Residents", value: planet.residents.length > 0 ? <ul>{planet.residents.map((r, index) => <li key={index}>{r.name}</li>)}</ul> : "No known residents" },
            { label: "Films", value: planet.films.length > 0 ? <ul>{planet.films.map((f, index) => <li key={index}>{f.title}</li>)}</ul> : "No films" },
            { label: "Created", value: planet.created || "Unknown" },
            { label: "Edited", value: planet.edited || "Unknown" },
            { label: "SWAPI URL", value: planet.url || "Unknown" },
        ]}
    />
);

export default PlanetCard;
