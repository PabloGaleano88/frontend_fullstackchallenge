import * as React from 'react';
import { StarshipType } from "../../types/types";
import CardDetailedItem from "../DetailedCard/DetailedCard";

interface StarshipCardProps {
    starship: StarshipType;
}

const StarshipCard: React.FC<StarshipCardProps> = ({ starship }) => (
    <CardDetailedItem
        title={`${starship.name}`}
        details={[
            { label: "Model", value: starship.model || "Unknown" },
            { label: "Class", value: starship.starship_class || "Unknown" },
            { label: "Manufacturer", value: starship.manufacturer || "Unknown" },
            { label: "Cost", value: starship.cost_in_credits === "unknown" ? "Unknown" : `${starship.cost_in_credits} Credits` },
            { label: "Length", value: starship.length || "Unknown" },
            { label: "Max Atmospheric Speed", value: starship.max_atmosphering_speed || "Unknown" },
            { label: "Crew", value: starship.crew || "Unknown" },
            { label: "Passengers", value: starship.passengers || "Unknown" },
            { label: "Cargo Capacity", value: starship.cargo_capacity || "Unknown" },
            { label: "Consumables", value: starship.consumables || "Unknown" },
            { label: "Hyperdrive Rating", value: starship.hyperdrive_rating || "Unknown" },
            { label: "MGLT", value: starship.MGLT || "Unknown" },
            { label: "Pilots", value: starship.pilots.length > 0 ? <ul>{starship.pilots.map((p, index) => <li key={index}>{p.name}</li>)}</ul> : "No pilots" },
            { label: "Films", value: starship.films.length > 0 ? <ul>{starship.films.map((f, index) => <li key={index}>{f.title}</li>)}</ul> : "No films" },
            { label: "Created", value: starship.created || "Unknown" },
            { label: "Edited", value: starship.edited || "Unknown" },
            { label: "SWAPI URL", value: starship.url || "Unknown" },
        ]}
    />
);

export default StarshipCard;
