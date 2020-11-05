import { createStore } from 'vuex'
import { createApp } from 'vue'
import App from '@/App.vue'
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";


const app = createApp(App);
app.use(Vuex);
app.use(VueAxios, axios);

app.axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export default createStore({
  state: {
    users: []
  },
  actions: {
    loadUsers({ commit }) {
      app.axios
        .get("users")
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
});
