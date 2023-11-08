<template>
  <button @click="toggleFollow" :class="{ 'following': isFollowing }">
    {{ isFollowing ? 'Unfollow' : 'Follow' }}
  </button>
</template>

<script>
import drigmo2 from "../../firebase.js";
import {getFirestore} from "firebase/firestore";
import {collection, query, where, getDoc, doc, deleteDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { updateDoc, FieldValue } from 'firebase/firestore';

const db = getFirestore(drigmo2);

export default {
  name: 'FollowButton',
  props: {
    currentUserID: String,
    otherProfileUserID: String,
  },
  data() {
    return {
      isFollowing: false, // This should be fetched from Firebase to check the initial follow status
    }
  },
  methods: {
    async toggleFollow() {
      this.isFollowing = !this.isFollowing;
      this.$emit('update-follow', this.isFollowing); // Emit an event for the parent component

      // Create references to the current user and the profile user documents
      const currentUserRef = doc(db, 'Users', this.currentUserID);
      const otherProfileUserRef = doc(db, 'Users', this.otherProfileUserID);

      try {
        // Update the 'following' count in the profile user's document
        await updateDoc(profileUserRef, {
          userFollowing: FieldValue.increment(this.isFollowing ? 1 : -1)
        });
      } catch (error) {
        console.error('Error updating follow status:', error);
      }
    },
  },
}
</script>

<style scoped>
button {
  /* Basic styling */
  padding: 10px 20px;
  border: 2px solid transparent;
  cursor: pointer;
  background-color: #e7f3ff; /* Light blue background by default */
  color: #0056b3; /* Darker blue text by default */
  transition: background-color 0.3s, color 0.3s, border-color 0.3s; /* Smooth transitions */
}

/* Styles to apply when the button has the 'following' class */
button.following {
  background-color: #007bff; /* Bright blue background to indicate following */
  color: white; /* White text for contrast */
  border-color: #007bff; /* Bright blue border to match the background */
}

/* Optionally, add a hover effect */
button:hover {
  background-color: #d0e7ff; /* A lighter blue on hover for the 'not following' state */
}

button.following:hover {
  background-color: #0069d9; /* A darker blue when following and hovered */
}
</style>