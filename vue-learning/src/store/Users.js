// creating a store module
import axios from "axios";

export const UsersModule = {
  // format like the normal store
  namespaced: true, // when namespace is true to access module the namespace "Users[Users.js]" has to be used (i.e. store.state.Users.users)
  state() {
    const users = [];
    const usersData = [];

    return {
      users,
      usersData
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
          commit("PROCESS_USERS", result.data); // move this
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
    },
    PROCESS_USERS(state, users) {
      let userObj;
      users.forEach(({ id, name, email, phone }) => {
        userObj = {
          userId: id,
          header: name,
          body: [
            ["Email", email],
            ["Phone", phone],
          ],
        };
        state.usersData.push(userObj);
      });
    }
  }
}


