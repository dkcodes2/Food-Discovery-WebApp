<!-- FollowingPage.vue -->
<template>
    <div class="following-page">
      <h1>Your Followings</h1>
      <UserProfileList :users="followings" />
    </div>
</template>
  
  <script>
  //import { ref, onMounted } from 'vue';
  //import { db } from '@/firebase.js'; // Assuming you have set up Firebase as described previously
  import UserProfileList from "@/components/following-page-components/UserProfileList.vue";
  
  export default {
    name: "FollowingPage",
    components: {
      UserProfileList
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
  