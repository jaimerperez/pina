<template>
<div class="flex flex-row">
    <div v-if="exist" class="profile-image" >
        <img :src="require(`../../../../../media/users/${userID}.png`)" class="w-10 h-10 opacity-1 rounded-full">
    </div>
    <div v-else class="w-10 h-10">
        <img :src="require(`../../../../../media/users/avatar-loading.png`)" title="mammals">
    </div>
   <span class="text-xl">{{userName}}{{userSurname}}</span>
</div>
        
</template>

<script>
export default {
    name: "MembersList",
    props:{
        userName: String,
        userSurname: String,
        userID: String,
    },
    data(){
        return{
            exist: false,
        }
        
    },
    created(){
        try {
            require(`../../../../../media/users/${this.userID}.png`).default
            this.exist = true
          } catch (e) {
            this.exist = false
          }
    }
}
</script>

<style>

</style>