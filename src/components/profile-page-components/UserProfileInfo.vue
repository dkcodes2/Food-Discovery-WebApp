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
      {{ userBio }}
    </div>
  </div>
</template>


<script>
import { getAuth } from "firebase/auth";
import { getFirestore, query, where, collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      userName: 'no username',
      userImage: null,
      userPosts: 0,
      userFollowing: 0,
      userBio: 'this user has no bio'
    };
  },
  methods: {
    async fetchProfileData() {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          console.log('No user is currently logged in.');
          return;
        }
        
        console.log('Current user:', user); 
        const db = getFirestore();
        const usernamesRef = collection(db, "usernames");
        const q = query(usernamesRef, where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          console.log('No documents found for the user in Firestore.');
          return;
        }

        const userData = querySnapshot.docs[0].data();
        const docId = querySnapshot.docs[0].id;
        
        // Set data properties
        this.userName = docId || 'No name';
        this.userImage = userData.imageUrl;
        this.userPosts = userData.posts ? userData.posts.length : 0;
        this.userFollowing = userData.following ? userData.following.length : 0;
        this.userBio = userData.bio || 'No bio set';
        
        // Update local storage with the new data
        this.updateLocalStorage();
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    },
    updateLocalStorage() {
      const profileData = {
        userName: this.userName,
        userImage: this.userImage,
        userPosts: this.userPosts,
        userFollowing: this.userFollowing,
        userBio: this.userBio
      };
      localStorage.setItem('profileData', JSON.stringify(profileData));
    }
  },
  created() {
    const storedData = localStorage.getItem('profileData');
    if (storedData) {
      const profileData = JSON.parse(storedData);
      this.userName = profileData.userName;
      this.userImage = profileData.userImage;
      this.userPosts = profileData.userPosts;
      this.userFollowing = profileData.userFollowing;
      this.userBio = profileData.userBio;
    } else {
      this.fetchProfileData();
    }
  }
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



