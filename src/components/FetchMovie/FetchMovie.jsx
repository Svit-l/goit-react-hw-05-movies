import axios from 'axios';
// https://api.themoviedb.org/3/movie/550?api_key=671e99770535147b22bbc4f5e6f1ab11

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '671e99770535147b22bbc4f5e6f1ab11';
const IMG_SIZE = '550';

const FetchMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}3/movie/${IMG_SIZE}?api_key=${API_KEY}`
    );
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

FetchMovies();

export default FetchMovies;
