<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/movies">Movies</router-link>
    <div class="navbar-nav w-100">
      <router-link
        class="nav-item nav-link"
        to="/add-movie"
      >
        Add Movie
      </router-link>

    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'NavBar',

  methods: {
    ...mapMutations([
      'setSearchTerm'
    ])
  }
}
</script>
