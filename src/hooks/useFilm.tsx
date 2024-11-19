import { useEffect, useState } from 'react';
import { getFilm } from "../services/dataFetching";
import { FilmType } from "../types/types";

const useFilm = (id: string) => {
    const [film, setFilm] = useState<FilmType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFilm(id);
                setFilm(data);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { film, loading };
};

export default useFilm;