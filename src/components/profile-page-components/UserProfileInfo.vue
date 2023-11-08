<template>
  <div class="user-profile-info">
    <div class="profile-pic-name-and-stats">
      <div class="div">
        <div class="column">
          <img
            :src="userImage"
            loading="lazy"
            :srcset="userImageSrcSet"
            class="profile-pic"
            alt="Profile Picture"
          />
          <div class="name">{{ userName }}
            <p v-if="username"> {{ username }}</p>
          </div>
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
      {{ userBio}}
    </div>
  </div>
</template>

<!-- <script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore"; 

 export default {
  name: "UserProfileInfo",

  data() {
        return {
            userId: null,
            username: null
        };
    },

  props: {
    uid: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      default: 'Username',
      required: true
    },
    userBio: {
      type: String,
      default: 'This user has no biography.'
    },
    userImage: {
      type: String,
      required: true
    },
    userImageSrcSet: {
      type: String,
      default: ''
    },
    userPosts: {
      type: [String, Number],
      default: '0'
    },
    userFollowing: {
      type: [String, Number],
      default: '0'
    }
  },
  data() {
    return {
      profileData: null,
      userId: ''
    };
  },
  created() {
    this.fetchUserProfileInfo();
  },
  methods: {
    async fetchUsername(uid) {
    console.log("Fetching username for UID:", uid); // Debugging line
    const db = getFirestore();
    const usernameDocRef = doc(db, "usernames", uid);
    try {
        const usernameDoc = await getDoc(usernameDocRef);

        if (usernameDoc.exists()) {
            this.username = usernameDoc.data().username;
            console.log("Username found:", this.username); // Debugging line
        } else {
            console.error("No such document for username with UID:", uid);
        }
    } catch (error) {
        console.error("Error fetching username:", error);
    }
  
  },
  created() {
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
  }

    async fetchUserProfileInfo() {
      try {
        const userProfileRef = doc(db, 'userProfiles', this.userId);
        const userProfileSnapshot = await getDocs(userProfileRef);
        if (userProfileSnapshot.exists()) {
          this.profileData = userProfileSnapshot.data();
        } else {
          console.error("No such profile!");
        }
      } catch (error) {
        console.error("Error fetching profile: ", error);
      }
    } 
}
</script>  -->

<!-- <script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, query, where, getDocs, collection } from "firebase/firestore";

export default {
  data() {
    return {
      username: "",
    };
  },
  created() {
    this.fetchUsername();
  },
  methods: {
    async fetchUsername() {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          // User is signed in, so we can retrieve the UID
          const uid = user.uid;
          // Now, let's fetch the username associated with this UID
          const db = getFirestore();
          const usernamesRef = collection(db, "usernames");
          const q = query(usernamesRef, where("uid", "==", uid));
          
          try {
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
              // Assuming that the username is stored under a field 'username'
              this.username = querySnapshot.docs[0].data().usernames;
              console.log("Username found:", this.username);
            } else {
              console.error("No matching username for the UID:", uid);
            }
          } catch (error) {
            console.error("Error fetching username:", error);
          }
        } else {
          // No user is signed in
          console.log("No user is signed in.");
        }
      });
    },
  },
};
</script> -->

<script>
import { getAuth } from "firebase/auth";
import { getFirestore, query, where, collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      username: null // This will hold the username once fetched
    }
  },
  methods: {
    async fetchUsername() {
      // Get the Firebase Auth instance and current user
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        // Get the Firestore instance
        const db = getFirestore();

        // Query the 'usernames' collection for a document with a 'uid' field matching the current user's uid
        
        const usernamesRef = collection(db, "usernames");
        const q = query(usernamesRef, where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);

        // If we find the document, set the username
        if (!querySnapshot.empty) {
          // Assuming there's only one document with this uid
          const userDoc = querySnapshot.docs[0];
          this.username = userDoc.id; // The document's ID is the username
        } else {
          console.error('No such document for username!');
        }
      }
      localStorage.setItem('username', this.username);
    }
  },
  created() {
    // Fetch the username when the component is created
    this.fetchUsername();
  }
}
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