<template>
<div class="board" style="width:3000px">
    <div class="w-full">
            <div class="flex bg-white" style="width:3000px">
                <div class="flex flex-row justify-around ">
                        <div class="w-80" >
                            <h1 class="flex cursor-pointer font-semibold" >
                                <div @click.prevent="active = !active">
                                    <icon-base v-show="active" viewBox="0 0 512 512" width="25" height="25" icon-name="expand"><Expand/></icon-base>
                                    <icon-base v-show="!active" viewBox="0 0 24 24" width="25" height="25" icon-name="collapse"><Collap/></icon-base>
                                </div>
                               <span class="text-2xl">{{status}}</span> 
                                    <span @click="openMenu = !openMenu" class="mx-6">
                                        ...
                                    </span>
                                    <div v-if="openMenu">
                                        <h1 class="mx-2">Seleccionar todas <input type="checkbox"  class="mx-2" @click="check(status)"></h1>
                                        <button @click="showStore">Archivar Seleccionadas</button>
                                        <button @click="showModal">Eliminar Seleccionadas</button>
                                    </div>
                            </h1>
                            
                        </div>
                        
                        <div class="w-20 text-black text-center text-fontColor-primary font-semibold"></div>
                        <div class="w-32 text-black text-center text-fontColor-primary font-semibold">Responsable</div>
                        <div class="w-32 text-black text-center font-fontColor-primary font-semibold">Archivos</div>
                        <div class="w-52 text-black text-center font-fontColor-primary font-semibold">Prioridad</div>
                        <div class="w-52 text-black text-center font-fontColor-primary font-semibold">Autorización</div>
                        <div class="w-52 text-black text-center font-fontColor-primary font-semibold">Haciéndose</div>
                        <div class="w-52 text-black text-center font-fontColor-primary font-semibold">Entregado</div>
                        <div class="w-80 text-black text-center font-fontColor-primary font-semibold cursor-pointer" @click="sort"> 	↨ Plazo</div>
                        <!-- <div class="w-32 text-black text-center font-fontColor-primary font-semibold">Progreso</div> -->
                        <div class="w-32 text-black text-center font-fontColor-primary font-semibold">Tiempos</div>
                        <div class="w-80 text-black text-center font-fontColor-primary font-semibold">Última actualización</div>
                        <div class="w-32 text-black text-center font-fontColor-primary font-semibold">ID</div>
                        <div class="w-50  text-black text-center font-fontColor-primary font-semibold">Correo para avisos</div>
                        <div class="w-32 text-black text-center font-fontColor-primary font-semibold"></div>
                    
                </div>
            </div>
            <draggable :list="filterTask" group="task" v-show="active"  
            @end="onEnd" 
            class="" :id="taskStatus">
                    
                    <TaskList
                    v-for="items in filterTask"
                    :taskStatus="status" 
                    :key="items.id"
                    :id="items.id"
                    class="board"
                    :teamid="boardTeamID"
                    :draggable="true"
                    @change="statuschange(items.id)"
                    :taskList="items"
                    :responsable="responsable"
                    :tagsList="tagsList"
                    :usuarios="usuarios"
                    :mentionList="mentionList"
                    :numberResponsable="items.users.length"
                    :color="ht">
                    </TaskList>

            </draggable>  
        </div>
        <div style="width:2850px">
            <input contenteditable="true" :id="taskStatus" :placeholder="placeholder" v-model="content" class="border text-fontColor-primary w-full" v-on:keyup.enter="onUpdate">
            <button @click="onUpdate">AGREGAR</button>
        </div> 
        <modal :name="status" class="h-30">
            <div>
               ¿ Desea <span class="font-bold">eliminar</span>
                las tareas seleccionadas ?
                <div class="flex flex-row justify-evenly mt-10"> 
                    <button @click="deleteSelectedTask(status)" class="bg-green-500 text-white w-10">SI</button>
                    <button @click="hide" class="bg-red-500 text-white w-10">NO</button>
                </div>
            </div>
        </modal>
        <modal :name="'store'+ status" class="h-24">
            <div>
               ¿ Desea <span class="font-bold">archivar</span> las tareas seleccionadas ?
                <div class="flex flex-row justify-evenly mt-10">
                    <button @click="storeTask(status)" class="bg-green-500 text-white w-10">SI</button>
                    <button @click="hide" class="bg-red-500 text-white w-10">NO</button>
                </div>
            </div>
        </modal>
</div>
        
        
</template>

<script>
import {EventBus} from '../../../../event-bus.js'
import IconBase from '../../../icons/IconBase.vue'
import Expand from '../../../icons/Expand.vue'
import Trash from '../../../icons/Trash.vue'
import Play from '../../../icons/Play.vue'
import Pause from '../../../icons/Pause.vue'
import Collap from '../../../icons/Collap.vue'
import TaskList from './TaskList'
import Draggable from 'vuedraggable'
import Subtask from './subitems/SubTask'
import Tag from './popover/Tag'
import Popper from './popover/Popper'
import SubtaskList from './subitems/SubtaskList'
import DatePicker from './subitems/DatePicker'
import { getOrganization } from '../../../../servicies/userServicies.js'
export default {
    props:{
        
        status: String,
        taskStatus: String,
        id: String,
        boardTeamID: String,
        placeholder: String,
        color: String,
        taskList: Array,
        ht: String,
        search: String,
        tagsList: Object,
        usuarios: Array,
        responsable: Array,
        mentionList: Array,
    },
    components: {
        TaskList,
        Expand,
        IconBase,
        Collap,
        Trash,
        Draggable,
        Subtask,
        SubtaskList,
        Tag,
        Popper,
        Subtask,
        DatePicker,
        Play,
        Pause
    },
  data () {
        return {
            content: "",
            active: true,
            show: false,
            filterRespon: '',
            filtro: false,
            openMenu: false,
            sortDirection: '',
            resp: [],
            orden: false,
            manager: '',
             tarea: {
                "id": "1",
                "id_user_update": null,
                name: '',
                "store": "0",
                "time_limit": "0000-00-00 00:00:00",
                "time_limit_end": "0000-00-00 00:00:00",
                "messages": "0",
                "incident": "0",
                "email": null,
                "last_play": "0000-00-00 00:00:00",
                "time_working": "0",
                "pause": "1",
                "id_status": this.taskStatus,
                "id_team": this.boardTeamID,
                "created_at": "2021-06-30 11:33:48",
                "updated_at": "2021-06-30 11:33:48",
                "deleted_at": "0000-00-00 00:00:00",
                "deleted": "0",
                "status": "WORKING",
                "tags": [
                {
                    "id": "3657",
                    "id_task": "1",
                    "id_tag": "1",
                    "created_at": "2021-06-30 11:33:48",
                    "updated_at": "2021-06-30 11:33:48",
                    "deleted_at": "0000-00-00 00:00:00",
                    "deleted": "0"
                },
                {
                    "id": "3658",
                    "id_task": "1",
                    "id_tag": "2",
                    "created_at": "2021-06-30 11:33:48",
                    "updated_at": "2021-06-30 11:33:48",
                    "deleted_at": "0000-00-00 00:00:00",
                    "deleted": "0"
                },
                {
                    "id": "3659",
                    "id_task": "1",
                    "id_tag": "3",
                    "created_at": "2021-06-30 11:33:48",
                    "updated_at": "2021-06-30 11:33:48",
                    "deleted_at": "0000-00-00 00:00:00",
                    "deleted": "0"
                },
                {
                    "id": "3660",
                    "id_task": "1",
                    "id_tag": "4",
                    "created_at": "2021-06-30 11:33:48",
                    "updated_at": "2021-06-30 11:33:48",
                    "deleted_at": "0000-00-00 00:00:00",
                    "deleted": "0"
                }
                ],
                "subtasks": [],
                "users": [
                {
                    "id": "1006",
                    id_user: "",
                    "id_task": "1",
                    "created_at": "2021-06-30 11:33:48",
                    "updated_at": "2021-06-30 11:33:48",
                    "deleted_at": "0000-00-00 00:00:00",
                    "deleted": "0"
                }
                ],
                "files": [],
                "progress": 0
            }
            
        }

    }, 
    methods:{
       
        check(status){
           EventBus.$emit('checkbox', status)
           
        },
        deleteSelectedTask(status){
            EventBus.$emit('deleteselected', status)
            this.hide()
        },
        storeTask(status){
            EventBus.$emit('storeselected', status)
            this.hide()
        },
         showStore(){
            this.$modal.show('store' + this.status);
        },
        showModal(){
            this.$modal.show(this.status);
        },
        hide () {
            this.$modal.hide(this.status);
            this.$modal.hide('store'+this.status)
        },
        onUpdate(){
            this.tarea.name = this.content
            this.tarea.users[0].id_user = this.resp.team.id
            this.taskList.push(this.tarea)
            EventBus.$emit('update',this.content, this.taskStatus)
            this.content = ''
            },  
       
        onEnd: function(evt) {
            EventBus.$emit('changeStatus', evt.to.id, evt.item.id)    
        },
        sort(){
            this.orden = true
            if(this.sortDirection == 'asc')
               this.sortDirection = 'desc'
            else
                this.sortDirection = 'asc'
        },

        managerFilter(id_user){

          if(id_user != 0){
                this.filtro = true
                this.filterRespon = id_user
            }
            else 
                this.filtro = false
            
        },
        declareManager(){
            const token = localStorage.getItem('validation_token');
            getOrganization(token, this.boardTeamID)
            .then(data =>{ 
                (this.resp = data) 
                this.manager = this.resp.team.id
            })
                  console.log('resp: ' + this.manager)  
        },
       
    },
    created() {
        EventBus.$on('managerfilter', this.managerFilter)
        EventBus.$on('focussearch', this.focusSearch)
        this.declareManager()
        if(this.taskStatus == 1)
            this.active = true
        else if(this.taskStatus == 3)
            this.active = false
        else
            this.active = false
    },
  computed:{
      filterTask: function(){
          return this.taskList.filter((task) => {
            if(this.filtro)
                for(let items in task.users){
                    if( parseInt(task.users[items].id_user)  ==  parseInt(this.filterRespon) ){
                        return task.name.toUpperCase().match(this.search.toUpperCase())
                    }
                    return false
                }
                else if(this.orden){
                    return this.taskList.sort((p1,p2) => {
                        let modifier = 1;
                        if(this.sortDirection === 'desc') 
                            modifier = -1;
                        else if (this.sortDirection === 'asc')
                            modifier = 1;
                        else
                            modifier = 0;
                        if(p1.time_limit_end < p2.time_limit_end) 
                            return -1 * modifier; 
                        if(p1.time_limit_end > p2.time_limit_end) 
                            return 1 * modifier;
                        return 0;
                    });
                }
                else if(this.filter){
                    return task.name.toUpperCase().match(this.search.toUpperCase())
                }
            else
              return task.name.toUpperCase().match(this.search.toUpperCase())
          })
         
      },
      
       
  }
}
</script>
