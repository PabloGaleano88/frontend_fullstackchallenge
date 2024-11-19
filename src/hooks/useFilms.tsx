import { useEffect, useState } from 'react';
import { getFilms } from "./../services/dataFetching";
import { FilmsType, FilmType } from "./../types/types";

const useFilms = (page: number, limit: number, search: string, sort: string) => {
    const [films, setFilms] = useState<FilmType[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState<number | null>(null);
    const [prevPage, setPrevPage] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data: FilmsType = await getFilms(page, limit, search, sort);
                setFilms(data.docs);
                setNextPage(data.nextPage);
                setPrevPage(data.prevPage);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page, limit, search, sort]);


    return { films, loading, nextPage, prevPage };
};

export default useFilms;