<template>
    <div v-if=user style="text-align: center;">
        <NavBar/>
        <h2>Western Cuisine</h2>
        <WesternDiscoveryFeed :uid = user.uid type="self" />
        <CuisineBar/>
        <h5>Western Cuisine</h5>
    </div>
    <div v-else> 
        <router-link :to ="{name: 'LogInPage'}"> Go Back to Login </router-link>   
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import WesternDiscoveryFeed from '../components/home-page-component/WesternDiscoveryFeed.vue';
import CuisineBar from '../components/home-page-component/CuisineBar.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
    name:"Western",

    components: {
        NavBar,
        WesternDiscoveryFeed,
        CuisineBar
    },

    data() {
        return {
            docID: "self",
            user: false,
        };
    },
    created() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                console.log("Discovery Page printing userID: " + this.user.uid)
            }
        })
    }
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
