import Vuex from 'vuex';
import Vue from 'vue';
import { mutations } from './mutations';
import { actions } from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        movies: [],
        
    },
    getters: {
        counter: ({counter}) => counter,
        movies: ({movies}) => movies,
        isCounterEven: state => state.counter % 2 === 0
    },
    mutations,
    actions
})