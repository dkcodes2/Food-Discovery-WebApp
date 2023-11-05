<template>
    <div class="others-profile-page">
        <UserProfileInfo :user="viewedUser" />
        
        <div class="actions">
            <FollowButton :userId="viewedUser.id" />
        </div>

        <PostsContainer :posts="userPosts" />
    </div>
</template>

<script>
import UserProfileInfo from "@/components/profile-page-components/UserProfileInfo.vue";
import PostsContainer from "@/components/profile-page-components/PostsContainer.vue";
//import FoodListsContainer from "@/components/profile-page-components/FoodListsContainer.vue";
import FollowButton from "@/components/profile-page-components/FollowButton.vue";
import ShareProfileButton from "@/components/profile-page-components/ShareProfileButton.vue";
//import TabSelector from "@/components/profile-page-components/TabSelector.vue";

export default {
    name: "OthersProfilePage",
    components: {
        UserProfileInfo,
        PostsContainer,
        FollowButton,
        ShareProfileButton,
        //TabSelector
    },
    data() {
        return {
            viewedUser: {},  // the data of the user being viewed
            userPosts: []    // the posts of the user being viewed
        };
    },
    // Again, you'd use lifecycle hooks, methods, or the Composition API to fetch data, handle events, etc.
}
</script>

<style scoped>
/* Styles specific to the OthersProfilePage. */
</style>
