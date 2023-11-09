<!-- TEMPORARILY NOT IN USE -->

<template>
    <div id="main">
        <div id = "page-title">Search Results</div>
        <div id = "user-query">You searched for: {{ searchText }} </div>

        <div class="queryContainer">
            <!-- <div class="queryItem" v-for = "friend in searchList" key="friend.username"> -->
            <div class="queryItem" v-for = "friend in searchList">
            <router-link :to ="{name: 'HomePage', query: {q: friend.docId}}" class="routerLink"> 
                <span class = "itemname"> {{ friend.username }} </span>
                <br>

                <p class = "userDescription"> {{ friend.user_description }}</p>
            </router-link>
            </div>

        </div>        
    </div>
    
    

</template>

<script>
import drigmo2 from "../firebase.js"
import {getFirestore} from "firebase/firestore"
import {collection, query, where, getDocs, doc, deleteDoc} from "firebase/firestore"

const db = getFirestore(drigmo2);

export default {
    
    
    
    data() {
        return {
            searchList: [],
            user: false
        }
    },

    props: {
        searchText: String
    },

    methods: {
        async searchFriends(stxt) {
            let q = query(collection(db, "Users"), where('username', '>=', stxt), where("username", "<", stxt + "\uf8ff"))
            let allDocuments = await getDocs(q)
            this.searchList = []
            allDocuments.forEach((doc) => {
                let doc_data = doc.data()
                doc_data['docId'] = doc.id
                this.searchList.push(doc_data) 


            })

        }
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
    width: 64%;
    margin-left: auto;
    margin-right: auto;
    border-left: 3px solid #4863A0;
    border-right: 3px solid #2F539B;
    padding: 20px;
    text-align:left;
}

.routerLink {
    text-decoration: none;
    color:black;
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
</style>