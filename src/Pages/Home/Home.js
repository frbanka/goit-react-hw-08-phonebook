import css from './Home.module.css';
import { useAuth } from 'hooks';
export default function Home() {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();
  return (
    <div>
      <h1 className={css.title}>
        <div>
          <h2>Your personal phonebook</h2>
          {isLoggedIn ? (
            <p className={css.text}>Welcome, {user.name}</p>
          ) : (
            <p className={css.text}>Register or log in</p>
          )}
        </div>
      </h1>
    </div>
  );
}
