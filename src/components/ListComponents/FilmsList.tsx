import * as React from 'react';
import { FilmType } from "../../types/types";
import CardItem from '../Card/Card';

interface FilmsListProps {
    films: FilmType[];
}

const FilmsList: React.FC<FilmsListProps> = ({ films }) => (
    <div className='cards'>
        {films.map((film) => (
            <CardItem
                key={film.id}
                title={film.title || "Unknown Title"}
                subtitle={`Episode: ${film.episode_id || "Unknown"}`}
                description={`Release date: ${film.release_date || "Unknown"}`}
                linkTo={`/films/${film.id}`}
                label="StarWars - Films"
            />
        ))}
    </div>
);

export default FilmsList;
