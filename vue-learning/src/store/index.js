import { createStore } from 'vuex'

import { UsersModule } from './Users';
import { SalesModule } from './Sales';

export default createStore({
  state() {},

  actions: {},

  mutations: {},

  modules: { // calling store modules
    Users: UsersModule,
    Sales: SalesModule

  }
})
 