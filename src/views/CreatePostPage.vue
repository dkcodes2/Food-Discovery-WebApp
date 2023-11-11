<template>
    <div>
      <!-- In your parent component template -->  
      <CreatePost :postId="postId" />

    </div>
</template>

<script>
import CreatePost from '../components/CreatePost.vue'

export default {
    name: "CreatePostPage",
    components: {
        CreatePost
    },
    props: {
        postId: String
    },
    data() {
        return {
            currentPostId: '' // Initialize with an empty string or a default value
        };
    },
    mounted() {
        // This will log the postId when the component is mounted
        console.log('Received postId:', this.postId);
        this.currentPostId = this.postId; // Set the currentPostId to the received postId
    },
}
</script>