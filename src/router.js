import VueRouter from 'vue-router'
import Home from "./components/Home";
import FirstMF from "./components/FirstMF";

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/first-mf', component: FirstMF }
  ]
})

export default router
