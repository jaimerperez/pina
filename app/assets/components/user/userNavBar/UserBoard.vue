<template>
  <div class="w-full h-full">
    <div :class="overlay" style="position: fixed;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(120,120,120,0.1);z-index: 2;cursor: progress;"> 
      <div style="position: absolute;top: 50%;left: 50%;font-size: 50px;color: white;transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);">
      <span>
        </span>
      </div>
    </div>
    <div class="fixed top-0 bg-white z-30" style="width:2850px">
      <div class="h-16 justify-between items-center bg-opacity-100  mb-10">
        <div 
          class="flex fixed text-4xl capitalize ml-20 pt-10"
          :class="`text-boardNames-${boardName}`"
        >
          {{boardName}}
        </div>
         <router-link :to="{ name: 'views', params: {viewers:viewers, users:users}}">
          <div class="flex flex-row fixed top-10 right-[550px]" ref="fake">
            Visto por última vez
            <div v-for="(items,index) in viewers" :key="items.id">
              <div v-if="index > 2">
              </div>
              <div v-else>
                <img class="w-6 h-6 rounded-full" :src="`/assets/images/users/${items.id_user}`" alt="">
              </div>
            </div>
            <div v-if="numberViews > 3" class="h-8 w-8 bg-sideBar-primary rounded-full text-center">
                +{{numberViews-3}}
              </div>
          </div>
        </router-link>
        <div class="flex fixed right-0 mr-20 pt-10">
          <div v-if="userInfo.id_rol != 3" class="class-icon flex flex-row justify-center items-center px-4 cursor-pointer" v-popover:filterMembers.bottom>
            <icon-base v-if="!filtro" class="cursor-pointer" viewBox="0 0 1080 1080" iconColor="#4D4D4D" width="30" height="30"  >
              <IconAddUser/>
            </icon-base>
              <img v-if="filtro" class="rounded-full w-6 h-6 mx-2"  :src="`/assets/images/users/${idPersonFiltered}`">
            <div v-if="filtro ==  false">Persona</div>
            <div v-if="filtro">{{namePersonFiltered}}</div>
            <div class="mx-1.5" v-if="filtro" @click="filtro = false, filterMember(0,'')">X</div>
          </div>
          
          <div class=" relative text-gray-600 focus-within:text-gray-400 border-2 border-black rounded-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                <icon-base iconColor="#4D4D4D" width="15" height="15" icon-name="search"><Search/></icon-base>
              </div>
              <input type="search" id="search" v-model="search" name="email" @focus="focusSearch" placeholder="Buscar" class="pl-10 rounded-lg z-0 focus:shadow h-4 focus:outline-none" >
          </div>
            <img class="h-[25px] px-4 cursor-pointer" src="/assets/images/build/ext.svg" alt="botón de extensión" @click="showExt = ! showExt">
        </div> 
        <div class="spacer fixed bg-fontColor-primary h-0.5 mx-20 mt-24" style="width:2850px"></div>
      </div> 
    </div>
      <router-view :key="$route.path"/>
    <div>
      <br><br><br>
    </div>
      <!-- SECCIONES DE ESTADOS  -->
    <div class="text-block-working-primary mx-20 my-16" style="width:2850px" @mouseover="typeStatus(1)">
      
      <TaskStatus
      id="board-1" 
      v-if="boardTeamID" 
      :boardTeamID="boardTeamID" 
      :boardName="boardName"
      @click="tagIdChange"
      :taskList="taskListWorking"
      :search="search"
      :responsable="responsable"
      :usuarios="users"
      :tagsList="tagsList"
      :mentionList="mentionList"
      class=" col-3" status="Trabajando" taskStatus="1" :ht="'#000000'" :color="'bg-block-working-primary'" :colorSecondary="'bg-block-working-secondary'" :placeholder="'+ Añadir nueva tarea'" 
      />
    </div>
    <div class="text-block-pending-primary  mx-20 my-16" style="width:2850px" @mouseover="typeStatus(3)"> 
      <TaskStatus
      id="board-2"
      v-if="boardTeamID" 
      @click="tagIdChange"
      :search="search"
      :boardTeamID="boardTeamID"
      :boardName="boardName"
      :taskList="taskListPending"
      :responsable="responsable"
      :usuarios="users"
      :tagsList="tagsList"
      :mentionList="mentionList"
      class="col-3" status="Pendientes" taskStatus="3" :ht="'#000000'" :color="'bg-block-pending-primary'" :colorSecondary="'bg-block-pending-secondary'" :placeholder="'+ Añadir nueva tarea'"
      />
    </div>
    <div class="text-block-complete-primary  mx-20 my-16" style="width:2850px" @mouseover="typeStatus(4)">
      <TaskStatus
        id="board-3"
        v-if="boardTeamID" 
        @click="tagIdChange"
        :search="search"
        :boardTeamID="boardTeamID"
        :boardName="boardName"
        :taskList="taskListCompleted"
        :responsable="responsable"
        :usuarios="users"
        :tagsList="tagsList"
        :mentionList="mentionList"
        class=" col-3" status="Completadas" taskStatus="4" :ht="'#000000'" :color="'bg-block-complete-primary'" :colorSecondary="'bg-block-complete-secondary'" :placeholder="'+ Añadir nueva tarea'" 
        />
    </div>
    
    
    <!-- MODAL -->
      <popover :name="'adduser'" :width="400" >
        <div class="w-full h-64 overflow-y-auto">
          <div v-for="user in users" :key="user.id">
              <div v-if="!searchUserinTeam(user.id)" class="flex justify-evenly items-center w-full h-full overflow-y-auto" >
                  <router-link :to="{ name: 'profileUser', params: {idUser: user.id } }">
                    <img class="rounded-full w-8 h-8 m-2"  :src="`/assets/images/users/${user.id}`">
                  </router-link>
                  <div v-if="user.name === null ">
                      {{user.email}}
                  </div>
                  <div v-else>
                    {{user.name}}
                  </div>
                  <button class="p-2 bg-buttonColor-primary text-black" @click="createUserTeam(user.id)"> AÑADIR USUARIO</button> 
                </div>
          </div>
        </div>
          
        
      </popover>

      <!-- POPOVER -->
      <popover :name="'filterMembers'" :width="300">
        <div class="w-[300px] p-2">
          <div>
            Filtrar por persona
          </div>
          <input class="w-full border border-sideBar-primary" placeholder="Escribe un nombre para usar como filtro" type="text" v-model="personfiltered">
          <div class="flex flex-row">
            <div v-for="(user,index) in filterUsers" :key="user.id" >
              <div v-if="index > 4">
              </div>
              <div v-else>
                <img  v-on:click="filterMember(user.id,user.name)" class="rounded-full cursor-pointer w-8 h-8 m-2"  :src="`/assets/images/users/${user.id}`">
              </div>
            </div>
          </div>
        </div>
      </popover>


      <popover :name="'group'">
            <div>
              <div class="group-header">
                <div class="text-black text-2xl font-bold">
                  Elegir grupo
                </div>
              </div>
              <div class="status-group">
                <div class="status-working bg-block-working-primary hover:bg-opacity-50 cursor-pointer" @click="changeStatusSelected(1)">
                  Mover a Trabajando
                </div>
                <div class="status-pending bg-block-pending-primary hover:bg-opacity-50 cursor-pointer" @click="changeStatusSelected(3)">
                  Mover a Pendientes
                </div>
                <div class="status-complete bg-block-complete-primary hover:bg-opacity-50 cursor-pointer" @click="changeStatusSelected(4)">
                  Mover a Completadas
                </div>
              </div>
            </div>
      </popover>
       <popover :name="'board'">
            <div>
              <div class="group-header">
                <div class="text-black text-2xl font-bold">
                  Elegir tablero
                </div>
              </div>
              <div class="status-group" v-for="items in teams" :key="items.id">
                    <div
                      class="cursor-pointer"
                      :class="`text-boardNames-${items.name}`" 
                      v-if="boardTeamID != items.id" 
                      @click="changeBoard(items.id)"
                    >
                      {{items.name}}
                    </div>
              </div>
            </div>
      </popover>

        <div class="fixed top-[80px] right-[70px] bg-white w-54 h-54 z-40 cursor-pointer shadow-lg" v-show="showExt">
           <div class="flex flex-row hover:bg-sideBar-primary hover:bg-opacity-50">
             <router-link class="flex flex-row" :to="{ name: 'welcometeams', params: {departmentName:boardName, departmentID:boardTeamID }}">
              <icon-base viewBox="0 0 1080 1080" iconColor="#4D4D4D"  icon-name="" >
                <MemberBoard/>
              </icon-base> 
               <div>Miembros del tablero</div>
            </router-link>
          </div>
           <div class="flex flex-row hover:bg-sideBar-primary hover:bg-opacity-50"><icon-base  viewBox="0 0 1080 1080" iconColor="#4D4D4D"  icon-name="" >
              <Archivado/>
            </icon-base> <router-link :to="{ name: 'StoreFile', params: {boardName:boardName, boardId:boardTeamID }}">
            Historial archivado
            </router-link></div>
           <div class="flex flex-row hover:bg-sideBar-primary hover:bg-opacity-50"><icon-base  viewBox="0 0 1080 1080" iconColor="#4D4D4D"  icon-name="" >
              <Automatizacion/>
            </icon-base>Automatizaciones de tareas</div>
        </div>

        <!-- SELECIONAR TAREAS -->
        <div v-if="arrCheck.length != 0" class="container-elements h-16 bg-white flex flex-row fixed bottom-[100px] left-[35.5rem] z-40 text-2xl border border-black rounded-lg">
            <div class="number-of-elements w-12 rounded-lg border border-black bg-sideBar-primary text-center pt-4">
              {{arrCheck.length}}
            </div>
            <div class="mx-6 pt-4">
                Elementos seleccionados
            </div>
            <div class="mx-6 pt-2 cursor-pointer" @click="duplicateTaskSelected">
              <img  class="w-10 h-8" src="/assets/images/icons/duplicate.svg" alt="">
                <div class="text-sm">Duplicar</div>
            </div>
            <div class="mx-6 pt-2 cursor-pointer" @click="show">
                <img  class="w-10 h-8" src="/assets/images/icons/delete.svg" alt="">
                <div class="text-sm">Elminar</div>
            </div>
            <div class="mx-6 pt-2 cursor-pointer" @click="storeSelected">
               <img  class="w-10 h-8" src="/assets/images/icons/archivar.svg" alt="">
                <div class="text-sm">Archivar</div>
            </div>
            <div class="mx-6 pt-2 cursor-pointer" v-popover:group.top>
                <img  class="w-12 h-8 pl-2" src="/assets/images/icons/movegroup.svg" alt="">
                <div class="text-sm">Mover a grupo</div>
            </div>
            <div class="mx-6 pt-2 cursor-pointer" v-popover:board.top>
                <img class="w-12 h-8 pl-2" src="/assets/images/icons/moveboard.svg" alt="">
                <div class="text-sm">Mover a tablero</div>
            </div>
            <div class="w-10 border border-r-2 pt-4 cursor-pointer" @click="closeSelected">
                <div class="pl-2">X</div>
            </div>
        </div>
        <modal name="delete" :height="250">
            <div>
                <div class="header-text flex flex-row justify-between text-2xl text-black">
                  <div class="pl-20">¿Quieres eliminar las tareas seleccionadas ?</div>
                  <div class="font-bold text-2xl text-black cursor-pointer mr-2" @click="hide">
                    X
                  </div>
                </div>
                
                <div class="flex flex-row justify-evenly items-center mt-10">
                    <button @click="hide" class="flex flex-row justify-center items-center">
                        <img class="w-40 h-40" src="/assets/images/icons/happy.svg" alt="">
                        <div class="w-32 bg-red-500 text-black rounded-lg p-4">NO</div>
                        </button>
                    <button @click="deleteSelected" class=" flex flex-row justify-center items-center">
                        <img class="w-40 h-40" src="/assets/images/icons/cry.svg" alt="">
                        <div class="w-32 bg-green-500 text-black rounded-lg p-4">SI</div>
                    </button>
                </div>
            </div>
        </modal>
        <div v-if="gif" class="fixed top-[14rem] right-[44rem]">
          <img class="w-96 h-96" src="/assets/images/build/gif.gif" alt="">
        </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Popover from 'vue-js-popover'
import {EventBus} from '../../../event-bus.js'
import IconBase from '../../icons/IconBase.vue'
import IconAddUser from '../../icons/IconAddUser'
import FilterPerson from '../../icons/FilterPerson'
import Expand from '../../icons/Expand'
import Collap from '../../icons/Collap'
import MemberBoard from '../../icons/MemberBoard.vue'
import Archivado from '../../icons/Archivado'
import Automatizacion from '../../icons/Automatizacion'
import Search from '../../icons/Search'
import Settings from '../../icons/Settings'
import Add from '../../icons/Add'
import Draggable from 'vuedraggable'
import TaskStatus from './Board/TaskStatus.vue'
import SlidePanel from './Board/subitems/SlidePanel'

import DatePicker from './Board/subitems/DatePicker'
import {getAllUsers, getUserToken, createUserInTeam, getAllTaskFromTeam, postTaskToTeam, 
putChangeTags, deleteTask,putChangeStatusTask, setDate, ChangeSubTags, postSubTask, 
postTime, postFilesTask, deleteFiles, postAddUserToTask, deleteManager, getUserTeams,
postTimeSubtask, deleteSubTask, postStoreTask, postAddUserToSubTask, postMessage, 
postSubtaskMessage, setTime, setTimeSubtask, getAllTags, getViewers, getAllTeamsFromDepartment, changeBoardTask, duplicateTask} from '../../../servicies/userServicies'
Vue.use(Popover)

export default {
  components:{
    IconBase,
    IconAddUser,
    Settings,
    Search,
    Draggable,
    Add,
    TaskStatus,
    SlidePanel,
    DatePicker,
    FilterPerson,
    MemberBoard,
    Archivado,
    Automatizacion,
    Expand,
    Collap,
    
  },
  props:{
    boardName: String,
    boardTeamID: String,
  },
  data () {
    return {
      active: false,
      gif: false,
      userInfo: [],
      responsable: [],
      email: "",
      name: this.boardTeamID,
      users: [],
      taskList: [],
      taskListCompleted: [],
      taskListWorking: [],
      taskListPending:[],
      mentionList: [],
      viewers: [],
      arrCheck: [],
      teams: [],
      tagsList: {},
      open: false,
      state: 'collapse',
      dismissedState: 'dismissedState',
      search: '',
      overlay:'',
      showNotifications: false,
      showExt: false,
      numberViews: '',
      personfiltered: '',
      memberNames: [],
      namePersonFiltered:'',
      idPersonFiltered: '',
      filtro: false,
      id_task_show: ''
    }
  },
  methods:{
   show(){
            this.$modal.show('delete');
        },
        hide () {
            this.$modal.hide('delete');
        },
    fetchData() {
     
      this.overlay = '';
      const token = localStorage.getItem('validation_token');
      
      //obtenemos todas las tareas del equipo y le asignamos a un array dependiendo de su estado
      getAllTaskFromTeam(token, this.boardTeamID) 
      .then(tasks => {
          let taskListCompleted = []
          let taskListWorking = []
          let taskListPending = []
          
        for(let task of tasks){
          if(task.id_status == "1")
              taskListWorking.push(task) 
          else if(task.id_status == "3")
              taskListPending.push(task)   
          else
              taskListCompleted.push(task)
        }
        this.taskListWorking = taskListWorking
        this.taskListPending = taskListPending
        this.taskListCompleted = taskListCompleted
        this.overlay = 'hidden';
      });
      getUserToken(token).then(data => (this.userInfo = data));
     
     this.mentionList = []
     
      getAllUsers(token).then(data => {
        this.users = data
        for(let i = 0; i < this.users.length; i++ ){
            this.mentionList.push({
              id: this.users[i].id,
              email: this.users[i].email.split('@')[0]
            })
          }
          getUserTeams(token, this.boardTeamID).then(data =>{
            this.responsable = data
            this.memberNames = []
            for(let j = 0; j < this.responsable.length; j++ ){
              for(let i = 0; i < this.users.length; i++){
                if(this.responsable[j].id_user == this.users[i].id){
                  this.memberNames.push({
                    id: this.users[i].id,
                    name: this.users[i].name
                  })
                }
              }    
            }  
          })
        
      });

      getAllTeamsFromDepartment(token, 1).then(data => (this.teams = data))
      getAllTags(token).then(data => (this.tagsList = data));

       this.getViews()
      
      
    },
    createUserTeam(id_user){
      const token = localStorage.getItem('validation_token');
        const formData = new FormData()
        formData.append('id_user', id_user);
        formData.append('token', token);
          
          let promise = new Promise((resolve, reject) => {
                resolve(createUserInTeam(formData, this.boardTeamID));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
   },
   createTask(content,taskStatus){
            
              const formData = new FormData()
              formData.append('name', content);
              formData.append('status',taskStatus);
              formData.append('token', localStorage.getItem('validation_token'));

              let promise = new Promise((resolve, reject) => {
                
                resolve(postTaskToTeam(formData, this.boardTeamID));
              });
              promise.then((response) => {
               
                this.fetchData()
              });
    },
    createSubtask(content,id_task){

            if(content != '' ){
              const formData = new FormData()
              formData.append('name', content);
              formData.append('token', localStorage.getItem('validation_token'));
              
              let promise = new Promise((resolve, reject) => {
                
                resolve(postSubTask(formData, id_task));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
  
            }
    },
    tagIdChange(id_tag,ID){
            const formData = new FormData()
            formData.append('id_tag',id_tag );
            formData.append('token', localStorage.getItem('validation_token'));
            
            let promise = new Promise((resolve, reject) => {
                resolve(putChangeTags(formData, ID));
              });
              promise.then((response) => {
                if(response == '100%'){
                  this.gif=true;
                  let self = this;
                  setTimeout(function(){self.gif=false}, 2000);
                }
                  
                this.fetchData()
              });
        },
    subtagIdChange(ID_subtask, id_subtag){
            const formData = new FormData()
            formData.append('id_subtag',id_subtag );
            formData.append('token', localStorage.getItem('validation_token'));
            
             let promise = new Promise((resolve, reject) => {
                resolve(ChangeSubTags(formData, ID_subtask));
              });
              promise.then((response) => {
               
                this.fetchData()
              });
        },
    tagStatusChange(id_status,ID){
            const token = localStorage.getItem('validation_token');
            
             let promise = new Promise((resolve, reject) => {
                resolve(putChangeStatusTask(id_status, token, ID));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
    deleteTask(id_task){
            const token = localStorage.getItem('validation_token');
            
            let promise = new Promise((resolve, reject) => {
                resolve(deleteTask(token, id_task));
              });
              promise.then((response) => {
                this.fetchData()
              });
        },
    storeTask(id_task){
            
            const formData = new FormData()
            formData.append('token', localStorage.getItem('validation_token'));
            let promise = new Promise((resolve, reject) => {
                resolve(postStoreTask(formData, id_task));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
         deleteSubtask(id_subtask){
            
            const token = localStorage.getItem('validation_token');
            
             let promise = new Promise((resolve, reject) => {
                resolve(deleteSubTask(token, id_subtask));
              });
              promise.then((response) => {
                
               
                this.fetchData()
              });
        },
        addManager(user_id, task_id){
          const formData = new FormData()
            formData.append('id_user',user_id);
            formData.append('token', localStorage.getItem('validation_token'));
            
             let promise = new Promise((resolve, reject) => {
                resolve(postAddUserToTask(formData, task_id));
              });
              promise.then((response) => {
                
               
                this.fetchData()
              });
        },
        addManagerSubtask(user_id, task_id){
          const formData = new FormData()
            formData.append('id_user',user_id);
            formData.append('token', localStorage.getItem('validation_token'));
            
             let promise = new Promise((resolve, reject) => {
                resolve(postAddUserToSubTask(formData, task_id));
              });
              promise.then((response) => {
                
                
                this.fetchData()
              });
        },
        dateLimit(id_task, dateSelected, dateend){
          const formData = new FormData()
          const token = localStorage.getItem('validation_token');
          formData.append('time_limit', dateSelected);
          formData.append('time_limit_end', dateend);
          formData.append('token', token);
          
          let promise = new Promise((resolve, reject) => {
                resolve(setDate(formData, id_task));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
        dateLimitSubtask(id_task, dateSelected){
          const formData = new FormData()
          const token = localStorage.getItem('validation_token');
          formData.append('time_limit', dateSelected);
          formData.append('token', token);
          
          let promise = new Promise((resolve, reject) => {
                resolve(setDate(formData, id_task));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
  
        play(ID){
          const formData = new FormData()
           const token = localStorage.getItem('validation_token');
          formData.append('token', token);
          
            let promise = new Promise((resolve, reject) => {
                resolve(postTime(formData, ID));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
        playSubtask(ID){
          
          const formData = new FormData()
           const token = localStorage.getItem('validation_token');
          formData.append('token', token);
         
            let promise = new Promise((resolve, reject) => {
                resolve( postTimeSubtask(formData, ID));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
         submitMessage(content, id){
            const token = localStorage.getItem('validation_token');
            const formData = new FormData()
            formData.append('message', content);
            formData.append('token', token);
      
            let promise = new Promise((resolve, reject) => {
              resolve( postMessage(formData, id));
              });
              promise.then((response) => { 
                EventBus.$emit('updatemessage')
                this.fetchData()
              });
              
        },
        submitMessageSubtask(content, id){
            const token = localStorage.getItem('validation_token');
            const formData = new FormData()
            formData.append('message', content);
            formData.append('token', token);
      
            let promise = new Promise((resolve, reject) => {
              resolve( postSubtaskMessage(formData, id));
              });
              promise.then((response) => {
               
                this.fetchData()
                EventBus.$emit('updatemessagesubtask')
              });
        },
       setTime(totaltime, id_task){
         const token = localStorage.getItem('validation_token');
          const formData = new FormData()
          formData.append('time_working', totaltime);
          formData.append('token', token);
          
            let promise = new Promise((resolve, reject) => {
                resolve(setTime(formData, id_task));
              });
              promise.then((response) => {
               
                this.fetchData()
              });
       },
        setTimeSubtask(totaltime, id_subtask){
          const token = localStorage.getItem('validation_token');
          const formData = new FormData()
          formData.append('time_working', totaltime);
          formData.append('token', token);
          
            let promise = new Promise((resolve, reject) => {
                resolve(setTimeSubtask(formData, id_subtask));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
       typeStatus(type){
        
         EventBus.$emit('type', type)
       },
        updateFiles(file, ID){
          const token = localStorage.getItem('validation_token');
          const formData = new FormData()
          formData.append('image', file);
          formData.append('token', token);
          
            let promise = new Promise((resolve, reject) => {
                resolve(postFilesTask(formData, ID));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
      },
        deleteFile(file){
          const token = localStorage.getItem('validation_token');
          
            let promise = new Promise((resolve, reject) => {
                resolve(deleteFiles(token, file));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
      },
        deleteManager(user_id, task_id){
          const token = localStorage.getItem('validation_token');
            
              let promise = new Promise((resolve, reject) => {
                resolve(deleteManager(token, task_id, user_id));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
        changeStatusDragg(id_status, id_task){
            const token = localStorage.getItem('validation_token');
           
              let promise = new Promise((resolve, reject) => {
                resolve( putChangeStatusTask(id_status, token, id_task));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
        changeTasktoBoard(id_team, id_task){
            const token = localStorage.getItem('validation_token');
            const formData = new FormData()
            formData.append('id_team', id_team);
            formData.append('token', token);
              let promise = new Promise((resolve, reject) => {
                resolve( changeBoardTask(formData, id_task));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
        changeduplicateTask(id_task){
            const token = localStorage.getItem('validation_token');
            const formData = new FormData()
            formData.append('token', token);
              let promise = new Promise((resolve, reject) => {
                resolve( duplicateTask(formData, id_task));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
        filterMember(id_user, name){
          if(id_user != 0){
            this.filtro = true
            EventBus.$emit('managerfilter', id_user)
            this.namePersonFiltered = name
            this.idPersonFiltered = id_user
          }
          else
            EventBus.$emit('managerfilter', id_user)
            
            
        },
        searchUserinTeam(id_user){
            for(let items of this.responsable)
            {
                if(id_user == items.id_user)
                    return true
            }
            return false
        },
        focusSearch(){
          EventBus.$emit('focussearch')
        },
        getViews(){
          const token = localStorage.getItem('validation_token');
          const id_team = this.boardTeamID 
          getViewers(token, id_team)
          .then(data => {
            (this.viewers = data)
            this.numberViews = this.viewers.length
            });
        },
        selectCheck(id){

          if(this.arrCheck.includes(id)){
            var index = this.arrCheck.indexOf(id);
            this.arrCheck.splice(index,1);
          }
            
          else
            this.arrCheck.push(id)
          
          this.arrCheck.forEach(element => {
            
          });
        },
        closeSelected(){
          EventBus.$emit('closeselected', this.arrCheck)
          this.arrCheck = []
        },
        deleteSelected(){
        this.arrCheck.forEach(element => {
            this.deleteTask(element)
          });
          this.arrCheck = []
           this.$modal.hide('delete');
        },
          changeStatusSelected(status){
        this.arrCheck.forEach(element => {
           this.changeStatusDragg(status,element)
          });
           this.closeSelected()
           this.$refs.fake.click()
        },
        changeBoard(id_team){
           this.arrCheck.forEach(element => {
            this.changeTasktoBoard(id_team,element)
          });
           this.closeSelected()
           this.$refs.fake.click()
        },
        duplicateTaskSelected(){
           this.arrCheck.forEach(element => {
            this.changeduplicateTask(element)
          });
           this.closeSelected()
           this.$refs.fake.click()
        },
        storeSelected(){
          this.arrCheck.forEach(element => {
            this.storeTask(element)
          });
          this.arrCheck = []
        },
        deleteModal(){
          EventBus.$emit('deletemodal')
        },
        emitiendoevento(){
          EventBus.$emit('triggerslide', this.id_task_show)
          console.log('se emite el id', this.id_task_show)
        },
    },
  computed:{
    filterUsers(){
      return this.memberNames.filter((resp)=>{
        return resp.name.toUpperCase().match(this.personfiltered.toUpperCase())
        })
      }
  },
  created(){
     this.fetchData()
  },
mounted(){
    setInterval(()=> {
     this.getViews()}, 100000);
     
  },
  mounted(){
    EventBus.$on('changes', this.tagStatusChange)
    EventBus.$on('update', this.createTask)
    EventBus.$on('delete', this.deleteTask)
    EventBus.$on('store', this.storeTask)
    EventBus.$on('deletesubtask',this.deleteSubtask)
    EventBus.$on('tagchange', this.tagIdChange)
    EventBus.$on('datelimit', this.dateLimit)
    EventBus.$on('subtagchange', this.subtagIdChange)
    EventBus.$on('subtask', this.createSubtask)
    EventBus.$on('status', this.tagStatusChange)
    EventBus.$on('play', this.play)
    EventBus.$on('playSubtask', this.playSubtask)
    EventBus.$on('updateFiles', this.updateFiles)
    EventBus.$on('deleteFile', this.deleteFile)
    EventBus.$on('addmanager', this.addManager)
    EventBus.$on('addmanagersubtask', this.addManagerSubtask)
    EventBus.$on('deletemanager', this.deleteManager)
    EventBus.$on('changeStatus', this.changeStatusDragg)
    EventBus.$on('submitmessage', this.submitMessage)
    EventBus.$on('submitmessagesubtask', this.submitMessageSubtask)
    EventBus.$on('editname', this.fetchData)
    EventBus.$on('settime', this.setTime)
    EventBus.$on('settimesubtask', this.setTimeSubtask)
    EventBus.$on('router',this.fetchData)
    EventBus.$on('selectcheck', this.selectCheck)
  },
    watch: {
      '$route': 'fetchData',
  },
}
</script>

<style>

</style>