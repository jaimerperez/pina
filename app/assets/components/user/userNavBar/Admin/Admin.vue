<template>
  <div>
      <div>
          Crear usuario
          <button @click="show" class="bg-sideBar-primary p-2 rounded-full text-white">
              CREAR
          </button>
      </div>
      <modal name="my-first-modal">
           <div>
          Crear usuarios
          <input type="email" id="email" name="email" v-model="email" class=" w-11/12 bg-indigo-50 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded shadow" >
        </div>
        <div class="flex justify-center items-center">
          <button type="button" v-on:click="createUser" class="w-4/12 sm:w-4/12 lg:w-2/12 my-3 justify-center inline-flex rounded-md bg-block-complete-primary shadow-xl hover:bg-block-working-primary text-white">create user </button>
        </div>
      </modal>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import {createUser} from '../../../../servicies/userServicies'
export default {
    data(){
        return{
            email: '',
        }
    },
    components: {
        VueEditor
    },
    methods:{
            show () {
                this.$modal.show('my-first-modal');
            },
            hide () {
                this.$modal.hide('my-first-modal');
            },
            createUser(){
            const token = localStorage.getItem('validation_token');
                const formData = new FormData()
                formData.append('email', this.email);
                formData.append('token', token);
                createUser(formData)
            },
        }
    }

</script>

<style>

</style>