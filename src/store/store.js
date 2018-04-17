import Vue from 'vue'
import Vuex from 'vuex'
import state from './store.js'
import mutations from './mutations.js'
import actions from './actions.js'
console.log(actions)
Vue.use(Vuex)
let store = new Vuex.Store({
  state,
  mutations,
  actions:actions
})
export default store
