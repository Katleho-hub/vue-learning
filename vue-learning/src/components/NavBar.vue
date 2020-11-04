<template>
<!-- Top navigation -->
<div class="topnav">

  <!-- Left-aligned links (default) -->
  <router-link to="/" class="route-wrapper">
    <a><i class="fa fa-home"></i></a>
  </router-link>

  <!-- Centered link -->
  <div class="topnav-centered">
    <a>{{pageName}}</a>
  </div>
  
  <!-- Right-aligned links -->
  <div class="topnav-right">
    <a onclick="openNav()"><i class="fa fa-bars"></i></a>
  </div>  
</div>
</template>

<script>
export default {
    name: "NavBar",
    props: {
        pageName: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.route-wrapper {
    padding: 0 !important;
}

.topnav {
  position: relative;
  overflow: hidden;
  background-color: rgb(220,220,220);
}

.topnav a {
  float: left;
  color: #2c3e50;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  font-size: 36px;
}

.topnav a:hover {
  background-color: rgb(220,220,220);
  color: #f1f1f1;
}

.topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.topnav-right {
  float: right;
}

.topnav-centered a:hover{
  background-color: rgb(220,220,220);
  color: #2c3e50;
  cursor: context-menu;
}

@media screen and (max-width: 600px) {
  .topnav a, .topnav-right {
    float: none;
    display: block;
    border-top: 1px solid lightgrey;
  }
  
  .topnav-centered a {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
  }
}
</style>