<template>
    <div v-if=user style="text-align: center;">
        <NavBar/>
        <h2>Local Cuisine</h2>
        <LocalDiscoveryFeed :uid = user.uid type="self" />
        <CuisineBar/>
        <h5>Local Cuisine</h5>
    </div>
    <div v-else> 
        <router-link :to ="{name: 'LogInPage'}"> Go Back to Login </router-link>   
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import LocalDiscoveryFeed from '../components/home-page-component/LocalDiscoveryFeed.vue';
import CuisineBar from '../components/home-page-component/CuisineBar.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
    name:"Local",

    components: {
        NavBar,
        LocalDiscoveryFeed,
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
