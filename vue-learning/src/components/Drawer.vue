<template>
  <!-- drawer -->
  <div id="mySidenav" class="sidenav">
    <a class="closebtn" @click="closeNav"><i class="fa fa-times"></i></a>
    <h2 class="sidenav-header">Menu</h2>
    <ul>
      <router-link to="/" class="route-wrapper">
        <li @click="closeNav">
          <a><i class="fa fa-home"></i>Home</a>
        </li>
      </router-link>

      <router-link to="/Users" class="route-wrapper">
        <li @click="closeNav">
          <a><i class="fa fa-address-card"></i>Users</a>
        </li>
      </router-link>

      <router-link to="/Sales" class="route-wrapper">
        <li @click="closeNav">
          <a href="#"><i class="fa fa-book"></i>Sales</a>
        </li>
      </router-link>

      <li>
        <a href="#"><i class="fa fa-address-book"></i>Contact</a>
      </li>

      <li>
        <a href="#"><i class="fa fa-map-pin"></i>Map</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Drawer",
  setup() {
    const closeNav = () => {
      if (window.screen.width > 600) {
        document.getElementById("app").style.marginLeft = "0";
      }
      document.getElementById("mySidenav").style.display = "none";
    };

    return {
      closeNav,
    };
  },
};
</script>

<style scoped>
/* drawer  */
.route-wrapper {
  /* make this global */
  padding: 0 !important;
}

.sidenav ul {
  padding: 0;
}

.sidenav ul li {
  /* border-top: 1px solid lightgrey; */
  border-top: 1px solid lightgrey;
  display: flex;
  padding: 5px 5%;
}

.sidenav ul li i {
  padding: 20px;
}

.sidenav ul li i:hover,
.closebtn i:hover {
  color: hotpink;
}

.sidenav {
  height: 98%;
  width: 275px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(220, 220, 220);
  overflow-x: hidden;
  transition: 0.5s;
  display: none;  
  margin: 0.5% 0 0  0.5%;
  box-shadow: -3px -3px 3px 0 rgba(199, 198, 198, 0.767),
    3px 3px 3px 0 rgb(105, 103, 103, 0.5);
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 30px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

@media screen and (max-width: 600px) {
  .sidenav {
    padding-top: 15px;
    position: relative;
    width: 95%;
    margin: 2% 0 0 2.5%;
  }

  .sidenav a {
    display: contents;
  }

  .sidenav ul li {
    display: contents;
  }
}

.sidenav-header {
  color: rgba(235, 236, 240);
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 2px rgb(0, 0, 0);
}
</style>