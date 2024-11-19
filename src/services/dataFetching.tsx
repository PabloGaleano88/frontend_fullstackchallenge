import axios from 'axios';
import { PersonType, PeopleType, StarshipType, StarshipsType, FilmType, FilmsType, PlanetType, PlanetsType } from "./../types/types"

const API_URL = import.meta.env.VITE_API_URL


console.log(API_URL)
const apiAxios = axios.create({
    baseURL: API_URL
});

// Characters fetching

export const getPeople = async (page: number = 1, limit: number = 10, name: string, sort: string): Promise<PeopleType> => {
    try {
        const response = await apiAxios.get(`/people?page=${page}&limit=${limit}&name=${name}&sort=${sort}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getCharacter = async (id: string): Promise<PersonType> => {
    try {
        const response = await apiAxios.get(`/people/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


// Films fetching

export const getFilms = async (page: number = 1, limit: number = 10, title: string, sort: string): Promise<FilmsType> => {
    try {
        const response = await apiAxios.get(`/films?page=${page}&limit=${limit}&title=${title}&sort=${sort}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getFilm = async (id: string): Promise<FilmType> => {
    try {
        const response = await apiAxios.get(`/films/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


// Planets fetching

export const getPlanets = async (page: number = 1, limit: number = 10, name: string, sort: string): Promise<PlanetsType> => {
    try {
        const response = await apiAxios.get(`/planets?page=${page}&limit=${limit}&name=${name}&sort=${sort}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPlanet = async (id: string): Promise<PlanetType> => {
    try {
        const response = await apiAxios.get(`/planets/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Starships fetching

export const getStarships = async (page: number = 1, limit: number = 10, name: string, sort: string): Promise<StarshipsType> => {
    try {
        const response = await apiAxios.get(`/starships?page=${page}&limit=${limit}&name=${name}&sort=${sort}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getStarship = async (id: string): Promise<StarshipType> => {
    try {
        const response = await apiAxios.get(`/starships/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};