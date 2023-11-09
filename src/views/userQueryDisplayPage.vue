<!-- FollowingPage.vue -->
<template>
    <div class="main" style = "text-align: center;">
        <navBar />
        <br>
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
.main{
    border: solid 1px blue
}
  </style>
  