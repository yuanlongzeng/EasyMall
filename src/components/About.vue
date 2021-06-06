<template>
   <div>
    <p>Hi, {{ name }}</p>
   </div>
</template>

<script lang="ts">
import { Toast } from 'vant'
import { defineComponent } from 'vue'
import { useRoute } from "vue-router"


export default defineComponent({
    name: "About",
 
    setup() {
        const route = useRoute()
        const name = route.params.name
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
            duration: 1000,
            });
        return {
            name
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
