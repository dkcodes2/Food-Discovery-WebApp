<template>  
  <div id="main">
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
            this.$router.push({ path:'/homepage'} ) // to change to route to createpostpage
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
#main {
    font-family: Arial, Helvetica, sans-serif
}

#nav-search {
    margin-left: 50px;
    display: inline-block;
}

#nav {
    padding: 30px;
    text-align: center;
    display: inline-block;
}

#post {
    display: inline-block;
}

/* #nav a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
} */

.routerlink{
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
    text-decoration: none;
}

.routerlink:hover{
    /* background-color:dodgerblue; */
    color:dodgerblue;
}

.routerlink:active{
    color:darkblue;
}

/* #nav a.router-link-exact-active {
    color: #42b983;
} */
.btn {
    min-width:70px;
    padding: 5px;
    background-color: dodgerblue;
    border: none;
}

.btn:hover {
    background:deepskyblue;
}

.btn:active {
    background: deepskyblue;
    color: white;
}
.logout-button {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background: none; /* or 'transparent' if you want it to be completely see-through */
    border: none;
    color: #2c3e50;
    padding: 10px;
    font-size: 17px;
    cursor: pointer; /* To show it's clickable */
    text-decoration: none;
}

.logout-button:hover {
    color:rgb(0, 136, 255);
    background: none
}

.logout-button:active {
    background: deepskyblue;
    color: white;
}

</style>