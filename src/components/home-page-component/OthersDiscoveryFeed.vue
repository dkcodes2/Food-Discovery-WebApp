<template>
    <div class="discovery-feed">
      <!-- Display relevant posts -->
        <div v-for="post in relevantPosts" :key="post.id" class="post">
            <img :src="post.Image_URL" alt="Post image" class="img" loading="lazy" />
            <div class="caption">{{ post.Title }}</div>
            <p>{{ post.Caption }}</p>
            <p>Cuisine: {{ post.TypeOfCuisine }}</p>
            <p>Location: {{ post.Address }}</p>
            <p>Price: {{ post.PricePoint }}</p>
            <!-- Other post details -->
        </div>
    </div>
</template>
  
<script>
import firebaseApp from '@/firebase.js';
import { getFirestore, collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);
const auth = getAuth();

export default {
    name: 'OthersDiscoveryFeed',

    data() {
        return {
            relevantPosts: [],
        };
    },
    props: {
        uid: String,
        type: String,
    },

    created() {
        console.log("created " + this.uid)
        this.fetchRelevantPosts(this.uid);
    },

    methods: {
	  	async fetchRelevantPosts(uid) {
            if (!uid) {
                console.error('UID is undefined');
                return;
            }
            
			const user = auth.currentUser;
		  	const usernamesRef = collection(db, "usernames");

		  	// Make sure to use the correct field name for UserID
		  	const q = query(usernamesRef, where("uid", "==", uid));
		  	const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                console.log(`No usernames found for UID: ${uid}`);
            return;
            }

            const usernameDoc = querySnapshot.docs[0];
            console.log("Username document retrieved")
          
            // 2) Access the document's "following" to retrieve an array of usernames
            const following = usernameDoc.data().following;
            console.log("Retreived:" + following);
            
            // 3) Find the array of UIDs from the array of usernames
            const uidPromises = following.map(username => {
                const userDocRef = doc(db, "usernames", username);
                return getDoc(userDocRef);
            });

            // Resolve all promises to get the documents
            const userDocs = await Promise.all(uidPromises);    

            // Extract UIDs from the documents
            const followingUIDs = userDocs.map(doc => {
                if (doc.exists()) {
                    return doc.data().uid; // Make sure 'uid' is the correct field name where UIDs are stored
                } else {
                    console.error(`No document found for username: ${username}`);
                    return null; // or handle this case appropriately
                }
            }).filter(uid => uid !== null); // Filter out any null values resulting from missing documents
            console.log("Retreived:" + followingUIDs);

            // 4) Go through each document in posts and check if the "userID" is in the array
            const postsQuery = query(
				collection(db, 'Posts'), 
				where('TypeOfCuisine', '==', 'Others'),
				orderBy('CreatedAt', 'desc'));
				
            const postsQuerySnapshot = await getDocs(postsQuery);
  
            postsQuerySnapshot.forEach((postDoc) => {
                const post = postDoc.data();
                if (followingUIDs.includes(post.UserID)) {
                    this.relevantPosts.push({
                        id: postDoc.id,
                        ...post
                });
                }
            });
            console.log("Stored:" + post);
        }
    }
};
</script>
  