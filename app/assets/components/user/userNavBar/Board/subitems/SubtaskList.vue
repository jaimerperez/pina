<template>
    <div class="flex flex-row text-black" :class="colorSecondary">
        <SlidePanel v-show="opentab" :name="subtask.name" :id="subtask.id" :message="messages" :users="usuarios" :task="false" :opentab="opentab"/>
            <!-- NAME SUBTASK -->
        <div class="w-80 hover:text-indigo-600 border border-white align-middle ">
            <div  class="max-w-full w-full flex justify-between px-2 pt-2"  @mouseover="editHidden = true" @mouseleave="editHidden = false"  @click="focus = true ">  
                     <div class="max-w-[200px]" :class="focus ? '' : 'truncate'"
                            :contenteditable="true"
                            v-on:blur="editName(subtask.id, subtask.name), focus = false" 
                            :id="subtask.name" ref="input" 
                            :title="subtask.name">
                                {{subtask.name}}
                        </div>                         
                        <span class="relative inline-block" v-on:click="closingTabsMessage(), getmessages()">
                            <icon-base :iconColor="color" width="25" height="25" icon-name="message" ><Message/></icon-base>
                            <!-- <span v-if="numbermessage != 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            {{numbermessage}}
                            </span> -->
                        </span>
                    </div>
        </div>

        <!-- RESPONSABLE SUBTASK -->
       
        <div class="responsable w-36 hover:text-indigo-600 border border-white " @mouseover="addUser = true" @mouseleave="addUser = false">
                        <div class="w-full flex flex-row flew-nowrap pt-2 pr-2">
                                <button v-popover.bottom="{name: subtask.id}" :class="[addUser ? 'visible' : 'invisible']" class="rounded-full p-2 focus:outline-none transition duration-200">
                                    <icon-base class="cursor-pointer" width="14" height="14" viewBox="0 0 512 512" icon-name="add"><Add/></icon-base>
                                </button>
                            <div class="flex flex-row" v-popover.bottom="{name: 'resp' + subtask.id}">
                                <div class="flex flex-row" v-for="(items,index) in subtask.users" :key="items.id"  > 
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
        <!-- TAGS SUBTASK -->
        <div class="w-52 border border-white align-middle cursor-pointer">
            
                <div class="h-full align-middle" v-if=" subtask.id_subtag == 1"  v-popover:subtag.bottom v-on:click="setID=subtask.id">
                    <Tag :tagName="'Paso'" />
                </div>  
                <div class="h-full align-middle" v-if=" subtask.id_subtag == 2"  v-popover:subtag.bottom v-on:click="setID=subtask.id">
                    <Tag :tagName="'+Info'" />
                </div>
                <div class="h-full align-middle" v-if=" subtask.id_subtag == 3"  v-popover:subtag.bottom v-on:click="setID=subtask.id">
                    <Tag :tagName="'Listo'" />
                </div>  
                <div class="h-full align-middle" v-if="subtask.id_subtag == 4"  v-popover:subtag.bottom v-on:click="setID=subtask.id">
                    <Tag :tagName="'En proceso'" />
                </div>
                <div class="h-full align-middle" v-if="subtask.id_subtag == 5"  v-popover:subtag.bottom v-on:click="setID=subtask.id">
                    <Tag :tagName="'Estancado'" />
                </div>  
        </div>
                        
                            <!-- FECHAS SUBTASK -->
                            <div class="w-52 border border-white align-middle">
                                <DatePicker :date="subtask.time_limit" :dateend="subtask.time_limit_end" :taskStatus="subtask.id_status" :id_task="subtask.id"/>
                            </div>

                            <!-- TIME SUBTASK -->
                            <div class="w-52 hover:text-indigo-600 border border-white align-middle cursor-pointer" @click="play(subtask.id)">
                                <span class="flex justify-center pt-2">
                                <icon-base :iconColor="color" width="25" height="25" icon-name="Play" v-show="subtask.pause == 1"><Play/></icon-base>
                                <icon-base :iconColor="color" width="25" height="25" icon-name="Pause" v-show="subtask.pause == 0"><Pause/></icon-base>
                                    {{tiempo}}
                                </span>
                                <div v-popover.bottom="{name: 'tiempo' + subtask.id}">
                                    <icon-base  class="cursor-pointer" width="14" height="14" viewBox="0 0 512 512" icon-name="add"><Add/></icon-base>
                                </div>                
                            </div>
                            <!-- UPDATE SUBTASK -->
                            <div class="w-52 border border-white align-middle">
                                <span class="flex justify-center pt-2">
                                    <router-link :to="{ name: 'profileUser', params: {idUser: subtask.id_user_update } }">
                                        <img class="rounded-full w-8 h-8 m-2"  :src="`/assets/images/users/${subtask.id_user_update}`">
                                    </router-link>
                                   <span class="relative inline-block px-2"> {{subtask.updated_at}}</span>
                                </span>
                            </div>
                            <div class="  border border-white align-middle cursor-pointer" @click="showmodal">
                                <icon-base viewBox="0 0 512 512" width="25" height="25" icon-name="trash" ><Trash/>
                                </icon-base>
                            </div>
                            <Popper v-if="subtask.id==setID" :name="'subtag'" :subtaskID="setID" />
                    <modal :name="'deletesubTask'+ subtask.id">
                        <div>
                            Desea Eliminar la subtarea
                            <div>
                                <button @click="deletesubTask">Si</button>
                            </div>
                                <div>
                                    <button @click="hide">NO</button>
                                </div>
                        </div>
                    </modal>
                   
                    <popover :name="subtask.id" :width="450">
            <div v-for="user in responsable" :key="user.id">
               <div v-if="!searchForManager(user.id_user)">
                       <div v-if="searchForUsersName(user.id_user)" @click="addManager(user.id_user, subtask.id)" class="cursor-pointer">
                           <img class="rounded-full w-8 h-8" :title="searchForUsersName(user.id_user)" :src="`/assets/images/users/${user.id_user}`">
                            {{searchForUsersName(user.id_user)}}
                       </div>
               </div>
            </div>
        </popover>
        
        <popover :name="'resp' + subtask.id" :width="250" :height="auto">
            <div v-for="user in responsable" :key="user.id" class="w-full h-full flex justify-center bg-sideBar-primary">
               <div v-if="searchForManager(user.id_user)" class="flex flex-row bg-white rounded-3xl m-2 items-center">
                    <img class="rounded-full w-8 h-8 mx-1.5" :title="searchForUsersName(user.id_user)" :src="`/assets/images/users/${user.id_user}`">
                    <span>{{searchForUsersName(user.id_user)}}</span>
                    <button class="w-5 h-5 mx-1.5 bg-white rounded-full text-black self-center" v-on:click="deleteManager(user.id_user, subtask.id)">X</button>
               </div>
            </div>
        </popover>
                    <popover :name="'tiempo' + subtask.id" :width="150">
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
</template>

<script>
import {EventBus} from '../../../../../event-bus'
import IconBase from '../../../../icons/IconBase.vue'
import Play from '../../../../icons/Play.vue'
import Add from '../../../../icons/Add'
import Edit from '../../../../icons/Editar'
import Trash from '../../../../icons/Trash.vue'
import Message from '../../../../icons/Message.vue'
import Pause from '../../../../icons/Pause.vue'
import DatePicker from '../subitems/DatePicker'
import Popper from '../popover/Popper'
import {getAllSubTags, getUserTeams, getAllUsers,  getSubtaskMessage, postEditNameSubtask } from '../../../../../servicies/userServicies'
import Tag from '../popover/Tag'
import SlidePanel from './SlidePanel.vue'
export default {

    components:{
        IconBase,
        Play,
        Pause,
        DatePicker,
        Popper,
        Tag,
        Trash,
        Add,
        Message, 
        SlidePanel,
        Edit
    },
    props:{
        subtask: Object,
        color: String,
        colorSecondary: String,
        items: Object,
        teamid: String,
        numberResponsable: String,
    },
    data () {
        return {
            subtagsList: [],
            responsable: [],
            usuarios: [],
            messages: [],
            setID: '',
            show: false,
            tiempo: null,
            addUser:false,
            opentab: false,
            editHidden: false,
            focus: false,
            horas: 0,
            minutos: 0,
            }
    }, 
    
    mounted(){
        EventBus.$on('resetSubtask', this.reset);
        EventBus.$on('updatemessagesubtask', this.fetchData)
        EventBus.$on('closeslidepanelsubtask', this.closeSlide)
    },
  watch: {
      '$route': 'fetchData',
       subtask(){
        if(this.subtask.pause == 0)
            setInterval(() => {
                this.time()
            }, 1000);
        else
            this.time() 
    }

  },
    created(){
        
         this.fetchData()
        if(this.subtask.pause == 0)
            var parar = setInterval(() => {
                this.time()
            }, 1000);
        else{
            this.time()
            clearInterval(parar)
        }
    },
    methods:{
        fetchData() {
            const token = localStorage.getItem('validation_token');
           getAllSubTags(token)
            .then(data => (this.subtagsList = data));
            getUserTeams(token, this.teamid)
                .then(data => (this.responsable = data));
            getAllUsers(token)
            .then(data => (this.usuarios = data));
            this.getmessages()
        },
         play(ID){
            EventBus.$emit('playSubtask', ID)
            
        },
         closingTabsMessage(){
            this.opentab = false;
            this.opentab = !this.opentab
        },
         closeSlide(){
            this.opentab = false
        },
        getmessages(){
            const token = localStorage.getItem('validation_token');
            if(this.opentab){
            getSubtaskMessage(token, this.subtask.id)
            .then(data =>{ (this.messages = data) });
            }    
        },
         showmodal(){
            this.$modal.show('deletesubTask'+ this.subtask.id);
        },
        deletesubTask(){
            
            EventBus.$emit('deletesubtask',this.subtask.id)
            this.hide()
        },
        editName(id_task){
            const valor = document.getElementById('name' + this.subtask.id);
            const text = valor.textContent
            
            const token = localStorage.getItem('validation_token');
            const formData = new FormData()
            formData.append('name', text);
            formData.append('token', token);
          
            let promise = new Promise((resolve, reject) => {
                resolve(postEditNameSubtask(formData, id_task));
              });
              promise.then((response) => {
                
                this.fetchData()
                EventBus.$emit('editname')
              });
        },
         hide () {
            this.$modal.hide('deletesubTask');
        },
        toggle(ID, name){
            EventBus.$emit('slidesubtask',ID, name)
        },
        
        reset(){
            this.setID = ''
        },
        checkImg(id_user){
            try {
                require(`../../../../../media/users/${id_user}.png`)
                return true
                }
                catch (e) {
                    return false
                }
        },
        addManager(ID, id_task){
            
            EventBus.$emit('addmanagersubtask', ID, id_task)
        },
        time(){

            if(this.subtask.pause == 0){
                let date = new Date()

                let last_play = new Date(this.subtask.last_play)
                
                let timezone = Math.abs(date.getTimezoneOffset()/(60))
                last_play.setHours(last_play.getHours()+timezone)
              

                let diffDate = date - last_play
                

                let timeWorking = this.subtask.time_working * 1000//milisegundos
                

                let final = diffDate + timeWorking
                
                
                this.tiempo = this.secondsToString(final)
               
            }
            else{
                
                let milisegundos = this.subtask.time_working * 1000
                var segundos = Math.floor((milisegundos / 1000) % 60)
                segundos = (segundos < 10)? '0' + segundos : segundos;
                
                var minute = Math.floor((milisegundos / (1000 * 60)) % 60);
                minute = (minute < 10)? '0' + minute : minute;
                
                var hour = Math.floor(milisegundos / (1000 * 60 * 60));
                hour = (hour < 10)? '0' + hour : hour;
                    this.tiempo =  hour + ':' + minute + ':' + segundos
                   
            }
        },
        secondsToString(milisegundos) {
            
            var segundos = Math.floor((milisegundos / 1000) % 60)
            segundos = (segundos < 10)? '0' + segundos : segundos;
            
            var minute = Math.floor((milisegundos / (1000 * 60)) % 60);
            minute = (minute < 10)? '0' + minute : minute;
            
            var hour = Math.floor(milisegundos / (1000 * 60 * 60));
            hour = (hour < 10)? '0' + hour : hour;
            return hour + ':' + minute + ':' + segundos;
        },
         searchForManager(id_user){
            for(let items in this.subtask.users)
            {
                if(id_user == this.subtask.users[items].id_user)
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
        setTime(){
           
            let hours = this.horas * 3600
            
            let minuts = this.minutos * 60
            
            let totaltime = hours + minuts
            
            EventBus.$emit('settimesubtask', totaltime, this.subtask.id)
        },
        
    }
}
</script>

<style>

</style>