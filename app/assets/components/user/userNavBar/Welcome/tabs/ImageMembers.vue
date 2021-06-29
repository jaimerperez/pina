<template>
<div v-if="ID"> 
    <div v-if="toprofile">
        <router-link :to="{ name: 'profileUser', params: {idUser: id_user } }">
            <div v-if="checkImg()" class=" rounded-full shadow-md group cursor-pointer" :title="name">
                <img class="rounded-full w-8 h-8" :src="`/assets/images/users/${this.ID}`"> 
            </div>
            <div v-else class="rounded-full shadow-md group cursor-pointer" :title="name">
                <img class="rounded-full w-8 h-8" :src="require(`../../../../../media/users/avatar-loading.png`)">
            </div>
        </router-link>
    </div>
    <div v-else>
        <div v-if="checkImg()" class=" rounded-full shadow-md group cursor-pointer" :title="name">
                <img class="rounded-full w-8 h-8" :src="`/assets/images/users/${this.ID}`"> 
            </div>
            <div v-else class="rounded-full shadow-md group cursor-pointer" :title="name">
                <img class="rounded-full w-8 h-8" :src="require(`../../../../../media/users/avatar-loading.png`)">
            </div>
    </div>

    
</div>
</template>

<script>
import Vue from 'vue';
import Popover from 'vue-js-popover'
import {getImages, getUsersInfo} from '../../../../../servicies/userServicies'
Vue.use(Popover)
export default {
    props:{
        ID: String,
        toprofile: Boolean
    },
    data(){
        return{
            id_user: this.ID,
            src: '', 
            name: '',
            userinfo: [],
        }
    },
    
    methods:{
        checkImg(){
            try {
                require(`../../../../../media/users/${this.ID}.png`).default
                return true
                }
                catch (e) {
                    return false
                }
        },
    },
     mounted(){
                const token = localStorage.getItem('validation_token');
            if(this.ID){
                getUsersInfo(token, this.ID)
                .then(data => {
                    this.userinfo = data
                    
                if(this.userinfo.name == null)
                    this.name = this.userinfo.email
                else
                    this.name = this.userinfo.name
                } )
            }
        },      
    }
</script>

<style>

</style>