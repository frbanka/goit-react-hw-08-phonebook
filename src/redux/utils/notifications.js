import { Notify } from 'notiflix';

export const logInFailureNotification = () => {
  return Notify.failure('Wrong email or password.');
};

export const registrationFailureNotification = () => {
  Notify.failure('Registration failed.');
};

export const registrationFailureEmailInUseNotification = () => {
  Notify.failure('This e-mail address is already in use.');
};

export const doubledContactNotification = name => {
  Notify.warning(`${name} is already in your Contacts.`);
};

export const addedContactNotification = name => {
  Notify.warning(`${name} has been added to your Contacts.`);
};
