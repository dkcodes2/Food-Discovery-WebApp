<template>
  <div id="container">
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