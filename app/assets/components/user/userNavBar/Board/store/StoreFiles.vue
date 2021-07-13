<template>
  <div class="flex flex-col m-10 text-fontColor-primary">
    <div class="header h-16 flex  justify-evenly items-center ">
      <span>
        <span class="flex flex-row text-4xl">
          <icon-base iconColor="#4D4D4D" viewBox="0 0 653.33 648.33" width="40" height="40" icon-name="stored"><Stored/></icon-base>
          <h1>Tareas archivadas</h1>
          <h1 class="font-bold">/{{boardName}}</h1>
        </span>
        <h2 class="italic text-base mt-5">Las tareas que ya no uses se guardarán aquí hasta que las vuelvas a necesitar</h2>
      </span>
      <div class="flex">
        <div class="class-icon flex px-4 cursor-pointer">
          <icon-base iconColor="#4D4D4D" viewBox="0 0 653.33 648.33" width="25" height="25" icon-name="filter"><Filtro/></icon-base>
          <span v-popover:filter.bottom v-if="fecha">Fecha</span>
            <small v-if="fecha">La búsqueda por fecha debe hacerse en formato yyyy-mm-dd</small>
          <span v-popover:filter.bottom v-else-if="user">Usuario</span>
          <span v-popover:filter.bottom v-else-if="tarea">Tarea</span> 
          <span v-popover:filter.bottom v-else>Filtro ▼</span>
        </div>
        
        <div class=" relative text-gray-600 focus-within:text-gray-400 border-2 border-black rounded-full">  
            <div class="absolute inset-y-0 left-0 flex items-center pl-2">
              <icon-base iconColor="#4D4D4D" width="15" height="15" icon-name="search"><Search/></icon-base>
            </div>
            <input type="search" id="search" v-model="search" name="email" placeholder="Buscar" class="pl-10 rounded-lg z-0 focus:shadow focus:outline-none" >
        </div>
      </div>
       
    </div>
   
    <div v-for="items in filteredTask" :key="items.id" class="taskstored-content mt-10 flex flex-col ">
      <div class="spacer bg-fontColor-primary justify-self-center self-center h-0.5 my-4 w-9/12"></div>
      <div class="flex flex-row justify-evenly p-5" >
        <div>
          <div class="flex flex-row justify-center items-center">
            <img class="rounded-full w-14 h-14 mx-4" :title="searchForUsersName(items.id_user_update)" :src="`/assets/images/users/${items.id_user_update}`">
            <span>
              {{searchForUsersName(items.id_user_update)}}archivó el elemento&nbsp;
            </span>
            <span class="font-bold">{{items.name}}</span>
          </div>
          <div>
            {{items.updated_at}}
          </div> 
        </div>
        <div>
          <button class="border rounded-xl bg-sideBar-primary text-white self-end py-2 px-4"> Restaurar </button>
        </div> 
      </div>
    </div>
        <popover name="filter" :width="250">
            <div @click="setFilterDate" class="cursor-pointer hover:bg-blue-500 hover:text-white">
              filtrar por fecha
            </div>
            <div @click="setFilterUser"  v-popover:users.bottom class="cursor-pointer hover:bg-blue-500 hover:text-white">
              filtrar por usuario
            </div>
            <div @click="setFilterName" class="cursor-pointer hover:bg-blue-500 hover:text-white">
              filtrar por nombre de tarea
            </div>
            <div @click="setAllfalse" class="cursor-pointer hover:bg-blue-500 hover:text-white">
              X
            </div>
        </popover>
        <popover :name="'users'" :width="150">
            <div v-for="user in filteredTask" :key="user.id" class="inline-block">
                <img v-on:click="filterMember(user.id_user_update)" class="rounded-full cursor-pointer w-8 h-8 m-2"  :src="`/assets/images/users/${user.id_user_update}`">
                {{searchForUsersName(user.id_user_update)}}
            </div>
            <button class="rounded-full w-5 h-5 bg-white text-black self-center" v-on:click="filterMember(0)">
              X
            </button>
        </popover>
  </div>
</template>

<script>
import Vue from 'vue';
import {getTaskStored, getAllUsers} from '../../../../../servicies/userServicies'
import IconBase from '../../../../icons/IconBase.vue'
import Filtro from '../../../../icons/Filtro.vue'
import Search from '../../../../icons/Search.vue'
import Stored from '../../../../icons/Stored.vue'
import Popover from 'vue-js-popover'
Vue.use(Popover)
export default {
name: 'StoreFile',
components:{
  IconBase,
  Filtro,
  Stored,
  Search
},
  props:{
    boardName: String,
    boardId: String,
  },
  data(){
    return{
      taskstored: [],
      usuarios: [],
      userfilter: [],
      search: '',
      date: '',
      filt: false,
      fecha: false,
      user: false,
      tarea: false,
    }
  },
  created(){
    const token = localStorage.getItem('validation_token');
      getTaskStored(token, this.boardId)
       .then(data => (this.taskstored = data));
       getAllUsers(token)
        .then(data => (this.usuarios = data));

        for(items in this.taskstored){
          if(!userfilter.includes( this.taskstored.id_user_update))
              userfilter.push(this.taskstored.id_user_update)
        }
  },
  methods:{
     searchForUsersName(id_user){
            for(let items of this.usuarios)
            {
                if(id_user == items.id)
                    if(items.name == null)
                        return items.email
                    else
                        return items.name
            }
            return false
        },
        filterMembers(id){
          this.search = id
        },
        setFilterDate(){
          this.fecha=true;
          this.user = false;
        },
         setFilterUser(){
          this.fecha=false;
          this.user = true;
        },
        setFilterName(){
          this.fecha = false;
          this.user= false;
          this.tarea=true;
        },
        setAllfalse(){
          this.fecha = false;
          this.user= false;
          this.tarea = false
        }
        
  }, 
  computed:{
    filteredTask: function(){
          return this.taskstored.filter((task) => {
            if(this.fecha)
              return task.time_limit.match(this.search)
            else if(this.user)
              return task.id_user_update.match(this.search)
            else
              return task.name.match(this.search)
          });
    
  }
}

}
</script>

<style>

</style>