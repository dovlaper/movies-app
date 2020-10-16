export const getters = {
  counter: ({ counter }) => counter,
  movies: ({movies}) => movies,
  filteredMovies: state => state.movies.filter(movie => movie
    .title
    .toLowerCase()
    .indexOf(state.searchText.toLowerCase()) > -1),
  isCounterEven: (state) => state.counter % 2 === 0,
};
