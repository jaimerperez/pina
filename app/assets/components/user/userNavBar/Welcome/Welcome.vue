<template>
  <div class="h-full flex flex-col items-center text-4xl">
    <div class="tittle-header ml-20 mb-4 ">
          Departamentos
      </div>
      <div class="spacer bg-sideBar-primary w-11/12 h-0.5 m-auto"></div>
    <div class="department-container h-full flex flex-col justify-around ">
        <div v-for="index in departments" :key="index.id" :value="index.id" class="flex flex-row">
          <div v-if="checkImg(index.id)" >
            <img :src="require(`../../../../media/departments/${index.id}.png`)" class="w-24 h-24 mx-4">
          </div>
          <div v-else>
            <img :src="require(`../../../../media/users/avatar-loading.png`)" class="w-24 h-24 mx-4">
          </div>
            <router-link :to="{ name: 'incidencias', params: {departmentName: index.name, departmentID: index.id } }"> {{index.name}} </router-link>
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
    checkImg(ID){
            try {
                require(`../../../../media/departments/${ID}.png`).default
                return true
                }
                catch (e) {
                    return false
                }
        }
  }
}
</script>

<style>

</style>