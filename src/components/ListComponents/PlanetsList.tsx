import * as React from 'react';
import { PlanetType } from "../../types/types";
import CardItem from "../Card/Card";

interface PlanetListProps {
    planets: PlanetType[];
}

const PlanetList: React.FC<PlanetListProps> = ({ planets }) => (
    <div className='cards'>
        {planets.map((planet) => (
            <CardItem
                key={planet.id}
                title={planet.name || "Unknown Name"}
                subtitle={`Population: ${planet.population || "Unknown"}`}
                description={`Climate: ${planet.climate || "Unknown"}`}
                linkTo={`/planets/${planet.id}`}
                label="StarWars - Planets"
            />
        ))}
    </div>
);

export default PlanetList;
