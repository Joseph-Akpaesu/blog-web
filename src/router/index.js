import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import PostList from "@/components/PostList.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },

    { path: "/c", component: PostList },
    { path: "/register", component: Register },

    { path: "/login", component: Login},

    { path: "/login", component: Login }

  ]
});
