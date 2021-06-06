<template>
  <h1>{{ msg }}</h1>

  <button @click="Add">count is: {{ count }}</button>

</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import { useStore } from '_vuex@4.0.1@vuex';
import { key } from '../store';
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Hello world',
    }
  },
  setup: () => {
    const store = useStore(key)
    const count = computed(() => store.state.count)
    return {
      count,
      Add: () => store.commit('incCount')
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
