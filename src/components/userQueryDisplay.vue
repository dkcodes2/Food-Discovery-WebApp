<!-- TEMPORARILY NOT IN USE -->

<template>
    <div id="main" v-if="uid">
        <div id = "page-title">Search Results</div>
        <div id = "user-query">You searched for: {{ searchText }} </div>

        <div class="queryContainer">
            <!-- <div class="queryItem" v-for = "friend in searchList" key="friend.username"> -->
            <div class="queryItem" v-for = "friend in searchList">
                <div class = "nameAndBio">
                    <router-link :to ="{name: 'OthersProfilePage', query: {q: friend.docId}}" class="routerLink"> 
                        <!-- <div> {{ friend.docId }} </div> -->
                        <span class = "itemname"> {{ friend.username }} </span>
                        <br>

                        <p class = "userDescription"> {{ friend.userBio }}</p>
                    </router-link>
                </div>
                
                <div class = "profileImage">
                    <img v-if=friend.imageURL :src = "friend.imageURL" alt="profileImage">
                </div>
                <!-- <img src="https://firebasestorage.googleapis.com/v0/b/drigmo2-8f507.appspot.com/o/ProfileImages%2FdefaultProfileImage.jpg?alt=media&token=36a3d2e7-b56f-4e00-b566-c469026ea5c4" alt=""> -->
            </div>

        </div>        
    </div>
    
    

</template>

<script>
import drigmo2 from "../firebase.js"
import {getFirestore} from "firebase/firestore"
import {collection, query, where, getDocs, doc, deleteDoc} from "firebase/firestore"

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
        searchText: String
    },

    methods: {
        async searchFriends(stxt) {
            let q = query(collection(db, "Users"), where('username', '>=', stxt), where("username", "<", stxt + "\uf8ff"))
            let allDocuments = await getDocs(q)
            
            // this.searchList = []
            const docs = [];
            
            allDocuments.forEach((doc) => {
                let doc_data = doc.data()
                doc_data['docId'] = doc.id
                doc_data['imageURL'] = ''
                docs.push(doc_data)
                // this.searchList.push(doc_data) 


            })

            await Promise.all(docs.map(async (doc) => {
                doc.imageURL = await this.fetchImageURL(doc.userImage);
                console.log(doc.imageURL)
                console.log(doc.userImage)
                })
            )
            this.searchList = docs;
        },

        async fetchImageURL (imagePath) {
            const imageRef = sref(storage, imagePath);
            try {
                return await getDownloadURL(imageRef);
                // return "aaaaa"
            } catch (error) {
                console.error(error)
            }
        },
    },

    watch: {
        searchText: {
            immediate: true,
            handler(val, oldVal) {
                this.searchFriends(val)
            }
        }
    },

    created() {
        this.searchFriends(this.searchText)
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
    height:100ppx
}
</style>