<!-- TEMPORARILY NOT IN USE -->

<template>
    <div id="main" v-if="uid">
        <div id = "page-title">Following</div>
        <div id = "user-query"> {{ username }} is following these friends:</div>

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
import {collection, query, where, getDoc, getDocs, doc, deleteDoc} from "firebase/firestore"

import {getStorage, ref as sref, getDownloadURL} from "firebase/storage";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();


const db = getFirestore(drigmo2);
const storage = getStorage(drigmo2);

export default {
    
    data() {
        return {
            searchList: [],
            uid: null
        }
    },

    props: {
        username: String
    },

    methods: {
        async searchFriends() {
            const docRef = doc(db, "usernames", this.username)
            const docSnap = await getDoc(docRef);
            let following = docSnap.data().following;

            console.log(following);

            this.searchList = []
            // const docs = [];
            
            following.forEach(async (friend) => {
                const documentRef = doc(db, "usernames", friend)
                const documentSnap = await getDoc(documentRef);
                let doc_data = documentSnap.data()
                doc_data["username"] = friend

                console.log(doc_data.uid)
                console.log(doc_data.bio)

                this.searchList.push(doc_data)
                // console.log(doc.id)
                // if (doc.id stxt && doc.id <= stxt + "\uf8ff") {
                //     doc_data["username"] = doc.id
                //     // localdoc["username"] = "X";
                //     // docs.push(doc_data)
                //     this.searchList.push(doc_data) 
                // }
                
            })

        },

    },

    created() {
        this.searchFriends()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.uid = user.uid;
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
    border: solid black;
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