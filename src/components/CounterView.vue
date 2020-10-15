<template>
    <div>
        <div v-for="movie in movies" :key="movie.id">
            {{JSON.stringify(movie)}}
        </div>
    </div>
    
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
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