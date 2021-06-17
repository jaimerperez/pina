<template>
  <div class="sideNavBar-container h-full flex flex-col flex-wrap items-center bg-sideBar-primary md:w-full">
    <div class="h-screen flex flex-col flex-wrap items-center bg-sideBar-primary md:w-full">
      <div class="flex">
        <router-link to="/user/department"><img class="my-10 w-10 h-10 sm:w-24 sm:h-24 " :src="require('../../media/LOGO/LOGO_Piña-02.png')"></router-link>  
      </div>
      <div class="block sm:hidden">
        <button v-on:click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
      </div>
      <div :class="open ? 'block': 'hidden'" class="sidenavBar-element-container flex-grow sm:flex sm:items-center">
        <div class="text-sm h-full flex flex-col items-start sm:flex-grow justify-between">
          <div class="flex flex-col">
          
          <div  class="text-white  ml-3 flex flex-row m-2">
            <icon-base icon-name="boards"><Boards/></icon-base>
            <div @mouseover="active = true" @mouseleave="active = false"> 
              <a class="ml-3 mr-3 group cursor-pointer hover:text-block-working-primary" >Mis tableros</a>
              <div v-show="active" v-for="items in teams" :key="items.id">
                  <router-link :to="{ name: 'teams', params: {boardName: items.name, boardTeamID: items.id }}" class="hover:text-indigo-500">{{items.name}}</router-link>
            </div>
              
            </div>
          </div>
          <div  class="text-white  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2" v-popover:foo.right>
            <icon-base icon-name="notification"><Notification/></icon-base>
            <div> <a class="ml-3 mr-3">Notificaciones</a></div>
            
          </div>
          <div v-if="idRol === 'administrador'|| 'responsable'" class="text-white  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2">
            <icon-base icon-name="department"><Schedule/></icon-base>
            <div> <a class="ml-3 mr-3"><router-link to="/user/department">Departamentos</router-link></a></div>
          </div>
          <div v-if="idRol === 'administrador' || 'responsable'" class="text-white  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2">
            <icon-base icon-name="department" viewBox="0 0 760 652"><Incidencias/></icon-base>
            <div> <a class="ml-3 mr-3"><router-link to="/user/welcome">Incidencias</router-link></a></div>
          </div>
          <div v-if="idRol === 'administrador' || 'responsable'" class="text-white  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2">
            <icon-base icon-name="department" viewBox="0 0 760 652"><Incidencias/></icon-base>
            <div> <a class="ml-3 mr-3"><router-link to="/user/admin">Admin</router-link></a></div>
          </div>
        </div>
          <div class="place-self-center">
            <div v-if="userInfo.id" class="w-12 h-12 place-self-center cursor-pointer m-2">
              <router-link :to="{ name: 'profileUser', params: {idUser: userInfo.id }}">  
              <div v-if="exist">
                <img :src="`/assets/images/users/${userInfo.id}`" @error="require(`../../media/users/avatar-loading.png`)" class="rounded-full">
              </div>
              <div v-else>
                <img :src="require(`../../media/users/avatar-loading.png`)" @error="require(`../../media/users/avatar-loading.png`)" class="rounded-full">
              </div>
              </router-link>     
            </div>
            <div class="place-self-center m-2">
              <button type="button" class="text-white rounded bg-red-500" v-on:click="logout" >LOG OUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <popover name="foo" :width="500">
      Notificaciones
      <div class="flex flex-row justify-around">
        <div class="hover:text-sideBar-primary cursor-pointer">Todos</div>
        <div>No leido</div>
        <div>Me mencionaron</div>
        <div>Me asignaron</div>
      </div>
      <div class="spacer bg-sideBar-primary w-full h-0.5"></div>
    </popover>
  </div>
</template>

<script>
import IconBase from '../icons/IconBase.vue'
import IconAddUser from '../icons/IconAddUser.vue'
import Boards from '../icons/Boards.vue'
import List from '../icons/List.vue'
import Mail from '../icons/Mail.vue'
import Notification from '../icons/Notification.vue'
import Schedule from '../icons/Schedule.vue'
import { getUserToken, getUserDepartments, getAllTeamsFromDepartment } from '../../servicies/userServicies'
import { EventBus } from '../../event-bus'
import Incidencias from '../icons/Incidencias.vue'

export default {
  name: 'UserSideNav',
  props: {
    idRol: String
  },
  components: {
    IconBase,
    Boards,
    IconAddUser,
    List,
    Mail,
    Notification,
    Schedule,
    Incidencias
  },
  data: function(){
    return {
    open: false,
    teams: [],
    userInfo: [],
    departments: [],
    active: false,
    src: '',
    exist: false
    }
  },
  methods:{
    show () {
      this.$modal.show('notificacion');
    },
    toggle(){
     this.open = !this.open;
    },
    logout(){
      this.$router.push('/logout')
    },
    showBoard(){
      this.active = !this.active
    },
    profileImg(file){
      this.src = file
    }
    
  },
  created(){
       //GET USER departments
      
        const token = localStorage.getItem('validation_token');
        getUserToken(token)
        .then(data => {
          if(data == "ERROR: Token no valido" ){
            localStorage.clear();
            location.reload();
            return;
          }
          this.userInfo = data

          fetch("/assets/images/users/" + this.userInfo.id ) 
          .then( response => {

              if(response.ok){
                this.exist = true
              }
              else{
                this.exist = false
              }
          } ).catch(error => {
            this.exist = false
          })


          getUserDepartments(token, this.userInfo.id).then(data => {
            this.departments = data
            getAllTeamsFromDepartment(token, this.departments[0].id).then(data => (this.teams = data))
            })
      });

      EventBus.$on('imgProfile', this.profileImg)
  },

}
</script>