<template>
  <div id="app">
<!-- <Register /> -->
<!-- <Login /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Register from "./components/Register.vue"
import PostList from "./components/PostList.vue";
// import CreatePost from "./components/CreatePost.vue";
import Login from "./components/Login.vue";
import ListBlog from "./components/ListBlog.vue";
import AppHeader from "./components/AppHeader.vue"

export default {
  components: {
    ListBlog,
     PostList,

     AppHeader,
    // CreatePost,

    Login,

     Register,
  },
};
</script>

<style scoped>

#app {

 

  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */

}
</style>