<template>
  <div>
    <div v-if="filteredMovies.length">
      <div>
        <button @click="setSortingCriteria('title')">Sort by title</button>
        <button @click="setSortingCriteria('duration')">Sort by duration</button>
      </div>
      <div>
        <button @click="setSortingDirection(-1)">ASC</button>
        <button @click="setSortingDirection(1)">DESC</button>
      </div>
      <div style="height: 300px">
        <div class="row">
          <div class="col-sm">title</div>
          <div class="col-sm">director</div>
          <div class="col-sm">genre</div>
          <div class="col-sm">duration</div>
          <div class="col-sm">title</div>
        </div>
        <movie-card
          v-for="movie in moviesPage"
          :key="movie.id"
          :movie="movie"
          :isSelected="getIsMovieSelected(movie)"
          @movie-selected="handleMovieSelected"
        />
      </div>
      <div>
        <div>Number of selected: {{ numberOfSelectedMovies }}</div>
        <button @click="selectAllMovies">Select all</button>
        <button @click="deselectAllMovies">Deselect all</button>
      </div>
      <pagination-buttons
        :num-of-items="sortedFilteredMovies.length"
        @current-page-changed="goToPage"
      />
    </div>
    <div v-else>
      Nema filmova
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MovieCard from './MovieCard';
import PaginationButtons from './PaginationButtons';
// import { store } from '../vuex/store';

const PAGE_SIZE = 5;

export default {
  components: {
    MovieCard,
    PaginationButtons,
  },
  data() {
    return {
      selectedMovies: [],
      sortingCriteria: 'title',
      sortDirection: -1,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(['filteredMovies', 'counter']),
    numberOfSelectedMovies() {
      return this.selectedMovies.length;
    },
    sortedFilteredMovies() {
      return this.filteredMovies
        .map((m) => m)
        .sort((movieA, movieB) =>
          movieA[this.sortingCriteria] < movieB[this.sortingCriteria]
            ? this.sortDirection
            : -1 * this.sortDirection
        );
    },
    moviesPage() {
      return this.sortedFilteredMovies.slice(
        (this.currentPage - 1) * PAGE_SIZE,
        this.currentPage * PAGE_SIZE
      );
    },
    // movies() {
    //   return this.$store.state.movies;
    // },
    // filteredMovies() {
    //   return this.movies.filter((movie) => movie.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
    // },
  },
  methods: {
    ...mapActions(['fetchMovies']),
    handleMovieSelected(movie) {
      if (this.getIsMovieSelected(movie)) {
        return;
      }
      this.selectedMovies.push(movie);
    },
    selectAllMovies() {
      this.selectedMovies = [...this.filteredMovies];
    },
    deselectAllMovies() {
      this.selectedMovies = [];
    },
    getIsMovieSelected(movie) {
      return !!this.selectedMovies.find((m) => m.id == movie.id);
    },
    setSortingCriteria(field) {
      this.sortingCriteria = field;
    },
    setSortingDirection(direction) {
      this.sortDirection = direction;
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
  created() {
    this.fetchMovies();
  },

  // beforeRouteEnter(to, from, next) {
  //   store.dispatch('fetchMovies').then(() => {
  //     console.log('STORE: ', { movies: store.getters.movies });
  //     next();
  //   });
  // },
};
</script>
