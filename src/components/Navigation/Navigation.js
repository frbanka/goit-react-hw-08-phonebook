import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <nav>
      <NavLink active={location.pathname === '/' ? 'on' : 'off'} to="/" end>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          active={location.pathname.startsWith('/phonebook') ? 'on' : 'off'}
          to="/phonebook"
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
