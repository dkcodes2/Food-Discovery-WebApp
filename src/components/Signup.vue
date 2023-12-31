<template>
    <div id="mainContainer">  
        <div id="imageContainer">  
            <img id="profilephoto" :src="imageUrl ? imageUrl : '../src/assets/defaultProfile.png'" alt="Profile picture">

            <input type="file" id="imageUpload" accept="image/*" @change="onImageSelected" ref="imageUpload" hidden>
            <button type="button" @click="triggerFileUpload" id="uploadImageButton">Upload Image</button>
            <button v-if="imageUrl" type="button" @click="deleteImage" id="deleteImageButton" >Remove Image</button>
        </div>

        <div id="formContainer"> 
            <div id="headerText">  
                <h1>Create an Account</h1> 
            </div>

            <form id="registrationForm" @submit.prevent="register"> 
                <div class="inputFields"> 
                    <label for="userNameInput">What should we call you?</label>  
                    <input type="text" id="userNameInput" v-model="name" pattern="[a-zA-Z0-9._]+" title="Letters, numbers, underscore and period are allowed" placeholder="Enter your username" required> 
                
                    <label for="emailInput">What's your email?</label>  
                    <input type="email" id="emailInput" v-model="email" placeholder="Enter your email address" required>
                   
                    <label for="passwordInput">Create a password</label>  
                    <input type="password" id="passwordInput" v-model="password" placeholder="Enter your password" required> 

                    <label for="bioInput">Tell us about yourself</label>  
                    <textarea id="bioInput" v-model="bio" placeholder="Enter your bio" required></textarea>
                    
                    <div id="submitBtnContainer"> 
                        <button id="submitAccountBtn" type="submit">Create Account</button>  
                    </div>
                </div>
            </form>

            <div id="loginPrompt"> 
                <span>Already have an account?</span> 
                <br>
                <button id="loginBtn" type="button" @click="goToLogIn">Log in</button> 
            </div>
        </div>
    </div>
</template>

 
<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore"; 
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../firebase.js'; // Ensure this path is correct for your setup

export default {
    name: "SignUp",

    data() {
        return {
            email: "",
            password: "",
            name: "",
            bio: "",
            imageFile: null,
            imageUrl: null // This will hold the URL of the uploaded image or a placeholder
        }
    },

    methods: {
        async isUsernameUnique(username) {
            const db = getFirestore();
            const usernameRef = doc(db, 'usernames', username);
            const docSnap = await getDoc(usernameRef);
            return !docSnap.exists();
        },

        triggerFileUpload() {
            this.$refs.imageUpload.click();
        },

        onImageSelected(event) {
            this.imageFile = event.target.files[0];
            if (this.imageFile) {
                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = (e) => {
                    this.imageUrl = e.target.result;
                };
                
            }else {
                this.imageUrl = null;
            }
        },

        async uploadImage(username) {
            if (!this.imageFile) return null;
            const imageRef = storageRef(storage, `profile_images/${username}`);
            await uploadBytes(imageRef, this.imageFile);
            return getDownloadURL(imageRef);
        },

        async deleteImage() {
            // Reset the file input
            if (this.$refs.imageUpload) {
                this.$refs.imageUpload.value = "";
            }

            // Update the image to the default profile picture
            let profileImageElement = document.getElementById("profilephoto");
            if (profileImageElement) {
                profileImageElement.src = "../assets/defaultProfile.png";
            }

            // Update Vue data properties
            this.imageFile = null;
            this.imageUrl = null;

            console.log('Image reset to default successfully');
        },


        async register() {
            const auth = getAuth();
            try {
                // Check if username is unique
                const unique = await this.isUsernameUnique(this.name);
                if (!unique) {
                    alert('Username is already taken. Please choose a different one.');
                    return;
                }

                if (!this.imageFile) {
                    alert('Please upload a profile picture to continue.');
                    return;
                }

                // Create user with email and password
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
                const user = userCredential.user;
                
                // Upload the image to Firebase Storage
                const imageUrl = await this.uploadImage(this.name);

                // Update the user profile with the username and photo URL if image was uploaded
                await updateProfile(user, {
                    displayName: this.name,
                    photoURL: imageUrl || user.photoURL // Use uploaded URL or default
                });

                // Store the username, bio, and image URL in Firestore
                const db = getFirestore();
                await setDoc(doc(db, 'usernames', this.name), { 
                    uid: user.uid,
                    bio: this.bio,
                    imageUrl: imageUrl, // This might be null if no image was uploaded
                    following: [], // Empty array for people the user is following
                    posts: [] // Empty array for posts the user has made
                });

                alert('Successfully registered!');
                this.$router.push({ name: 'LogInPage' });
            } catch (error) {
                alert(error.message);
            }
        },

        goToLogIn() {
            this.$router.push({ name: 'LogInPage' });
        }
    }
}
</script>

 
 
/* Modified to match the login page styles */
<style scoped>

/* Main Container */
#mainContainer {
    display: flex;
    width: 100vw;
    margin-top: 10vh;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

/* Image Container */
#imageContainer {
    flex: 0.6;
    margin-top: 13vh;
    text-align: center; /* Center align the child elements horizontally */
    padding: 0 20px; /* Add some padding on the sides */
}

#imageContainer img {
    width: 70%;
    height: auto;
    max-width: 500px; /* Adjust as needed */
    margin-bottom: 10px; /* Space between image and buttons */
}


/* Form Container */
#formContainer {
    flex: 0.3;
    margin-top: 10vh;
}

#headerText {
    text-align: left;
    line-height: 30px;
}

/* Form Styles */
#registrationForm {
    margin-top: 4vh;
    margin-bottom: 4vh;
}

.inputFields {
    display: inline-block;
    text-align: left;
    width: 100%;
}

input, select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    height: 40px;
    border-radius: 10px;
}

::placeholder {
    text-align: center;
    font-size: 17px;
}

input:focus {
    color: rgb(9, 8, 8);
    outline: 3px rgba(43, 41, 41, 0.933);
}

/* Button Styles */
#submitAccountBtn {
    background-color: dodgerblue;
    border: 2px solid dodgerblue;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    transition-duration: 0.4s;
    width: 100%;
}

#submitAccountBtn:hover {
    background-color: deepskyblue;
    color: white;
    border: 2px solid deepskyblue;
}

#loginPrompt {
    display: flex;
    justify-content: center;
}

#loginBtn {
    background: transparent;
    border: none;
    margin-left: 0.3vw;
    font-size: 0.90em;
    color: dodgerblue;
}

#loginBtn:hover {
    color: black;
    border-bottom: 1px solid #252323;
}

#uploadImageButton, #deleteImageButton {
    margin-top: 10px;
    max-width: 70%; /* Adjust as per the image container width */
    padding: 8px 16px; /* Smaller padding */
    font-size: 14px; /* Adjust font size as needed */
    border-radius: 5px;
    border: 2px solid dodgerblue;
    background-color: dodgerblue;
    color: white;
    text-align: center;
    cursor: pointer;
}

#uploadImageButton:hover, #deleteImageButton:hover {
    background-color: deepskyblue;
    border-color: deepskyblue;
}

</style>