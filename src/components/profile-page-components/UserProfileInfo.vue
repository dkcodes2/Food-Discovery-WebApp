<template>
  <div class="user-profile-info">
    <div class="profile-pic-name-and-stats">
      <div class="div">
        <div class="column">
          <div class="profile-pic-container">
            <img
              :src="userImage"
              loading="lazy"
              class="profile-pic"
              alt="Profile Picture"
            />
          </div>
          <div class="name">{{ userName }}
            <!-- <p v-if="username"> {{ username }}</p> -->
          </div>
        </div>
        <div class="column-2">
          <div class="posts">Posts</div>
          <div class="no-of-posts">{{  userPosts }}</div>
        </div>
        <div class="column-3">
          <!-- <div class="div-2">Following</div> -->
          <!-- <div class="no-of-following">{{ userFollowing }}</div> -->
          <!-- <router-link :to ="{name: 'OthersProfilePage', query: {q: userName }}" class="routerLink">  -->
          <router-link :to ="{name: 'WorkingFollowingPage', query: {q: this.userName }}" class="routerLink">
            <div class="div-2">Following</div>
          </router-link>
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, query, where, collection, getDocs, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

export default {
  data() {
    return {
      user: false,
      userName: 'no username',
      userImage: null,
      userPosts: 5,
      userFollowing: 0,
      userBio: 'this user has no bio',
      targetUID: '',
    };
  },
  props: {
        doc_id: String,
        type: String,
  },
  methods: {
    async setTargetUID(db, username) {
        console.log(username);
        const docRef = doc(db, "usernames", username)
        const docSnap = await getDoc(docRef);
        this.targetUID = docSnap.data().uid;
        console.log("setTargetUID: " + this.targetUID)
    },

    ///////////////////////////////////// TO BE EDITED ////////////////////////////////
    async countPosts(db, uid) {

            // let q = query(collection(db, "usernames"), where('username', '>=', stxt), where("username", "<", stxt + "\uf8ff"))
            
            // const collectionRef = db.collection("usernames");
            //const q = collectionRef.orderBy(firebase.firestore.FieldPath.documentId());
            
            // let q = query(collection(db, "usernames"), orderBy(getStorage().FilePath.documentId()), startAt(stxt)  )
            console.log(uid)
            console.log("countPost: check if it is called")

            let q = query(collection(db, "Posts"), where("UserID", '==', uid));
            let allDocuments = await getDocs(q)
            console.log("countPost: " + allDocuments.size)

            this.userPosts = allDocuments.size

            console.log( "After setting user" + this.userPosts)
            // this.searchList = []
            // // const docs = [];
            
            // allDocuments.forEach((doc) => {
            //     let doc_data = doc.data()
                
            //     if (doc.id >= stxt && doc.id <= stxt + "\uf8ff" && doc.id != this.myUsername) {
                   
            //         doc_data["username"] = doc.id
            //         // localdoc["username"] = "X";
            //         // docs.push(doc_data)
            //         this.searchList.push(doc_data) 
            //     }

            // })

            // this.searchList.sort(function(a,b) {
            //     return b.username - a.username
            // });
            // this.searchList = docs;
        },
        /////////////////////////////////////////////////////////////

    async fetchProfileData(db, targetUID) {
      try {
        console.log("async fetchProfileData: " + targetUID)
        // const user = auth.currentUser;
        // if (!user) {
        //   console.log('No user is currently logged in.');
        //   return;
        // }        
        // console.log('Current user:', user);

        const usernamesRef = collection(db, "usernames");
        const q = query(usernamesRef, where("uid", "==", targetUID));
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
        // this.userPosts = userData.posts ? userData.posts.length : 0;
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
    },
  },
  created() {
    console.log(this.doc_id);

    const auth = getAuth();
        
    onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;

            if (this.doc_id == "self") {
                this.targetUID = this.user.uid
                console.log("tardet "+this.targetUID )
                this.fetchProfileData(db, this.targetUID);
                this.countPosts(db, this.targetUID);
            } 
            else {
                this.setTargetUID(db, this.doc_id).then(() => {
                    this.fetchProfileData(db, this.targetUID);
                    this.countPosts(db, this.targetUID);
                })
            }
            }
        })
    
    
    
    // const user = auth.currentUser;
    //     if (!user) {
    //       console.log('No user is currently logged in.');
    //       return;
    //     }        
    //     console.log('Current user:', user);
        
    // const db = getFirestore();
    // if (this.doc_id == "self") {
    //     this.targetUID = this.user.uid
    //     // this.countPosts(db, this.targetUID);
    // } else {
    //     this.setTargetUID(db, this.doc_id).then(() => {
    //         this.fetchProfileData(db, this.targetUID);
    //         this.countPosts(db, this.targetUID);
    //     })
    // }

        

    const storedData = localStorage.getItem('profileData');
    if (storedData && this.doc_id == "self") {
      const profileData = JSON.parse(storedData);
      this.userName = profileData.userName;
      this.userImage = profileData.userImage;
      this.userPosts = profileData.userPosts;
      this.userFollowing = profileData.userFollowing;
      this.userBio = profileData.userBio;
    }
    // } else {
    //   this.fetchProfileData();
    // }
    
  


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
.profile-pic-container {
  width: 150px; /* Adjust this as needed */
  height: 150px; /* Adjust this as needed */
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto; /* Center the profile picture */
}

.profile-pic {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* This will cover the area without stretching the image */
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

.div-2:hover {
  color: dodgerblue;
}

.no-of-following {
  color: rgba(0, 0, 0, 0.97);
  text-align: center;
  align-self: center;
  margin-top: 35px;
  font: 300 30px Inter, sans-serif;
}

.routerLink {
    text-decoration: none;
}

.routerLink:hover {
    color: #BBBBBB;
}
.biography {
  color: rgba(0, 0, 0, 0.97);
  align-self: stretch;
  margin: 22px -20px 0 0;
  font: 300 24px Inter, sans-serif;
}
@media (max-width: 991px) {
  .biography {
    max-width: 100%;
  }
}
</style>



