import { createRouter, createWebHistory } from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth"

import LogInPage from '@/views/LogInPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import OwnProfilePage from '@/views/OwnProfilePage.vue';

const auth = getAuth();

const routes = [
  {
    path: "/",
    name: "LogInPage",
    component: LogInPage,
  },
  {
    path: "/signup",
    name: "SignUpPage",
    component: SignUpPage,
  },
  {
    path: "/ownProfile",
    name: "OwnProfilePage",
    component: OwnProfilePage,
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

/*let isAuthenticated = false;

const authPromise = new Promise((resolve) => {
  onAuthStateChanged(auth, (user) => {
    isAuthenticated = !!user;
    resolve();
  });
});*/


export default router;


