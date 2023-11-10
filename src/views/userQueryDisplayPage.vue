<!-- FollowingPage.vue -->
<template>
    <div class="main" v-if="user" style = "text-align: center;">
    <!-- <div class="main" style = "text-align: center;"> -->
        <navBar />
        <br> 
        <userQueryDisplay  :searchText = searchString   />
        <!-- <userQueryDisplay :searchText = searchString /> -->
    </div>
    <div v-else> 
        <router-link :to ="{name: 'LogInPage'}"> Go Back to Login </router-link>   
    </div>
    
    <p>
        <!-- Search String: {{  searchString }} -->
    </p>

</template>
  
  <script>
  import { getAuth, onAuthStateChanged } from 'firebase/auth';

  import { ref, onMounted } from 'vue';
  import navBar from '@/components/NavBar.vue';
  import userQueryDisplay from "@/components/UserQueryDisplay.vue";
  
  export default {
    name: "UserQueryDisplayPage",
    components: {
        navBar,
        userQueryDisplay,
        
    },
    data () {
        return {
            user: false,
        }
    },
    props: {
        searchString: String
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
  