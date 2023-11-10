<template> 
  <button @click="updateFollow" :class="{ 'following': isFollowing }">
    <span v-if="isFollowing"> Unfollow </span>
    <span v-else> Follow </span>
  </button>
</template>

<script>
import drigmo2 from "../firebase.js";
import {getFirestore} from "firebase/firestore";
import {collection, query, where, getDocs, doc, deleteDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { updateDoc, FieldValue } from 'firebase/firestore';

const db = getFirestore(drigmo2);

export default {
  name: 'FllwButton',
  props: {
    username: String,
  },
  data() {
    return {
        user: false,
        isFollowing: false, // This should be fetched from Firebase to check the initial follow status
        following: [],
        myUsername: ""
    }
  },
  methods: {
        updateFollow() {
            console.log("updateFollow function called")
            console.log("before:" + this.isFollowing);
            if (this.isFollowing) {
                this.isFollowing = false;
                // remove username from following list
                let list = this.following
                const index = list.indexOf(this.username);
                if (index > -1) { // only splice array when item is found
                    list.splice(index, 1); // 2nd parameter means remove one item only
                }
                // console.log(list)
                // console.log(this.myUsername)
                this.following = list
                this.updateDB()


            } else {
                this.isFollowing = true;
                // add username to following list
                this.following.push(this.username);
                // console.log(this.following)
                // console.log(this.myUsername)
                this.updateDB()
             
            }
            console.log("after:" + this.isFollowing);
        },

        async getFollowingField(uid) {
            // console.log(uid)
            let q = query(collection(db, "usernames"), where('uid', '==', uid))
            // let q = query(collection(db, "usernames"));
      
            let allDocuments = await getDocs(q);

            let doc_data = []
            if (!allDocuments.empty) {
                
                doc_data = allDocuments.docs[0];
                console.log(doc_data);
                // this.myUsername = doc_data.id;

            } else {
                console.log("No documents found.");
            }

            return doc_data
            // var docRef = doc(db, "usernames", username)
            // console.log(docRef)

            // const docSnapshot = await getDoc(docRef)
            // if (docSnapshot.exists()) {
            //     let arr = docSnapshot.data().following
            //     return arr

            // }
        },

        async updateDB() {
            console.log(this.following)
            console.log(this.myUsername)
            const userRef = doc(db, "usernames", this.myUsername)
            await updateDoc(userRef, {following: this.following});
            
            // let q = query(collection(db, "usernames"), where('uid', '==', this.uid))
            // // let q = query(collection(db, "usernames"));
      
            // let allDocuments = await getDocs(q);

            // let doc_data = []
            // if (!allDocuments.empty) {
                
            //     doc_data = allDocuments.docs[0].data();

            // const userRef = doc(db, "usernames", )

        }  
  },

  mounted() {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                this.getFollowingField(this.user.uid).then( (userObj) => {
                    let data = userObj.data()
                    this.following = data.following
                    this.myUsername = userObj.id

                    this.isFollowing =  this.following.includes(this.username)
                    // console.log(this.following)
                    // console.log(this.myUsername)
                    // console.log(this.myUsername)
                } )
                
            }

        })

    },

    watch: {
        isFollowing: {
            immediate: true,
            handler(val, oldVal) {
                // check username is in followinflist

                // this.isFollowing =  this.following.includes(this.username)
                // this.updateDB(val)
            }
        }
    },
}

</script>

<style scoped>
button {
    width: 120px;
    padding: 5px;
    background-color: dodgerblue;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 5px; /* Rounded corners */
}

button:hover {
    background-color: deepskyblue;
}
</style>