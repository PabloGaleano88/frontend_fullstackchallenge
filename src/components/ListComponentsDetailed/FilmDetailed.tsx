import * as React from 'react';
import { FilmType } from "../../types/types";
import CardDetailedItem from "../DetailedCard/DetailedCard";

interface FilmCardProps {
    film: FilmType;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => (
    <CardDetailedItem
        title={`${film.title}`}
        details={[
            { label: "Episode", value: film.episode_id || "Unknown" },
            { label: "Director", value: film.director || "Unknown" },
            { label: "Producer", value: film.producer || "Unknown" },
            { label: "Release Date", value: film.release_date || "Unknown" },
            { label: "Opening Crawl", value: film.opening_crawl || "Not available" },
            { label: "Characters", value: film.characters.length > 0 ? <ul>{film.characters.map((c, index) => <li key={index}>{c.name}</li>)}</ul> : "No characters" },
            { label: "Planets", value: film.planets.length > 0 ? <ul>{film.planets.map((p, index) => <li key={index}>{p.name}</li>)}</ul> : "No planets" },
            { label: "Starships", value: film.starships.length > 0 ? <ul>{film.starships.map((s, index) => <li key={index}>{s.name}</li>)}</ul> : "No starships" },
            { label: "Vehicles", value: film.vehicles.length > 0 ? <ul>{film.vehicles.map((v, index) => <li key={index}>{v}</li>)}</ul> : "No vehicles" },
            { label: "Species", value: film.species.length > 0 ? <ul>{film.species.map((s, index) => <li key={index}>{s}</li>)}</ul> : "No species" },
            { label: "Created", value: film.created || "Unknown" },
            { label: "Edited", value: film.edited || "Unknown" },
            { label: "SWAPI URL", value: film.url || "Unknown" },
        ]}
    />
);

export default FilmCard;
