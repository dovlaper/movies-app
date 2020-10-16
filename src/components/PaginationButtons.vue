<template>
  <div>
    <button v-if="canGoToPreviousPage" @click="currentPageChanged(-1)">Previous page</button>
    <span>Current page: {{ currentPage }}</span>
    <button v-if="canGoToNextPage" @click="currentPageChanged(1)">Next page</button>
  </div>
</template>
<script>
const PAGE_SIZE = 5;

export default {
  name: 'PaginationButtons',
  props: {
    numOfItems: Number,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    canGoToPreviousPage() {
      return this.currentPage > 1;
    },
    canGoToNextPage() {
      return this.currentPage * PAGE_SIZE < this.numOfItems;
    },
  },
  methods: {
    currentPageChanged(step) {
      this.currentPage = this.currentPage + step;
      this.$emit('current-page-changed', this.currentPage);
    },
  },
};
</script>
