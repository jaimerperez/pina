<template>
<div class="w-full h-full flex flex-col justify-center items-center text-Barlow">
    <img class=" sm:h-4/6 sm:w-10/12 xl:w-96 xl:h-96" :src="require('../media/LOGO/LOGO_Piña-01.png')">
  <div class="w-full h-full flex flex-col font-Barlow text-fontColor-primary">
    <div class="flex pb-4">
      <label for="email" class="w-2/6 text-right mx-3 lg:text-3xl pr-4">Email </label>
      <input v-on:keyup.enter="login" type="email" id="email" name="email" v-model="input.email" class="w-2/6 lg:w-4/12 lg:h-full bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-2xl" >
    </div>
    <div class="flex py-2">
      <label for="password" class=" w-2/6 text-right mx-3 lg:text-3xl pr-4" > Contraseña </label>
      <input v-on:keyup.enter="login" type="password" id="password" name="password" v-model="input.password" class="w-2/6 lg:w-4/12 lg:h-full bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-2xl">
    </div>
    <div class="relative left-9 md:left-[250px] lg:left-[450px] 2xl:left-[650px] py-2"><router-link class="text-right mx-3 pr-4 italic lg:text-lg text-fontColor-primary" to='/passwordreset'>¿ Olvidaste la contraseña ?</router-link></div>
    <div class="flex  justify-center items-center mt-10">
      <button type="button" v-on:click="login" class="w-4/12 lg:w-1/12 lg:h-5/6 my-3 inline-flex items-center justify-center bg-buttonColor-primary hover:bg-opacity-50 lg:text-xl text-black rounded-3xl">Entrar </button>
    </div>
  </div>
  
</div> 
</template>

<script>
import {Login} from '../servicies/userServicies'
import { getUserToken, getAllTeamsFromUser} from '../servicies/userServicies'
export default {
    name: 'Login',
    data(){
      return{
        getUsers: [],
        userInfo: [],
        teams:[],
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
            
            const token = localStorage.getItem('validation_token');
            getUserToken(token).then(data => {
              this.userInfo = data
              getAllTeamsFromUser(token, this.userInfo.id).then(data =>{
                (this.teams = data)
                this.$router.push('/board/' + this.teams[0].id + '/' + this.teams[0].name)
              })
            })
          })
          .catch(error => {
            this.errorMessage = error;
            console.error('There was an error!', error);
            
          });
      },
    }
}
</script>
