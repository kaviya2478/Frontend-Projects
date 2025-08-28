import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { language: 'en-US' },
});

api.interceptors.request.use((config) => {
    const key = import.meta.env.VITE_TMDB_API_KEY;
    config.params = {...config(config.params || {}), api_key: key};
    return config;  
});

const cache = new Map();

export async function getCached(url,params = {}){
    const key = JSON.stringify({url,params});
    if(cache.has(key)){
        return cache.get(key);
    }

    const {data} = await api.get(url,{params});
    cache.set(key,data);
    return data;
}

export const searchMovies = (q, page = 1) =>
  getCached("/search/movie", { query: q, page, include_adult: false });

export const getPopular = (page = 1) =>
  getCached("/movie/popular", { page });

export const getMovieDetails = (id) =>
  getCached(`/movie/${id}`);

export const posterUrl = (path, size = "w342") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : "";