import { createRouter, createWebHistory } from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth"

import LogInPage from '@/views/LogInPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import HomePage from '@/views/HomePage.vue';
import Japanese from '@/views/Japanese.vue';
import Korean from '@/views/Korean.vue';
import Western from '@/views/Western.vue';
import Local from '@/views/Local.vue';
import Others from '@/views/Others.vue';
import OthersProfilePage from '@/views/OthersProfilePage.vue';
import OwnProfilePage from '@/views/OwnProfilePage.vue'; 
import FollowingPage from '@/views/FollowingPage.vue'; 

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
    path: "/homepage",
    name: "HomePage",
    component: HomePage,
  },
  { 
      path: '/Japanese', 
      name: 'Japanese', 
      component: Japanese 
  },
  { 
      path: '/Korean', 
      name: 'Korean', 
      component: Korean
  },
  {
      path: '/Western',
      name: 'Western',
      component: Western
  },
  {
      path: '/Local',
      name: 'Local',
      component: Local
  },
  {
      path: '/Others',
      name: 'Others',
      component: Others
  },
  {
    path: '/OwnProfilePage',
    name: 'OwnProfilePage',
    component: OwnProfilePage
  },
  {
  path: '/OthersProfilePage',
  name: 'OthersProfilePage',
  component: OthersProfilePage 
  },
  {
    path: '/FollowingPage',
    name: 'FollowingPage',
    component: FollowingPage
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


