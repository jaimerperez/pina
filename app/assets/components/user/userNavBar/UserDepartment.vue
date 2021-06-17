<template>
  <div class="h-full w-full flex flex-col justify-around items-center text-4xl text-sideBar-primary font-semibold">
    <div class="header-content-tittle w-full mt-4">
      <div class="tittle-header ml-20 mb-4 ">
          Equipos
      </div>
      <div class="spacer bg-sideBar-primary w-11/12 h-0.5 m-auto"></div>
    </div>
    <div class="department-content w-full h-full flex flex-wrap flex-row justify-center items-center">
      <div class="flex h-2/5 w-2/5 justify-center items-center align-middle" v-for="index in teamsDepartment" :key="index.id" :value="index.id">
        <ChangeImg :ID="index.id"/>
        <router-link :to="{ name: 'welcometeams', params: {departmentName: index.name, departmentID: index.id } }"> <p class="text-center"> {{index.name}}</p> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllTeamsFromDepartment, getUserDepartments, getUserToken, postDepartment} from '../../../servicies/userServicies';
import ChangeImg from './ChangeImg.vue';
export default {
  components: { ChangeImg },
  data(){
    return {
      userDepartmentInfo: [],
      teamsDepartment: [],
      userInfo: [],
      name: "",
      departmentname: "",
      selectedFile: null,
      exist: false
    }
  },
  methods:{
    show () {
        this.$modal.show('my-first-modal');
    },
     hide () {
        this.$modal.hide('my-first-modal');
    },
    createDepartment(){
        const token = localStorage.getItem('validation_token');
        const formData = new FormData()
        formData.append('name', this.departmentname);
        formData.append('token', token);
        postDepartment(formData)
      },
     
  },
 created() {
    //GET USER
        const token = localStorage.getItem('validation_token');
      getUserToken(token)
        .then(data => {
          this.userInfo = data
         getUserDepartments(token, this.userInfo.id)
            .then(data => {
              this.userDepartmentInfo = data
            
             getAllTeamsFromDepartment(token, this.userDepartmentInfo[0].id)
             .then(data => (this.teamsDepartment = data));
        });
      });
      
  },
  
}
</script>

<style>

</style>