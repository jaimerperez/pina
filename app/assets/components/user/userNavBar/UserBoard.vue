<template>
  <div class="w-full h-full ">
  <div :class="overlay" style="position: fixed;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(120,120,120,0.1);z-index: 2;cursor: progress;"> 
    <div style="position: absolute;top: 50%;left: 50%;font-size: 50px;color: white;transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);">
    <span>
      </span>
    </div>
  </div>
    
    <div class="h-16 flex justify-between items-center">
      <div class="text-4xl capitalize ml-20">
      {{boardName}}
      </div>
      <div class="flex  mr-20">
        <div class="cursor-pointer mx-2">
           <router-link :to="{ name: 'StoreFile', params: {boardName:boardName, boardId:boardTeamID }}">
          Archivo
          </router-link>
        </div>
        <div v-popover:filterMembers.bottom>
          <icon-base class="cursor-pointer" iconColor="#4D4D4D" width="25" height="25" viewBox="0 0 760 652" icon-name="filterperson" ><FilterPerson/></icon-base>
        </div>
        <div v-if="userInfo.id_rol != 3" class="class-icon px-4" >
          <icon-base class="cursor-pointer" iconColor="#4D4D4D" width="25" height="25" icon-name="iconadduser" v-popover:adduser.bottom>
            <IconAddUser/>
          </icon-base>
        </div>
        <div class=" relative text-gray-600 focus-within:text-gray-400 border-2 border-black rounded-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-2">
              <icon-base iconColor="#4D4D4D" width="15" height="15" icon-name="search"><Search/></icon-base>
            </div>
            <input type="search" id="search" v-model="search" name="email" placeholder="Buscar" class="pl-10 rounded-lg z-0 focus:shadow focus:outline-none" >
        </div>
      </div> 
    </div>
      <div class="flex justify-center mb-10">
        <div class="spacer bg-fontColor-primary justify-self-center self-center h-0.5 m-auto w-11/12"></div>
      </div>
      
      
      
      <!-- SECCIONES DE ESTADOS  -->
    <div class="text-block-working-primary bg-block-working-secondary mx-12 my-16" style="width:2850px" @mouseover="typeStatus(1)">
      <TaskStatus
      id="board-1" 
      v-if="boardTeamID" 
      :boardTeamID="boardTeamID" 
      @click="tagIdChange"
      :taskList="taskListWorking"
      :search="search"
      :responsable="responsable"
      :usuarios="users"
      :tagsList="tagsList"
      class=" col-3" status="Trabajando" taskStatus="1" :ht="'#1DA0B5'" :color="'bg-block-working-secondary'" :placeholder="'+ Añadir nueva tarea'" 
      />
    </div>
    <div class="text-block-pending-primary bg-block-pending-secondary mx-12 my-16" style="width:2850px" @mouseover="typeStatus(3)"> 
      <TaskStatus
      id="board-2"
      v-if="boardTeamID" 
      @click="tagIdChange"
      :search="search"
      :boardTeamID="boardTeamID" 
      :taskList="taskListPending"
      :responsable="responsable"
      :usuarios="users"
      :tagsList="tagsList"
      class="col-3" status="Pendientes" taskStatus="3" :ht="'#DE650F'" :color="'bg-block-pending-secondary'" :placeholder="'+ Añadir nueva tarea'"
      />
    </div>
    <div class="text-block-complete-primary bg-block-complete-secondary mx-12 my-16" style="width:2850px" @mouseover="typeStatus(4)">
      <TaskStatus
        id="board-3"
        v-if="boardTeamID" 
        @click="tagIdChange"
        :search="search"
        :boardTeamID="boardTeamID"
        :taskList="taskListCompleted"
        :responsable="responsable"
        :usuarios="users"
        :tagsList="tagsList"
        class=" col-3" status="Completadas" taskStatus="4" :ht="'#199961'" :color="'bg-block-complete-secondary'" :placeholder="'+ Añadir nueva tarea'" 
        />
    </div>
    
    
    <!-- MODAL -->
      <popover :name="'adduser'" :width="400" >
        <div v-for="user in users" :key="user.id" class="flex flex-wrap justify-center items-center w-96 max-h-96 " >
          <div v-if="!searchUserinTeam(user.id)">
            <router-link :to="{ name: 'profileUser', params: {idUser: user.id } }">
              <img class="rounded-full w-8 h-8 m-2"  :src="`/assets/images/users/${user.id}`">
            </router-link>
            <div v-if="user.name === null ">
              {{user.email}}
            </div>
            <div v-else>
                {{user.name}}
            </div>
            <button class="p-2 bg-sideBar-primary text-white" @click="createUserTeam(user.id)"> AÑADIR USUARIO</button>
            
          </div>
        </div>
      </popover>

      <!-- POPOVER -->
      <popover :name="'filterMembers'" :width="150">
            <div v-for="user in responsable" :key="user.id" class="inline-block">
                <img v-on:click="filterMember(user.id_user)" class="rounded-full w-8 h-8 m-2"  :src="`/assets/images/users/${user.id_user}`">
            </div>
            <button class="rounded-full w-5 h-5 bg-white text-black self-center" v-on:click="filterMember(0)">
              X
            </button>
        </popover>
  </div>
</template>

<script>
import Vue from 'vue';
import Popover from 'vue-js-popover'
import {EventBus} from '../../../event-bus.js'
import IconBase from '../../icons/IconBase.vue'
import IconAddUser from '../../icons/IconAddUser'
import FilterPerson from '../../icons/FilterPerson'
import Search from '../../icons/Search'
import Settings from '../../icons/Settings'
import Add from '../../icons/Add'
import Draggable from 'vuedraggable'
import TaskStatus from './Board/TaskStatus.vue'
import SlidePanel from './Board/subitems/SlidePanel'
import DatePicker from './Board/subitems/DatePicker'
import {getAllUsers, getUserToken, createUserInTeam, getAllTaskFromTeam, postTaskToTeam, 
putChangeTags, deleteTask,putChangeStatusTask, setDate, ChangeSubTags, postSubTask, 
postTime, postFilesTask, deleteFiles, postAddUserToTask, deleteManager, getUserTeams, createUser,
postTimeSubtask, deleteSubTask, postStoreTask, postAddUserToSubTask, postMessage, postSubtaskMessage, setTime, setTimeSubtask, getAllTags} from '../../../servicies/userServicies'
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
  },
  props:{
    boardName: String,
    boardTeamID: String,
  },
  data () {
    return {
      userInfo: [],
      responsable: [],
      email: "",
      name: this.boardTeamID,
      users: [],
      taskList: [],
      taskListCompleted: [],
      taskListWorking: [],
      taskListPending:[],
      tagsList: {},
      open: false,
      state: 'collapse',
      dismissedState: 'dismissedState',
      search: '',
      overlay:'',
    }
  },
  methods:{
   
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
      getUserTeams(token, this.boardTeamID)
        .then(data => (this.responsable = data));
      
      getUserToken(token)
      .then(data => (this.userInfo = data));

      getAllUsers(token)
      .then(data => (this.users = data));

      getAllTags(token)
      .then(data => (this.tagsList = data));
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
                
                this.$vToastify.success("tareas eliminada con exito");
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
                
                this.$vToastify.success("subtarea eliminada con exito");
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
                
                this.$vToastify.success("Responsable añadido con éxito a la tarea");
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
                
                this.$vToastify.success("Responsable añadido con éxito a la subtarea");
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
                
                this.fetchData()
                EventBus.$emit('updatemessage')
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
        filterMember(id_user){
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
    },
  created(){
     this.fetchData()
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
  },
    watch: {
      '$route': 'fetchData',
  },
}
</script>

<style>

</style>