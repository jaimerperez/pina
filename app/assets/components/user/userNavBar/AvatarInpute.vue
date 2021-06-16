<template>
  <div>
      <input type="file" class="hidden" ref="file" @change="change">
      <div class="relative inline-block">
            <img :src="defaultSrc" alt="avatar" @error="defaultImg" class="h-28 w-28 rounded-full object-cover">
            <div class="absolute top-0 h-full w-full rounded-full hover:bg-black hover:bg-opacity-25 flex items-center group justify-center" @mouseover="active = true" @mouseleave="active = false">
                <button v-show="active" @click="browse()" class=" rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none transition duration-200">
                <icon-base class="cursor-pointer" width="25" height="25" viewBox="0 0 512 512" icon-name="add"> <Add/></icon-base>    
                </button>     
            </div> 
        </div>
      
      
  </div>
</template>

<script>
import {  changeProfile} from '../../../servicies/userServicies'
import IconBase from '../../icons/IconBase.vue'
import Add from '../../icons/Add'
import { EventBus } from '../../../event-bus'
export default {
    props:{
        value: File,
        defaultSrc: String,
        id: String
    },
    components:{
        IconBase,
        Add,
    },
    data(){
        return{
            src: this.defaultSrc,
            file: null,
            active: false
        }
    },
    methods:{
        browse(){
            this.$refs.file.click();
        },
        change(e){
            this.file = e.target.files[0]
            this.$emit('input', this.file);
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                this.src = e.target.result;
            const token = localStorage.getItem('validation_token');
            const formData = new FormData()
            formData.append('image', this.file);
            formData.append('token', token);
            EventBus.$emit('imgProfile', this.src)
            changeProfile(formData, this.id)
            
                }
        },
        defaultImg(event){
            event.target.src = require(`../../../media/users/avatar-loading.png`)
        }
    }
}
</script>

<style>

</style>