import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBhNgudDWqUxpc-d0NN4EkYKLahkigNd8",
  authDomain: "vueproject-7.firebaseapp.com",
  projectId: "vueproject-7",
  storageBucket: "vueproject-7.appspot.com",
  messagingSenderId: "1003686712839",
  appId: "1:1003686712839:web:2b8769956c68c09b4d7ca2",
  measurementId: "G-8YDDLQX2RV"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  }, {
    path: '/products',
    component: ProductsPage,
  }, {
    path: '/',
    redirect: '/products',
  }, {
    path: '/products/:productId',
    component: ProductDetailPage,
  }, {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))
.mount('#app')
