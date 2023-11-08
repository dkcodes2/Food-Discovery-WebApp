<template>
  <!-- Bind the @click event to the copyProfileUrlToClipboard method -->
  <button class="share-profile-button" @click="copyProfileUrlToClipboard">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4686fa12-300e-435d-9064-77bc6512f227?"
      class="img-3"
      alt="Share Profile"
    />
  </button>
</template>

<script>
export default {
  name: 'ShareProfileButton',
  methods: {
    copyProfileUrlToClipboard() {
      const profileUrl = window.location.href; // This gets the current URL of the profile page
      navigator.clipboard.writeText(profileUrl).then(() => {
        // Display an alert to the user
        alert('Profile URL copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy:', err);
        // Fallback for when the clipboard API fails
        alert('Failed to copy URL');
      });
    }
  }
}
</script>

<style scoped>
.share-profile-button {
  /* Styles for the button itself */
  padding: 0px;
  display: flex;
  align-items:center;
  justify-items: center;
  border: none; /* Remove default border */
  background: none; /* Remove default background */
  cursor: pointer; /* Change cursor to pointer to indicate button functionality */
  outline: none; /* Remove default focus outline */
  transition: transform 0.3s; /* Transition for the hover effect */
}

.share-profile-button:hover {
  transform: scale(1.1); /* Scale the button for a hover effect */
}

.img-3 {
  /* Styles for the image */
  width: 111px; /* Set a width for the image */
  height: 64; /* Set a height for the image */
}
</style>
