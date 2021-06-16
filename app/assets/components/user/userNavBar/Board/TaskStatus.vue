<template>
<div class="board overflow-x-auto" >
    <div class="w-full">
            <div class="flex" style="width:3000px">
                <div class="flex flex-row justify-around">
                        <div class="w-80" >
                            <h1 class="flex cursor-pointer font-semibold" >
                                <div @click.prevent="active = !active">
                                    <icon-base v-show="active" viewBox="0 0 512 512" width="25" height="25" icon-name="expand"><Expand/></icon-base>
                                    <icon-base v-show="!active" viewBox="0 0 24 24" width="25" height="25" icon-name="collapse"><Collap/></icon-base>
                                </div>
                                {{status}}
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
                        <div class="w-24 text-black text-center text-fontColor-primary font-semibold">Responsable</div>
                        <div class="w-32 text-black text-center font-fontColor-primary font-semibold">Archivos</div>
                        <div class="w-52 text-black text-center font-fontColor-primary font-semibold">Prioridad</div>
                        <div class="w-52 text-black text-center font-fontColor-primary font-semibold">Autorización</div>
                        <div class="w-52 text-black text-center font-fontColor-primary font-semibold">Haciéndose</div>
                        <div class="w-52 text-black text-center font-fontColor-primary font-semibold">Entregado</div>
                        <div class="w-80 text-black text-center font-fontColor-primary font-semibold">Plazo</div>
                        <div class="w-32 text-black text-center font-fontColor-primary font-semibold">Progreso</div>
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
                    :color="ht">
                    </TaskList>

            </draggable>  
        </div>
        <div>
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
            subtagsList: [],
            setID: '',
            show: false,
            idTask: '',
            nameSubtask: "",
            idStatus: '',
            filterRespon: '',
            filtro: false,
            tiempo: null,
            idchange: '',
            statusupdate: '',
            openMenu: false
            
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
            EventBus.$emit('update',this.content, this.taskStatus)
            this.content = ''
            },  
         reset(){
            this.setID = ''
        },
       
        onEnd: function(evt) {
            EventBus.$emit('changeStatus', evt.to.id, evt.item.id)    
        },

        managerFilter(id_user){
            if(id_user != 0){
                this.filtro = true
                this.filterRespon = id_user
            }
            else 
                this.filtro = false
            
        },
       
    },
    created() {
        EventBus.$on('managerfilter', this.managerFilter)
    },
     mounted(){
        EventBus.$on('reset', this.reset);
    },
  computed:{
      filterTask: function(){
          return this.taskList.filter((task) => {
            if(this.filtro)
                for(let items in task.users){
                    if( parseInt(task.users[items].id_user)  ==  parseInt(this.filterRespon) ){
                        return true
                    }
                    return false
                }
            else
              return task.name.match(this.search)
          })
      },

       
  }
}
</script>

<style>

</style>