<template>
  <div>
    <h1>{{ msg }}</h1>

    <van-button type="primary" @click="Add">count is: {{ count }}</van-button>
  </div>
</template>

<script lang="ts">
  import { ref, defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'
  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: 'Hello world'
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
  div {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0.5rem;
    font-weight: bold;
  }
</style>
