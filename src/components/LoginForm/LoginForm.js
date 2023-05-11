import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>Email</label>
      <input type="email" name="email" placeholder="Enter email" required />
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
};