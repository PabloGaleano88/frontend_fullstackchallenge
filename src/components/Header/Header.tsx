import "./Header.css";
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <div className="bar">
      <div className="links">
        <Link className="link" to="/films">Films</Link>
        <Link className="link" to="/people">Characters</Link>
        <Link className="link" to="/planets">Planets</Link>
        <Link className="link" to="/starships">Starships</Link>
      </div>
    </div>
  );
};

export default Header;
