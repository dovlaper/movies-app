<template>
  <div class="container">
    <h3>Add Movie</h3>
    <b-form
      @submit.prevent="createMovie"
    >
      <b-form-group
        label="Title:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.title"
          placeholder="Enter title">
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Director:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.director"
          placeholder="Enter director">
        </b-form-input>
      </b-form-group>


      <b-form-group
        label="ImageUrl:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.imageUrl"
          placeholder="Enter imageUrl">
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Duration:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.duration"
          placeholder="Enter duration"
        >
        </b-form-input>
      </b-form-group>

    <b-form-group
      label="Release date:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.releaseDate"
          placeholder="Enter release date">
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Genre:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.genre"
          placeholder="Enter genre"
        >
        </b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="float-right">
        Submit
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MovieForm',
  data() {
    return {
      movieForm: {
        title: '',
        director: '',
        imageUrl: '',
        duration: '',
        releaseDate: '',
        genre: ''
      }
    }
  },
  methods: {
    ...mapActions(['addMovie']),
    createMovie(){
        this.addMovie(this.movieForm);
        this.$router.push('/movies');
    }
  }
}
</script>
