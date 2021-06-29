<template>
<div class="w-full h-full flex flex-col justify-center items-center text-Barlow">
    <img class=" sm:h-4/6 sm:w-10/12 xl:w-96 xl:h-96" :src="require('../media/LOGO/LOGO_Piña-01.png')">
  <div class="w-full h-full flex flex-col font-Barlow text-fontColor-primary">
    <div class="flex pb-4">
      <label for="email" class="w-2/6 text-right mx-3 lg:text-3xl pr-4">Email </label>
      <input v-on:keyup.enter="login" type="email" id="email" name="email" v-model="input.email" class="w-2/6 lg:w-4/12 lg:h-full bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-lg" >
    </div>
    <div class="flex py-2">
      <label for="password" class=" w-2/6 text-right mx-3 lg:text-3xl pr-4" > Contraseña </label>
      <input v-on:keyup.enter="login" type="password" id="password" name="password" v-model="input.password" class="w-2/6 lg:w-4/12 lg:h-full bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-lg">
    </div>
    <div class="flex flex-col py-2 justify-center items-center"><router-link class="text-center italic text-lg font-medium text-sideBar-primary" to='/passwordreset'>¿ Olvidaste la contraseña ?</router-link></div>
    <div class="flex  justify-center items-center mt-10">
      <button type="button" v-on:click="login" class="w-4/12 lg:w-1/12 lg:h-5/6 my-3 inline-flex items-center justify-center bg-sideBar-primary hover:bg-block-working-primary lg:text-xl text-white rounded-lg">Entrar </button>
    </div>
  </div>
  
</div> 
</template>

<script>
import {Login} from '../servicies/userServicies'
export default {
    name: 'Login',
    data(){
      return{
        getUsers: [],
        input:{
          email: "",
          password: ""
        }
      };
    },
    methods:{
      login(){
        localStorage.clear()
        const formData = new FormData()
        formData.append('email', this.input.email);
        formData.append('password', this.input.password);
        
        Login(formData)
          .then(data => {
            localStorage.setItem('validation_token', data)
            this.$vToastify.success("Login con éxito");
            this.$router.push('/user/welcome')
          })
          .catch(error => {
            this.errorMessage = error;
            console.error('There was an error!', error);
            this.$vToastify.error("Error");
          });
      },
    }
}
</script>
