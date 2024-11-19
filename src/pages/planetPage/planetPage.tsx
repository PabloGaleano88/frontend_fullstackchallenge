import { useParams, useNavigate } from 'react-router-dom';
import usePlanet from '../../hooks/usePlanet';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import PlanetDetailed from '../../components/ListComponentsDetailed/PlanetDetailed';

const PlanetPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    if (typeof id === "string") {
        const { planet, loading } = usePlanet(id);

        if (loading) {
            return (
                <div className="section">
                    <h2>Planet Details</h2>
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
        } else if (!planet) {
            return <div><h4>No planet found</h4></div>;
        } else {
            return (
                <div className="section">
                    <h2>Planet Details</h2>
                    <div className="images"></div>
                    <div className="peoplecard">
                        <PlanetDetailed planet={planet} />
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

export default PlanetPage;
