import movieService from '../services/movieService';

export const actions = {
    async fetchMovies(state) {
        const { data } = await movieService.getAll();
        state.commit('setMovies', data);
    },
    async deleteMovie(state, payload) {
        await movieService.deleteMovie(payload);
        state.commit('deleteMovie', payload);
    },
    async addMovie(state, payload) {
        const newMovie = await movieService.addMovie(payload);
        state.commit('addMovie', newMovie);
    }
}