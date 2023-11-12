<template>
    <div id="postcreate">
        <div id="postheader">
            <h2>Create Post</h2>
        </div>

        <div id="container">
            <div id="leftcontainer">
                <div id="postphotoset">
                    <img id="postphoto" src="../assets/defaultProfile.png" alt="Post Photo">
                    <div id="buttonsupdate">
                        <label for="uploadbutton">Upload Image</label>
                        <input type="file" id="uploadbutton" accept="image/*" v-on:change="updatePostImage" ref="uploadbutton" hidden />
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
                            <label for="typeofcuisine">Type of Cuisine</label>
                            <select id="typeofcuisine" v-model="typeofcuisine" name="typeofcuisine" required>
                                <option value="" selected hidden disabled>Select Type of Cuisine</option>
                                <option value="Local">Local</option>
                                <option value="Western">Western</option>
                                <option value="Korean">Korean</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Others">Others</option>
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
                            <button id="cancelbutton" type="button" @click="goToHomePage">Cancel</button>
                            <button id="savebutton" type="submit">Post</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js'; // Ensure the path is correct
import { ref as storageRef, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, setDoc, updateDoc, doc, getDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const db = getFirestore(firebaseApp);
const auth = getAuth();
const storage = getStorage(firebaseApp);

export default {
    name: "CreatePost",
    props: {
        postId: String, // Accept the postId as a prop
    },
    data() {
        return {
            posttitle: "",
            typeofcuisine: "",
            pricepoint: "",
            address: "",
            caption: "",
            uid: "",
            postImageURL: "", // To hold the URL of the uploaded image
            isEditMode: false, // Flag to check if it's edit mode
            CreatedAt: serverTimestamp(),
        };
    },
    async created() {
        console.log("CreatePost created with postId:", this.postId);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
      }
    });
    if (this.postId) {
      this.isEditMode = true;
      const postRef = doc(db, "Posts", this.postId);
      const postSnap = await getDoc(postRef);
      if (postSnap.exists()) {
        const postData = postSnap.data();
        this.populateFormData(postData);
      } else {
        console.error("No such document!");
      }
    }
  },
  methods: {
    populateFormData(data) {
      this.posttitle = data.Title;
      this.address = data.Address;
      this.typeofcuisine = data.typeofcuisine;
      this.pricepoint = data.PricePoint;
      this.caption = data.Caption;
      this.postImageURL = data.Image_URL;
    },
    async savePost() {
      let imageInput = this.$refs.uploadbutton;
      let newImageFile = imageInput.files.length > 0 ? imageInput.files[0] : null;
      let url = this.postImageURL;

      try {
        let docRef;

        if (this.isEditMode && this.postId) {
          docRef = doc(db, "Posts", this.postId);
          if (newImageFile) {
            url = await this.uploadToCloud(this.postId, newImageFile);
          }
          await updateDoc(docRef, {
            Title: this.posttitle,
            Address: this.address,
            TypeOfCuisine: this.typeofcuisine,
            PricePoint: this.pricepoint,
            Caption: this.caption,
            Image_URL: url,
          });
          alert("Post updated!");
        } else {
          if (!newImageFile) {
            alert("Upload Image!");
            return;
          }
          docRef = doc(collection(db, "Posts"));
          url = await this.uploadToCloud(docRef.id, newImageFile);
          await setDoc(docRef, {
            UserID: this.uid,
            Title: this.posttitle,
            Address: this.address,
            TypeOfCuisine: this.typeofcuisine,
            PricePoint: this.pricepoint,
            Caption: this.caption,
            Post_Available: true,
            Image_URL: url,
            CreatedAt: serverTimestamp(),
          });
          alert("Post created!");
        }
        this.$router.push({ name: "HomePage" });
      } catch (error) {
        console.error("Error saving post: ", error);
        alert("Error saving post: " + error.message);
      }
    },
    async uploadToCloud(postId, file) {
      const uploadRef = storageRef(storage, 'Posts/' + postId);
      await uploadBytes(uploadRef, file);
      return await getDownloadURL(uploadRef);
    },
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



        goToHomePage() {
        this.$router.push({name: 'HomePage'}); // Assuming the homepage route is '/
        },
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
    flex-direction: column;
    margin-bottom: 1vh;
}

.input-group label {
    margin-bottom: 0.5vh;
    font-weight: bold;
}

/* Input, Textarea and Select Styling */
input[type="text"],
input[type="file"],
textarea,
select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
}

textarea {
    height: 100px; /* Adjust as needed */
}

input[type="text"]:focus,
input[type="file"]:focus,
textarea:focus,
select:focus {
    outline: 3px solid deepskyblue; /* Change the color to fit your theme */
}

/* Button Styling */
button {
    background-color: dodgerblue;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    width: 100%;
}

button:hover {
    background-color: deepskyblue;
}

/* Image upload button styling */

label[for="uploadbutton"],
#deletebutton {
    display: inline-block;
    width: 48%; /* Adjust as needed for spacing */
    padding: 10px 20px;
    margin: 8px 0;
    background-color: #359138;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

/* Add margin to create space between the buttons */
label[for="uploadbutton"] {
    margin-right: 4%; /* Add margin to the right of the upload button */
}

#deletebutton {
    margin-left: 4%; /* Add margin to the left of the delete button */
    background-color: #be4a4a;
    border-color: #b02c2c;
}

label[for="uploadbutton"]:hover,
#deletebutton:hover {
    background-color: mediumslateblue;
}

/* Placeholder Styling */
::placeholder {
    color: #aaa;
    font-size: 16px;
    text-align: start;
}

/* Ensure the file input is not displayed since it's hidden */
input[type="file"] {
    display: none;
}

/* Adjust the delete button to match the account creation form */
#deletebutton {
    background-color: #be4a4a;
    border-color: #b02c2c;
}

/* Buttons container styling */
#buttonsupdate {
    display: flex;
    justify-content: space-between;
    margin-top: 2vh;
}


</style>


