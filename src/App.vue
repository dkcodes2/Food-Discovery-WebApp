<template>
  <div id="container">
    <div id="nav" v-if="user && $route.name !== 'SignUpPage' && $route.name !== 'LogInPage' && $route.name !== 'PasswordRecoveryPage'">
      <router-link to="explore" class="routerlink" style="margin-right: 1vw;"> Explore </router-link> |
      <router-link to="profilelistings" class="routerlink" style="margin-right: 1vw;"> Profile </router-link> |
      <router-link to="sell" class="routerlink"> Sell </router-link> 
    </div>
    <router-view />
  </div>
</template>


<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  data() {
    return {
      user: false
    }
  }
}

</script>