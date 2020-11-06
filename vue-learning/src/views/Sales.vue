<template>
  <div class="Sales">
    <HelloWorld msg="Sales" />

    <div class="container">
      <Table :sales="sales ? sales : ''" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Table from "@/components/Table.vue";

import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "Sales",
  components: {
    HelloWorld,
    Table,
  },
  setup() {
    const store = useStore();
    const sales = computed(() => store.state.Sales.sales);

    onMounted(() => {
      if (!sales.value.length) store.dispatch("Sales/loadSales");
    });

    return {
      sales,
    };
  },
};
</script>

<style>
</style>