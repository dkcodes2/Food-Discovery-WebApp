import { createRouter, createWebHistory } from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth"

import LogInPage from '@/views/LogInPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import CreatePost from '@/views/CreatePostPage.vue';

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
    path: '/createPost',
    name: 'CreatePost',
    component: CreatePost,
  },

];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

let isAuthenticated = false;

const authPromise = new Promise((resolve) => {
  onAuthStateChanged(auth, (user) => {
    isAuthenticated = !!user;
    resolve();
  });
});


export default router;


