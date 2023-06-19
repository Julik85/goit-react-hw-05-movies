import axios from "axios";


const API_KEY = '5cb4dd4cf3f1476227d92f7c4b196044';
const BASE_URL = 'https://api.themoviedb.org/3';


export const getTrendingMovies = async () =>{
    const {data} = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    return data
}


export const getMovieDetails = async (movie_id) =>{
    const {data} = await axios.get(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`)
    return data
}

export const getMoviesBySearch = async (pathname, page = 1, query = '') =>{
    const {data} = await axios.get(`${BASE_URL}/${pathname}?api_key=${API_KEY}&query=${query}&page=${page}`)
    return data
}


export const getMovieCast = async (movie_id) =>{
    const {data} = await axios.get(`${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`)
    return data
}

export const getMovieReviews= async (movie_id) =>{
    const {data} = await axios.get(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`)
    return data
}

// https://api.themoviedb.org/3/trending/movie/{time_window}
// https://api.themoviedb.org/3/movie/{movie_id}
// https://api.themoviedb.org/3/search/movie

// https://api.themoviedb.org/3/movie/{movie_id}/credits

// https://api.themoviedb.org/3/movie/{movie_id}/reviews