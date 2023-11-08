<template>
    <div class="posts-container">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/50e86733-862d-42c9-97ab-7cfb1e83268c?"
        class="bg-posts"
      />
      <div class="post-item">
        <PostItem />
      </div>
      <div class="post-item-2">
        <PostItem />
      </div>
    </div>
</template>
  
  
  
  <style scoped>
  .posts-container {
    display: flex;
    flex-direction: column;
    fill: rgba(157, 157, 157, 0.33);
    overflow: hidden;
    align-self: start;
    position: relative;
    display: flex;
    min-height: 1272px;
    margin-top: 10px;
    width: 100%;
    padding: 11px 70px 386px 65px;
    padding-left: 0%;
  }
  @media (max-width: 991px) {
    .div {
      max-width: 100%;
      padding: 0 20px 100px;
    }
  }
  .bg-posts {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .post-item {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .post-item-2 {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 31px;
  }
  </style>
  <script>
  import PostItem from "@/components/profile-page-components/PostItem.vue";
  
  export default {
    name: "PostsContainer",
    components: {
      PostItem
    },
    props: {
      posts: Array
    }
  }
  </script>
  
  <!-- Add your styles here -->
