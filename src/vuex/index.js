import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
import router from '@/router'

import http from '../api'
const store = new Vuex.Store({
  state:{
    user:{},
    test:123
  },
  getters:{

  },
  mutations:{
    getUser(state,user){
      state.user = user;
      router.replace('/Home')

    }
  },
  actions:{
    async toGetUser({commit,state},{user}){
      const res = await http.login.loginSns(user)
      commit('getUser',res.data)
    }
  }
})

export default store;
