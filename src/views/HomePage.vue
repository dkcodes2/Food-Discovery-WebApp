<template>
    <div id="main" v-if=user style="text-align: center;">
        <NavBar/>
        <h2>What are your friends eating</h2>
        <DiscoveryFeed :uid = user.uid type="self" />
        <CuisineBar/>
        <h5>Discovery Page</h5>
    </div>
    <div v-else> 
        <router-link :to ="{name: 'LogInPage'}"> Go Back to Login </router-link>   
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import DiscoveryFeed from '../components/home-page-component/DiscoveryFeed.vue';
import CuisineBar from '../components/home-page-component/CuisineBar.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
    name:"HomePage",

    components: {
        NavBar,
        DiscoveryFeed,
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
