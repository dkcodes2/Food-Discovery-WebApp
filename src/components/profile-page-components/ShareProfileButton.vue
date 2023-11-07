<template>
  <!-- Bind the @click event to the shareProfile method -->
  <div class="share-profile-button" @click="shareProfile">
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4686fa12-300e-435d-9064-77bc6512f227?"
    class="img-3"
  />
  </div>
</template>

<script>
export default {
  name: 'ShareProfileButton',
  methods: {
    shareProfile() {
      // Implement share logic. For example, using the Web Share API or other services.
      console.log("Sharing profile...");  // Placeholder logic
    }
  }
}
</script>

<style scoped>

.share-profile-button {
    color: rgba(0, 0, 0, 0.97);
    text-align: center;
    align-self: center;
    white-space: nowrap;
    font: 400 30px Inter, sans-serif;
  }
  .share-profile-button:hover {
      transform: scale(1.1);
  }
</style>