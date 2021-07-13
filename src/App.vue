<template>
  <div id="app">
<!-- <Register /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Register from "./components/Register.vue"
import PostList from "./components/PostList.vue";
// import CreatePost from "./components/CreatePost.vue";
import ListBlog from "./components/ListBlog.vue";
import AppHeader from "./components/AppHeader.vue"

export default {
  components: {
    ListBlog,
     PostList,
     AppHeader,
    // CreatePost,
     Register,
  },
};
</script>

<style scoped>

#app {
 
}
</style>