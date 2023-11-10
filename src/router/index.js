import { createRouter, createWebHistory } from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth"

import LogInPage from '@/views/LogInPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import CreatePostPage from '@/views/CreatePostPage.vue';

import HomePage from '@/views/HomePage.vue';
import Japanese from '@/views/Japanese.vue';
import Korean from '@/views/Korean.vue';
import Western from '@/views/Western.vue';
import Local from '@/views/Local.vue';
import Others from '@/views/Others.vue';

import userQueryDisplayPage from '@/views/userQueryDisplayPage.vue';

import OwnProfilePage from '@/views/OwnProfilePage.vue'; 
import OthersProfilePage from '@/views/OthersProfilePage.vue';
import FollowingPage from '@/views/FollowingPage.vue';
import WorkingFollowingPage from '@/views/WorkingFollowingPage.vue';


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
    name: 'CreatePostPage',
    component: CreatePostPage,
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
      component: Others,
  },
  {
    path: "/userquerydisplay",
    name: "UserQueryDisplayPage",
    component: userQueryDisplayPage,


    props: route => ({searchString: route.query.q})
  },
  {
    path: "/ownprofilepage",
    name: "OwnProfilePage",
    component: OwnProfilePage,
  },
  {
    path: "/othersprofilepage",
    name: "OthersProfilePage",
    component: OthersProfilePage,

    props: route => ({username: route.query.q})
  },
//   {
//     path: "/followingpage",
//     name: "FollowingPage",
//     component: FollowingPage,

//     props: route => ({username: route.query.q})
//   },
  {
    path: "/workingfollowingpage",
    name: "WorkingFollowingPage",
    component: WorkingFollowingPage,

    props: route => ({username: route.query.q})
  }
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