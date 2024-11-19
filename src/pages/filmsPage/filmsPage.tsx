import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import FilmsList from '../../components/ListComponents/FilmsList';
import useFilms from '../../hooks/useFilms';
import Ep1 from "../../assets/ep1.jpg";
import Ep2 from "../../assets/ep2.jpg";
import Ep3 from "../../assets/ep3.jpg";
import Ep4 from "../../assets/ep4.jpg";
import Ep5 from "../../assets/ep5.jpg";
import Ep6 from "../../assets/ep6.jpg";

const FilmsPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [limit, setLimit] = useState<number>(10);
    const [sort, setSort] = useState<string>('');
    const [searchNameOnDB, setSearchNameOnDB] = useState<string>('');
    const [searchResults, setSearchResults] = useState<string>('');
    const page = parseInt(searchParams.get('page') || '1', 10);
    const { films, loading, nextPage, prevPage } = useFilms(page, limit, searchResults, sort);
    const [searchQuery, setSearchQuery] = useState<string>('');

    searchParams.set('limit', limit.toString());
    window.history.replaceState(null, '', `?${searchParams.toString()}`);

    const filteredFilms = films.filter((film) =>
        film.title.toLowerCase().includes(searchQuery.toLowerCase())
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
                <h2>Films</h2>
                <div className="images">
                    <img src={Ep1} alt="Episode I" />
                    <img src={Ep2} alt="Episode II" />
                    <img src={Ep3} alt="Episode III" />
                    <img src={Ep4} alt="Episode IV" />
                    <img src={Ep5} alt="Episode V" />
                    <img src={Ep6} alt="Episode VI" />
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
            <h2>Films</h2>
            <div className="images">
                <img src={Ep1} alt="Episode I" />
                <img src={Ep2} alt="Episode II" />
                <img src={Ep3} alt="Episode III" />
                <img src={Ep4} alt="Episode IV" />
                <img src={Ep5} alt="Episode V" />
                <img src={Ep6} alt="Episode VI" />
            </div>
            <div className="search-box">
                Search Film in DB: <input
                    type="text"
                    placeholder="Search film in DB..."
                    value={searchNameOnDB}
                    onChange={(e) => setSearchNameOnDB(e.target.value)}
                />
                <button onClick={() => handleSearch()}>Search</button>
                <button onClick={() => handleReset()}>Reset</button>
            </div>
            <div className='search-item-bar'>
                <div className="spacer"></div>
                <div className="search-box">
                    Search Film in this page: <input
                        type="text"
                        placeholder="Search in this page by title..."
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
                <FilmsList films={filteredFilms} />
            ) : (
                <FilmsList films={films} />
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

export default FilmsPage;
