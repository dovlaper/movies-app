export const mutations = {
    setCounter(state, payload){
        state.counter = payload;
    },   
    setMovies(state, payload) {
        state.movies = payload
    },
    deleteMovie(state, id) {
        state.movies = state.movies.filter(movie => movie.id !== id);
    },
    addMovie(state, payload) {
        state.movies.push(payload);
    }
}