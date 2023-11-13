<template>
  <div id="mainContainer">  
    <div id="imageContainer">  
      <img src="../assets/logo_transparent.png" alt="login picture">
    </div>
    
    <div id="formContainer"> 
      <div id="headerText">  
        <h1>Log In</h1>
      </div>
      
      <form id="logInForm" @submit.prevent="login"> 

        <div class="inputFields"> 

          <label for="email">Email</label>
          <input type="text" id="email" v-model="email" placeholder="Enter your email" required>
          
          <label for="passwordInput">Your Password</label>
          <input type="password" id="passwordInput" v-model="password" placeholder="Enter your password" required>
          
          <button id="forgetpw" @click="goToForgetPassword" type="button">Forget your password?</button>
          
          <div id="submitBtnContainer"> 
            <button id="loginbutton" type="submit">Sign In</button>
          </div>
        </div>
      </form>
      
      <div id="loginPrompt"> 
        <span>New to our community?</span> 
        <br>
        <button id="createAccountBtn" type="button" v-on:click="goToSignUp">Create an account</button>  
      </div>
    </div>
  </div>
</template>



<script>
import firebaseApp from '../firebase.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore,getDoc } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export default {
    name:"LogIn",

    data() {
        return {
            email: "",
            password: ""
        }
    },

    methods: {

        // To allow users to log in to the web application
        login() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    alert('Successfully logged in');
                    this.$router.push({name: 'HomePage'}); //route name to be changed based on router
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    

        goToSignUp() {
            this.$router.push({name: 'SignUpPage'})
        },


        goToForgetPassword() {
            this.$router.push({name: 'PasswordRecoveryPage'})
        }

    }
}   
</script>


<style scoped>
/* Your new IDs and classes */
#mainContainer {
    display: flex;
    width: 100vw;
}

#imageContainer {
    margin-top: 5vh; /* Smaller value moves the image up */
    margin-right: -5vh; /* Negative value moves the image to the right */
    flex: 0.6;
}

#imageContainer img {
    width: 70%;
    height: auto;
    position: relative; /* Add this line to enable positioning */
    top: -10px; /* Move up slightly */
    right: -80px; /* Move right slightly */
}

#formContainer {
    margin-top: 10vh;
    flex: 0.3;
    max-width: 400px; /* Set a max-width for form */
    margin: auto; /* Center the form in the flex container */
}

#headerText {
    text-align: left;
    line-height: 30px;
}

.inputFields label,
.inputFields input,
#forgetpw,
#submitBtnContainer button {
    margin-bottom: 20px; /* Increase the space below each element */
}

.inputFields input,
.inputFields button {
    padding: 15px; /* Increase padding for larger touch targets */
}

#forgetpw {
    background: transparent;
    border: none;
    margin-left: auto;
    margin-top: 10px; /* Additional space above the button */
    margin-right: 10px; /* Space to the right of the button */
    font-size: 0.80em;
    font-style: italic;
    color: grey;
    display: flex;
}

#forgetpw:hover {
    color: black;
    border-bottom: 1px solid #252323;
}

#submitBtnContainer {
    display: flex;
    justify-content: center;
}

#loginbutton {
    background-color: dodgerblue;
    border: 2px solid dodgerblue;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    transition-duration: 0.4s;
    width: 100%;
}

#loginbutton:hover {
    background-color: deepskyblue;
    color: white;
    border: 2px solid deepskyblue;
}

#loginPrompt {
    display: flex;
    justify-content: center;
}

#createAccountBtn {
    background: transparent;
    border: none;
    margin-left: 0.3vw;
    font-size: 0.90em;
    color: deepskyblue;
}

#createAccountBtn:hover {
    color: black;
    border-bottom: 1px solid #252323;
}

/* Styles for input and form elements */
input, select {
  width: 100%;
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
    outline: 3px solid dodgerblue; /* Updated color here */
}

.formContainer {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#email:focus {
    outline: 3px solid dodgerblue; /* Specific to email input */
}

</style>
