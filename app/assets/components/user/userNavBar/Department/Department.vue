<template>
  <div class="h-full">
      <div class="h-auto flex flex-row justify-around bg-block-working-secondary">
          <div>logo</div>
          <button>crear una incidencia</button>
          <button>incidencias abiertas</button>
          <button>incidencias cerrradas</button>
          <div>has accedido como </div>
      </div>
      <div class="h-full flex flex-col justify-around items-center">
          
        <div class="flex flex-col justify-around items-center">
            SOLICITUD DE TAREAS
            <div>
                Departamento de {{departmentName}}
            </div>
        </div>
        <div v-for="index in teams" :key="index.id">
            <div class="flex flex-col justify-around items-center mt-10 ">
                <div class="spacer bg-gray-100 w-3/6 h-0.5 m-auto "></div>
                <span class="text-xl">{{index.name}}</span> 
                <div class="flex flex-col justify-content items-center">
                    <div class="">
                        ¿Tienes algún problema? 
                    </div>
                    <div><button class="bg-sideBar-primary text-white m-auto"><router-link :to="{ name: 'incidencias', params: {teamName: index.name,departmentName: departmentName, teamID: index.id } }" > HAZ CLICK AQUI </router-link></button></div>   
                </div>
            </div>
        </div>
        
      </div> 
  </div>
</template>

<script>
import {getAllTeamsFromDepartment} from '../../../../servicies/userServicies'
export default {
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
    }
}
</script>

<style>

</style>