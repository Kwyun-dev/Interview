<template>
    <div id="home">
        <bookType></bookType>
        <router-view></router-view>
    </div>
</template>

<script>
import bookType from './book-type.vue'

export default {
    components: { bookType },
    data() {
        return {
        }
    },
}
</script>

<style scoped>

</style>