<!-- FollowingPage.vue -->
<template>
  <div v-if="user" class="following-page">
    <h1>Your Followings</h1>
    <UserProfileList :users="followings" />
  </div>
  <div v-else> 
        <router-link :to ="{name: 'LogInPage'}"> Go Back to Login </router-link>   
    </div>
</template>

<script>
//import { ref, onMounted } from 'vue';
//import { db } from '@/firebase.js'; // Assuming you have set up Firebase as described previously
import UserProfileList from "@/components/following-page-components/UserProfileList.vue";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  name: "FollowingPage",
  components: {
    UserProfileList
  },
  data() {
          return {
              user: false,
          };
      },
    created() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            this.user = user;
            
        }
    })
    // console.log("UserProfilePage created") 

    },   
  setup() {
    const followings = ref([]);

    onMounted(async () => {
      // Replace 'followings' with your collection name
      const querySnapshot = await db.collection('followings').get();
      followings.value = querySnapshot.docs.map(doc => doc.data());
    });

    return {
      followings
    };
  }
};
</script>

<style>
/* some CSS styles for following page */
</style>
