import { useEffect, useState } from 'react';
import { getStarships } from "./../services/dataFetching";
import { StarshipType, StarshipsType } from "./../types/types";

const useStarships = (page: number, limit: number, search: string, sort: string) => {
    const [starships, setStarships] = useState<StarshipType[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState<number | null>(null);
    const [prevPage, setPrevPage] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data: StarshipsType = await getStarships(page, limit, search, sort);
                setStarships(data.docs);
                setNextPage(data.nextPage);
                setPrevPage(data.prevPage);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page, limit, search, sort]);

    return { starships, loading, nextPage, prevPage };
};

export default useStarships;