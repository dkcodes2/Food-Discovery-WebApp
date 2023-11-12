<template>  
  <div id="main">
        <img class = "logo" src = "@/assets/logo_transparent.png" alt = "logo">
        <div id = "nav">
            <router-link to="HomePage" class="routerlink" style="margin-right: 1vw;"> Discover </router-link>
            <router-link to="OwnProfilePage" class="routerlink" style="margin-right: 1vw;"> Profile </router-link>
            <button class="logout-button" @click="logout" > Logout </button>       
        </div>
        <div id="nav-search">
            <input v-model = "searchInput" type="text" placeholder = "&#128269; search for friends">&nbsp;
            <button class = "btn" @click="routeToSearch" role = "link"> search</button>  &nbsp;  &nbsp;  &nbsp;
        </div>
        <div id="post">
            <button class="btn" @click = "routeToPost"> Post </button>
        </div>
  </div>
  
<!-- >>>>>>> 4a3d3f4f400275f99d2711d8d4d336dda1a36b12 -->

  <!-- <div id="nav" v-if="user && $route.name !== 'SignUpPage' && $route.name !== 'LogInPage' && $route.name !== 'PasswordRecoveryPage'"> -->

    <!-- </div> -->
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
    data() {
        return {
            searchInput: ""        
    }
    },
    methods: {
        routeToSearch() {
           this.$router.push({ path:'/userquerydisplay', query: {q: this.searchInput} })
           this.searchInput = ""
        },
        routeToPost() {
            this.$router.push({ name: 'CreatePostPage'} ) // to change to route to createpostpage
        },
        logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
                this.$router.push({ name: 'LogInPage' }); // Use the route name or path of your login page
            }).catch((error) => {
                // An error happened.
                console.error("Logout failed", error);
                alert("Failed to log out. Please try again.");
            });
        }
    }
}
</script>

<style scoped>
/* Main Container Styles */
#main {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    margin-bottom: 20px; /* Space below navbar */

    width: 700px;
    margin-left: auto;
    margin-right: auto;
}

/* Navigation Styles */

.logo {
    display:flex;
    width: 70px;
    height: 70px;
}

#nav {
    display: flex;
    align-items: center;
}

#nav-search {
    display: flex;
    align-items: center;
    margin-left: 50px; /* Adjust as needed */
}

#post {
    display: flex;
    align-items: center;
}

.routerlink {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
    text-decoration: none;
}

.routerlink:hover {
    color: dodgerblue;
}

.logout-button {
    background: none;
    border: none;
    color: #2c3e50;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
}

.logout-button:hover {
    color: rgb(0, 136, 255);
}

/* Button Styles */
.btn {
    min-width: 70px;
    padding: 5px;
    background-color: dodgerblue;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 5px; /* Rounded corners */
}

.btn:hover {
    background-color: deepskyblue;
}

/* Input field styles, similar to the login page example you provided */
input[type="text"], input[type="email"], input[type="password"], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 10px; /* Rounded corners */
    box-sizing: border-box;
}

input[type="text"]::placeholder {
    text-align: center;
}

input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus {
    outline: 3px solid rgba(43, 41, 41, 0.933);
}

/* Post Creation Form Styles */
#postcreate {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    max-width: 800px; /* Limit the width of the form */
    margin: auto; /* Center the form in the page */
}

#postheader {
    text-align: center;
    background-color: #e3e3e3;
    width: 100%;
    padding: 20px 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 20px;
}

#postheader h2 {
    font-size: 24px; /* Adjust font-size as needed */
    font-weight: bold;
    color: #333;
}

#leftcontainer, #rightcontainer {
    width: 100%;
}

#postphoto {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 10px;
}

/* Button styling to match the login page example */
#buttonsupdate button, label[for="uploadbutton"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 10px; /* Rounded corners */
    background-color: #60cbb8;
    color: white;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
}

#buttonsupdate button:hover, label[for="uploadbutton"]:hover {
    background-color: #14a88d;
}

/* Additional styling for other elements as needed */
/* ... */


</style>