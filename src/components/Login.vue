<template>

<div>
<AppHeader />
<section>
<h3>welcome to afric foods</h3>

</section>

  <div>
<h3>Login</h3>

        <form action="" @submit.prevent="handleSubmit">
          <label for="email"></label>
          <input
            type="email"
            required
            v-model="formData.email"
            id="email"
            name="email"
            placeholder="joejimmy@gmail.com |"
          /><br />
          <label for="password"></label>
          <input
            type="password"
            required
            v-model="formData.password"
            id="password"
            name="password"
            placeholder="password"
          />
          <!-- <div v-if="passwordError" class="error">{{ passwordError }}</div> -->

         
          <!-- <div v-if="roleError" class="error">{{ roleError }}</div> -->
 <br />
          <button>
            <a href="#">Sign up</a>
          </button>
        </form>

  </div>
</div>
  
</template>

<script>
import AppHeader from "../components/AppHeader.vue"
  export default {

    components:{
      AppHeader
    }
,
data() {
return{
formData: {
email: "",
password: "",
}
}
},

methods: {
handleSubmit(){

console.log(this.formData);


this.$http
.post("auth/login", this.formData)
.then((res) => {
 console.log("success");
})
.catch((err) => {
 console.log("error");
})
}
}
    
  }
</script>

<style scoped>

</style>