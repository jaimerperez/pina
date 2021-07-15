<template>
  <div class="h-full w-full flex flex-col justify-around items-center font-semibold text-4xl">
      <div class="header-content w-full mt-4">
        <div class="tittle-header ml-20 mb-4 "> Departamentos</div>
          
        <div class="spacer bg-black w-11/12 h-0.5 m-auto"></div>
      </div>
      

    <div class="department-container h-full flex flex-col justify-around ">
        <div v-for="index in departments" :key="index.id" :value="index.id" class="flex flex-row">
          <div>
            <img class="w-60 h-60 mx-4" :src="`/assets/images/departments/${index.id}.svg`" >
          </div>
            <router-link class="m-auto" :to="{ name: 'incidencias', params: {departmentName: index.name, departmentID: index.id } }" > {{index.name}} </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { getAllDepartments, getUserDepartments, getUserToken } from '../../../../servicies/userServicies';
export default {
  data(){
    return {
      userDepartmentInfo: [],
      departments: [],
      userInfo: [],
    }
  },
  mounted() {
    //GET USER
        const token = localStorage.getItem('validation_token');
      getUserToken(token)
        .then(data => {
          this.userInfo = data
          getUserDepartments(token, this.userInfo.id).then(data => (this.userDepartmentInfo = data));
        });
        
        getAllDepartments(token)
        .then(data => (this.departments = data));
  },
  methods:{
  }
}
</script>

<style>

</style>