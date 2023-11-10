<!-- FollowingPage.vue -->
<template>
    <div class="main" style = "text-align: center;">
        <navBar />
        <br> 
        <userQueryDisplay  :searchText = searchString  />
        <!-- <userQueryDisplay :searchText = searchString /> -->
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
        user:false
    },
    props: {
        searchString: String
    },
    
    created() {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                console.log("aa:"+user.uid)
                // this.getFollowingField(this.user.uid).then( (userObj) => {
                //     let data = userObj.data()
 
                //     this.myUsername = userObj.id
                //     // console.log(this.myUsername)

                // })
            }
        })
    }
    
  };
  </script>
  
  <style>

  </style>
  