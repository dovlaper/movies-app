<template>
    <div>
      <counter-view />
    
    </div>
</template>

<script>
import CounterView from './CounterView';

export default {
  name: 'Dashboard',
  components: {
    CounterView
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment(){
      this.counter++;
    }
  }
}
</script>