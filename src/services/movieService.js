import axios from 'axios';

class MovieService {
    constructor() {
        this.apiClient = axios.create({
            baseURL: 'http://localhost:3000/api/',
            timeout: 1000,
          });
    }

    getAll() {
        return this.apiClient.get('movies');
    }

    deleteMovie(id) {
        return this.apiClient.delete(`movies/${id}`)
    }

    addMovie(payload) {
        return this.apiClient.post('movies', payload);
    }
}

const movieService = new MovieService();
export default movieService;
