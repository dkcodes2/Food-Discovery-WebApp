<template>
    <div style="text-align: center;">
        <NavBar/>
        <h2>What are your friends eating</h2>
        <DiscoveryFeed/>
        <CuisineBar/>
        <h5>copyright@cpp-2021</h5>
    </div>
</template>

<script>
import NavBar from '@/components/home-page-component/NavBar.vue';
import DiscoveryFeed from '../components/home-page-component/DiscoveryFeed.vue';
import CuisineBar from '../components/home-page-component/CuisineBar.vue';

export default {
    name:"HomePage",

    components: {
        NavBar,
        DiscoveryFeed,
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

h5 {
    text-align: center;
}
</style>
