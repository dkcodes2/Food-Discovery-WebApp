<template>
  <button @click="toggleFollow" :class="{ 'following': isFollowing }">
    {{ isFollowing ? 'Unfollow' : 'Follow' }}
  </button>
</template>

<script>
export default {
  name: 'FollowButton',
  data() {
    return {
      isFollowing: false  // Example state (can be fetched from backend)
    }
  },
  methods: {
    toggleFollow() {
      this.isFollowing = !this.isFollowing;
      // Add logic to communicate with the backend here
    }
  }
}
</script>

<style scoped>
button {
/* Basic styling */
padding: 10px 20px;
border: none;
cursor: pointer;

/* Stretch to fill the container */
display: block;
width: 100%; /* Makes the button fill the width of its parent */

/* Styling for the 'following' state */
background-color: aqua; /* Dark background when following */
color: black;
}

button.following {
/* Perhaps a different background color to indicate 'following' state */
background-color: blue; /* Change as needed */
color: white;
}
</style>
