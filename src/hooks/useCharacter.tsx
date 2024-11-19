import { useEffect, useState } from 'react';
import { getCharacter } from "../services/dataFetching";
import { PersonType } from "../types/types";

const useCharacter = (id: string) => {
    const [character, setCharacter] = useState<PersonType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCharacter(id);
                setCharacter(data);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { character, loading };
};

export default useCharacter;