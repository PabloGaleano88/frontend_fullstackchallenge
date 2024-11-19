import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import usePlanets from '../../hooks/usePlanets';
import PlanetList from '../../components/ListComponents/PlanetsList';
import Naboo from "../../assets/naboo.jpg";
import Coruscant from "../../assets/coruscant.jpg";
import Hoth from "../../assets/hoth.jpg";
import Tatooine from "../../assets/tatooine.jpg";
import Kamino from "../../assets/kamino.jpg";
import Dagoboah from "../../assets/dagobah.jpg";

const PlanetsPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [limit, setLimit] = useState<number>(10);
    const [sort, setSort] = useState<string>('');
    const [searchNameOnDB, setSearchNameOnDB] = useState<string>('');
    const [searchResults, setSearchResults] = useState<string>('');
    const page = parseInt(searchParams.get('page') || '1', 10);
    const { planets, loading, nextPage, prevPage } = usePlanets(page, limit, searchResults, sort);
    const [searchQuery, setSearchQuery] = useState<string>('');

    searchParams.set('limit', limit.toString());
    window.history.replaceState(null, '', `?${searchParams.toString()}`);

    const filteredPlanets = planets.filter((planet) =>
        planet.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLimit(parseInt(event.target.value, 10));
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    };

    const handleSearch = () => {
        setSearchParams({ page: '1' });
        setSearchResults(searchNameOnDB);
    };

    const handleReset = () => {
        setSearchNameOnDB('');
        setSearchResults('');
    };

    const changePage = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    const goToNextPage = () => {
        if (nextPage) {
            changePage(nextPage);
        }
    };

    const goToPrevPage = () => {
        if (prevPage) {
            changePage(prevPage);
        }
    };

    if (loading)
        return (
            <div className="section">
                <h2>Planets</h2>
                <div className="images">
                    <img src={Naboo} alt="Naboo" />
                    <img src={Coruscant} alt="Coruscant" />
                    <img src={Hoth} alt="Hoth" />
                    <img src={Tatooine} alt="Tatooine" />
                    <img src={Kamino} alt="Kamino" />
                    <img src={Dagoboah} alt="Dagoboah" />
                </div>
                <Stack sx={{ width: '50%', marginTop: "35px" }} spacing={2}>
                    <LinearProgress
                        sx={{
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#C41901',
                            },
                            backgroundColor: '#0e0e0e',
                        }}
                    />
                </Stack>
            </div>
        );

    return (
        <div className="section">
            <h2>Planets</h2>
            <div className="images">
                <img src={Naboo} alt="Naboo" />
                <img src={Coruscant} alt="Coruscant" />
                <img src={Hoth} alt="Hoth" />
                <img src={Tatooine} alt="Tatooine" />
                <img src={Kamino} alt="Kamino" />
                <img src={Dagoboah} alt="Dagoboah" />
            </div>
            <div className="search-box">
                Search Planet in DB: <input
                    type="text"
                    placeholder="Search planet in DB..."
                    value={searchNameOnDB}
                    onChange={(e) => setSearchNameOnDB(e.target.value)}
                />
                <button onClick={() => handleSearch()}>Search</button>
                <button onClick={() => handleReset()}>Reset</button>
            </div>

            <div className='search-item-bar'>
                <div className="spacer"></div>
                <div className="search-box">
                    Search Planets in this page: <input
                        type="text"
                        placeholder="Search in this page by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={() => setSearchQuery('')}>Reset</button>
                </div>
                <div className="limit-selector">
                    <label htmlFor="limit">Items per page: </label>
                    <select
                        id="limit"
                        value={limit}
                        onChange={handleLimitChange}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                </div>
                <div className="sort-selector">
                    <label htmlFor="limit">Sort: </label>
                    <select
                        id="sort"
                        value={sort}
                        onChange={handleSortChange}>
                        <option value={""}>Select</option>
                        <option value={"asc"}>A-Z</option>
                        <option value={"desc"}>Z-A</option>
                    </select>
                </div>
            </div>


            {searchQuery !== '' ? (
                <PlanetList planets={filteredPlanets} />
            ) : (
                <PlanetList planets={planets} />
            )}

            <div className="buttons">
                <button onClick={goToPrevPage} disabled={page === 1}>
                    Previous
                </button>
                <button onClick={goToNextPage} disabled={nextPage === null}>Next</button>
            </div>
        </div>
    );
};

export default PlanetsPage;
