import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// styles

import './Navbar.css';
import Seachbar from './Seachbar';

function Navbar() {
  const { color } = useTheme();
  return (
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking Ninja</h1>
        </Link>
        <Seachbar />
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;
