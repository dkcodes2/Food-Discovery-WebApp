<template>
    <div id="postcreate">
        <div id="postheader">
            <h2>Create Post</h2>
        </div>

        <div id="container">
            <div id="leftcontainer">
                <div id="postphotoset">
                    <img id="postphoto" src="../assets/defaultPost.png" alt="Post Photo">
                    <div id="buttonsupdate">
                        <label for="uploadbutton">Upload Image</label>
                        <input type="file" id="uploadbutton" accept="image/*" v-on:change="updatePostImage" ref="posts" hidden />
                        <button id="deletebutton" type="button" v-on:click="deletePostImage">Remove Image</button>
                    </div>
                </div>
            </div>

            <div id="rightcontainer">
                <form id="myform" @submit.prevent="savePost">
                    <div class="formli">
                        <div class="input-group">
                            <label for="posttitle">Post Title</label>
                            <input type="text" id="posttitle" v-model="posttitle" placeholder="Enter Post Title" required>
                        </div>

                        <div class="input-group">
                            <label for="address">Address</label>
                            <input type="text" id="address" v-model="address" placeholder="Enter the food place's address" required>
                        </div>

                        <div class="input-group">
                            <label for="genreoffood">Genre of Food</label>
                            <select id="genreoffood" v-model="genreoffood" name="genreoffood" required>
                                <option value="" selected hidden disabled>Select genre of food</option>
                                <option value="Local">Local</option>
                                <option value="Western">Western</option>
                                <option value="Korean">Korean</option>
                                <option value="Japanese">Japanese</option>
                            </select>
                        </div>

                        <div class="input-group">
                            <label for="pricepoint">Price Point</label>
                            <select id="pricepoint" v-model="pricepoint" name="pricepoint" required>
                                <option value="" selected hidden disabled>Select price point</option>
                                <option value="$">$</option>
                                <option value="$$">$$</option>
                                <option value="$$$">$$$</option>
                            </select>
                        </div>

                        <label for="caption">How would you describe this restaurant?</label>
                        <textarea id="caption" v-model="caption" placeholder="Enter a description of the restaurant" required></textarea>

                        <div id="buttonsupdate">
                            <button id="cancelbutton" type="button">Cancel</button>
                            <button id="savebutton" type="submit">Post</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebaseApp, { storage } from '../firebase.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, setDoc } from "firebase/firestore";
import { doc, getDoc, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const db = getFirestore(firebaseApp);
const auth = getAuth();

export default {
    name: "CreatePost",

    data() {
        return {
            posttitle: "",
            genreoffood: "",
            pricepoint: "",
            address: "",
            caption: "",
            uid: "",
            postImage: null
        }
    },

    mounted() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.uid = user.uid;
            }
        })
    },

    methods: {
        // To update the post image in firebase
        updatePostImage: async function() {
            console.log("updating post image")
            var fReader = new FileReader();
            try {
                var image = document.getElementById("uploadbutton");
                fReader.readAsDataURL(image.files[0]);
                fReader.onloadend = function(event) {
                    var img = document.getElementById("postphoto");
                    img.src = event.target.result;
                }
                alert("Post image displayed")
            } catch(error) {
                alert("No post image found ", error)
                document.getElementById("postphoto").src="../assets/defaultPost.png"
            }
        },

        // To save the new post entry to the Posts collection in firebase
        savePost: async function() {
            let image = document.getElementById("uploadbutton").value
            if (image == "") {
                alert("Upload Image!")
            } else {
                try {
                   
                    const docRef = doc(collection(db, "Posts"));
                    console.log(docRef.id)
                    const url = await this.uploadToCloud(docRef.id)
                    
                    await setDoc(docRef, { 
                        SellerID: this.uid,
                        Title: this.posttitle,
                        Address: this.address,
                        GenreOfFood: this.genreoffood,
                        PricePoint: this.pricepoint,
                        Caption: this.caption,
                        Post_Image: image,
                        Post_Available: true,
                        Image_URL: url
                    }, {merge: true})
                    console.log("LOL", url)
                    alert("Post created!")
                    this.$router.push({name: "ProfilePosts"})
                } catch(error) {
                    alert("Error creating post: ", error)
                }
            }
        },

        // To delete the post image from firebase
        deletePostImage: function() {
            if (document.getElementById("uploadbutton").value == "") {
                alert("Upload Image!")
            } else {
                document.getElementById("uploadbutton").value = ""
                document.getElementById("postphoto").src = "../assets/defaultPost.png"
                alert("Post Image Successfully Removed")
            }
        },

        // To upload the post image 
        uploadToCloud: async function(post_uid) {
            const storageRef = ref(storage, 'Posts/' + post_uid )
            await uploadBytes(storageRef, this.$refs.posts.files[0])
            console.log("uploaded")
            const url = await getDownloadURL(storageRef)
            console.log("inside")
            
            return url
        }
    }
}

</script>


<style>
body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: #f2f2f2;
}

/* Header styling */

#postheader {
    text-align: center;
    padding: 20px 0;
    background-color: #e3e3e3;
    margin-bottom: 2vh;
}

#postheader h2 {
    font-size: 2.5vw;
    font-weight: bold;
    color: #333;
}

/* Container styling */

#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

/* Left container styling */

#leftcontainer {
    width: 40%;
    margin-right: 2vw;
}

#postphoto {
    width: 100%;
    height: auto;
    margin-bottom: 2vh;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

/* Image upload button styling */

#buttonsupdate {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2vh;
}

label[for="uploadbutton"] {
    padding: 10px 20px;
    background-color: #359138;
    border: 1px solid #1c0808;
    border-radius: 25px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

label[for="uploadbutton"]:hover {
    background-color: #28642d;
}

input::file-selector-button {
    padding: 10px 20px;
    background-color: #20322c;
    border: 1px solid #1c0808;
    border-radius: 25px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

input::file-selector-button:hover {
    background-color: #28642d;
}

#deletebutton {
    padding: 10px 20px;
    background-color: #be4a4ac3;
    border: 1px solid #b02c2cbe;
    border-radius: 25px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

#deletebutton:hover {
    background-color: #85383f;
}

/* Right container styling */

#rightcontainer {
    width: 60%;
}

/* Form styling */

form {
    width: 100%;
}

.input-group {
    display: flex;
    margin-bottom: 1vh;
}

.input-group label {
    width: 30%;
    text-align: right;
}

</style>


