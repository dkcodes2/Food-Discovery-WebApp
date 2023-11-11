<template>
  <div class="post-item">
        <!-- Edit/Delete buttons -->
    <button @click="editPost(post.id)" v-if = "postType == 'self'" class="edit-button"></button> 
    <button @click="deletePost(post.id)" v-if = "postType == 'self'" class="delete-button"></button>
    
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
      <p>Cuisine: {{ post.TypeOfCuisine }}</p>
      <p>Location: {{ post.Address }}</p>
      <p>Price: {{ post.PricePoint }}</p>
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
    postType: String,
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editPost(postId) {
      console.log('Edit button clicked:', postId);
      // Emit an event to the parent component to handle editing
      this.$emit('edit-post', postId);
    },
    deletePost(postId) {
      console.log('Delete button clicked:', postId);
      // Emit an event to the parent component to handle deletion
      this.$emit('delete-post', postId);
    }
  }, 
  created () {
    console.log(this.postType);
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
  background: #ffffff; /* Card background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow to lift the card off the page */
  border-radius: 8px; /* Slightly rounded corners for the card effect */
  overflow: hidden; /* Ensures nothing spills out of the card */
  position: relative; /* For absolute positioning of children */
  background: #f9f9f9; /* A light grey background for better contrast with white */
}

.images {
  position: relative;
}

.images .column {
  margin: 0; /* No margin to ensure the image stretches to full width */
}
/* The .column class will target the div wrapping the image */
/* The .column class will target the div wrapping the image */
.column {
  flex-grow: 1; /* Allow the image container to grow */
  line-height: normal;
  width: 100%; /* Full width for a single image approach */
  margin-bottom: 10px; /* Space between the image and the caption */
}

.img {
  width: 100%; /* Image takes full width of its container */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Cover the space without stretching */
  border-top-left-radius: 8px; /* Rounded corners at the top-left of the image */
  border-top-right-radius: 8px; /* Rounded corners at the top-right of the image */
}

.caption {
  color: rgba(0, 0, 0, 0.97);
  margin-top: 22px;
  margin-left: 15px; /* Space from the left edge of the card */
  margin-right: 15px; /* Space from the right edge of the card */
  font: 700 30px Inter, sans-serif;
}

.description {
  color: rgba(0, 0, 0, 0.97);
  margin-top: 28px;
  margin-left: 15px; /* Space from the left edge of the card */
  margin-right: 15px; /* Space from the right edge of the card */
  margin-bottom: 15px; /* Space from the bottom edge of the card */
  font: 300 18px Inter, sans-serif; /* Adjusted font size for post details */
}

.edit-button, .delete-button {
  padding: 5px; /* Reduced padding for a neater look */
  width: 25px; /* Smaller square size */
  height: 25px; /* Smaller square size */
  font-size: 12px; /* Smaller font size */
  line-height: 25px; /* Aligns the text vertically */
  text-align: center; /* Aligns the text horizontally */
  margin: 10px; /* Space from the top edge of the card */
  border: 1px solid #ccc; /* Border to define the button edges */
  border-radius: 4px; /* Rounded corners for the button */
  cursor: pointer;
  position: absolute; /* Absolute position */
  top: 10px; /* Distance from the top of the card */
  z-index: 10; /* Ensure the buttons are above the image */
  background-image: none;
  background-color: red; /* Temporary background color for testing */

}

/* Position each button */
.edit-button {
  right: 35px; /* Space from the right edge of the post-item for the edit button */
  background-image: url('@/assets/edit-icon.png'); /* Path to your edit icon in the src/assets directory */
  background-size: cover; /* Cover the entire area of the button */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Do not repeat the background image */
}

.delete-button {
  right: 0; /* Align to the top right corner of the post-item for the delete button */
  background-image: url('@/assets/delete-icon.png'); /* Path to your edit icon in the src/assets directory */
  background-size: cover; /* Cover the entire area of the button */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Do not repeat the background image */
  
}


edit-button, delete-button:hover {
  background-color: #e0e0e0; /* Slightly darker on hover */
}

/* Media query adjustments for responsiveness */
@media (max-width: 991px) {

  .column {
    width: 100%;
    margin-left: 0;
  }

  .caption {
    font-size: 24px; /* Slightly smaller font size on smaller screens */
  }

  .description {
    font-size: 16px; /* Slightly smaller font size on smaller screens */
  }
}


</style>

    
