<template>
  <div class="h-full w-full ">
    <section class="justify-around items-center pt-10 pb-10">
      <div class="user-profile-top-component">
        <div class="profile-image-component ">
       
          <div v-if="idUser && (idUser != userInfo.id)" class="profile-image group cursor-pointer flex flex-col justify-center items-center" >
            <img :src="src" class="w-28 h-28 opacity-1 rounded-full">   
          </div>
          <div v-else class="profile-image group cursor-pointer flex justify-center items-center">
            <AvatarInpute v-model="avatar" :default-src="src" :id="userInfo.id"/>
          </div>         
        </div>
        <div v-if="idUser && (idUser != userInfo.id)" class="user-name flex flex-row justify-center items-center text-3xl font-semibold text-sideBar-primary">
              <div v-for="user in allusers" :key="user.id">
                <div v-if="idUser == user.id">
                  {{user.name}}&nbsp;
                  {{user.surname}}
                </div>
              </div>
        </div>
        <div v-else class="user-name flex flex-row justify-center items-center text-3xl font-semibold text-sideBar-primary">
              <Editable  :id="'name'" :content="userInfo.name"/>&nbsp;
              <Editable  :id="'surname'" :content="userInfo.surname"/>
        </div>
      </div>
      </section>
  <div class="separation-between-sections spacer bg-sideBar-primary align middle w-10/12 h-px m-auto"></div>
        <InformationProfile v-if="idUser && (idUser != userInfo.id)" :id="idUser"/>
        <section v-else class="user-profile-middle-container block pt-4">
          <div class="user-inner-container w-10/12 flex flex-col items-center text-lg justify-center">
             <h1 class="text-sideBar-primary font-semibold pb-4">INFORMACION GENERAL</h1>
            <div class="user-information-container w-6/12 h-full flex flex-col justify-around font-semibold text-sideBar-primary text-left">
              <div class="flex flex-row p-2">
                Horario Normal:&nbsp; <Editable class="w-80 text-fontColor-primary font-normal border-dotted border-2 hover:border-black" :id="'schedule'" :content="userInfo.schedule"/><icon-base viewBox="0 0 1080 1080"  icon-name="editar"><Editar/></icon-base>
              </div>
              <div class="flex flex-row p-2">
                Guardia:&nbsp; <Editable class="text-fontColor-primary w-80 font-normal border-dotted border-2 hover:border-black" :id="'duty'" :content="userInfo.duty"/><icon-base viewBox="0 0 1080 1080"  icon-name="editar"><Editar/></icon-base>
              </div>
              <div class="flex flex-row p-2">
              Horario Guardia:&nbsp; <Editable  class="text-fontColor-primary w-80 font-normal border-dotted border-2 hover:border-black" :id="'duty_schedule'" :content="userInfo.duty_schedule"/><icon-base viewBox="0 0 1080 1080"  icon-name="editar"><Editar/></icon-base>
              </div>
              <div class="flex flex-row p-2">
                Correo electrónico:&nbsp; <div :id="'email'" :content="userInfo.email"/>{{userInfo.email}}<div/>
              </div>
              <div class="flex flex-row p-2">
                Teléfono:&nbsp;  <Editable class="text-fontColor-primary w-80 font-normal border-dotted border-2 hover:border-black" :id="'phone'" :content="userInfo.phone"/><icon-base  viewBox="0 0 1080 1080"  icon-name="editar" class="cursor-pointer"><Editar/></icon-base>
              </div>
              <div class="flex flex-row p-2">
                <h1> Departamentos:&nbsp; </h1>
                <div v-for="items in departments" :key="items.id"> <span class="text-fontColor-primary font-normal">{{items.name}};&nbsp;</span> </div>
               
              </div> 
              <div class="flex flex-row p-2">
                <h1> Teams:&nbsp; </h1>
                  <div v-for="items in teams" :key="items.id"><span class="text-fontColor-primary font-normal">&nbsp;{{items.name}};</span></div>
              </div>   
              <div class="flex flex-row p-2">
                Cumpleaños:&nbsp; <Editable class="text-fontColor-primary w-80 font-normal border-dotted border-2 hover:border-black" :id="'birthday'" :content="userInfo.birthday"/><icon-base  viewBox="0 0 1080 1080" icon-name="editar"><Editar/></icon-base>
              </div>
              <div class="p-2">
                <button v-on:click="passwordChange = !passwordChange">Gestionar contraseña</button>
                    <div class="flex flex-col " v-if="passwordChange">
                      <div v-on:blur="passwordChange = !passwordChange"></div>
                      <input class="border m-1" type="password" placeholder="Current password" @change="checkpassword" v-model="currentPassword">
                      <input class="border m-1" type="password" placeholder="New password" v-model="newPassword">
                      <input class="border m-1" type="password" placeholder="Repeat new password" @change="repeatedPasswordReceived" v-model="newRepeatedPassword">
                      <button class="bg-sideBar-primary text-white border rounded-full py-1 px-2" v-on:click="changePassword">Cambiar contraseña</button>
                    </div>
              </div>
              <div class="p-2">
                <input type="checkbox" >Quiero recibir notificaciones por correo
              </div>
          </div>
        </div>
      </section>    
          
  </div>
</template>

<script>
import IconBase from '../../icons/IconBase.vue'
import Editar from '../../icons/Editar.vue'
import Editable from './Profile/Editable.vue'
import { getUserToken, getAllTeamsFromUser,getUserDepartments, changeProfile, getAllUsers, getImages } from '../../../servicies/userServicies'
import InformationProfile from './InformationProfile.vue'
import AvatarInpute from './AvatarInpute.vue'
import { EventBus } from '../../../event-bus'

export default {
   components:{
    IconBase,
    Editar,
    Editable,
      InformationProfile,
      AvatarInpute,
  },
  props:{
    idUser: String,
  },
  data(){
    return { 
      userInfo: [],
      departments: [],
      teams: [],
      allusers:[],
      horario: "",
      selectedFile: null,
      passwordChange: false,
      currentPassword: "",
      newPassword: "",
      newRepeatedPassword: "",
      readytosend: false, 
      exist: false,
      componentKey: 0,
      random: '',
      avatar: null,
      src: ''
    }
  },
  created() {
    
     this.fetchData()
    
    },
  watch: {
    '$route': 'fetchData'
  },
  methods:{
    fetchData(){
       const token = localStorage.getItem('validation_token');
      getUserToken(token).then(data => {
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
       
        getUserDepartments(token, this.userInfo.id).then(data => (this.departments = data));
        getAllTeamsFromUser(token, this.userInfo.id).then(data => (this.teams = data));
      });
      getAllUsers(token).then (data => (this.allusers = data));

            if(this.userInfo.id){
                getImages('users', this.userInfo.id)
                .then(blob =>{
                    (this.src = URL.createObjectURL(blob))
                });
            }
            else{
              getImages('users', this.idUser)
                .then(blob =>{
                    (this.src = URL.createObjectURL(blob))
                });
            }

    },
    update(event){
      
        this.selectedFile = event.target.files[0]
        const token = localStorage.getItem('validation_token');
        const formData = new FormData()
        formData.append('image', this.selectedFile);
        formData.append('token', token);
        
         let promise = new Promise((resolve, reject) => {
                resolve(changeProfile(formData, this.userInfo.id));
              });
              promise.then((response) => {
                console.log(response);
                this.fetchData()
              });
      },
      onFileSelected(event){
        this.selectedFile = event.target.files[0]
      },
      repeatedPasswordReceived () {
        if (this.newPassword === this.newRepeatedPassword) {
          console.log('son iguales')
          this.readytosend = true
        } else {
          console.log('no lo son')
          this.readytosend = false
        }
      },
      checkpassword(){
        console.log('checkeando')
      },
      changePassword(){
        const token = localStorage.getItem('validation_token');
        const formData = new FormData()
        formData.append('password', this.newPassword);
        formData.append('token', token);
        changeProfile(formData, this.userInfo.id)
      },
      forceRerender(){
        this.random = Math.random();
      }
      
  }
}
</script>

<style>

</style>