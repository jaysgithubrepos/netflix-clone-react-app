const APIKEY="9d6d7a17f27bca1d2ee74bf12f3b4035";
const requests = {

fetchTrending: `/trending/all/day?api_key=${APIKEY}`,
fetchNetflixoriginals: `/discover/tv?api_key=${APIKEY}&language=en-US`,
fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}
export default requests; 