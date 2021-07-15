<template>
  <div class="sideNavBar-container h-full flex flex-col flex-wrap items-center text-fontColor  bg-sideBar-primary md:w-full ">
    <div class="h-screen flex flex-col flex-wrap items-center bg-sideBar-primary md:w-full ">
      <div class="flex">
        <router-link to="/user/department"><img class="my-10 w-10 h-10 sm:w-24 sm:h-24" src="/assets/images/build/LOGO_Piña-03.png"></router-link>  
      </div>
      <div class="block sm:hidden">
        <button v-on:click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
      </div>
      <div :class="open ? 'block': 'hidden'" class="sidenavBar-element-container flex-grow sm:flex sm:items-center">
        <div class="text-sm h-full flex flex-col items-start sm:flex-grow justify-between">
          <div class="flex flex-col">
          
           <!-- Departamentos -->
          <div class="  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2">
            <icon-base :width="23" :height="23" viewBox="0 0 1080 1080" icon-name="department"><Depa/></icon-base>
            <div> <a class="ml-3 mr-3"><router-link to="/user/department">Departamentos</router-link></a></div>
          </div>

          <!-- //tableros -->
          <div  class="tableros ml-3 flex flex-row m-2">
            <icon-base icon-name="boards"><Boards/></icon-base>
            <div @mouseover="active = true" @mouseleave="active = false"> 
              <a class="ml-3 mr-3 group cursor-pointer hover:text-block-working-primary" >Mis tableros</a>
              <div v-show="active" v-for="items in teams" :key="items.id">
                  <router-link :to="{ name: 'teams', params: {boardName: items.name, boardTeamID: items.id }}" class="hover:text-indigo-500">{{items.name}}</router-link>
              </div>
            </div>
          </div>
          
          <!-- Notificaciones -->
          <div  class="  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2" @click="showNotifications=!showNotifications">
            <icon-base icon-name="notification"><Notification/></icon-base>
            <div>
              <a class=" ml-3 mr-3">Notificaciones</a>
              <span v-if="numbernotifications != 0" class=" items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{{numbernotifications}}
              </span>
            </div>
          </div>

          <!-- Incidencias -->
          <div class="ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2">
            <icon-base icon-name="department" viewBox="0 0 760 652"><Incidencias/></icon-base>
            <div> <a class="ml-3 mr-3"><router-link to="/user/welcome">Incidencias</router-link></a></div>
          </div>
            
            <!-- Admin -->
          <div v-if="idRol != '3'" class="  ml-3 hover:text-indigo-500 cursor-pointer flex flex-row m-2">
            <icon-base icon-name="department" viewBox="0 0 760 652"><Incidencias/></icon-base>
            <div> <a class="ml-3 mr-3"><router-link to="/user/admin">Admin</router-link></a></div>
          </div>
        </div>
          <div class="place-self-center">
            <div v-if="userInfo.id" class="w-12 h-12 place-self-center cursor-pointer m-2">
              <router-link :to="{ name: 'profileUser', params: {idUser: userInfo.id }}">  
              <div v-if="exist">
                <img class="w-12 h-12 rounded-full " :src="`/assets/images/users/${userInfo.id}`" >
              </div>
              <div v-else>
                <img class="w-12 h-12 rounded-full " src="/assets/images/users/avatar.svg">
              </div>
              </router-link>     
            </div>
            <div class="place-self-center m-2">
              <button type="button" class=" rounded bg-red-500" v-on:click="logout" >LOG OUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed top-[200px] left-[200px] w-[500px] h-[300px] z-[51px] shadow-2xl border bg-white rounded-lg overflow-auto p-2" v-show="showNotifications">
      <strong>Notificaciones</strong>
      <div>
        <div class="flex flex-row justify-around">
          <div class="hover:text-blue-500 cursor-pointer" @click="openNotifications('all'), activeTab = 'ALL'" :class="activeTab=== 'ALL' ? 'text-blue-500 border-blue-500' : ''">Todos</div>
          <div class="hover:text-sideBar-primary cursor-pointer" @click="openNotifications('notread'), activeTab= 'NOTREAD'" :class="activeTab=== 'NOTREAD' ? 'text-blue-500 border-blue-500' : ''">No leido</div>
          <div class="hover:text-sideBar-primary cursor-pointer" @click="openNotifications('mentioned'),activeTab= 'MENTION'" :class="activeTab=== 'MENTION' ? 'text-blue-500 border-blue-500' : ''">Me mencionaron</div>
          <div class="hover:text-sideBar-primary cursor-pointer" @click="openNotifications('asigned'),activeTab= 'ASSIGN'" :class="activeTab=== 'ASSIGN' ? 'text-blue-500 border-blue-500' : ''">Me asignaron</div>
        </div>
        <div class="spacer bg-sideBar-primary w-full h-0.5"></div>
        <div class="tab-content">
          <div id="sidebar"
            v-for="items in content" 
            :key="items"
            class="h-24 flex flex-row justify-between py-4 px-2"
            :class="items.readed == 0 ? 'border shadow group bg-sideBar-primary text-white hover:bg-gray-400 hover:text-black hover:bg-opacity-50' : 'border shadow text-black hover:text-white hover:bg-sideBar-primary'" >
            <span v-html="items['message']"></span>
            <button v-show="items.readed == 0" class="h-5 w-5 group-hover:border-green-500 group-hover:text-green-500 border rounded-full"  @click="readed(items.id)" v-popover:readed.bottom>
              ✔
            </button>
            <div>
              {{items.created_at}}
            </div>
          </div>
          
        </div>
      
      </div>
      
    </div>
    <popover :name="'readed'" :event="'hover'" :width="150">
            <div class="items-center">
               Marcar como leido
            </div>
        </popover>
  </div>
</template>

<script>
import Vue from 'vue'
import Popover from 'vue-js-popover'
import IconBase from '../icons/IconBase.vue'
import IconAddUser from '../icons/IconAddUser.vue'
import Boards from '../icons/Boards.vue'
import List from '../icons/List.vue'
import Mail from '../icons/Mail.vue'
import Notification from '../icons/Notification.vue'
import Depa from '../icons/Depa.vue'
import { getUserToken, getUserDepartments, getAllTeamsFromDepartment, getNotifications, readNotifications } from '../../servicies/userServicies'
import { EventBus } from '../../event-bus'
import Incidencias from '../icons/Incidencias.vue'
Vue.use(Popover)
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
    Depa,
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
    exist: false,
    content: [],
    all: [],
    assign: [],
    mention: [],
    no_read:[],
    notifications: {},
    numbernotifications: '',
    activeTab: 'ALL',
    showNotifications: false,    }
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
    profileImg(file){
      this.src = file
    },
    readed(id_notification){
            const token = localStorage.getItem('validation_token');
            const formData = new FormData()
            formData.append('id_notification', id_notification);
            formData.append('token', token);
      let promise = new Promise((resolve, reject) => {
                resolve(readNotifications(formData, this.userInfo.id));
              });
              promise.then((response) => {
                
                this.fetchData()
                this.getNotifications()
                this.openNotifications('all')
              });
     
    },
    openNotifications(text){
      this.content = ''
      if(text == 'all')
        this.content = this.all    
      else if(text == 'notread')
         this.content = this.no_read
      else if(text == 'asigned')
         this.content = this.assign
      else
        this.content = this.mention
    },
    getNotis(){
      const token = localStorage.getItem('validation_token');
      getNotifications(token,this.userInfo.id)
      .then(data => {
        this.notifications = data
        this.all = data.all
        if(this.content.length === 0)
          this.content = data.all
        this.no_read = data.no_read
        this.numbernotifications = this.no_read.length
        this.mention = data.mension
        this.assign = data.assign
      })
    },
    fetchData(){
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
      
      this.getNotis()
      getUserDepartments(token, this.userInfo.id).then(data => {
            this.departments = data
            getAllTeamsFromDepartment(token, this.departments[0].id).then(data => (this.teams = data))
            })
      });
    },
    
  },
  mounted(){
    setInterval(()=> {
     this.getNotis()}, 100000);
    
  },
  created(){
       //GET USER departments
      
        this.fetchData()
        
      EventBus.$on('imgProfile', this.profileImg)
  },

}
</script>