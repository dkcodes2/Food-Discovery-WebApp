<template>
    <div style="text-align:center;">
        <NavBar/>
        <h2> Others </h2>
        <CuisineDiscoveryFeed/>
        <CuisineBar/>
    </div>
</template>

<script>
import NavBar from '@/components/home-page-component/NavBar.vue';
import CuisineDiscoveryFeed from '@/components/home-page-component/CuisineDiscoveryFeed.vue';
import CuisineBar from '@/components/home-page-component/CuisineBar.vue';

export default {
    name:"Others",

    components: {
        NavBar,
        CuisineDiscoveryFeed,
        CuisineBar
    },

    data() {
        return {
            user:false,
        }
    },
}
</script>

<style scoped>
h2 {
    text-align: left;
}
</style>