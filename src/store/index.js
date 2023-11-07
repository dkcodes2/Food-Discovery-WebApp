import { createStore } from 'vuex';
import firebaseApp from '../firebase.js';
import { getFirestore, onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default createStore({
    state: {
        postArray: [], 
        postLoaded: null, 
    },
    getters: {
        postsData(state) { 
            return state.postArray;
        }
    },
    mutations: {},
    actions: {
        async getPosts({ state }) { 
            const collectionRef = collection(db, "Posts"); 
            onSnapshot(collectionRef, (snap) => {
                snap.forEach((doc) => {
                    const dataRef = doc.data();
                    dataRef.PostID = doc.id; 
                    const index = state.postArray.findIndex(post => post.PostID === doc.id); 
                    if (index === -1) {
                        state.postArray.push(dataRef); 
                        state.postArray[index] = dataRef; 
                    }
                });
            });
            state.postLoaded = true; 
        }
    }
});
