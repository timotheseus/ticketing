import axios from 'axios';

export default function buildClient({ req }) {
  if (typeof window === 'undefined') {
    // We are on server
    return axios.create({
      baseURL: 'http://simpleimplication.com',
      headers: req.headers,
    });
  } else {
    // We are on browser
    return axios.create({
      baseURL: '/',
    });
  }
}
