<template>
  <div>
      <div class="h-full flex flex-col justify-around items-center">
        <div class="flex flex-row w-full justify-center items-center">
              <img class="w-40 h-40" :src="`/assets/images/teams/${departmentID}.svg`">
              <div class="text-5xl text-fontColor-primary uppercase italic">Departamento de {{departmentName}}</div>
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