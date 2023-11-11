<template>
  <div>
  <NavBar style = "align-items: center;"/>
    <div class="profile-page">
      <div class="header">
        <div class="user-profile-info">
          <UserProfileInfo :doc-id="docID" />
        </div>
        <div class="buttons">
          <div class="div">
            <div class="column-4">
            </div>
            <div class="column-5">
                <ShareProfileButton/>
            </div>
          </div>
        </div>
      </div>
      <div class="div-4">
       <PostsContainer />
      </div>
    </div>
  </div>
</template>

  
<script>
import NavBar from "../components/NavBar.vue"
import UserProfileInfo from "@/components/profile-page-components/UserProfileInfo.vue";
import ShareProfileButton from "@/components/profile-page-components/ShareProfileButton.vue";
import PostsContainer from "@/components/profile-page-components/PostsContainer.vue";


export default {
    name: "OwnProfilePage",
    components: {
      NavBar,
      UserProfileInfo,
      ShareProfileButton,
      PostsContainer,

    },
    data() {
        return {
          docID: this.$route.params.docID || 'EMAILTEST@EMAIL.COM',

        };
    },
    // Again, you'd use lifecycle hooks, methods, or the Composition API to fetch data, handle events, etc.
}
</script>

  
  
<style scoped>
.profile-page {
  /* border: 1px solid #000; */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* Assuming .profile-page needs to be centered or specific width */
  width: 100%; /* or set to a specific width if necessary */
  align-items: center; /* Centers the child elements horizontally */
  margin: auto; /* If you want to center the profile-page in the viewport */
}
.header {
  align-self: start;
  display: flex;
  width: 728px;
  max-width: 100%;
  flex-direction: column;
  margin: 96px 0 0 73px;
  padding: 0 20px;
}
@media (max-width: 991px) {
  .header {
    margin-top: 40px;
  }
}
.user-profile-info {
  display: flex;
  flex-direction: column;
}
.profile-pic-name-and-stats {
  align-self: stretch;
  margin-right: -20px;
}
@media (max-width: 991px) {
  .profile-pic-name-and-stats {
    max-width: 100%;
  }
}
.div {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.buttons {
align-self: stretch;
padding-right: 38px;
margin: 23px -20px 0 0;
}
@media (max-width: 991px) {
.buttons {
  max-width: 100%;
  padding-right: 20px;
}
}

.column-4 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 83%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-4 {
    width: 100%;
  }
}

.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 17%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}

.div-4 {
  align-self: stretch; /* Stretch to match the parent's width */
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 1272px; /* Adjust as necessary */
  width: 100%; /* Take full width of the parent */
  padding: 11px 0; /* Padding top and bottom, 0 left and right */
  margin-top: 10px;
}

@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
    padding: 0 20px 100px;
  }
}
.div-5 {
  position: relative;
  align-self: stretch;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
  }
}

.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 17%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}

</style>
