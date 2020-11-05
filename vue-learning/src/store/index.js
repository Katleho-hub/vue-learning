import { createStore } from 'vuex'

import { UsersModule } from './Users';

export default createStore({
  state() {},

  actions: {},

  mutations: {},

  modules: { // calling store modules
    Users: UsersModule
  }
})
