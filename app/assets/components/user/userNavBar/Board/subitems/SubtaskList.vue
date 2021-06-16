<template>
    <div class="grid grid-cols-7">
            <!-- NAME SUBTASK -->
        <div class=" flex flex-row justify-between hover:text-indigo-600 border border-white align-middle ">
            <span class="flex justify-between m-2"
                v-on:click="toggle(subtask.id, subtask.name)">{{subtask.name}} 
                <icon-base :iconColor="color" width="25" height="25" icon-name="message" ><Message/></icon-base>
            </span>
        </div>

        <!-- RESPONSABLE SUBTASK -->
        <div class=" flex flex-row justify-evenly hover:text-indigo-600 border border-white" @mouseover="addUser = true" @mouseleave="addUser = false">
            <button v-show="addUser" v-popover.bottom="{name: 'responsable' + subtask.id}" class="rounded-full p-2 focus:outline-none transition duration-200">
                <icon-base class="cursor-pointer" width="25" height="25" viewBox="0 0 512 512" icon-name="add"><Add/></icon-base>
            </button>
            <div v-for="items in subtask.users" :key="items.id" class="flex flex-row" @mouseover="deletemanager = true" @mouseleave="deletemanager = false"> 
                <ImageMembers class="w-8 h-8 m-2" :ID="items.id_user" :toprofile="true"/>
                <button v-show="deletemanager" class="rounded-full w-5 h-5 bg-white text-black self-center" v-on:click="deleteManager(items.id_user, subtask.id)">X</button>
            </div>       
        </div>

        <!-- TAGS SUBTASK -->
        <div class=" border border-white align-middle cursor-pointer">
            <div v-for="subtag in subtagsList.tags" :key="subtag.id">
                <div v-if="subtask.id_subtag == subtag.id"  v-popover:subtag.bottom v-on:click="setID=subtask.id">
                    <Tag :tagName="subtag.name" />
                </div>  
            </div>
        </div>
                        
                            <!-- FECHAS SUBTASK -->
                            <div class=" border border-white align-middle">
                                <DatePicker :date="subtask.time_limit" :taskStatus="subtask.id_status" :id_task="subtask.id"/>
                            </div>

                            <!-- TIME SUBTASK -->
                            <div class=" hover:text-indigo-600 border border-white align-middle cursor-pointer" @click="play(subtask.id)">
                                <span class="flex">
                                <icon-base :iconColor="color" width="25" height="25" icon-name="Play" v-show="subtask.pause == 1"><Play/></icon-base>
                                <icon-base :iconColor="color" width="25" height="25" icon-name="Pause" v-show="subtask.pause == 0"><Pause/></icon-base>
                                    {{tiempo}}
                                </span>                 
                            </div>
                            <!-- UPDATE SUBTASK -->
                            <div class=" border border-white align-middle">
                                {{subtask.updated_at}}
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
import Trash from '../../../../icons/Trash.vue'
import Pause from '../../../../icons/Pause.vue'
import DatePicker from '../subitems/DatePicker'
import Popper from '../popover/Popper'
import ImageMembers from '../../Welcome/tabs/ImageMembers' 
import {getAllSubTags, getUserTeams, getAllUsers } from '../../../../../servicies/userServicies'
import Tag from '../popover/Tag'
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
        ImageMembers
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
            setID: '',
            show: false,
            tiempo: null,
            addUser:false
            }
    }, 
    computed:{
    },
    mounted(){
        EventBus.$on('resetSubtask', this.reset);
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
         play(ID){
            EventBus.$emit('playSubtask', ID)
            
        },
         showmodal(){
            this.$modal.show('deletesubTask'+ this.subtask.id);
        },
        deletesubTask(){
            console.log(this.subtask.id)
            EventBus.$emit('deletesubtask',this.subtask.id)
            this.hide()
        },
         hide () {
            this.$modal.hide('deletesubTask');
        },
        toggle(ID, name){
            EventBus.$emit('slidesubtask',ID, name)
        },
        fetchData() {
            const token = localStorage.getItem('validation_token');
           getAllSubTags(token)
            .then(data => (this.subtagsList = data));
            getUserTeams(token, this.teamid)
                .then(data => (this.responsable = data));
            getAllUsers(token)
            .then(data => (this.usuarios = data));
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
            console.log('entra')
            EventBus.$emit('addmanagersubtask', ID, id_task)
        },
        time(){
            console.log(this.subtask.pause)

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
                console.log('user' + this.subtask.users)
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