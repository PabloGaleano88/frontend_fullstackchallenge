import { useEffect, useState } from 'react';
import { getStarship } from "../services/dataFetching";
import { StarshipType } from "../types/types";

const useStarship = (id: string) => {
    const [starship, setStarship] = useState<StarshipType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getStarship(id);
                setStarship(data);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { starship, loading };
};

export default useStarship;