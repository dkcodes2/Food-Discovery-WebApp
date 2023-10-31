import { createRouter, createWebHistory } from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth"

import LogInPage from '@/views/LogInPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import userQueryDisplayPage from '@/views/userQueryDisplayPage.vue';

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
    path: "/userquerydisplay",
    name: "UserQueryDisplayPage",
    component: userQueryDisplayPage,
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


