import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';

const ROOT_URL = 'http://localhost:8080';

export const createUser = form => {
  const req = axios.post(`${ROOT_URL}/api/register`, { form });
  return {
    type: CREATE_USER,
    req
  }
}
