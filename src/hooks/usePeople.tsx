import { useEffect, useState } from 'react';
import { getPeople } from "./../services/dataFetching";
import { PersonType, PeopleType } from "./../types/types";

const usePeople = (page: number, limit: number, search: string, sort: string) => {
    const [people, setPeople] = useState<PersonType[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState<number | null>(null);
    const [prevPage, setPrevPage] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data: PeopleType = await getPeople(page, limit, search, sort);
                setPeople(data.docs);
                setNextPage(data.nextPage);
                setPrevPage(data.prevPage);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page, limit, search, sort]);


    return { people, loading, nextPage, prevPage };
};

export default usePeople;