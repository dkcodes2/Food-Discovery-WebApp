<template>
  <div id = "nav">
    <router-link to="HomePage" class="routerlink" style="margin-right: 1vw;"> Discover </router-link> |
      <router-link to="HomePage" class="routerlink" style="margin-right: 1vw;"> Profile </router-link> |
      <router-link to= "HomePage" class="routerlink"> Logout </router-link>     
  </div>
  <div id="nav-search">
    <input v-model = "searchInput" type="text" placeholder = "&#128269; search for friends">&nbsp;

    <button class = "btn" @click="routeToSearch" role = "link"> search</button>  &nbsp;  &nbsp;  &nbsp;

  </div>
  <!-- <div id="nav" v-if="user && $route.name !== 'SignUpPage' && $route.name !== 'LogInPage' && $route.name !== 'PasswordRecoveryPage'"> -->

    <!-- </div> -->
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
        }
    }
}

</script>

<style scoped>
#nav-search {
    margin-left: 50px;
    display: inline-block;
}

#nav {
    margin-left: 100px;
    padding: 30px;
    text-align: center;
    display: inline-block;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
.btn {
    min-width:70px;
    padding: 5px;
    background-color: dodgerblue;
    border: none;
}
</style>