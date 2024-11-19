import { useParams, useNavigate } from 'react-router-dom';
import useFilm from '../../hooks/useFilm';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import FilmDetailed from '../../components/ListComponentsDetailed/FilmDetailed';

const FilmPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    if (typeof (id) === "string") {
        const { film, loading } = useFilm(id);

        if (loading) {
            return (
                <div className="section">
                    <h2>Film Details</h2>
                    <Stack sx={{ width: "100%" }} spacing={2}>
                        <LinearProgress
                            sx={{
                                "& .MuiLinearProgress-bar": {
                                    backgroundColor: "#C41901",
                                },
                                backgroundColor: "#0e0e0e",
                            }}
                        />
                    </Stack>
                </div>
            );
        } else if (!film) {
            return <div><h4>No Film found</h4></div>;
        } else {
            return (
                <div className="section">
                    <h2>Film Details</h2>
                    <div className="images"></div>
                    <div className="peoplecard">
                        <FilmDetailed film={film} />
                    </div>
                    <div>
                        <button onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
            );
        }
    }

    return null;
}
export default FilmPage;

