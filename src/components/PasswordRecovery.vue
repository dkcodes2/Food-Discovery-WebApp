<template>
  <div id="PasswordReset">
    <div id="header">
      <button id="back" class="round" @click="goToLogIn">&#8249;</button>
      <h1>Reset Password</h1>
    </div>

    <form id="resetForm" @submit.prevent="resetPassword">
      <div class="formField">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="johndoe@gmail.com" required>
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
    margin-bottom: 20px;
}

#resetForm {
    width: 50%; /* Increased width for a wider form */
}

.formField {
    margin-bottom: 20px;
}

input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
    height: 40px;
    border-radius: 10px;
}

#resetButton {
    width: 100%;
    padding: 15px 0; /* Increased padding for a taller button */
    background-color: #60cbb8;
    border: 2px solid #60cbb8;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 18px;
    transition-duration: 0.4s;
}

#resetButton:hover {
    background-color: #14a88d;
    border: 2px solid #14a88d;
}

#back {
    padding: 8px 16px;
    border: none;
    background-color: #f1f1f1;
    color: black;
    border-radius: 50%;
    margin-right: 10px;
}

#back:hover {
    background-color: #ddd;
    color: black;
}
</style>
