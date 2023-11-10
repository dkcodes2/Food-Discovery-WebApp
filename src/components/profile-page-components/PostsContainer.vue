<template>
	<!-- <div>
	  <h1>My Posts</h1>
	  <div v-for="post in posts" :key="post.id">
		<h3>{{ post.Title }}</h3>
		<img :src="post.Image_URL" alt="Post image" />
		<p>{{ post.Caption }}</p>
		<p>{{ post.GenreOfFood }}</p>
		<p>{{ post.Address }}</p>
		<p>{{ post.PricePoint }}</p>
		

	  </div>
	</div> -->
	<div><PostItem v-for="post in posts" :key="post.id" :post="post" /></div>
</template>
  
<script>
import PostItem from "@/components/profile-page-components/PostItem.vue";
// Correct the import path as per your project structure.
import firebaseApp from '@/firebase.js'; // Change this to the correct path
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
  
const db = getFirestore(firebaseApp);
const auth = getAuth();
  
export default {
	name: "PostsContainer",
	components: {
		PostItem
	},
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
		},

		handleEditPost(postId) {
      // Logic to handle post editing
      // This could show an edit form and update the post in the database
    },
	async handleDeletePost(postId) {
  try {
    // Step 1: Delete the post from Firestore
    const postRef = doc(db, "Posts", postId);
    await deleteDoc(postRef);

    // Step 2: Remove the post from the local state
    this.posts = this.posts.filter(post => post.id !== postId);

    // Optional: Show a success message to the user
    alert("Post deleted successfully!");
  } catch (error) {
    // Handle any errors in the deletion process
    console.error("Error deleting post: ", error);
    // Optional: Show an error message to the user
    alert("Failed to delete post.");
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