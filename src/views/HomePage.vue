<template>
    <div v-if=user>
        <div class="navbar-container">
            <NavBar style = "align-items: center;"/>
        </div>

        <div class="main">
            <div class="cuisine-container">
            <CuisineBar style = "align-items: center;"/>
            </div>
             <br/><br/>
            <h1>What are your friends eating</h1>

            <div class="posts-container">
                <DiscoveryFeed :uid = user.uid type="self" />
            </div>
            
            <h5>Discovery Page</h5>
        </div>

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
.navbar-container {
    max-width: 100%; /* Full width to center navbar */
    display: flex;
    justify-content: center; /* Centers navbar horizontally */
    padding: 10px 0; /* Add padding if needed */
    margin: 0 40px;
}

.main{
    margin: 0px 125px;
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
