<template>
    <div v-if=user>
        <div class="navbar-container">
            <NavBar style = "align-items: center;"/>
        </div>
        <div class="cuisine-container">
            <CuisineBar style = "align-items: center;"/>
        </div>
            
        <h1>Korean Cuisine</h1>

        <div class="posts-container">
            <KoreanDiscoveryFeed :uid = user.uid type="self" />
        </div>
        
        <h5>Korean Cuisine</h5>
    </div>

    <div v-else> 
        <router-link :to ="{name: 'LogInPage'}"> Go Back to Login </router-link>   
    </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue';
import KoreanDiscoveryFeed from '../components/home-page-component/KoreanDiscoveryFeed.vue';
import CuisineBar from '../components/home-page-component/CuisineBar.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
    name:"Korean",

    components: {
        NavBar,
        KoreanDiscoveryFeed,
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
.navbar-container {
    max-width: 100%; /* Full width to center navbar */
    display: flex;
    justify-content: center; /* Centers navbar horizontally */
    padding: 10px 0; /* Add padding if needed */
    margin: 0 40px;
}

.posts-container {
    max-width: 100%; /* Take full width of the parent */
    display: flex;
    flex-direction: column;
    align-self: stretch; /* Stretch to match the parent's width */
    overflow: hidden;
    position: relative;
    height: auto; /* This will maintain the aspect ratio of the image */
    padding: 11px 0; /* Padding top and bottom, 0 left and right */
    margin-top: 10px;
    margin: 0 40px;
}

.cuisine-container{
    margin: 0 40px;
    margin-bottom: 20px
}

h1 {
    margin-top:0 40px;
    margin: 0 40px;
}

h5 {
    text-align: center;
}
</style>

