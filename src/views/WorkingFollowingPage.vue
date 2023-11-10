<!-- FollowingPage.vue -->
<template>
    <div class="main" style = "text-align: center;">
        <navBar />
        <br>
        <FollowerDisplay :username = username />
    </div>

    <p>
        Search String: {{  username }}
    </p>

</template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import navBar from '@/components/NavBar.vue';
  import FollowerDisplay from "@/components/FollowerDisplay.vue";
  
  export default {
    name: "FollowerDisplayPage",
    components: {
        navBar,
        FollowerDisplay
    },
        props: {
            username: String
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
  