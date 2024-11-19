export interface FilmType {
    id: string;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: { name: string }[];
    planets: { name: string }[];
    starships: { name: string }[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}

export interface FilmsType {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number | null;
    page: number;
    prevPage: number | null;
    docs: FilmType[];
}

export interface PersonType {
    id: string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: { name: string }[];
    films: { title: string }[];
    species: string[];
    vehicles: string[];
    starships: { name: string }[];
    created: string;
    edited: string;
    url: string;
}

export interface PeopleType {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number | null;
    page: number;
    prevPage: number | null;
    docs: PersonType[];
}

export interface PlanetType {
    id: string;
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: { name: string }[];
    films: { title: string }[];
    created: string;
    edited: string;
    url: string;
}

export interface PlanetsType {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number | null;
    page: number;
    prevPage: number | null;
    docs: PlanetType[];
}

export interface StarshipType {
    id: string;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: { name: string }[];
    films: { title: string }[];
    created: string;
    edited: string;
    url: string;
}

export interface StarshipsType {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number | null;
    page: number;
    prevPage: number | null;
    docs: StarshipType[];
}