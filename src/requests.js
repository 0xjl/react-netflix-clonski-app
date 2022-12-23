const API_KEY = "381970ed4a1c0871d5e0ac74f397a2b7";
const trendingUrl = `/trending/all/week?api_key=`;
const originalsUrl = `/discover/tv?api_key=`;
const lowerBaseUrl = `/discover/movie?api_key=`;
const topratedUrl = `/movie/top_rated?api_key=`;

const requests = {
    fetchTrending: `${trendingUrl}${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${originalsUrl}${API_KEY}&withnetworks=213`,
    fetchTopRated: `${topratedUrl}${API_KEY}&language=en-US`,
    fetchActionMovies: `${lowerBaseUrl}${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${lowerBaseUrl}${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${lowerBaseUrl}${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${lowerBaseUrl}${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${lowerBaseUrl}${API_KEY}&with_genres=99`,
}

export default requests;
