<template>
  <div id="mainContainer">  
    <div id="imageContainer">  
      <img src="../assets/loginpicture.jpeg" alt="login picture">
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
                    this.$router.push({name: 'LogInPage'}); //route name to be changed based on router
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    
          // To direct users to the Sign Up page if they have not yet created an account
        goToSignUp() {
            this.$router.push({name: 'SignUpPage'})
        },

         // To direct users to the Forget Password page if they have forgotten their password
        goToForgetPassword() {
            this.$router.push({name: 'ForgetPasswordDisplay'})
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
    margin-top: 13vh;
    flex: 0.6;
}

#imageContainer img {
    width: 70%;
    height: auto;
}

#formContainer {
    margin-top: 10vh;
    flex: 0.3;
}

#headerText {
    text-align: left;
    line-height: 30px;
}

#forgetpw {
    background: transparent;
    border: none;
    margin-left: auto;
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
    background-color: #60cbb8;
    border: 2px solid #60cbb8;
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

#loginbutton:hover {
    background-color: #14a88d;
    color: white;
    border: 2px solid #14a88d;
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
    color: #60cbb8;
}

#createAccountBtn:hover {
    color: black;
    border-bottom: 1px solid #252323;
}

/* Your existing styles for input and form */
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

.formContainer {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
