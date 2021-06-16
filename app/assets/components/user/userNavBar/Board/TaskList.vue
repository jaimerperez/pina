<template>
<div v-show="taskList.store == '0'" :id="taskList.id">
   <div class="task-container flex flex-row text-fontColor-primary hover:bg-gray-200 cursor-pointer" style="width:3000px" >
        <SlidePanel v-show="opentab" :name="taskList.name" :id="taskList.id" :message="messages" :users="usuarios" :task="true" :opentab="opentab"/>
            <!-- NOMBRE Y COMENTARIOS --> 
                <div class="w-80 hover:text-indigo-600 border border-white align-middle px-4">
                    <!-- <input type="checkbox"> -->
                    <span  class="flex justify-between group pt-2"  @mouseover="editHidden = true" @mouseleave="editHidden = false">
                        <input type="checkbox" v-model="selected" :name="taskList.id" :value="taskList.id" class="mx-2">
                        <p class="truncate px-2" :contenteditable="true" v-on:blur="editName(taskList.id, taskList.name)" :id="taskList.name" ref="input" >{{taskList.name}}</p> 
                        <icon-base v-show="editHidden" viewBox="0 0 1080 1080"  width="25" height="25" icon-name="editar" @click.native="focusName" class="cursor-pointer inline-block"><Editar/></icon-base>
                        
                        <span class="relative inline-block" v-on:click="opentab=!opentab">
                            <icon-base :iconColor="color" width="25" height="25" icon-name="message" ><Message/></icon-base>
                            <span v-if="numbermessage != 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{{numbermessage}}
                            </span>
                         </span>
                    </span>
                    
                </div>
                    <!-- SUBELEMTENTOS -->
                    <div class="w-20 hover:text-indigo-600 border border-white align-middle px-2" v-on:click="showSubtask">
                        <span class="flex justify-center pt-2"><icon-base :iconColor="color" width="25" height="25" icon-name="message"><List/></icon-base>
                            <span v-if="numberSubtask != 0" class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{{numberSubtask}}</span>
                        </span>
                    </div>
                    
                    <!-- RESPONSABLES -->
                    <div class="w-24 hover:text-indigo-600 border border-white" @mouseover="addUser = true" @mouseleave="addUser = false">
                        <button v-show="addUser" v-popover.bottom="{name: taskList.id}" class="rounded-full p-2 focus:outline-none transition duration-200">
                                <icon-base class="cursor-pointer" width="25" height="25" viewBox="0 0 512 512" icon-name="add"><Add/></icon-base>
                            </button>
                        <div class="flex flex-row">
                             <div v-for="items in taskList.users" :key="items.id" class="flex flex-row" @mouseover="deletemanager = true" @mouseleave="deletemanager = false" > 
                                <ImageMembers class="w-8 h-8 m-2" :ID="items.id_user" :toprofile="true" />
                                <button v-show="deletemanager" class="rounded-full w-5 h-5 bg-white text-black self-center" v-on:click="deleteManager(items.id_user, taskList.id)">X</button>
                            </div>
                        </div>     
                    </div>
                
                    <!-- ARCHIVOS -->
                    <div class="w-32 hover:text-indigo-600 border border-white align-middle" @mouseover="act = true" @mouseleave="act = false">
                        <input type="file" class="hidden" ref="file" id="files" name="files" @change="update">
                        <div class="flex justify-center flex-col">
                            <button v-show="act" @click="browse()" class="rounded-full p-2 focus:outline-none transition duration-200">
                                <icon-base class="cursor-pointer" width="25" height="25" viewBox="0 0 512 512" icon-name="add" ><Add/></icon-base>
                            </button>
                            <div  class="flex flex-col" v-for="items in taskList.files" :key="items.id">
                                <div v-show="items.name" class="flex" @mouseover="deletebutton = true" @mouseleave="deletebutton = false" >
                                    <a :href="`/assets/files/${items.name}`" download="file">
                                        <icon-base viewBox="0 0 384 512" width="25" height="25"><File /></icon-base>
                                    </a>
                                    <button v-show="deletebutton" class="rounded-full w-5 h-5 bg-white text-black self-center" v-on:click="deleteFile(items.name)">X</button>
                                </div>
                            </div>
                        </div>                
                    </div>
                
                 <!-- TAGS -->
                
                    <!-- PRIORIDAD -->
                    <div class="w-52 hover:text-indigo-600 border border-white align-middle" >
                        <div  v-for="items in tagsList.tags" :key="items.id">
                                <div  v-for="el in taskList.tags" :key="el.id">
                                    <div  v-if="items.id == el.id_tag">
                                        <div v-if="items.id_type == 1" v-popover:prioridad.bottom v-on:click="setID=taskList.id">
                                            <Tag :tagName="items.name"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <!-- AUTORIZACION -->
                    <div class="w-52 hover:text-indigo-600 border border-white align-middle">
                        <div v-for="items in tagsList.tags" :key="items.id">
                            <div v-for="el in taskList.tags" :key="el.id">
                                <div v-if="items.id == el.id_tag">
                                    <span v-if="items.id_type=='2'" v-popover:autorizacion.bottom  v-on:click="setID=taskList.id">
                                        <Tag :tagName="items.name"/>
                                        
                                    </span>
                                </div>
                            </div>
                        </div>                
                    </div>

                    <!-- HACIENDOSE -->
                    <div class="w-52 hover:text-indigo-600 border border-white align-middle">
                        <h1 v-for="items in tagsList.tags" :key="items.id">
                            <div v-for="el in taskList.tags" :key="el.id">
                                <div v-if="items.id == el.id_tag">
                                    <div v-if="items.id_type=='3'" v-popover:haciendose.bottom v-on:click="setID=taskList.id">
                                        <Tag :tagName="items.name"/>
                                        
                                    </div>
                                </div>
                            </div>
                        </h1>                        
                    </div>

                    <!-- ENTREGADO -->
                    <div class="w-52 hover:text-indigo-600 border border-white align-middle">
                        <h1 v-for="items in tagsList.tags" :key="items.id">
                            <div v-for="el in taskList.tags" :key="el.id">
                            <div v-if="items.id == el.id_tag">
                                <div v-if="items.id_type=='4'" v-popover:entregado.bottom v-on:click="setID=taskList.id">
                                    <Tag :tagName="items.name"/>
                                    
                                </div>
                            </div>
                            </div>
                        </h1>                         
                    </div>
                
                <!-- PLAZO, PROGRESO, TIEMPOS, UPDATE, ID, EMAIL, BORRAR -->
                
                    <!-- PLAZO -->
                    <div  class="w-80 border border-white items-center align-middle">
                        <div class="items-center align-middle pt-2">
                            <DatePicker :date="taskList.time_limit" :taskStatus="taskList.id_status" :id_task="taskList.id"/>
                        </div>
                    </div>

                    <!-- PROGRESO -->
                    <div class="w-32 hover:text-indigo-600 border border-white items-center align-middle">
                        
                        <div v-if="taskList.progress == '0'" class="flex justify-between">
                            <div class="w-1 bg-block-complete-primary rounded inline-block"></div>0%
                        </div>
                        <div v-else-if="taskList.progress <= '10'" class="flex justify-between">
                            <div class="w-1/5 bg-block-complete-primary rounded inline-block"></div>10%
                        </div>
                        <div v-else-if="taskList.progress <= '30'" class="flex justify-between">
                            <div class="w-2/6 bg-block-complete-primary rounded inline-block"></div>30%
                        </div>
                        <div v-else-if="taskList.progress <= '40'" class="flex justify-between">
                            <div class="w-2/5 bg-block-complete-primary rounded inline-block"></div>40%
                        </div>
                        <div v-else-if="taskList.progress <= '60'" class="flex justify-between">
                            <div class="w-3/5 bg-block-complete-primary rounded inline-block"></div>60%
                        </div>
                        <div v-else-if="taskList.progress <= '70'" class="flex justify-between">
                            <div class="w-4/6 bg-block-complete-primary rounded inline-block"></div>70%
                        </div>
                        <div v-else-if="taskList.progress <= '90'" class="flex justify-between">
                            <div class="w-11/12 bg-block-complete-primary rounded inline-block"></div>90%
                        </div>
                        <div v-else class="flex">
                            <div class="w-full bg-block-complete-primary rounded inline-block"></div>100%
                        </div>               
                    </div>

                    <!-- TIEMPOS -->
                    <div class="w-32 hover:text-indigo-600 border border-white align-middle" @click="play(taskList.id)">
                        <span class="flex justify-center pt-2">
                        <icon-base :iconColor="color" width="25" height="25" icon-name="Play" v-show="taskList.pause == 1"><Play/></icon-base>
                        <icon-base :iconColor="color" width="25" height="25" icon-name="Pause" v-show="taskList.pause == 0"><Pause/></icon-base>
                            {{tiempo}}
                        </span>                 
                    </div>
                    <!-- ULTIMA ACTUALIZACION -->
                    <div class="w-80 hover:text-indigo-600 border border-white align-middle ">
                        <span class="flex justify-center pt-2">
                            <ImageMembers class="w-5 h-5 ml-2 pt-2" :ID="taskList.id_user_update" :toprofile="true"/>
                            <span class="relative inline-block px-2">{{taskList.updated_at}}</span>
                        </span>
                    </div>
                    <!-- ID -->
                    <div class="w-32 pt-2 hover:text-indigo-600 border border-white align-middle">
                        <span class="flex justify-center">{{taskList.id}} </span>        
                    </div>
                    <!-- CORREO -->
                    <div class="w-52 hover:text-indigo-600 border border-white align-middle">
                        <span class="flex justify-center"></span>
                        {{taskList.email}}             
                    </div>
                    <!-- BORRAR TAREA -->
                    <div class="w-32 flex justify-center items-center hover:text-indigo-600 border border-white align-middle" @click="show">
                        <icon-base viewBox="0 0 512 512" width="25" height="25" icon-name="trash" ><Trash/></icon-base>
                    </div>
                
        
        <!-- POPOVERS Y MODALES   -->
        
        <Popper v-if="taskList.id == setID" :name="'prioridad'" :taskListId="setID" @click="reset"/>

        <Popper v-if="taskList.id == setID" :name="'autorizacion'" :taskListId="setID" @click="reset"/>

        <Popper v-if="taskList.id == setID" :name="'haciendose'" :taskListId="setID" @click="reset"/>

        <Popper v-if="taskList.id == setID" :name="'entregado'" :taskListId="setID" @click="reset"/>
        
        <modal :name="taskList.id">
            <div>
                Desea Eliminar la tarea
                <div>
                    <button @click="deleteTask">Si</button>
                </div>
                <div>
                    <button @click="hide">NO</button>
                </div>
            </div>
        </modal>

        <popover :name="taskList.id" :width="450">
            <div v-for="user in responsable" :key="user.id">
               <div v-if="!searchForManager(user.id_user)">
                       <div v-if="searchForUsersName(user.id_user)" @click="addManager(user.id_user, taskList.id)">
                           <img class="rounded-full w-8 h-8" :src="`/assets/images/users/${user.id_user}`">
                            {{searchForUsersName(user.id_user)}}
                       </div>
               </div>
            </div>
        </popover>
        
    </div>
        <div v-if="showed" class="">
            <SubTask />
            <SubtaskList 
                class=" text-fontColor-primary pl-10" 
                v-for="subtask in taskList.subtasks" 
                :key="subtask.id"
                :teamid="teamid"
                :subtask="subtask"
                :color="color"
            />
            <input v-show="showed" contenteditable="true"  @change="createSubtask(taskList.id)" placeholder="+ Nueva Subtarea" v-model="nameSubtask" class="border text-fontColor-primary bg-white w-full focus:outline-none focus:ring focus:border-blue-300" :class="color">
            
        </div>
</div>
</template>

<script>
import Vue from 'vue';
import {EventBus} from '../../../../event-bus.js'
import Popover from 'vue-js-popover'
import Draggable from 'vuedraggable'
import IconBase from '../../../icons/IconBase.vue'
import Add from '../../../icons/Add.vue'
import Editar from '../../../icons/Editar.vue'
import File from '../../../icons/File.vue'
import Message from '../../../icons/Message'
import Trash from '../../../icons/Trash'
import List from '../../../icons/List'
import Tag from './popover/Tag'
import Popper from './popover/Popper'
import {getAllTags, getAllUsers, getUserTeams, postEditName, getMessage, postMessage } from '../../../../servicies/userServicies'
import Play from '../../../icons/Play.vue'
import Pause from '../../../icons/Pause.vue'
import DatePicker from './subitems/DatePicker'
import SubTask from './subitems/SubTask'
import SubtaskList from './subitems/SubtaskList'
import SlidePanel from './subitems/SlidePanel'
import ImageMembers from '../Welcome/tabs/ImageMembers'
import DateRangePicker from 'vue2-daterange-picker'
//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
Vue.use(Popover)
export default {
    components: {
        Draggable,
        IconBase,
        Message,
        List,
        Tag,
        Play,
        Pause,
        Popper, 
        Trash,
        SubTask,
        DatePicker,
        ImageMembers,
        DateRangePicker,
        Add, 
        SubtaskList,
        SlidePanel,
        File,
        Editar,
      
    },
    props: {
        taskList: Object,
        color: String,
        taskTag: Array,
        taskStatus: String,
        draggable: Boolean,
        id: String,
        teamid: String,
        progress: Number,
    },
    data() {
        return{
            date: new Date().toISOString().substr(0, 10),
            tagsList: [],
            responsable: [],
            usuarios: [],
            messages: [],
            active: true,
            setID: '',
            modal: false,   
            numberSubtask: '',
            numbermessage: '',
            tiempo: null,
            act: false,
            deletebutton: false,
            file: null,
            parar: null,
            addUser: false,
            ID: '',
            deletemanager: false,
            showed: false,
            nameSubtask: '',
            editHidden: false,
            contentEdit: false,
            selected: [],
		    selectAll: false,
            state: '',
            opentab: false,
            
        }
    },
   created() {
        this.fetchData()
        this.selectAll = false
        
        if(this.taskList.pause == 0)
            var parar = setInterval(() => {
                this.time()
            }, 1000);
        else{
            this.time()
            clearInterval(parar)
        }
        
            
    },
     mounted(){
        EventBus.$on('checkbox', this.select)
        EventBus.$on('deleteselected', this.deleteSelectedTask)
        EventBus.$on('storeselected', this.storeSelectedTask)
        EventBus.$on('reset', this.reset);
        EventBus.$on('closeslidepanel', this.closeSlide)
        EventBus.$on('updatemessage', this.fetchData)
        this.date = this.taskList.time_limit
        this.numberSubtask = this.taskList.subtasks.length
        this.numbermessage = this.taskList.messages
        this.ID = this.teamid
        
    } ,
    watch: {
    '$route': 'fetchData',
    taskList(){
        if(this.taskList.pause == 0)
            setInterval(() => {
                this.time()
            }, 1000);
        else
            this.time() 
    }
  },
    methods:{
        fetchData() {
            const token = localStorage.getItem('validation_token');
           getAllTags(token)
            .then(data => (this.tagsList = data));
            
            getUserTeams(token,this.teamid)
                .then(data => (this.responsable = data));
                
            getAllUsers(token)
                .then(data => (this.usuarios = data));
           
            getMessage(token, this.taskList.id)
            .then(data =>{ (this.messages = data) });
               
        },
        closeSlide(){
            this.opentab = false
        },
        onInput(){
            console.log('rr')
        },
         showModal(status){
            this.state = status
            this.$modal.show('deleteSeleccionadas');
        },
        hideModal() {
            this.$modal.hide('deleteSeleccionadas');
        },
        deleteSelectedTask(status){
            let value = document.getElementsByName(this.taskList.id)
            
            for(let i of value){
                 
                 if(status == this.taskStatus)
                 {
                    
                     if(i.checked)
                        {
                            
                            EventBus.$emit('delete', i.value)
                        }
                 }
                    
            }
        },
        storeSelectedTask(status){
            let value = document.getElementsByName(this.taskList.id)
            
            for(let i of value){
                 
                 if(status == this.taskStatus)
                 {
                    
                     if(i.checked)
                        {
                            EventBus.$emit('store', i.value)
                        }
                 }
                    
            }
        },
        select(status) {

			let value = document.getElementsByName(this.taskList.id)
            console.log(value)
            for(let i of value){
                
                 if(status == this.taskStatus)
                 {
                     
                     i.checked = !i.checked
                 }
                    
            }
		},
        focusName(){
            console.log('222')
            this.$refs.input.focus()
        },
        editName(id_task,task_name){
            const valor = document.getElementById(task_name);
            const text = valor.textContent
            console.log(text)
            const token = localStorage.getItem('validation_token');
            const formData = new FormData()
            formData.append('name', text);
            formData.append('token', token);
          
            let promise = new Promise((resolve, reject) => {
                resolve(postEditName(formData, id_task));
              });
              promise.then((response) => {
                console.log(response);
                this.fetchData()
              });
        },
        browse(){
            this.$refs.file.click();
        },
        reset(){
            this.setID = ''
        },
        progreso(value){
            this.progress = +value
        },
        checkImg(id_user){
            try {
                require(`../../../../media/users/${id_user}.png`)
                return true
                }
                catch (e) {
                    return false
                }
        },
        changeStatus(){
            EventBus.$emit('changes', 3, this.taskList.id)
        },
        createSubtask(id_task){
           EventBus.$emit('subtask',this.nameSubtask, id_task)
           this.nameSubtask = ''
        },
       
        deleteTask(){
            EventBus.$emit('delete',this.taskList.id)
            this.hide()
        },
        showSubtask(){
            
            this.showed = !this.showed
        },
        toggle(ID,NAME){
           if(!this.contentEdit)
            EventBus.$emit('slide',ID, NAME)
        },
        show(){
            this.$modal.show(this.taskList.id);
        },
        hide () {
            this.$modal.hide(this.taskList.id);
        },
        play(ID){
            EventBus.$emit('play', ID)
            this.fetchData()
        },
        deleteFile(filename){
            EventBus.$emit('deleteFile', filename)
        },
         deleteManager(id_manager, id_task){
             console.log(id_manager)
             console.log(id_task)
            EventBus.$emit('deletemanager', id_manager, id_task)
        },
        addManager(ID, id_task){
            console.log('entra')
            EventBus.$emit('addmanager', ID, id_task)
        },
        update(event){
            this.file = event.target.files[0]
            EventBus.$emit('updateFiles',this.file,this.taskList.id)
        },
        time(){
            if(this.taskList.pause == 0){
                let date = new Date()
                
                let timezone = Math.abs(date.getTimezoneOffset()/(60))
                
                let last_play = new Date(this.taskList.last_play)
                

                last_play.setHours(last_play.getHours()+timezone)
              

                let diffDate = date - last_play
                

                let timeWorking = this.taskList.time_working * 1000//milisegundos
                

                let final = diffDate + timeWorking
                
                
                this.tiempo = this.secondsToString(final)
               
            }
            else{
            let milisegundos = this.taskList.time_working * 1000
            var segundos = Math.floor((milisegundos / 1000) % 60)
            segundos = (segundos < 10)? '0' + segundos : segundos;
            
            var minute = Math.floor((milisegundos / (1000 * 60)) % 60);
            minute = (minute < 10)? '0' + minute : minute;
            
            var hour = Math.floor(milisegundos / (1000 * 60 * 60)) % 24;
            hour = (hour < 10)? '0' + hour : hour;
                this.tiempo =  hour + ':' + minute + ':' + segundos
            }
        },
        secondsToString(milisegundos) {
            
            var segundos = Math.floor((milisegundos / 1000) % 60)
            segundos = (segundos < 10)? '0' + segundos : segundos;
            
            var minute = Math.floor((milisegundos / (1000 * 60)) % 60);
            minute = (minute < 10)? '0' + minute : minute;
            
            var hour = Math.floor(milisegundos / (1000 * 60 * 60)) % 24;
            hour = (hour < 10)? '0' + hour : hour;
            return hour + ':' + minute + ':' + segundos;
        },

        searchForManager(id_user){
            for(let items in this.taskList.users)
            {
                if(id_user == this.taskList.users[items].id_user)
                    return true
            }
            return false
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
        
    },
       
}
</script>

<style>
.taskContainer {
    color: red;
    width: 1920px;
}
</style>