<template>
    <div class="flex flex-row">
        <SlidePanel v-show="opentab" :name="subtask.name" :id="subtask.id" :message="messages" :users="usuarios" :task="false" :opentab="opentab"/>
            <!-- NAME SUBTASK -->
        <div class="w-80 flex flex-row hover:text-indigo-600 border border-white align-middle ">
            <span class="flex w-full justify-between" v-on:click="toggle(subtask.id, subtask.name)">
                <p class="truncate px-2" :contenteditable="true" v-on:blur="editName(subtask.id)" :title="subtask.name" :id="'name' + subtask.id" ref="input" >{{subtask.name}}</p> 
                <icon-base viewBox="0 0 1080 1080"  width="25" height="25" icon-name="editar" @click.native="focusName" class="cursor-pointer inline-block"><Editar/></icon-base>
                <span class="p-2 cursor-pointer" v-on:click="opentab=!opentab">
                    <icon-base :iconColor="color" width="25" height="25" icon-name="message" ><Message/></icon-base>
                </span>
            </span>
        </div>

        <!-- RESPONSABLE SUBTASK -->
        <div class="w-24 flex flex-row justify-evenly hover:text-indigo-600 border border-white" @mouseover="addUser = true" @mouseleave="addUser = false">
            <button v-show="addUser" v-popover.bottom="{name: 'responsable' + subtask.id}" class="rounded-full p-2 focus:outline-none transition duration-200">
                <icon-base class="cursor-pointer" width="25" height="25" viewBox="0 0 512 512" icon-name="add"><Add/></icon-base>
            </button>
            <div v-for="items in subtask.users" :key="items.id" class="flex flex-row" @mouseover="deletemanager = true" @mouseleave="deletemanager = false"> 
                <ImageMembers class="w-8 h-8 m-2" :ID="items.id_user" :toprofile="true"/>
                <button v-show="deletemanager" class="rounded-full w-5 h-5 bg-white text-black self-center" v-on:click="deleteManager(items.id_user, subtask.id)">X</button>
            </div>       
        </div>

        <!-- TAGS SUBTASK -->
        <div class="w-52 border border-white align-middle cursor-pointer">
            <div v-for="subtag in subtagsList.tags" :key="subtag.id">
                <div v-if="subtask.id_subtag == subtag.id"  v-popover:subtag.bottom v-on:click="setID=subtask.id">
                    <Tag :tagName="subtag.name" />
                </div>  
            </div>
        </div>
                        
                            <!-- FECHAS SUBTASK -->
                            <div class="w-52 border border-white align-middle">
                                <DatePicker :date="subtask.time_limit" :taskStatus="subtask.id_status" :id_task="subtask.id"/>
                            </div>

                            <!-- TIME SUBTASK -->
                            <div class="w-52 hover:text-indigo-600 border border-white align-middle cursor-pointer" @click="play(subtask.id)">
                                <span class="flex">
                                <icon-base :iconColor="color" width="25" height="25" icon-name="Play" v-show="subtask.pause == 1"><Play/></icon-base>
                                <icon-base :iconColor="color" width="25" height="25" icon-name="Pause" v-show="subtask.pause == 0"><Pause/></icon-base>
                                    {{tiempo}}
                                </span>                 
                            </div>
                            <!-- UPDATE SUBTASK -->
                            <div class="w-52 border border-white align-middle">
                                <span class="flex justify-center pt-2">
                                    <ImageMembers class="w-5 h-5 ml-2 pt-2" :ID="subtask.id_user_update" :toprofile="true"/>
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
                    <popover :name="'responsable' + subtask.id" :width="250">
                        <div v-for="user in responsable" :key="user.id">
                            <div v-if="!searchForManager(user.id_user)">
                                
                                <div v-if="searchForUsersName(user.id_user)" @click="addManager(user.id_user, subtask.id)">
                                        <img class="rounded-full w-8 h-8" :src="`/assets/images/users/${user.id_user}`">
                                        {{searchForUsersName(user.id_user)}}
                                </div>
                            </div>
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
import ImageMembers from '../../Welcome/tabs/ImageMembers' 
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
        ImageMembers,
        Message, 
        SlidePanel,
        Edit
    },
    props:{
        subtask: Object,
        color: String,
        items: Object,
        teamid: String
    },
    data () {
        return {
            
            active: true,
            subtagsList: [],
            responsable: [],
            usuarios: [],
            messages: [],
            setID: '',
            show: false,
            tiempo: null,
            addUser:false,
            opentab: false
            }
    }, 
    
    mounted(){
        EventBus.$on('resetSubtask', this.reset);
        EventBus.$on('updatemessagesubtask', this.fetchData)
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

            getSubtaskMessage(token, this.subtask.id)
            .then(data =>{ (this.messages = data) });
        },
         play(ID){
            EventBus.$emit('playSubtask', ID)
            
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
                console.log(response);
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
        
    }
}
</script>

<style>

</style>