import { useEffect, useState } from 'react';
import { getPlanet } from "../services/dataFetching";
import { PlanetType } from "../types/types";

const usePlanet = (id: string) => {
    const [planet, setPlanet] = useState<PlanetType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPlanet(id);
                setPlanet(data);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { planet, loading };
};

export default usePlanet;