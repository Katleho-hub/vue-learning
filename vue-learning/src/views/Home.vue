<template>
  <div class="home">
    <HelloWorld msg="Home" />
    <div class="container">
      <div class="row">
        <Card
          v-for="(item, index) in state.cards"
          :key="index"
          :user="item ? item : ''"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/Card.vue";
import { reactive } from "vue";

export default {
  name: "Home",
  setup() {
    const state = reactive({
      cards: [
        {
          header: "test",
          body: [
            ["one", 1],
            ["two", 2],
          ],
        },
        {
          header: "test2",
          body: [
            ["three", 3],
            ["four", 4],
          ],
        },
        {
          header: "test3",
          body: [
            ["five", 5],
            ["six", 6],
          ],
        },
      ],
    });

    return {
      state,
    };
  },
  components: {
    HelloWorld,
    Card,
  },
};
</script>


<style scoped> /* change this|| make it global */
/* cards */

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