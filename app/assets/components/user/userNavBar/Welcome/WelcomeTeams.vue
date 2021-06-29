<template>
  <div>
      <div class="h-full flex flex-col justify-around items-center">
        <div class="flex flex-row w-full justify-evenly justify-center items-center">
              <div  class="w-24 h-24 group cursor-pointer" >
                <img class="w-24 h-24" :src="`/assets/images/departments/${departmentID}`">
              </div>
              <div class="text-5xl text-sideBar-primary uppercase italic">Equipo de {{departmentName}}</div>
        </div>
      </div>
    <div>
        <TabsComponent :departmentID="departmentID" :departmentName="departmentName"></TabsComponent>
    </div>
  </div>
</template>

<script>
import TabComponent from './tabs/TabComponent.vue'
import TabsComponent from './tabs/TabsComponent.vue'
import {getAllTeamsFromDepartment} from '../../../../servicies/userServicies'
export default {
    components: {
    TabComponent,
    TabsComponent
  },
    props: {
        departmentName: String,
        departmentID: String
    },
    data(){
    return {
      teams: [],
    }
  },
    mounted(){
        const token = localStorage.getItem('validation_token');
        getAllTeamsFromDepartment(token, this.departmentID)
        .then(data => (this.teams = data));
    },
}
</script>

<style>

</style>