<!-- UserProfileList.vue -->
<template>
<<<<<<< HEAD
    <div class="profile-list">
      <UserProfileCard v-for="user in users" :key="user.id" :user="user" />
      This is the full list of profiles being followed
    </div>
</template>
  
  <script>
  import UserProfileCard from "@/components/following-page-components/UserProfileCard.vue";
  
  export default {
    name: "UserProfileList",
    components: {
      UserProfileCard
    },
    props: {
      users: {
        type: Array,
        default: () => []
      }
=======
  <div class="profile-list">
    <UserProfileCard v-for="user in users" :key="user.id" :user="user" />
    This is the full list of profiles being followed
  </div>
</template>

<script>
import UserProfileCard from "@/components/following-page-components/UserProfileCard.vue";

export default {
  name: "UserProfileList",
  components: {
    UserProfileCard
  },
  props: {
    users: {
      type: Array,
      default: () => []
>>>>>>> dbccb2754b885711c224003f679f0262d170981d
    }
  }
};
</script>

<style>
/* some CSS styles for profile list */
</style>