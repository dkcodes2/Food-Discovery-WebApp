<template>

  <div id="main">
        <div id = "nav">
            <router-link to="HomePage" class="routerlink" style="margin-right: 1vw;"> Discover </router-link>
            <router-link to="OwnProfilePage" class="routerlink" style="margin-right: 1vw;"> Profile </router-link>
            <router-link to= "HomePage" class="routerlink"> Logout </router-link>     
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

</style>