<!-- FollowingPage.vue -->
<template>
    <div class="main" v-if="user" style = "text-align: center;">
        <navBar />
        <br>
        <FollowerDisplay :username = username />
    </div>
    <div v-else> 
        <router-link :to ="{name: 'LogInPage'}"> Go Back to Login </router-link>   
    </div>

    <!-- <p>
        Search String: {{  username }}
    </p> -->

</template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import navBar from '@/components/NavBar.vue';
  import FollowerDisplay from "@/components/FollowerDisplay.vue";
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { RouterLink } from 'vue-router';
  
  export default {
    name: "FollowerDisplayPage",
    components: {
    navBar,
    FollowerDisplay,
    RouterLink
},
        props: {
            username: String
        },
    
    data() {
        return {
            user: "",
        }
    },

    created() {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;

            }
        })
    }       

  };

  
  </script>
  
  <style>

  </style>
  