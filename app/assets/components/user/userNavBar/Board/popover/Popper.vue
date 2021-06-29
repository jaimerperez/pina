<template>
    <div class="text-white text-center align-middle">
        <popover v-if="name=='prioridad'" :name="name" :width="400" :id="taskListId">
            <div class="tags-container text-center w-96 max-h-96 flex flex-wrap items-center cursor-default">
                <div class="bg-tags-normal text-center w-24 h-12 m-4 align-middle cursor-pointer" v-on:click="tagChange('10')">NORMAL </div>
                <div class="bg-tags-inminente text-center w-24 h-12 m-4 align-middle cursor-pointer" v-on:click="tagChange('12') ">INMINENTE</div>
                <div class="bg-tags-paso w-24 text-center h-12 m-4 align-middle cursor-pointer" v-on:click="tagChange('1') ">PASO</div>
                
                <div class="bg-tags-solicitadomanuel text-center w-24 h-12 m-4 align-middle cursor-pointer" v-on:click="tagChange('20') ">SOLICITADO MANUEL</div>
                <div class="bg-tags-urgente w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('106') ">URGENTE</div>
                
                <div class="bg-tags-vidaomuerte w-24 h-12 text-center m-4 align-middle cursor-pointer" v-on:click="tagChange('5') ">VIDA O MUERTE</div> 
            </div>
        </popover>
        <popover v-if="name =='autorizacion'" :name="name" :width="400" :id="taskListId">
            <div class="tags-container w-96 max-h-96 flex flex-wrap items-center cursor-default">
                 
                <div class="bg-tags-paso w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('2') ">PASO</div>
                <div class="bg-tags-normal w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('134') ">LISTO</div>
                <div class="bg-tags-solicitada w-24 h-12 text-center m-4 align-middle cursor-pointer" v-on:click="tagChange('123') ">SOLICITADA</div>
                
            </div>
        </popover>
         <popover v-if="name =='haciendose'" :name="name" :width="400" :id="taskListId">
            <div class="tags-container w-96 max-h-96 flex flex-wrap items-center cursor-default">
                
                <div class="bg-tags-paso w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('3') ">PASO</div>
                <div class="bg-tags-estancado w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('120') ">ESTANCADO</div>
            
                <div class="bg-tags-proceso w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('116') ">EN PROCESO</div>
                <div class="bg-tags-normal w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('136') ">LISTO</div> 
                <div class="bg-tags-info w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('128') ">+INFO</div>
                <div class="bg-tags-script w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('132') ">SCRIPT</div>   
            </div>
        </popover>
        <popover v-if="name =='entregado'" :name="name" :width="400" :id="taskListId">
            <div class="tags-container w-96 max-h-96 flex flex-wrap items-center cursor-default">
              
                <div class="bg-tags-paso w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('4') ">PASO</div>
                <div class="bg-tags-normal w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('135'), confetti() ">LISTO</div>
                <div class="bg-tags-proceso w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="tagChange('117') ">EN PROCESO</div>
        
            </div>
        </popover>
        <popover v-if="name =='subtag'" :name="name" :width="400" :id="subtaskID">
            <div class="tags-container w-96 max-h-96 flex flex-wrap items-center cursor-default">
                 <div class="bg-tags-paso w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="subtagChange('1')">PASO </div>
                <div class="bg-tags-info w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="subtagChange('2') ">+INFO</div>
                <div class="bg-tags-normal w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="subtagChange('3') ">LISTO</div>
                <div class="bg-tags-proceso w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="subtagChange('4') ">EN PROCESO</div>
                <div class="bg-tags-estancadi w-24 h-12 m-4 text-center align-middle cursor-pointer" v-on:click="subtagChange('5') ">ESTANCADO</div>
            </div>
        </popover>
    </div>
</template>

<script>
import {EventBus} from '../../../../../event-bus.js'
export default {
    props:{
        taskListId: String,
        name: String,
        subtaskID: String
    },
    methods:{
        tagChange(id){
           EventBus.$emit('tagchange',id, this.taskListId);
           EventBus.$emit('progreso')
           EventBus.$emit('reset')
        },
        subtagChange(id_subtag){
            EventBus.$emit('subtagchange', this.subtaskID,  id_subtag);
           EventBus.$emit('resetSubtask')
        },
        confetti(){
            EventBus.$emit('confeti')
        }
    }
}
</script>

<style>

</style>