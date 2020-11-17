<template>
  <!-- <div class="card">
    <div class="card-header">
      <h1>{{ user.name }}</h1>
    </div>
    <div class="card-body">
      <ul>
        <li>Email: {{ user.email }}</li>
        <li>Phone: {{ user.phone }}</li>
      </ul>
    </div>
  </div> -->
  <div class="card">
    <div class="card-header">
      <h1>{{ user.header }}</h1>
    </div>
    <div class="card-body">
      <ul v-for="(data, index) in user.body" :key="index">
        <li>
          {{data[0]}}: {{ data[1] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Card",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>

.card {
  width: 20%;
  background: rgb(220, 220, 220);
  border: 1px solid #ccc;
  border-radius: 5%;
  margin-bottom: 50px;
  transition: 0.3s;
  box-shadow: -3px -3px 3px 0 rgba(230, 230, 230, 0.767),
        3px 3px 3px 0 rgba(148, 145, 145, 0.5);
  overflow: hidden;
}

.card-header {
  text-align: center;
  padding: 5px 0px;
  background: #555;
  color: #f2f2f2;
  box-shadow: -3px -3px 3px 0 rgba(236, 233, 233, 0.767),
        3px 3px 3px 0 rgba(145, 137, 137, 0.5);
  margin-top: 5%;
  margin-left: 5%;
  width: 90%;
}

.card-body {
  padding: 30px 20px;
  text-align: center;
  font-size: 18px;
}


.card:hover {
  transform: scale(1.2);
  box-shadow: -40px -40px -40px 0px rgb(255, 255, 255, 1),
       40px 40px 40px 0px rgb(145, 137, 137);
}

@media screen and (max-width: 1000px) {
  .card {
    width: 40%;
  }
}

@media screen and (max-width: 620px) {
  .card {
    width: 80%;
  }
}

ul{
  list-style-type: none;
  padding-left: 0; 
  overflow-wrap: break-word; 
}

ul li{
  padding: 5px 0px;
}
</style>