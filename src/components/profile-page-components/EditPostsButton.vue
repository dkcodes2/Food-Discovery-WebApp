<template>
    <div class="edit-posts-button">Edit Posts</div>
 </template>
   
 <script>
   export default {
     name: 'EditPostsButton',
     data() {
       return {
         
       }
     },
   }
 </script>
   
 <style scoped>
   .edit-posts-button {
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
   .edit-posts-button {
     max-width: 100%;
     padding: 0 20px;
   }
 }
 
   .edit-posts-button:hover {
       transform: scale(1.1);
   }
 </style>