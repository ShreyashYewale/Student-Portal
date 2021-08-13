import { API } from '../backend';

export const signup = (user) => {
  return fetch(`${API}/faculty/createaccount`, {
    method: 'POST',
    headers: {
      ACCEPT: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};