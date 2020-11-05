<template>
  <div id="nav">  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- if pageName not present add an empty string -->
  <NavBar :pageName="$route.name ? $route.name : ''" @open-drawer="openNav"/>
  <Drawer id="mySidenav" @close-drawer="closeNav"/>
  <router-view/>

  <div>
    {{users}}
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Drawer from '@/components/Drawer.vue';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Drawer
  },
  setup(){
    const store =  useStore(); // accessing the store 
    const users = computed(() => store.state.users); // getting users data from store

    const openNav = () => {
      document.getElementById("mySidenav").style.width = "275px";
      document.getElementById("app").style.marginLeft = "275px";
    }

    const closeNav = () => {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("app").style.marginLeft = "0";
    }

    onMounted(() => { // lifecycle hook
      store.dispatch('loadUsers');
    })

    return{
      openNav,
      closeNav,
      users
    }
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: 0.5s;

}

body {
  margin: 0;
}

</style>
