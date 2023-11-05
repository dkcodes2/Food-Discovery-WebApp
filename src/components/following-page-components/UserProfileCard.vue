<!-- UserProfileCard.vue -->
<template>
    <div class="profile-card">
      <img :src="user.profileImage" alt="User Profile" />
      <h2>profile 1</h2>
      <h2>profile 2</h2>
      <!-- Additional details and options like unfollow or send message -->
    </div>
</template>
  <!-- UserProfileCard.vue -->

<script>
export default {
  name: "UserProfileCard",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
/* some CSS styles for profile card */
</style>
