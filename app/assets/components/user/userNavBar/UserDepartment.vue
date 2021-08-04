<template>
  <div class="h-full w-full flex flex-col justify-around items-center text-4xl text-fontColor-primary font-semibold">
    <div class="header-content-tittle w-full mt-4">
      <div class="tittle-header ml-20 mb-4 ">
          Equipos
      </div>
      <div class="spacer bg-fontColor-primary w-11/12 h-0.5 m-auto"></div>
    </div>
    <div class="department-content h-full flex flex-wrap flex-row justify-center items-center">
      <div class="flex h-2/5 w-2/5 items-center align-middle" v-for="index in teamsDepartment" :key="index.id" :value="index.id"> 
        <router-link class="flex flex-row items-center align-middle" :to="{ name: 'welcometeams', params: {departmentName: index.name, departmentID: index.id } }">
          <img class="w-56 h-56" :src="`/assets/images/teams/${index.id}.svg`">
          <p class="text-center text-4xl"> {{index.name}}</p> 
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllTeamsFromDepartment, getUserDepartments, getUserToken, postDepartment} from '../../../servicies/userServicies';
export default {
  components: {  },
  data(){
    return {
      userDepartmentInfo: [],
      teamsDepartment: [],
      userInfo: [],
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
             .then(data => {
               let arraySorted = data
               
               this.teamsDepartment = arraySorted.sort(function(a,b){
                 if (a.name > b.name) {
                    return 1;
                    }
                  if (a.name < b.name) {
                      return -1;
                    }
                  // a must be equal to b
                  return 0;
               })
               
             });
        });
      });
      
  },
  
}
</script>

<style>

</style>