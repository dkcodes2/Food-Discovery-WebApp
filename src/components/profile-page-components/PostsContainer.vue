<template>
	<div>
	  <h1>My Posts</h1>
	  <div v-for="post in posts" :key="post.id">
		<h3>{{ post.Title }}</h3>
		<img :src="post.Image_URL" alt="Post image" />
		<p>{{ post.Caption }}</p>
		<p>{{ post.GenreOfFood }}</p>
		<p>{{ post.Address }}</p>
		<p>{{ post.PricePoint }}</p>
		<!-- Add more post details you want to show -->
	  </div>
	</div>
</template>
  
<script>
// Correct the import path as per your project structure.
import firebaseApp from '@/firebase.js'; // Change this to the correct path
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
  
const db = getFirestore(firebaseApp);
const auth = getAuth();
  
export default {
	name: "PostsContainer",
  
	data() {
	  	return {
		// Add a posts array to store the fetched posts
		posts: [],
	  	};
	},
  
	async created() {
	  	// Wait for the auth state to be resolved before fetching posts
	  	onAuthStateChanged(auth, user => {
		if (user) {
			this.fetchPosts();
		} else {
		  	// Handle user not logged in or redirect to login page
		}
	  	});
	},
  
	methods: {
	  	async fetchPosts() {
			const user = auth.currentUser;
		if (user) {
		  	const postsRef = collection(db, "Posts");
		  	// Make sure to use the correct field name for UserID
		  	const q = query(postsRef, where("UserID", "==", user.uid));
		  	const querySnapshot = await getDocs(q);
		  	this.posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
		}
		}
	}
};
</script>

<style scoped>
img {
  max-width: 100%; /* ensures image is not wider than its container */
  height: auto; /* maintains the aspect ratio */
}
</style>