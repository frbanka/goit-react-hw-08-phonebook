import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return <header>{isLoggedIn ? <UserMenu /> : <Navigation />}</header>;
};
