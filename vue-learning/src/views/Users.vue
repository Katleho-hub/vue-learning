<template>
  <div class="Users">
    <HelloWorld msg="Users" />

    <div class="container">
      <div class="row">
        <Card v-for="user in users" :key="user.id" :user="user ? user : ''" />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/Card.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "Users",
  components: {
    HelloWorld,
    Card,
  },
  setup() {
    const store = useStore();
    const users = computed(() => store.state.Users.users);

    onMounted(() => {
      // lifecycle hook
      store.dispatch("Users/loadUsers"); // reference the module
    });

    return {
      users,
    };
  },
};
</script>

<style scoped>
/* cards */
.container {
  width: 90%;
  margin: 50px auto;
  padding: 0;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
}

@media screen and (max-width: 620px) {
  .container {
    width: 100%;
  }
}
</style>