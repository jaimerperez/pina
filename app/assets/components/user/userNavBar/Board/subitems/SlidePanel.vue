<template>
  <div>
    <div class="slidein max-w-screen-sm p-2 fixed z-50 top-0 h-screen bg-white transition-all duration-200 ease-in-out shadow-2xl" :class="[open ? 'right-0' : '-right-full']">
     <div class="pulse_container">
                  <div class="flexible-header">
                      <div class="pulse-tittle flex my-5 align-middle justify-center justify-evenly">
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
                  <tiptap v-model="textContent" :mentionList="mentionList"/>
                </div>
                <div class="flex justify-end">
                  <button type = "submit" value = "submit" class="h-2/6 border rounded-xl py-2 px-4 bg-sideBar-primary text-white mb-5 text-base self-end " @click="submitMessage(textContent, id)">ENVIAR </button>
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
                     <router-link :to="{ name: 'profileUser', params: {idUser: item.id_user } }">
                        <img class="h-10 w-10 rounded mx-3 mt-2"  :src="`/assets/images/users/${item.id_user}`">
                      </router-link>
                    <span v-if="user.name ">{{user.name}}</span>
                    <span v-else>{{user.email}}</span>
                </div>

              </div>
            </div>
            <div style="user-select:none;">
              <div style="user-select:text;cursor: text;" class="message-section mb-2 mx-2" v-html="item.message"></div>
            </div>
            <div @click="deleteMsg(item.id, ID)">
              <!--{{item.id}}-->
              <icon-base class="cursor-pointer ml-auto" viewBox="0 0 512 512" width="25" height="25" icon-name="trash" ><Trash/></icon-base>
            </div>  
          </div>
           
            <div class="spacer bg-sideBar-primary w-11/12 h-0.5 my-40"></div>
      </div>
      </div>
        <button style="user-select:none;" class="close-btn absolute top-0 left-0 m-4 text-xl" @click="closeSlidePanel"> X </button>
    </div>
     

  </div>
  
</template>

<script>
import {EventBus} from '../../../../../event-bus.js'
import IconBase from '../../../../icons/IconBase.vue'
import Trash from '../../../../icons/Trash.vue'
import { VueEditor } from "vue2-editor";
import { postMessage, postSubtaskMessage, deleteMessage} from '../../../../../servicies/userServicies'
import { Mentionable } from 'vue-mention'
import Tiptap from './TipTap.vue' 
import At from 'vue-at'
const uss = [
  {
    value: 'akryum',
    firstName: 'Guillaume',
  },
  {
    value: 'posva',
    firstName: 'Eduardo',
  },
  {
    value: 'atinux',
    firstName: 'Sébastien',
  },
]

const issues = [
  {
    value: 123,
    label: 'Error with foo bar',
    searchText: 'foo bar'
  },
  {
    value: 42,
    label: 'Cannot read line',
    searchText: 'foo bar line'
  },
  {
    value: 77,
    label: 'I have a feature suggestion',
    searchText: 'feature'
  }
]
export default {
  props:{
    id: String,
    name: String,
    task: Boolean,
    opentab: Boolean,
    message: Array,
    users: Array,
    mentionList: Array,
  },
  data() {
    return {
      text: '',
      open: true,
      openTab: 1,
      textContent: '',

      customToolbar: [
        [{
          header: [!1, 1, 2, 3, 4, 5, 6]
        }],
        ["bold", "italic", "underline", "strike"],
        [{
          align: ""
        }, {
          align: "center"
        }, {
          align: "right"
        }, {
          align: "justify"
        }],
        ["blockquote", "code-block"],
        [{
          list: "ordered"
        }, {
          list: "bullet"
        }, {
          list: "check"
        }],
        [{
          indent: "-1"
        }, {
          indent: "+1"
        }],
        [{
          color: []
        }, {
          background: []
        }],
        ["image", "video"],
        ["clean"]
      ],
      items: [],
    };
  },
  components:{
    VueEditor,
    IconBase, 
    Trash,
    Mentionable,
    At,
    Tiptap
  },
  
  methods: {
    
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },
    submitMessage(content, id){
      if(this.task)
        EventBus.$emit('submitmessage', content, id)
      else
        EventBus.$emit('submitmessagesubtask', content, id)
      
      this.textContent = ''
      
    },
    
    closeSlidePanel(){
      EventBus.$emit('closeslidepanel')
    },
   
   
    deleteMsg(id_message, id_task){
      const token = localStorage.getItem('validation_token');
      
     let promise = new Promise((resolve, reject) => {
        resolve( deleteMessage(token, id_message));
      });
      promise.then((response) => {
        
        EventBus.$emit('deletemessage')
      });
    },
    
    custom(text){
      var urlRegex = /(https?:\/\/[^\s]+)/g;
        this.textContent = text.replace(urlRegex, function(url) {
        return '<a href="' + url + '"  style="color:blue;" >' + url + '</a>';
      })
      let mentionRegex = /\B@[a-z]*[^\s]/g
      if(mentionRegex.test(text)){
        console.log('true')
        var ctl = document.getElementsByTagName('input');
        var startPos = ctl.selectionStart;
        var endPos = ctl.selectionEnd;
       console.log(startPos + ", " + endPos);
       this.$modal.show('mention' + this.id)
      }

    },
    onOpen (key) {
      this.items = key === '@' ? uss : issues
    },
    method () {
      console.log('@')
    },
  },
};
</script>

<style>

</style>