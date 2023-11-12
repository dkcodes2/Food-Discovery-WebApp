<!-- TEMPORARILY NOT IN USE -->

<template>
    <div id="main" v-if="user">
        <div id = "page-title">Search Results</div>
        <div id = "user-query">You searched for: {{ searchText }} </div>

        <div class="queryContainer">
            <!-- <div class="queryItem" v-for = "friend in searchList" key="friend.username"> -->
            <div class="queryItem" v-for = "friend in searchList">
                <div class = "nameAndBio">
                    <router-link :to ="{name: 'OthersProfilePage', query: {q: friend.username }}" class="routerLink"> 
                        <!-- <div> {{ friend.docId }} </div> -->
                        <!-- <span class = "itemname"> {{ friend.username }} </span> -->
                        <span class = "itemname"> {{ friend.username }} </span>
                        <br>

                        <p class = "userDescription"> {{ friend.bio }}</p>
                    </router-link>
                </div>
                
                <div class = "profileImage">
                    <img v-if=friend.imageUrl :src = "friend.imageUrl" alt="profileImage">
                </div>
                <!-- <img src="https://firebasestorage.googleapis.com/v0/b/drigmo2-8f507.appspot.com/o/ProfileImages%2FdefaultProfileImage.jpg?alt=media&token=36a3d2e7-b56f-4e00-b566-c469026ea5c4" alt=""> -->
            </div>

        </div>        
    </div>
    
    

</template>

<script>
import drigmo2 from "../firebase.js"
import {getFirestore} from "firebase/firestore"
import {collection, query, where, getDocs, doc, deleteDoc, startAt, orderBy} from "firebase/firestore"

import {getStorage, ref as sref, getDownloadURL} from "firebase/storage";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();


const db = getFirestore(drigmo2);
const storage = getStorage(drigmo2);

export default {
    
    data() {
        return {
            searchList: [],
            
            myUsername: "",
            user: null,
        }
    },

    props: {
        searchText: String,
        uid: String
    },

    methods: {
        async searchFriends(stxt) {
            console.log("search:" + this.myUsername)
            // let q = query(collection(db, "usernames"), where('username', '>=', stxt), where("username", "<", stxt + "\uf8ff"))
            
            // const collectionRef = db.collection("usernames");
            //const q = collectionRef.orderBy(firebase.firestore.FieldPath.documentId());
            
            // let q = query(collection(db, "usernames"), orderBy(getStorage().FilePath.documentId()), startAt(stxt)  )

            let q = query(collection(db, "usernames"));
            let allDocuments = await getDocs(q)
            
            this.searchList = []
            // const docs = [];
            
            allDocuments.forEach((doc) => {
                let doc_data = doc.data()
                
                if (doc.id >= stxt && doc.id <= stxt + "\uf8ff" && doc.id != this.myUsername) {
                   
                    doc_data["username"] = doc.id
                    // localdoc["username"] = "X";
                    // docs.push(doc_data)
                    this.searchList.push(doc_data) 
                }

            })

            this.searchList.sort(function(a,b) {
                return b.username - a.username
            });
            // this.searchList = docs;
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
    
    
    },

 

    watch: {
        searchText: {
            immediate: true,
            handler(val, oldVal) {
                console.log("watch")
                if (this.myUsername) {
                    this.searchFriends(val)
                }
        
            }
        }
    },

    created() {
        console.log("created")
        this.searchFriends(this.searchText)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                this.getFollowingField(this.user.uid).then( (userObj) => {
                    let data = userObj.data()
 
                    this.myUsername = userObj.id
                    // console.log(this.myUsername)

                    this.searchFriends(this.searchText)

                })
            }
        })
    }

}


</script>

<style scoped>
#main {
    font-family: Arial, Helvetica, sans-serif;
    text-align:center;
}

body {
    font-family: sans-serif;
    line-height: 1.4rem;
}

#page-title {
    font-size:xx-large;
    font-weight: bolder;
}

.queryContainer {
    
    margin-top: 50px;
    /* width: 100%; */
    width: inherit;
    margin-left: auto;
    margin-right: auto;
    border-left: 3px solid #4863A0;
    border-right: 3px solid #4863A0;
    padding: 20px;
    text-align:left;
}

.queryItem {
    display:flex;
    align-items: center;
}

.routerLink {
    text-decoration: none;
    color:black;
}

.nameAndBio {
    /* background-color: aquamarine; */
    text-align: left;
    width: 70%;
    display: inline-flex;
}

.profileImage {
    text-align: right;
    margin-left: 5%;
    display: inline-flex;
}

.itemname:hover {
    color:dodgerblue;
}

#user-query {
    margin-top: 0.3rem;
    font-size: large;
    font-style: oblique;
}

.itemname {
    font-weight: bolder;
    font-size:x-large;
}

.userDescription {
    margin-left:70px;
    line-height: 2.0;
}

img {
    width: 100px;
    height:100px;
}
</style>
