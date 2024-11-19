import * as React from 'react';
import { PersonType } from "../../types/types";
import CardDetailedItem from "../DetailedCard/DetailedCard";

interface PersonCardProps {
    person: PersonType;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => (
    <CardDetailedItem
        title={`${person.name}`}
        details={[
            { label: "Birth Year", value: person.birth_year || "Unknown Homeworld" },
            { label: "From", value: person.homeworld[0].name || "Unknown Homeworld" },
            { label: "Species", value: person.species.length > 0 ? person.species[0] : "Not determined" },
            { label: "Starships", value: person.starships.length > 0 ? <ul>{person.starships.map((s, index) => <li key={index}>{s.name}</li>)}</ul> : "No starships" },
            { label: "Films", value: person.films.length > 0 ? <ul>{person.films.map((f, index) => <li key={index}>{f.title}</li>)}</ul> : "No films" },
            { label: "Vehicles", value: person.vehicles.length > 0 ? <ul>{person.vehicles.map((v, index) => <li key={index}>{v}</li>)}</ul> : "No vehicles" },
            { label: "Created", value: person.created || "Unknown" },
            { label: "Edited", value: person.edited || "Unknown" },
            { label: "SWAPI URL", value: person.url || "Unknown" },
        ]}
    />
);

export default PersonCard;
