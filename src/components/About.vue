<template>
   <div>
    <p>Hi, {{ name }}</p>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from "vue-router"


export default defineComponent({
    name: "About",
 
    setup() {
        const route = useRoute()

        return {
            name: route.params.name
        }
    },
})
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
