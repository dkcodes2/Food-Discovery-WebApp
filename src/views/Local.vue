<template>
    <div style="text-align:center;">
        <NavBar/>
        <h2> Local Food </h2>
        <CuisineDiscoveryFeed/>
        <CuisineBar/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import CuisineDiscoveryFeed from '@/components/home-page-component/CuisineDiscoveryFeed.vue';
import CuisineBar from '@/components/home-page-component/CuisineBar.vue';

export default {
    name:"Local Food Page",

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