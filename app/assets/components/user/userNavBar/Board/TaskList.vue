<template>
<div v-show="taskList.store == '0'" :id="taskList.id">
   <div class="task-container flex flex-row text-fontColor-primary cursor-pointer hover:bg-opacity-50 group" style="width:2610px" :class="color">
        <SlidePanel v-show="opentab" :name="taskList.name" :mentionList="mentionList" :id="taskList.id" :message="messages" :users="usuarios" :task="true" :opentab="opentab"/>
            <!-- NOMBRE Y COMENTARIOS --> 
                <div class="w-80 flex flex-row hover:text-indigo-600 border border-white align-middle pr-4">
                    <div class="left-indicator-inner h-full w-[14px] hover:w-[54px] relative left-0 bg-sideBar-primary transition mr-2" 
                     @mouseover="grouphover = true" @mouseleave="grouphover = false"
                    :class="selected != 0 ? 'w-[54px]' : '' ">
                        <input type="checkbox" 
                            v-model="selected"  
                            :name="taskList.id" 
                            :value="taskList.id" 
                            @click="emitSelect"
                            ref="inputselect"
                            class="absolute top-[20px] left-[14px] m-auto invisible"
                            :class="[selected != 0 ? 'visible' : 'invisible', grouphover == true ? 'visible' : '' ]"
                            >
                    </div>
                    <div  class="max-w-full w-full flex justify-between px-2 pt-2"  @mouseover="editHidden = true" @mouseleave="editHidden = false"  @click="focus = true ">  
                     <div class="max-w-[200px]" :class="focus ? '' : 'truncate'"
                            :contenteditable="true"
                            v-on:blur="editName(taskList.id, taskList.name), focus = false" 
                            :id="taskList.name" ref="input" 
                            :title="taskList.name">
                                {{taskList.name}}
                        </div>                         
                        <span class="relative inline-block" ref="triger" v-on:click="closingTabsMessage(), getmessages()">
                            <icon-base :iconColor="color" width="25" height="25" icon-name="message" ><Message/></icon-base>
                            <span v-if="numbermessage != 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{{numbermessage}}
                            </span>
                        </span>
                    </div>
                    
                </div>
                    <!-- SUBELEMTENTOS -->
                    <div class="w-20  hover:text-indigo-600 border border-white align-middle px-2" v-on:click="showSubtask">
                        <span class="flex justify-center pt-2"><icon-base :iconColor="color" width="25" height="25" icon-name="message"><List/></icon-base>
                            <span v-if="numberSubtask != 0" class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{{numberSubtask}}</span>
                        </span>
                    </div>
                    
                    <!-- RESPONSABLES -->
                    <div class="responsable w-36 hover:text-indigo-600 border border-white " @mouseover="addUser = true" @mouseleave="addUser = false">
                        <div class="w-full flex flex-row flew-nowrap pt-2 pr-2">
                                <button v-popover.bottom="{name: taskList.id}" :class="[addUser ? 'visible' : 'invisible']" class="rounded-full p-2 focus:outline-none transition duration-200">
                                    <icon-base class="cursor-pointer" width="14" height="14" viewBox="0 0 512 512" icon-name="add"><Add/></icon-base>
                                </button>
                            <div class="flex flex-row" v-popover.bottom="{name: 'resp' + taskList.id}">
                                <div class="flex flex-row" v-for="(items,index) in taskList.users" :key="items.id"  > 
                                    <div v-if="index > 2">
                                    </div>
                                    <div v-else>
                                        <img class="w-8 h-8 relative rounded-full" :class="[index == 0 ? 'right-[0px]' : index == 1 ? 'left-[1px]' : '-right-[3px]' ]" :title="searchForUsersName(items.id_user)" :src="`/assets/images/users/${items.id_user}`" >
                                    </div>
                                </div>
                                <div v-if="numberResponsable > 3" class="h-8 w-8 bg-sideBar-primary rounded-full text-center">
                                    +{{numberResponsable-3}}
                                </div>
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
                            <div  class="flex flex-row" v-for="(items,index) in taskList.files" :key="items.id">
                                <div v-show="items.name" class="flex flex-row" @mouseover="deletebutton = true" @mouseleave="deletebutton = false" >
                                    <div v-if="index > 2">
                                    </div>
                                    <div v-else class="flex flex-row">
                                        <a :href="`/assets/files/${items.name}`" download="file">
                                            <img class="w-10 h-10" v-if="getFileExtension(items.name) == 'pdf'" src="/assets/images/icons/PDF.svg" alt="">
                                            <img class="w-10 h-10" v-if="getFileExtension(items.name) == 'xls'" src="/assets/images/icons/EXCEL.svg" alt="">
                                            <img class="w-10 h-10" v-if="getFileExtension(items.name) == 'docx'" src="/assets/images/icons/WORD.svg" alt="">
                                        </a>
                                    </div>
                                    <button v-show="deletebutton" class="rounded-full w-5 h-5 bg-white text-black self-center" v-on:click="deleteFile(items.name)">X</button>
                                </div>
                            </div>
                        </div>                
                    </div>
                
                 <!-- TAGS -->
                
                    <!-- PRIORIDAD -->
                    <div class="prioridad w-52 hover:text-indigo-600 border border-white align-middle" >
                        <div class="h-full align-middle" v-if="taskList.tags[0].id_type == 1" v-popover:prioridad.bottom v-on:click="setID=taskList.id">
                            <Tag :tagName="taskList.tags[0].name" />
                        </div>
                    </div>
                    <!-- AUTORIZACION -->
                    <div class="w-52 hover:text-indigo-600 border border-white align-middle">
                        <div class="h-full align-middle" v-if="taskList.tags[1].id_type=='2'" v-popover:autorizacion.bottom  v-on:click="setID=taskList.id">
                            <Tag :tagName="taskList.tags[1].name" />
                        </div>             
                    </div>
                    <!-- HACIENDOSE -->
                    <div class="w-52 hover:text-indigo-600 border border-white align-middle">
                        <div class="h-full" v-if="taskList.tags[2].id_type=='3'" v-popover:haciendose.bottom v-on:click="setID=taskList.id">
                            <Tag :tagName="taskList.tags[2].name" />
                        </div>                     
                    </div>
                    <!-- ENTREGADO -->
                    <div class="w-52 hover:text-indigo-600 border border-white align-middle">
                        <div class="h-full" v-if="taskList.tags[3].id_type=='4'" v-popover:entregado.bottom v-on:click="setID=taskList.id">
                            <Tag :tagName="taskList.tags[3].name" />
                        </div>                
                    </div>            
                    <!-- PLAZO -->
                    <div  class="w-80 border border-white items-center align-middle">
                        <div class="items-center align-middle pt-2">
                            <DatePicker :date="taskList.time_limit" :dateend="taskList.time_limit_end" :taskStatus="taskList.id_status" :id_task="taskList.id"/>
                        </div>
                    </div>

                    <!-- PROGRESO -->
                    <div class="w-32 hover:text-indigo-600 border border-white items-center align-middle">
                        
                        <div class="flex justify-between pt-2 pl-2" v-if="taskList.progress == '0'" >
                            <div class="w-1 bg-white rounded-2xl inline-block"></div>0%
                        </div>
                        <div v-else-if="taskList.progress <= '10'" class="flex justify-between pt-2 pl-2">
                            <div class="w-1/5 bg-white rounded-lg inline-block"></div>10%
                        </div>
                        <div v-else-if="taskList.progress <= '30'" class="flex justify-between pt-2 pl-2">
                            <div class="w-2/6 bg-white rounded-2xl inline-block"></div>30%
                        </div>
                        <div v-else-if="taskList.progress <= '40'" class="flex justify-between pt-2 pl-2">
                            <div class="w-2/5 bg-white rounded-2xl inline-block"></div>40%
                        </div>
                        <div v-else-if="taskList.progress <= '60'" class="flex justify-between pt-2 pl-2">
                            <div class="w-3/5 bg-white rounded-2xl inline-block"></div>60%
                        </div>
                        <div v-else-if="taskList.progress <= '70'" class="flex justify-between pt-2 pl-2">
                            <div class="w-4/6 bg-white rounded-2xl inline-block"></div>70%
                        </div>
                        <div v-else-if="taskList.progress <= '90'" class="flex justify-between pt-2 pl-2">
                            <div class="w-11/12 bg-white rounded-2xl inline-block"></div>90%
                        </div>
                        <div v-else class="flex pt-2 px-2">
                            <div class="w-full bg-white rounded-2xl inline-block"></div>100%
                        </div>               
                    </div>

                    <!-- TIEMPOS -->
                    <div class="w-32 hover:text-indigo-600 border border-white align-middle" >
                        <span class="flex justify-center pt-2" @click="play(taskList.id)">
                            <icon-base :iconColor="color" width="25" height="25" icon-name="Play" v-show="taskList.pause == 1"><Play/></icon-base>
                            <icon-base :iconColor="color" width="25" height="25" icon-name="Pause" v-show="taskList.pause == 0"><Pause/></icon-base>
                            {{tiempo}}
                        </span> 
                        <div v-popover.bottom="{name: 'tiempo' + taskList.id}">
                            <icon-base  class="cursor-pointer" width="14" height="14" viewBox="0 0 512 512" icon-name="add"><Add/></icon-base>
                        </div>        
                    </div>
                    <!-- ULTIMA ACTUALIZACION -->
                    <div class="w-80 hover:text-indigo-600 border border-white align-middle ">
                        <span class="flex justify-center pt-2">
                            <router-link :to="{ name: 'profileUser', params: {idUser: taskList.id_user_update } }">
                                <img class="rounded-full w-8 h-8 m-2"  :src="`/assets/images/users/${taskList.id_user_update}`">
                            </router-link>
                            <span class="inline-block px-2">{{taskList.updated_at}}</span>
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
                    <!-- <div class="w-32 flex justify-center items-center hover:text-indigo-600 border border-white align-middle" @click="show">
                        <icon-base viewBox="0 0 512 512" width="25" height="25" icon-name="trash" ><Trash/></icon-base>
                    </div> -->
                
        
        <!-- POPOVERS Y MODALES   -->
        
        <Popper v-if="taskList.id == setID" :name="'prioridad'" :taskListId="setID" @click="reset"/>

        <Popper v-if="taskList.id == setID" :name="'autorizacion'" :taskListId="setID" @click="reset"/>

        <Popper v-if="taskList.id == setID" :name="'haciendose'" :taskListId="setID" @click="reset"/>

        <Popper v-if="taskList.id == setID" :name="'entregado'" :taskListId="setID" @click="reset"/>
        
        
        
        <popover :name="taskList.id" :width="450">
            <div v-for="user in responsable" :key="user.id">
               <div v-if="!searchForManager(user.id_user)">
                       <div v-if="searchForUsersName(user.id_user)" @click="addManager(user.id_user, taskList.id)">
                           <img class="rounded-full w-8 h-8" :title="searchForUsersName(user.id_user)" :src="`/assets/images/users/${user.id_user}`">
                            {{searchForUsersName(user.id_user)}}
                       </div>
               </div>
            </div>
        </popover>
        
        <popover :name="'resp' + taskList.id" :width="250">
            <div v-for="user in responsable" :key="user.id" class="w-full h-full flex justify-center bg-sideBar-primary">
               <div v-if="searchForManager(user.id_user)" class="flex flex-row bg-white rounded-3xl m-2 items-center">
                    <img class="rounded-full w-8 h-8 mx-1.5" :title="searchForUsersName(user.id_user)" :src="`/assets/images/users/${user.id_user}`">
                    <span>{{searchForUsersName(user.id_user)}}</span>
                    <button class="w-5 h-5 mx-1.5 bg-white rounded-full text-black self-center" v-on:click="deleteManager(user.id_user, taskList.id)">X</button>
               </div>
            </div>
        </popover>
        <popover :name="'tiempo' + taskList.id" :width="150">
            <div class="items-center">
               Añadir sesión manualmente
               <div>
                   <input  class="border border-dotted" type="number" min="00" max="99" v-model="horas">:
                   <input  class="border border-dotted" type="number" min="00" max="59" v-model="minutos">      
               </div>
               <button class="rounded-lg bg-sideBar-primary text-white" @click="setTime()">ENVIAR</button>
            </div>
        </popover>
        
    </div>
        <div v-if="showed" class="bg-white ml-16 mb-5">
            <SubTask/>
            <SubtaskList 
                v-for="subtask in taskList.subtasks" 
                :key="subtask.id"
                :teamid="teamid"
                :subtask="subtask"
                :color="color"
                :numberResponsable="subtask.users.length"
                :colorSecondary="colorSecondary"
            />
            <input v-show="showed" contenteditable="true"  @change="createSubtask(taskList.id)" placeholder="+ Nueva Subtarea" v-model="nameSubtask" class="border text-fontColor-primary bg-white w-full focus:outline-none focus:ring focus:border-blue-300" :class="color">
            
        </div>
</div>
</template>

<script>
import Vue from 'vue'
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
import { postEditName, getMessage } from '../../../../servicies/userServicies'
import Play from '../../../icons/Play.vue'
import Pause from '../../../icons/Pause.vue'
import DatePicker from './subitems/DatePicker'
import SubTask from './subitems/SubTask'
import SubtaskList from './subitems/SubtaskList'
import SlidePanel from './subitems/SlidePanel'
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
        colorSecondary: String,
        taskStatus: String,
        draggable: Boolean,
        id: String,
        teamid: String,
        progress: Number,
        tagsList: Object,
        usuarios: Array,
        responsable: Array,
        numberResponsable: Number,
        mentionList: Array,
    },
    data() {
        return{
            date: new Date().toISOString().substr(0, 10),
            messages: [],
            setID: '',
            modal: false,
            focus: false,
            numberSubtask: '',
            numbermessage: '',
            tiempo: null,
            act: false,
            grouphover: false,
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
            opentab: false,
            size: 0,
            horas: 0,
            minutos: 0,
            selecionar: false,
            
        }
    },
   created() {
        this.fetchData()  
        if(this.taskList.pause == 0)
            var parar = setInterval(() => {
                this.time()
            }, 1000);
        else{
            this.time()
            clearInterval(parar)
        }
       this.id_task_show = window.location.pathname.split("slidepanel/")[1]
       
       
            
    },
     mounted(){
        EventBus.$on('triggerslide', this.triggerSlide)
        EventBus.$on('checkbox', this.select)
        EventBus.$on('deleteselected', this.deleteSelectedTask)
        EventBus.$on('storeselected', this.storeSelectedTask)
        EventBus.$on('reset', this.reset);
        EventBus.$on('closeslidepanel', this.closeSlide)
        EventBus.$on('updatemessage', this.fetchData)
        EventBus.$on('deletemessage', this.fetchData)
        EventBus.$on('confeti', this.start)
        EventBus.$on('closeselected', this.closeSelected)
        this.date = this.taskList.time_limit
        this.numberSubtask = this.taskList.subtasks.length
        this.numbermessage = this.taskList.messages
        this.ID = this.teamid
        if(this.taskList.id == this.id_task_show)
            this.triggerSlide()
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
            this.getmessages()
        },
        getmessages(){
            const token = localStorage.getItem('validation_token');
            if(this.opentab){
            getMessage(token, this.taskList.id)
            .then(data =>{ (this.messages = data) });
            }    
        },
        triggerSlide(){
            this.$refs.triger.click()
        },
        closeSlide(){
            this.opentab = false
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
        setTime(){
            
            let hours = this.horas * 3600
            
            let minuts = this.minutos * 60
            
            let totaltime = hours + minuts
            
            EventBus.$emit('settime', totaltime, this.taskList.id)
        },
        getFileExtension(filename) {
            
            return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
        },
        emitSelect(){
            EventBus.$emit('selectcheck', this.taskList.id)
            
        },
        select(status) {
                 if(status == this.taskStatus)
                 {
                     
                this.$refs.inputselect.click()
                 }
		},
        closeSelected(arrID){
            if(arrID.includes(this.taskList.id))
                this.selected = [];
        },
        focusName(){
            this.$refs.input.focus()
        },
        editName(id_task,task_name){
            const valor = document.getElementById(task_name);
            const text = valor.textContent
           
            const token = localStorage.getItem('validation_token');
            const formData = new FormData()
            formData.append('name', text);
            formData.append('token', token);
          
            let promise = new Promise((resolve, reject) => {
                resolve(postEditName(formData, id_task));
              });
              promise.then((response) => {
                
                this.fetchData()
              });
        },
        browse(){
            this.$refs.file.click();
        },
        reset(){
            this.setID = ''
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
        show(){
            this.$modal.show(this.taskList.id);
        },
        hide () {
            this.$modal.hide(this.taskList.id);
        },
        closingTabsMessage(){
            this.opentab = false;
            this.opentab = !this.opentab
        },
        play(ID){
            EventBus.$emit('play', ID)
        },
        deleteFile(filename){
            EventBus.$emit('deleteFile', filename)
        },
         deleteManager(id_manager, id_task){
            EventBus.$emit('deletemanager', id_manager, id_task)
        },
        addManager(ID, id_task){
            
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
            
            var hour = Math.trunc(milisegundos / (1000 * 60 * 60));
            hour = (hour < 10)? '0' + hour : hour;
                this.tiempo =  hour + ':' + minute + ':' + segundos
            }
        },
        secondsToString(milisegundos) {
            
            var segundos = Math.floor((milisegundos / 1000) % 60)
            segundos = (segundos < 10)? '0' + segundos : segundos;
            
            var minute = Math.floor((milisegundos / (1000 * 60)) % 60);
            minute = (minute < 10)? '0' + minute : minute;
            
            var hour = Math.trunc(milisegundos / (1000 * 60 * 60));
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