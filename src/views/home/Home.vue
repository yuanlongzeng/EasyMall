<template>
  <div class="box"> {{ hello }} </div>
</template>

<script lang="ts">
  import {
    onMounted,
    ref,
    reactive,
    SetupContext,
    getCurrentInstance,
  } from "vue";
  interface Data {
    [key: string]: unknown;
  }

  export default {
    setup(props: Data, context: SetupContext) {
      const { proxy } = getCurrentInstance() as any,
          foo = ref(0);
      return { hello: 'Hello Wold' }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    color: #60d659;
  }
</style>
