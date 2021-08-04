<template>
  <div class="flex flex-col m-10 text-fontColor-primary">
    <div class="header h-16 flex justify-around items-center ">
      <div>
        <span class="flex flex-row text-4xl">
          <icon-base iconColor="#4D4D4D" viewBox="0 0 653.33 648.33" width="40" height="40" icon-name="stored"><Stored/></icon-base>
          <h1>Tareas archivadas</h1>
          <h1 class="font-bold">&nbsp;/&nbsp;{{boardName}}</h1>
        </span>
        <h2 class="italic text-base mt-5">Las tareas que ya no uses se guardarán aquí hasta que las vuelvas a necesitar</h2>
      </div>
      <div class="flex">
        <div class="class-icon flex px-4 cursor-pointer">
          <icon-base iconColor="#4D4D4D" viewBox="0 0 653.33 648.33" width="25" height="25" icon-name="filter"><Filtro/></icon-base>
          <span v-popover:filter.bottom v-if="fecha">Fecha</span>
          <span v-popover:filter.bottom v-else-if="user">Usuario</span>
          <span v-popover:filter.bottom v-else-if="tarea">Tarea</span> 
          <span v-popover:filter.bottom v-else>Filtro ▼</span>
        </div>
        
        <div v-if="fecha == false" class=" relative text-gray-600 focus-within:text-gray-400 border-2 border-black rounded-full">  
            <div class="absolute inset-y-0 left-0 flex items-center pl-2">
              <icon-base iconColor="#4D4D4D" width="15" height="15" icon-name="search"><Search/></icon-base>
            </div>
            <input  type="search" id="search" v-model="search" name="email" placeholder="Buscar" class="pl-10 rounded-lg z-0 focus:shadow focus:outline-none" >
        </div>
        <datepicker v-else @input="filterDate" placeholder="Selecciona una fecha" :format="format" v-model="datepicked"></datepicker>
      </div>
    </div>
   <div class="spacer bg-fontColor-primary w-[77%] h-0.5 my-4 mx-auto"></div>

    <div v-for="(items,index) in filteredTask" :key="items.id" class="taskstored-content flex flex-col mt-10">
      <div class="w-[79%] flex flex-row justify-between justify-self-center self-center p-5" :class="index%2 == 0 ? '' : 'bg-sideBar-primary bg-opacity-20'">
        <div>
          <div class="flex flex-row justify-center items-center">
            <img class="rounded-full w-14 h-14 mx-4" :title="searchForUsersName(items.id_user_update)" :src="`/assets/images/users/${items.id_user_update}`">
            <span>
              {{searchForUsersName(items.id_user_update)}}archivó el elemento&nbsp;
            </span>
            <span class="font-bold">{{items.name}}</span>
            <span>&nbsp; del tablero</span>
            <span class="font-bold">&nbsp;Marketing</span>
          </div>
          {{items.time_limit}}
        </div>
        <div>
          <button class="border rounded-xl bg-buttonColor-primary text-black self-end py-2 px-4" @click="restore(items.id)"> Restaurar </button>
        </div> 
      </div>
    </div>
        <popover name="filter" :width="250">
            <div @click="setFilterDate" class="flex flex-row justify-evenly cursor-pointer hover:bg-blue-500 hover:text-white">
              <div>
                Filtrar por 
                <span class="font-bold">&nbsp;fecha</span>
              </div>
              <img class="w-8 h-8" src="/assets/images/icons/calendar.svg" alt="">
            </div>
            <div @click="setFilterUser"  v-popover:users.bottom class="cursor-pointer flex flex-row justify-evenly hover:bg-blue-500 hover:text-white">
              <div>
                Filtrar por 
                <span class="font-bold">
                  &nbsp;usuario
                </span>
              </div>
              <img class="w-8 h-8" src="/assets/images/icons/userfilter.svg" alt="">
            </div>
            <div @click="setAllfalse" class="cursor-pointer flex flex-row hover:bg-blue-500 hover:text-white">
              X
            </div>
        </popover>

        <popover :name="'users'" :width="350">
            <div v-for="user in usuarios" :key="user.id" class="inline-block w-32 mx-4">
                <img @click="iduser = user.id " class="rounded-full cursor-pointer w-8 h-8 m-2"  :src="`/assets/images/users/${user.id}`">
                {{searchForUsersName(user.id)}}
            </div>
            <button class="rounded-full w-5 h-5 bg-white text-black self-center" v-on:click="filterMember(0)">
              X
            </button>
        </popover>
  </div>
</template>

<script>
import Vue from 'vue';
import {getTaskStored, getAllUsers, postStoreTask} from '../../../../../servicies/userServicies'
import IconBase from '../../../../icons/IconBase.vue'
import Filtro from '../../../../icons/Filtro.vue'
import Search from '../../../../icons/Search.vue'
import Stored from '../../../../icons/Stored.vue'
import Popover from 'vue-js-popover'
import Datepicker from 'vuejs-datepicker';
Vue.use(Popover)
export default {
name: 'StoreFile',
components:{
  IconBase,
  Filtro,
  Stored,
  Search,
  Datepicker
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
      iduser: '',
      date: '',
      filt: false,
      fecha: false,
      user: false,
      tarea: false,
      datepicked: '',
      datefinal: '',
      format: 'yyyy-MM-dd'
    }
  },
  created(){
    this.fetchData()
  },
  methods:{
    fetchData(){
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
          this.iduser = id
        },
        setFilterDate(){
          this.fecha= !this.fecha;
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
        },
        filterDate(){
          let date2 = new Date(this.datepicked)
          let dayend = date2.getDate()
          let monthend = date2.getMonth()+1
          let yearend = date2.getFullYear()

          if(monthend > 9)
            this.datefinal = yearend + '-' + monthend + '-' + dayend
          else
            this.datefinal = yearend + '-' + '0' + monthend + '-' + dayend
        },
        openPicker() {
          this.$refs.programaticOpen.showCalendar();
        },
        restore(id_task){
           const formData = new FormData()
            formData.append('token', localStorage.getItem('validation_token'));
            let promise = new Promise((resolve, reject) => {
                resolve(postStoreTask(formData, id_task));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        }
        
  }, 
  computed:{
    filteredTask: function(){
          return this.taskstored.filter((task) => {
            if(this.fecha)
              return task.time_limit.match(this.datefinal)
            else if(this.user)
              return task.id_user_update.match(this.iduser)
            else
              return task.name.toUpperCase().match(this.search.toUpperCase())
          });
    
  }
}

}
</script>

<style>

</style>