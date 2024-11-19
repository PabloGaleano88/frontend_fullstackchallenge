import { useEffect, useState } from 'react';
import { getPlanets } from "./../services/dataFetching";
import { PlanetType, PlanetsType } from "./../types/types";

const usePlanets = (page: number, limit: number, search: string, sort: string) => {
    const [planets, setPlanets] = useState<PlanetType[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState<number | null>(null);
    const [prevPage, setPrevPage] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data: PlanetsType = await getPlanets(page, limit, search, sort);
                setPlanets(data.docs);
                setNextPage(data.nextPage);
                setPrevPage(data.prevPage);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page, limit, search, sort]);


    return { planets, loading, nextPage, prevPage };
};

export default usePlanets;