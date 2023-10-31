<template>
    <div class="food-rec-page">
      <h1>Your List of Past Eats</h1>
      <FoodRecs :recs="pastposts" />
    </div>
</template>

<script> 

    import { ref, onMounted } from 'vue';
    import { db } from '@/firebaseConfig.js'; 
    import PostsContainer from "@\components\profile-page-components\PostsContainer.vue";
    
    export default {
        name: "FoodRecPage",

        components: {
            //what do I pass to the FoodRecs item with pastposts? I will pass FoodRecs
            FoodRecs
        }, 
        props: {
            postCaption: { //call the caption from PostItems
                type: String,
                required: true
            }
            postURL: {
                type:URL
                required: true
            }

            //add: date/time, cuisine, if possible
                }}

        setup() {
        const pastposts = ref([]);
            //each Post is a food recommendation and must be given to "pastposts"
            //each element of pastposts should be the "Caption" of the past post,
            //and the URL of the past post
        onMounted(async () => {
            const querySnapshot = await db.collection('pastposts').get();
            pastposts.value = querySnapshot.docs.map(doc => doc.data ())

            //call the PostContainer from firebase
        });
        
        return {
            pastposts;
        }

          //data() {
        //  return {
        //            //fetch from API or via props.
        //            pastposts: [
            //            {title: 'Post 1', url: 'URL 1' },
            //            {title: ''Post 2', url: 'URL 2' },
        //            // ... more food posts
        //            ]
        //        };
        //}
    }
</script>

    