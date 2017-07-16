import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const state = {
	num: 1,
  drawer: false,
  circleFlag: false,
  theme:{},
  article:{},
  before:''
}
const actions = {
	// editNote({commit},note){
 //    console.log(note);
 //    commit('EDIT_NOTE',note)
 //  }
}
const mutations = {
  // ADD_NOTE(state){
  //   console.log('add')
  // }
  add(state,n){
    state.num = n;
  },
  back(state,n){
    if(n){
      state.drawer = false;
    }else{
      state.drawer = true;
    }
  },
  toggle(state,n){
    if(n){
      state.circleFlag = true;
    }else{
      state.circleFlag = false;
    }
  }
}

export default new Vuex.Store({
  state,mutations,actions
})
