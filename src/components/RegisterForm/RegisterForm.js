import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>Username</label>
      <input type="text" name="name" placeholder="Enter username" required />
      <label>Email</label>
      <input type="email" name="email" placeholder="Enter email" required />
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        pattern=".{7,}"
        title="Your password must contain at least 7 characters."
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};
