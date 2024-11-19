import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilmsPage from "./pages/filmsPage/filmsPage"
import FilmPage from './pages/filmPage/filmPage';
import PeoplePage from "./pages/peoplePage/PeoplePage";
import CharacterPage from "./pages/characterPage/characterPage";
import Header from "./components/Header/Header";
import Title from './components/Title/Title';
import PlanetsPage from './pages/planetsPage/planetsPage';
import PlanetPage from './pages/planetPage/planetPage';
import StarshipsPage from './pages/starshipsPage/starshipsPage';
import StarshipPage from './pages/starshipPage/startshipPage';
import ErrorPage from './pages/errorPage/errorPage';
import MainPage from './pages/mainPage/mainPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Title />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/films/:id" element={<FilmPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/:id" element={<CharacterPage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/planets/:id" element={<PlanetPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
        <Route path="/starships/:id" element={<StarshipPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router >
  );
};

export default App;
