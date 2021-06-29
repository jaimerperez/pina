<template>
  <div class="h-full w-full flex flex-col justify-around items-center text-4xl text-sideBar-primary font-semibold">
    <div class="header-content-tittle w-full mt-4">
      <div class="tittle-header ml-20 mb-4 ">
          Solicitud de incidencias
      </div>
      <div class="spacer bg-sideBar-primary w-11/12 h-0.5 m-auto"></div>
    </div>
    <div class="department-content w-full h-full flex flex-wrap flex-row justify-center items-center">
      <div class="flex h-2/5 w-2/5 justify-center items-center align-middle" v-for="index in teamsDepartment" :key="index.id" :value="index.id">
        <img class="w-24 h-24" :src="`/assets/images/departments/${index.id}`">
        <div>
           <p class="text-center"> {{index.name}}</p> 
          <div class="text-lg"><InformationText :id="index.id" :teamName="index.name" :deparmentName="departmentName"/></div>
        </div>
         
      </div>
    </div>
  </div>
</template>

<script>
import {  postDepartment, getAllTeamsFromDepartment } from '../../../servicies/userServicies';
import InformationText from './Department/InformationText.vue';
export default {
  components: { InformationText },
  props:{
    departmentID: String,
    departmentName: String, 
  },
  data(){
    return {

       teamsDepartment: [],
      name: "",
      departmentname: "",
    }
  },
  methods:{
    createDepartment(){
        const token = localStorage.getItem('validation_token');
        const formData = new FormData()
        formData.append('name', this.departmentname);
        formData.append('token', token);
        postDepartment(formData)
      },
  },
  mounted() {
    //GET USER
        const token = localStorage.getItem('validation_token');
             getAllTeamsFromDepartment(token, this.departmentID)
             .then(data => (this.teamsDepartment = data));
      },
  
}
</script>
