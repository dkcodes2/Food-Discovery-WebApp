<template>
  <div id="PasswordReset">
    <div id="header">
      <button id="back" class="round" @click="goToLogIn">&#8249;</button>
      <h1>Reset Password</h1>
    </div>

    <form id="resetForm" @submit.prevent="resetPassword">
      <div class="formField">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="Enter your email here" required>
      </div>
      <button id="resetButton" type="submit">Send Password Reset Link</button>
    </form>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
    name: "ForgetPassword",
    data() {
        return { email: "" };
    },
    methods: {
        resetPassword() {
            const auth = getAuth();
            sendPasswordResetEmail(auth, this.email)
                .then(() => {
                    alert('Link to reset your password has been sent to your email');
                    this.$router.push({ name: 'LogInPage' });
                })
                .catch(error => {
                    alert(error.message);
                });
        },
        goToLogIn() {
            this.$router.push({ name: 'LogInPage' });
        }
    }
}
</script>


<style scoped>
#PasswordReset {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#header {
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-bottom: 20px;
    width: 100%; 
}

#header h1 {
    margin: 0;
    font-size: 24px; 
    white-space: nowrap; 
}

#resetForm {
    width: 70%; /* Increase width for a wider form */
    max-width: 500px; /* Set a maximum width if needed */
}

.formField {
    margin-bottom: 20px;
}

input[type="email"] { /* Targeting only email input */
    width: auto;
    min-width: 250px; 
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
    height: 40px;
    border-radius: 10px;
}

#resetButton {
    width:auto; 
    min-width: 250px; 
    padding: 15px 0; 
    background-color: dodgerblue;
    border: 2px solid dodgerblue;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 18px; 
    transition-duration: 0.4s;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
}

#resetButton:hover {
    background-color: deepskyblue;
    border: 2px solid deepskyblue;
}

#back {
    padding: 8px 16px; 
    border: none;
    background-color: #f1f1f1;
    color: black;
    border-radius: 20px; 
    margin-right: 10px;
    font-size: 16px; 
    cursor: pointer; 
}

#back:hover {
    background-color: #ddd;
    color: black;
}

</style>
