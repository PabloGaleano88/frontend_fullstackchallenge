import { useParams, useNavigate } from 'react-router-dom';
import useStarship from '../../hooks/useStarship';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import StarshipDetailed from '../../components/ListComponentsDetailed/StarshipDetailed';

const StarshipPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    if (typeof id === "string") {
        const { starship, loading } = useStarship(id);

        if (loading) {
            return (
                <div className="section">
                    <h2>Starship Details</h2>
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
        } else if (!starship) {
            return <div><h4>No starship found</h4></div>;
        } else {
            return (
                <div className="section">
                    <h2>Starship Details</h2>
                    <div className="images"></div>
                    <div className="peoplecard">
                        <StarshipDetailed starship={starship} />
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

export default StarshipPage;
