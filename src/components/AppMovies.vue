<template>
    <div>
        <movie-card v-for="movie in movies" :key="movie.id" :movie="movie">
        </movie-card>
 
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MovieCard from './MovieCard';
export default {
    components: {
        MovieCard
    },
    computed: {
        ...mapGetters([
            'movies'
        ])
    },
    methods: {
        ...mapActions([
            'fetchMovies'
        ])
    },
    created() {
        this.fetchMovies();
    }
}
</script>