import { createStore } from 'vuex';
import firebaseApp from '../firebase.js';
import { getFirestore, onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default createStore({
    state: {
        postArray: [], // Renamed from listingArray to postArray
        postLoaded: null, // Renamed from listingLoaded to postLoaded
    },
    getters: {
        postsData(state) { // Renamed from listingsData to postsData
            return state.postArray;
        }
    },
    mutations: {},
    actions: {
        async getPosts({ state }) { // Renamed from getListings to getPosts
            const collectionRef = collection(db, "Posts"); // Changed from Listings to Posts
            onSnapshot(collectionRef, (snap) => {
                snap.forEach((doc) => {
                    const dataRef = doc.data();
                    dataRef.PostID = doc.id; // Renamed from ListingID to PostID
                    const index = state.postArray.findIndex(post => post.PostID === doc.id); // Changed from listingArray to postArray
                    if (index === -1) {
                        state.postArray.push(dataRef); // Changed from listingArray to postArray
                    } else {
                        state.postArray[index] = dataRef; // Changed from listingArray to postArray
                    }
                });
            });
            state.postLoaded = true; // Renamed from listingLoaded to postLoaded
        }
    }
});
