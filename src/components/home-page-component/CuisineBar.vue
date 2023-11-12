<template>
  <div class="cuisine-bar">
      <router-link to="/Japanese" class="cuisine-bar-button">Japanese</router-link>
      <router-link to="/Western" class="cuisine-bar-button">Western</router-link>
      <router-link to="/Korean" class="cuisine-bar-button">Korean</router-link>
      <router-link to="/Local" class="cuisine-bar-button">Local</router-link>
      <router-link to="/Others" class="cuisine-bar-button">Others</router-link>
  </div>
</template>

<script>
export default {
  name: 'CuisineBar',

  data() {
      return {
          user:false,
      }
  },
}
</script>

<style>
.cuisine-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  width:inherit;
}

.cuisine-bar-button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 5px;
  color: #333;
}

.cuisine-bar-button:hover {
  background-color: #007bff;
  color: #fff;
}

.cuisine-bar-button.active {
  background-color: #007bff;
  color: #fff;
}

.router-link-active {
  color: #007bff;
}
</style>
