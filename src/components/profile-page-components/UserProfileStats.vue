<template>
    <div class="stats-container">
  
      <div class="stat-item" v-for="(item, index) in stats" :key="index">
        <div class="stat-title">{{ item.title }}</div>
        <div class="stat-value">{{ item.value }}</div>
      </div>
  
    </div>
</template>
  
<script>
  export default {
    name: "UserProfileStats",
    data() {
      return {
      
      }
    }
  }
</script>
  
<style scoped>
  .stats-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 98px;
    min-width: 652px;
  }
  
  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    min-height: 98px;
    gap: 28px;
  }
  
  .stat-title, .stat-value {
    text-align: center;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: 0;
  }
  
  .stat-title {
    font-size: 30px;
    font-weight: bold;
  }
  
  .stat-value {
    font-size: 24px;
    transition: all 0.2s ease;
  }
  
  .stat-value:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  </style>
  