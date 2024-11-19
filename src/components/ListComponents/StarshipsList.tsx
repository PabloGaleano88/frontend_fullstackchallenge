import * as React from 'react';
import { StarshipType } from "../../types/types";
import CardItem from "../Card/Card";

interface StarshipsListProps {
    starships: StarshipType[];
}

const StarshipsList: React.FC<StarshipsListProps> = ({ starships }) => (
    <div className='cards'>
        {starships.map((starship) => (
            <CardItem
                key={starship.id}
                title={starship.name || "Unknown Name"}
                subtitle={`Model: ${starship.model || "Unknown"}`}
                description={`Class: ${starship.starship_class || "Unknown"}`}
                linkTo={`/starships/${starship.id}`}
                label="StarWars - Starships"
            />
        ))}
    </div>
);

export default StarshipsList;
