<template>
  <div v-if = "user">
    <NavBar style = "align-items: center;"/>
    <div class="profile-page">
      <div class="header">
        <div class="user-profile-info">
            <!-- to pass username into UserProfileInfo later -->
            <UserProfileInfo :doc_id= username /> <br>
            <div class="column-4">
              <FllwButton :username = username />
            </div>
        </div>
    
        <div class="buttons">
            
          <div class="div">
   
            <div class="column-5">
                <ShareProfileButton/>
            </div>
          </div>
        </div>
      </div>
      <br>
      <br>
      <div class="div-4">
       <!-- <PostsContainer v-if=UID uid="aaaa" type="others"/> -->
       <PostsContainer v-if=UID :uid=UID type="others"/>
      </div>
    </div>
  </div>
  <div v-else> 
        <router-link :to ="{name: 'LogInPage'}"> Go Back to Login </router-link>   
    </div>
</template>
    
  
  <script>
  
  
  import UserProfileInfo from "@/components/profile-page-components/UserProfileInfo.vue";
  import PostsContainer from "@/components/profile-page-components/PostsContainer.vue";
  import FollowButton from "@/components/profile-page-components/FollowButton.vue";
  import ShareProfileButton from "@/components/profile-page-components/ShareProfileButton.vue";
  import FllwButton from "@/components/FllwButton.vue";
  import NavBar from "../components/NavBar.vue"
  
  import { getFirestore, collection, query, where, getDoc, doc } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
//   import { doc, updateDoc, deleteDoc } from "firebase/firestore";
  import firebaseApp from '@/firebase.js';

  const db = getFirestore(firebaseApp);

  export default {
      name: "OthersProfilePage",
      components: {
      UserProfileInfo,
      PostsContainer,
      FollowButton,
      ShareProfileButton,
      FllwButton,
      NavBar,
  },
      data() {
          return {
              viewedUser: {},  // the data of the user being viewed
              userPosts: [],    // the posts of the user being viewed
              UID: "",
              user: false,
          };
      },
      props: {
          username: String,
      },

      methods: {
        async setTargetUID(db, username) {
            console.log(username);
            const docRef = doc(db, "usernames", username)
            const docSnap = await getDoc(docRef);
            this.UID = docSnap.data().uid;
            // console.log("OthersProfilePage setTargetUID: " + this.UID)
        }
      },
  

      // Again, you'd use lifecycle hooks, methods, or the Composition API to fetch data, handle events, etc.

      created() {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                console.log("OthersprofilePage printing userID: " + this.user.uid)
            }
        })
        // console.log("UserProfilePage created") 
        this.setTargetUID(db, this.username);
      }

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
  width:800px;
}
.header {
  align-self: start;
  display: flex;
  width: 728px;
  max-width: 100%;
  /* flex-direction: column; */
  margin: 96px 0 0 73px;
  padding: 0 20px;
  gap: 20px;

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
margin-top:50px;
margin-left:50px;
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
