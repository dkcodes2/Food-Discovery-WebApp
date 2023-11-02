<!-- FollowingPage.vue -->
<template>
    <div>
        <navBar />
        <userQueryDisplay :searchText = searchString />
    </div>

    <p>
        Search String: {{  searchString }}
    </p>

</template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import navBar from '@/components/NavBar.vue';
  import userQueryDisplay from "@/components/UserQueryDisplay.vue";
  
  export default {
    name: "UserQueryDisplayPage",
    components: {
        navBar,
        userQueryDisplay
    },
        props: {
            searchString: String
        },
    
        setup() {
      onMounted(async () => {
      });
  
      return {

      };
    }
  };
  </script>
  
  <style>

  </style>
  