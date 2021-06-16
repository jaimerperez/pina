<template>
  <div>
    <div class="slidein max-w-screen-sm p-2 fixed z-50 top-0 h-screen bg-white transition-all duration-200 ease-in-out shadow-2xl" :class="[open ? 'right-0' : '-right-full']">
     
      <div class="pulse_container">
                  <div class="flexible-header">
                      <div class="pulse-tittle flex my-5 align-middle justify-center justify-evenly">
                        <div>RESPONDER COMENTARIOS</div>
                          <span>{{name}}</span>
                      </div>
                      <div class="items-views">
                          <div class="items-view-bar-component">
                              <div class="items-view-list flex flex-row justify-around">
                                    <div class="items-view-list-items cursor-pointer mx-5 mb-1" v-on:click="toggleTabs(1)" v-bind:class="{'text-sideBar-primary font-thin': openTab !== 1, 'text-sideBar-primary font-bold ': openTab === 1}">
                                        <span>Actualizaciones</span>
                                    </div>
                              </div>
                          </div>
                      </div>
                       <div class="spacer bg-sideBar-primary w-11/12 h-0.5 m-auto"></div>
                  </div>
      </div>
      <div class="pulse_content">
        <div class="tab">
          <div class="new-post">
            <div :class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div class="w-full h-full">
                <div>
                  <vue-editor v-model="textContent"></vue-editor>
                </div>
                <div class="flex justify-end">
                  <button v-if="task" type = "submit" value = "submit" class="h-2/6 border rounded-xl py-2 px-4 bg-sideBar-primary text-white mb-5 text-base self-end " @click="submitMessage(textContent, id)">ENVIAR </button>
                  <button v-else type = "submit" value = "submit" class="border rounded-xl bg-sideBar-primary text-white self-end py-2 px-4" @click="submitMessageSubtask(textContent, ID)">ENVIAR </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comments-panel h-96 overflow-y-scroll mt-5">
        <div class="comment-section ">
          <div class="spacer bg-sideBar-primary w-11/12 h-0.5 m-auto"></div>
          <div v-for="item in message" :key="item.id" class="text-fontColor-primary min-h-1/5 border mx-2 my-2 rounded-xl ">
            
            <div class="head-message-section m-auto">
              <div v-for="user in users" :key="user.id">
                <div v-if="user.id == item.id_user" class="flex"> 
                     <ImageMembers :ID="item.id_user" :toprofile="true" class="h-10 w-10 mx-3 mt-2"/>
                    <span v-if="user.name ">{{user.name}}</span>
                    <span v-else>{{user.email}}</span>
                </div>

              </div>
            </div>
            <div class="message-section mb-2 mx-2" v-html="item.message">
            </div>
            <!-- <div @click="deleteMsg(item.id, ID)">
              {{item.id}}
              <icon-base class="cursor-pointer" viewBox="0 0 512 512" width="25" height="25" icon-name="trash" ><Trash/></icon-base>
            </div>   -->
          </div>
           
            <div class="spacer bg-sideBar-primary w-11/12 h-0.5 my-40"></div>
      </div>
      </div>
        <button class="close-btn absolute top-0 left-0 m-4 text-xl" @click="closeSlidePanel"> X </button>
    </div>
    
  </div>
</template>

<script>
import {EventBus} from '../../../../../event-bus.js'
import IconBase from '../../../../icons/IconBase.vue'
import Trash from '../../../../icons/Trash.vue'
import { VueEditor } from "vue2-editor";
import { postMessage, postSubtaskMessage, deleteMessage} from '../../../../../servicies/userServicies'
import ImageMembers from '../../Welcome/tabs/ImageMembers'
export default {
  props:{
    id: String,
    name: String,
    task: Boolean,
    opentab: Boolean,
    message: Array,
    users: Array
  },
  data() {
    return {
      open: true,
      openTab: 1,
      textContent: '',

    };
  },
  components:{
    ImageMembers,
    VueEditor,
    IconBase, 
    Trash
    
  },
  
  methods: {
    
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },
    submitMessage(content, id){
      console.log(id)
      EventBus.$emit('submitmessage', content, id)
      this.textContent = ''
    },
    closeSlidePanel(){
      EventBus.$emit('closeslidepanel')
    },
    submitMessageSubtask(content, id_task){
      this.prueba = "subtask"
      const token = localStorage.getItem('validation_token');
      const formData = new FormData()
        formData.append('message', content);
        formData.append('token', token);
      
      let promise = new Promise((resolve, reject) => {
              resolve( postSubtaskMessage(formData, id_task));
              });
              promise.then((response) => {
                console.log(response);
                
                this.open = !this.open;
              });
    },
    deleteMsg(id_message, id_task){
      const token = localStorage.getItem('validation_token');
      console.log(id_message)
     let promise = new Promise((resolve, reject) => {
        resolve( deleteMessage(token, id_message));
      });
      promise.then((response) => {
        console.log(response);
        
        this.open = !this.open;
      });
    },

  },
};
</script>

<style>

</style>