<template>
  <div class="post-item">
        <!-- Edit/Delete buttons -->
    <button @click="editPost(post.id)">Edit</button>
    <button @click="deletePost(post.id)">Delete</button>
    <div class="images">
      <div class="div">
        <!-- Assuming you want to display one image per post, use only one column. Adjust as needed. -->
        <div class="column">
          <img :src="post.Image_URL" alt="Post image" class="img" loading="lazy" />
        </div>
      </div>
    </div>
    <div class="caption">{{ post.Title }}</div>
    <div class="description">
      <p>{{ post.Caption }}</p>
      <p>{{ post.GenreOfFood }}</p>
      <p>{{ post.Address }}</p>
      <p>{{ post.PricePoint }}</p>
      <!-- Add more post details you want to show -->
    </div>
  </div>
</template>

<script>
import firebaseApp from '@/firebase.js'; // Change this to the correct path
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
  
const db = getFirestore(firebaseApp);
const auth = getAuth();
  
export default {
	name: "PostsItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    editPost(postId) {
      // Emit an event to the parent component to handle editing
      this.$emit('edit-post', postId);
    },
    deletePost(postId) {
      // Emit an event to the parent component to handle deletion
      this.$emit('delete-post', postId);
    }
  }
};
</script>

<style scoped>
.post-item {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  position: relative;
  margin-bottom: 20px; /* Space between posts */
}

.images {
  display: flex;
  gap: 20px;
}

/* The .column class will target the div wrapping the image */
.column {
  flex-grow: 1; /* Allow the image container to grow */
  line-height: normal;
  width: 100%; /* Full width for a single image approach */
  margin-bottom: 10px; /* Space between the image and the caption */
}

/* The .img class is for the image itself */
.img {
  aspect-ratio: 1.51; /* Keeping the aspect ratio from the old CSS */
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

/* The .caption class is for the post title */
.caption {
  color: rgba(0, 0, 0, 0.97);
  margin-top: 22px;
  font: 700 30px Inter, sans-serif;
}

/* The .description class is for the post details */
.description {
  color: rgba(0, 0, 0, 0.97);
  margin-top: 28px;
  font: 300 18px Inter, sans-serif; /* Adjusted font size for post details */
}

/* Media query adjustments for responsiveness */
@media (max-width: 991px) {
  .images {
    flex-direction: column;
    align-items: stretch;
  }

  .column {
    width: 100%;
    margin-left: 0;
  }

  .img {
    margin-top: 23px;
  }

  .caption {
    font-size: 24px; /* Slightly smaller font size on smaller screens */
  }

  .description {
    font-size: 16px; /* Slightly smaller font size on smaller screens */
  }
}
</style>

    
