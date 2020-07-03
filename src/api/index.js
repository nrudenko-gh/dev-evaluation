import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/neo/';
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

const getAsteroidData = async (asteroidId) => {
  return axios.get(`${BASE_URL}${asteroidId}?api_key=${API_KEY}`);
};

export { getAsteroidData };
