<template>
  <div class="user-profile-info">
    <div class="profile-pic-name-and-stats">
      <div class="div">
        <div class="column">
          <img
            :src="userImage"
            loading="lazy"
            class="profile-pic"
            alt="Profile Picture"
          />
          <!-- <div class="name">{{ username }}</div> -->
          <p>Welcome, {{ username }}!</p>
        </div>
        <div class="column-2">
          <div class="posts">Posts</div>
          <div class="no-of-posts">{{  userPosts }}</div>
        </div>
        <div class="column-3">
          <div class="div-2">Following</div>
          <div class="no-of-following">{{ userFollowing }}</div>
        </div>
      </div>
    </div>
    <div class="biography">
      {{ userBio }}
    </div>
  </div>
</template>

<script>
import drigmo2 from "../../firebase.js";
import {getFirestore} from "firebase/firestore";
import {collection, query, where, getDoc, doc, deleteDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const db = getFirestore(drigmo2);

export default {
  name: "UserProfileInfo",
  data() {
    return {
      username: '',
      userId: '',
      // useremail:'',
      // username: 'nameless',
      // userImage: 'profile picture',
      // userBio: 'this user has no bio yet',
      // userPosts: 0,
      // userFollowing: 0,
    }
  },
  async created() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, so fetch the username
                this.userId = user.uid;
                this.fetchUsername(this.userId);
            } else {
                // No user is signed in
                this.username = "Guest";
            }
        });
    },
  
  

  methods: {
    async fetchUsername() {
            const usernameDocRef = doc(db, "usernames", this.uid);
            const usernameDoc = await getDoc(usernameDocRef);

            if (usernameDoc.exists()) {
                const usernameData = usernameDoc.data();
                // Assuming the username is stored under a field called 'username'
                this.username = usernameData.username;
            } else {
                console.error("No such document!");
            }
        }
    },

    
//     async fetchUserData(uid) {
//       try {

//         //const docID = "CS06gepGgze9cpFwg4Ay";
//         const docRef = doc(db, "usernames", this.uid);
//         let docSnap = await getDoc(docRef);
//         console.log(docSnap);
//         if (docSnap.exists()) {
//           let userData = docSnap.data();
//           this.uid = userData.uid;
//           let username = userData.username;
//           let userImage = userData.userImage;
//           let userBio = userData.userBio;
//           let userPosts = userData.userPosts;
//           let userFollowing = userData.userFollowing;
//         } else {
//           console.log("No such profile!");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     },
//   },
// watch: {
//   // Whenever docID changes, this function will run
//   docID(newVal, oldVal) {
//     if (newVal !== oldVal && newVal) {
//       this.fetchUserData();
//     }
//   }
// },

};
</script>


<style scoped>
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
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 46%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.profile-pic {
  aspect-ratio: 1.32;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  align-self: stretch;
}
.name {
  color: rgba(0, 0, 0, 0.97);
  align-self: stretch;
  margin-top: 20px;
  font: 700 30px Inter, sans-serif;
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.posts {
  color: rgba(0, 0, 0, 0.97);
  text-align: center;
  align-self: stretch;
  font: 700 30px Inter, sans-serif;
}
.no-of-posts {
  color: rgba(0, 0, 0, 0.97);
  text-align: center;
  align-self: center;
  margin-top: 41px;
  white-space: nowrap;
  font: 300 30px Inter, sans-serif;
}
@media (max-width: 991px) {
  .no-of-posts {
    margin-top: 40px;
    white-space: initial;
  }
}
.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 29%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}
.div-2 {
  color: rgba(0, 0, 0, 0.97);
  text-align: center;
  align-self: stretch;
  font: 700 30px Inter, sans-serif;
}
.no-of-following {
  color: rgba(0, 0, 0, 0.97);
  text-align: center;
  align-self: center;
  margin-top: 35px;
  font: 300 30px Inter, sans-serif;
}
.biography {
  color: rgba(0, 0, 0, 0.97);
  align-self: stretch;
  margin: 22px -20px 0 0;
  font: 300 30px Inter, sans-serif;
}
@media (max-width: 991px) {
  .biography {
    max-width: 100%;
  }
}
</style>



