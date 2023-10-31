<!-- FollowingPage.vue -->
<template>
    <div>
      <userQueryDisplay />
    </div>
</template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import userQueryDisplay from "@/components/UserQueryDisplay.vue";
  
  export default {
    name: "UserQueryDisplayPage",
    components: {
      userQueryDisplay
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
  