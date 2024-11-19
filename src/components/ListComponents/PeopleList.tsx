import * as React from 'react';
import { PersonType } from "../../types/types";
import CardItem from '../Card/Card';

interface PeopleListProps {
    people: PersonType[];
}

const PeopleList: React.FC<PeopleListProps> = ({ people }) => (
    <div className='cards'>
        {people.map((person) => (
            <CardItem
                key={person.url}
                title={person.name || "Unknown Name"}
                subtitle={`Birth Year: ${person.birth_year || "Unknown"}`}
                description={`From: ${typeof person.homeworld[0]?.name === 'string' ? person.homeworld[0]?.name : "Unknown Homeworld"}`}
                linkTo={`/people/${person.id}`}
                label="Star Wars - Character"
            />
        ))}
    </div>
);

export default PeopleList;
