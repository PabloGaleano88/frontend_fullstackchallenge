import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import useStarships from '../../hooks/useStarships';
import StarshipsList from '../../components/ListComponents/StarshipsList';
import Xwing from "../../assets/xwing.jpg";
import Tie from "../../assets/TIE.jpg";
import StarDestroyer from "../../assets/stardestroyer.jpg";
import Mfalcon from "../../assets/mfalcon.jpg";
import Dstar from "../../assets/deathstar.jpg";
import Cr90 from "../../assets/CR90.jpg";

const StarshipsPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [limit, setLimit] = useState<number>(10);
    const [sort, setSort] = useState<string>('');
    const [searchNameOnDB, setSearchNameOnDB] = useState<string>('');
    const [searchResults, setSearchResults] = useState<string>('');
    const page = parseInt(searchParams.get('page') || '1', 10);
    const { starships, loading, nextPage, prevPage } = useStarships(page, limit, searchResults, sort);
    const [searchQuery, setSearchQuery] = useState<string>('');

    searchParams.set('limit', limit.toString());
    window.history.replaceState(null, '', `?${searchParams.toString()}`);

    const filteredStarships = starships.filter((starship) =>
        starship.name.toLowerCase().includes(searchQuery.toLowerCase())
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
                <h2>Starships</h2>
                <div className="images">
                    <img src={Xwing} alt="X-Wing" />
                    <img src={Tie} alt="Tie" />
                    <img src={StarDestroyer} alt="Star Destroyer" />
                    <img src={Mfalcon} alt="Millenium Falcon" />
                    <img src={Dstar} alt="DeathStar" />
                    <img src={Cr90} alt="CR90" />
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
            <h2>Starships</h2>
            <div className="images">
                <img src={Xwing} alt="X-Wing" />
                <img src={Tie} alt="Tie" />
                <img src={StarDestroyer} alt="Star Destroyer" />
                <img src={Mfalcon} alt="Millenium Falcon" />
                <img src={Dstar} alt="DeathStar" />
                <img src={Cr90} alt="CR90" />
            </div>
            <div className="search-box">
                Search Starship in DB: <input
                    type="text"
                    placeholder="Search starships in DB..."
                    value={searchNameOnDB}
                    onChange={(e) => setSearchNameOnDB(e.target.value)}
                />
                <button onClick={() => handleSearch()}>Search</button>
                <button onClick={() => handleReset()}>Reset</button>
            </div>

            <div className='search-item-bar'>
                <div className="spacer"></div>
                <div className="search-box">
                    Search Starships in this page: <input
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

            <div className="starships-card">
                <div>
                    {searchQuery !== '' ? (
                        <StarshipsList starships={filteredStarships} />
                    ) : (
                        <StarshipsList starships={starships} />
                    )}
                </div>

                <div className="buttons">
                    <button onClick={goToPrevPage} disabled={page === 1}>
                        Previous
                    </button>
                    <button onClick={goToNextPage} disabled={nextPage === null}>
                        Next
                    </button>
                </div>
            </div>;
        </div>)
}


export default StarshipsPage;
