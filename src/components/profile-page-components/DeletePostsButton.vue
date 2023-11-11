<template>
    <div class="delete-posts-button">Delete Post(s)</div>
</template>
   
 <script>
   export default {
     name: 'DeletePostsButton',
     data() {
       return {
         
       }
     },
   }
 </script>
   
 <style scoped>
   .delete-posts-button {
   justify-content: center;
   align-items: center;
   border-radius: 30px;
   mix-blend-mode: hard-light;
   background-color: #149bfc;
   align-self: stretch;
   display: flex;
   flex-direction: column;
   padding: 24px 80px;
   font: 400 30px Inter, sans-serif;
 }
 @media (max-width: 991px) {
   .delete-posts-button {
     max-width: 100%;
     padding: 0 20px;
   }
 }
 
   .delete-posts-button:hover {
       transform: scale(1.1);
   }
 </style>
