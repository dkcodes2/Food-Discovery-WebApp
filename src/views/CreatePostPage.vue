<template>
    <div>
        <CreatePost />
    </div>
</template>

<script>
import CreatePost from '../components/CreatePost.vue'
import NavBar from '@/components/NavBar.vue';

export default {
    name: "CreatePostPage",
    components: {
        CreatePost
    }
}
</script>