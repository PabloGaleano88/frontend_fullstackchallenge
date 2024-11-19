import { useParams, useNavigate } from 'react-router-dom';
import useCharacter from '../../hooks/useCharacter';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import PersonDetailed from '../../components/ListComponentsDetailed/PersonDetailed';

const CharacterPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  if (typeof id === "string") {
    const { character, loading } = useCharacter(id);

    if (loading) {
      return (
        <div className="section">
          <h2>Character Details</h2>
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
    } else if (!character) {
      return <div><h4>No character found</h4></div>;
    } else {
      return (
        <div className="section">
          <h2>Character Details</h2>
          <div className="images"></div>
          <div className="peoplecard">
            <PersonDetailed person={character} />
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

export default CharacterPage;
