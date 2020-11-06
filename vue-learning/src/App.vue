<template>
  <div id="nav">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <!-- if pageName not present add an empty string -->
    <NavBar :pageName="$route.name ? $route.name : ''" @open-drawer="openNav" />
    <Drawer id="mySidenav" @close-drawer="closeNav" />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Drawer from "@/components/Drawer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Drawer,
  },
  setup() {
    const openNav = () => {
      document.getElementById("mySidenav").style.width = "275px";
      document.getElementById("app").style.marginLeft = "275px";
    };

    const closeNav = () => {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("app").style.marginLeft = "0";
    };

    return {
      openNav,
      closeNav,
    };
  },
};
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
  padding: 0;
}

/* cards */
/* .container {
  width: 90%;
  margin: 50px auto;
  padding:0;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
}

.card {
  width: 20%;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: 50px;
  transition: 0.3s;
}

.card-header {
  text-align: center;
  padding: 5px 0px;
  background: #555;
  color: #f2f2f2;
}

.card-body {
  padding: 30px 20px;
  text-align: center;
  font-size: 18px;
}


.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 1000px) {
  .card {
    width: 40%;
  }
}

@media screen and (max-width: 620px) {
  .container {
    width: 100%;
  }

  .heading {
    padding: 20px;
    font-size: 20px;
  }

  .card {
    width: 80%;
  }
} */
</style>
