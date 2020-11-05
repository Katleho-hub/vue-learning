<template>
  <div class="Demo">
    <HelloWorld msg="Demo"/>

    <div>
      {{users}}
    </div>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    name:"Demo",
    components: {
        HelloWorld
    },
    setup(){
      const store =  useStore();
      const users = computed(() => store.state.Users.users);

      onMounted(() => { // lifecycle hook
        // store.dispatch('loadUsers'); // move this to appropriate page
        store.dispatch('Users/loadUsers'); // reference the module
      })


      return{
        users
      }
    }
}
</script>

<style>

</style>