<template>
	<div>
	  <PostItem v-for="post in posts" :key="post.id" :post="post" />
	</div>

</template>
  
<script>
import PostItem from "@/components/profile-page-components/PostItem.vue";
// Correct the import path as per your project structure.
import firebaseApp from '@/firebase.js'; // Change this to the correct path
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

  
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
    // Use the router to navigate to the CreatePostPage with the postId as a query parameter
	console.log("editing", postId);
    this.$router.push({ name: 'CreatePostPage', query: { postId: postId } });
  	},
	async handleDeletePost(postId) {
		console.log(`Deleting post with ID: ${postId}`);

      try {
        // Create a reference to the post document
        const postRef = doc(db, "Posts", postId);

        // Delete the post document
        await deleteDoc(postRef);

        // Remove the post from the local 'posts' array
        this.posts = this.posts.filter(post => post.id !== postId);

        // Optional: Show a success message
        console.log("Post deleted successfully");
      } catch (error) {
        // Handle any errors
        console.error("Error deleting post: ", error);
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