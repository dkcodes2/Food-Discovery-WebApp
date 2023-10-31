<template>
    <div class="food-rec-page">
      <h1>Your List of Past Eats</h1>
      <FoodRecs :recs="pastposts" />
    </div>
</template>

<script> 

    import { ref, onMounted } from 'vue';
    import { db } from '@/firebaseConfig.js'; 
    import PostsContainerAQ from "@\components\food-list-enabling-components\PostsContainerAQ.vue";
    
    export default {
        name: "FoodRecPage",

        components: {
            //what do I pass to the FoodRecs item with pastposts? I will pass FoodRecs
            FoodRecs
        }, 
        props: {

        }

        setup() {
        const pastposts = ref([]);
            //all the past posts must be given to "pastposts"
            //each element of pastposts should be the "Caption" of the past post,
            //and the URL of the past post
        onMounted(async () => {
            const querySnapshot = await db.collection('pastposts').get();
            pastposts.value = querySnapshot.docs.map(doc => doc.data ())
            //here I will calling the array of past-posts to store past post data into an array of past-posts.
            //I should make it call only the Caption and the URL in which it is stored.
        });
        
        return pastposts;
        
        }
    }
</script>

    