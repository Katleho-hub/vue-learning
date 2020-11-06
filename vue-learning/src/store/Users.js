// creating a store module
import axios from "axios";

export const UsersModule = {
  // format like the normal store
  namespaced: true, // when namespace is true to access module the namespace "Users[Users.js]" has to be used (i.e. store.state.Users.users)
  state() {
    const users = [];

    return {
      users
    }
  },
  actions: {
    loadUsers({ commit }) {
      axios({
        method: 'get',
        url: "https://jsonplaceholder.typicode.com/Users"
      })
        .then((result) => {
          console.table(result.data);
          commit("SAVE_USERS", result.data);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    }
  },
  mutations: {
    SAVE_USERS(state, users) {
      state.users = users;
    }
  }
}
