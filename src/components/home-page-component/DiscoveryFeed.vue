<template>
    <div class="discovery-feed">
        <div v-for="post in relevantPosts" :key="post.id" class="post">
            <img :src="post.Image_URL" alt="Post image" class="img" loading="lazy" />
            
            <div class="caption">{{ post.Title }}</div>
            
            <div class="description">
                <p>{{ post.Caption }}</p>
                <p>Cuisine: {{ post.TypeOfCuisine }}</p>
                <p>Location: {{ post.Address }}</p>
                <p>Price: {{ post.PricePoint }}</p>
            </div>
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
    name: 'DiscoveryFeed',

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
            const postsQuery = query(collection(db, 'Posts'), orderBy('CreatedAt', 'desc'))
            const postsQuerySnapshot = await getDocs(postsQuery);;
  
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

<style scoped>
.discovery-feed .post {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-bottom: 20px; /* Space between posts, same as .post-item */
  background: #f9f9f9; /* Same background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Same box shadow */
  border-radius: 8px; /* Same border radius */
  overflow: hidden; /* Same overflow handling */
}

.discovery-feed .img {
  width: 100%; /* Same as .post-item .img */
  height: auto; /* Adjust as needed, similar to .post-item .img */
  object-fit: cover; /* Same object-fit */
  border-top-left-radius: 8px; /* Same border radius */
  border-top-right-radius: 8px; /* Same border radius */
}

.discovery-feed .caption {
  color: rgba(0, 0, 0, 0.97); /* Same color */
  margin-top: 22px; /* Same margin */
  margin-left: 15px; /* Same margin */
  margin-right: 15px; /* Same margin */
  font: 700 30px Inter, sans-serif; /* Same font */
}

.discovery-feed .description {
  color: rgba(0, 0, 0, 0.97); /* Same color */
  margin-top: 28px; /* Same margin */
  margin-left: 15px; /* Same margin */
  margin-right: 15px; /* Same margin */
  margin-bottom: 15px; /* Same margin */
  font: 300 18px Inter, sans-serif; /* Same font */
}

</style>