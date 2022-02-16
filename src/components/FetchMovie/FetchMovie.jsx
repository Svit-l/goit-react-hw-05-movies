import axios from 'axios';
// https://api.themoviedb.org/3/movie/550?api_key=671e99770535147b22bbc4f5e6f1ab11
// https://api.themoviedb.org/3/trending/all/day?api_key=671e99770535147b22bbc4f5e6f1ab11
// https://api.themoviedb.org/3/movie/615904?api_key=671e99770535147b22bbc4f5e6f1ab11&language=en-US
// "The resource you requested could not be found".
// https://api.themoviedb.org/3/movie/615904/credits?api_key=671e99770535147b22bbc4f5e6f1ab11&language=en-US

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '671e99770535147b22bbc4f5e6f1ab11';
// const IMG_SIZE = '550';

// const FetchMovie = async () => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}3/movie/${IMG_SIZE}?api_key=${API_KEY}`
//     );
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export default FetchMovie;

const FetchMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}3/trending/all/day?api_key=${API_KEY}`
    );
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

export default FetchMovies;
