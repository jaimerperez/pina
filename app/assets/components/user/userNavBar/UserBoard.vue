<template>
  <div class="w-full h-full">
    
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
        <div v-if="userInfo.id_rol != 1" class="class-icon px-4" >
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
        <div class="spacer bg-fontColor-primary justify-self-center self-center w-11/12 h-0.5 mt-1"></div>
      </div>
      
      
      
      <!-- SECCIONES DE ESTADOS  -->
    <div class="text-block-working-primary bg-block-working-secondary mx-12 my-16 xl:max-w-2xl" style="max-width:1650px"  @mouseover="typeStatus(1)">
      <TaskStatus
      id="board-1" 
      v-if="boardTeamID" 
      :boardTeamID="boardTeamID" 
      @click="tagIdChange"
      :taskList="taskListWorking"
      :search="search"
      class=" col-3" status="Trabajando" taskStatus="1" :ht="'#1DA0B5'" :color="'bg-block-working-secondary'" :placeholder="'+ Añadir nueva tarea'" 
      />
    </div>
    <div class="text-block-pending-primary bg-block-pending-secondary mx-12 my-16" style="max-width:1650px" @mouseover="typeStatus(3)"> 
      <TaskStatus
      id="board-2"
      v-if="boardTeamID" 
      @click="tagIdChange"
      :search="search"
      :boardTeamID="boardTeamID" 
      :taskList="taskListPending" 
      class="col-3" status="Pendientes" taskStatus="3" :ht="'#DE650F'" :color="'bg-block-pending-secondary'" :placeholder="'+ Añadir nueva tarea'"
      />
    </div>
    <div class="text-block-complete-primary bg-block-complete-secondary mx-12 my-16" style="max-width:1650px" @mouseover="typeStatus(4)">
      <TaskStatus
        id="board-3"
        v-if="boardTeamID" 
        @click="tagIdChange"
        :search="search"
        :boardTeamID="boardTeamID"
        :taskList="taskListCompleted" 
        class=" col-3" status="Completadas" taskStatus="4" :ht="'#199961'" :color="'bg-block-complete-secondary'" :placeholder="'+ Añadir nueva tarea'" 
        />
    </div>
    
    
    <!-- MODAL -->
      <popover :name="'adduser'" :width="400" >
        <div v-for="user in users" :key="user.id" class="flex flex-wrap justify-center items-center w-96 max-h-96 " >
          <div v-if="!searchUserinTeam(user.id)">
            <ImageMembers class="w-8 h-8 m-2" :ID="user.id" :toprofile="true"/>
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
                <ImageMembers v-on:click.native="filterMember(user.id_user)" class="w-8 h-8 m-2 cursor-pointer" :ID="user.id_user" :toprofile="false"/>
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
import ImageMembers from './Welcome/tabs/ImageMembers'
import {getAllUsers, getUserToken, createUserInTeam, getAllTaskFromTeam, postTaskToTeam, 
putChangeTags, deleteTask,putChangeStatusTask, setDate, ChangeSubTags, postSubTask, 
postTime, postFilesTask, deleteFiles, postAddUserToTask, deleteManager, getUserTeams, createUser,
postTimeSubtask, deleteSubTask, postStoreTask, postAddUserToSubTask, postMessage} from '../../../servicies/userServicies'
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
    ImageMembers
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
      idUser: "",
      taskList: [],
      taskListCompleted: [],
      taskListWorking: [],
      taskListPending:[],
      open: false,
      state: 'collapse',
      gravity: 'right',
      dismissedState: 'dismissedState',
      search: '',   
    }
  },
  methods:{
   
    fetchData() {
      const token = localStorage.getItem('validation_token');

      //obtenemos todas las tareas del equipo y le asignamos a un array dependiendo de su estado
      getAllTaskFromTeam(token, this.boardTeamID) 
      .then(tasks => {
          this.taskListCompleted = []
          this.taskListWorking = []
          this.taskListPending = []
        for(let task of tasks){
          if(task.id_status == "1")
              this.taskListWorking.push(task) 
          else if(task.id_status == "3")
              this.taskListPending.push(task)   
          else
              this.taskListCompleted.push(task)
        }
      });
      getUserTeams(token, this.boardTeamID)
        .then(data => (this.responsable = data));
      
      getUserToken(token)
      .then(data => (this.userInfo = data));

      getAllUsers(token)
      .then(data => (this.users = data));
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
                console.log(response);
                this.fetchData()
              });
   },

  
   createTask(content,taskStatus){
            
              const formData = new FormData()
              formData.append('name', content);
              formData.append('status',taskStatus);
              formData.append('token', localStorage.getItem('validation_token'));

              let promise = new Promise((resolve, reject) => {
                console.log(taskStatus)
                resolve(postTaskToTeam(formData, this.boardTeamID));
              });
              promise.then((response) => {
                console.log(response);
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
                console.log(response);
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
                console.log(response);
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
                console.log(response);
                this.fetchData()
              });
        },
         tagStatusChange(id_status,ID){
            const token = localStorage.getItem('validation_token');
            
             let promise = new Promise((resolve, reject) => {
                resolve(putChangeStatusTask(id_status, token, ID));
              });
              promise.then((response) => {
                console.log(response);
                this.fetchData()
              });
        },
        deleteTask(id_task){
            console.log(id_task)
            const token = localStorage.getItem('validation_token');
            
            let promise = new Promise((resolve, reject) => {
                resolve(deleteTask(token, id_task));
              });
              promise.then((response) => {
                console.log(response);
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
                console.log(response);
                this.fetchData()
              });
        },
         deleteSubtask(id_subtask){
            
            const token = localStorage.getItem('validation_token');
            
             let promise = new Promise((resolve, reject) => {
                resolve(deleteSubTask(token, id_subtask));
              });
              promise.then((response) => {
                console.log(response);
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
                console.log(response);
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
                console.log(response);
                this.fetchData()
              });
        },
        dateLimit(id_task, dateSelected){
          const formData = new FormData()
          const token = localStorage.getItem('validation_token');
          formData.append('time_limit', dateSelected);
          formData.append('token', token);
          
          let promise = new Promise((resolve, reject) => {
                resolve(setDate(formData, id_task));
              });
              promise.then((response) => {
                console.log(response);
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
                console.log(response);
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
                console.log(response);
                this.fetchData()
              });
        },
        playSubtask(ID){
          console.log(ID)
          const formData = new FormData()
           const token = localStorage.getItem('validation_token');
          formData.append('token', token);
         
            let promise = new Promise((resolve, reject) => {
                resolve( postTimeSubtask(formData, ID));
              });
              promise.then((response) => {
                console.log(response);
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
                console.log(response);
                this.fetchData()
                EventBus.$emit('updatemessage')
              });
        },
        toggle(){
          this.open = !this.open
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
                console.log(response);
                this.fetchData()
              });
      },
        deleteFile(file){
          const token = localStorage.getItem('validation_token');
          
            let promise = new Promise((resolve, reject) => {
                resolve(deleteFiles(token, file));
              });
              promise.then((response) => {
                console.log(response);
                this.fetchData()
              });
      },
        deleteManager(user_id, task_id){
          const token = localStorage.getItem('validation_token');
            
              let promise = new Promise((resolve, reject) => {
                resolve(deleteManager(token, task_id, user_id));
              });
              promise.then((response) => {
                console.log(response);
                this.fetchData()
              });
        },
        changeStatusDragg(id_status, id_task){
            const token = localStorage.getItem('validation_token');
           
              let promise = new Promise((resolve, reject) => {
                resolve( putChangeStatusTask(id_status, token, id_task));
              });
              promise.then((response) => {
                console.log(response);
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
        show () {
          this.$modal.show('my-first-modal');
        },
        hide () {
          this.$modal.hide('my-first-modal');
        },
        checkImg(id_user){
            try {
                require(`../../../media/users/${id_user}.png`)
                return true
                }
                catch (e) {
                    return false
                }
        },
      
    },
  created(){
     this.fetchData()
      if ('loading' in HTMLImageElement.prototype) {
        console.log('El navegador soporta `lazy-loading`...');
      } else {
        console.log('`lazy-loading` no soportado...');
      }
      
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
  },
    watch: {
      '$route': 'fetchData',
  },
}
</script>

<style>

</style>