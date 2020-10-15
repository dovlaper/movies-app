<template>
    <div>
  <b-card
    no-body
    style="max-width: 20rem;"
    :img-src="movie.imageUrl"
    img-alt="Image"
    img-top
  >
    <b-card-body>
      <b-card-title>{{movie.title}}</b-card-title>
      <b-card-sub-title class="mb-2">{{movie.director}}</b-card-sub-title>
      <b-card-text>
        {{movie.genre}}
      </b-card-text>
      <b-card-text>
        {{movie.duration}}
      </b-card-text>
    </b-card-body>
    <b-card-body>
      <b-button variant="success">Edit</b-button>
      <b-button @click="deleteMovie(movie.id)" variant="danger">Delete</b-button>
    </b-card-body>
  </b-card>
</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'MovieCard',

    props: {
        movie: Object
    },
    methods: {
        ...mapActions([
            'deleteMovie'
        ])
    }
}
</script>