<template>
<div class="member-list flex flex-row">
    <div v-if="exist">
                  <img class="h-10 w-10 rounded mx-3 mt-2" :src="`/assets/images/users/${userID}`" >
                </div>
                <div v-else>
                  <img class="w-12 h-12 rounded-full " src="/assets/images/users/avatar.svg">
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
       fetch("/assets/images/users/" + this.userID ) 
          .then( response => {

              if(response.ok){
                this.exist = true
              }
              else{
                this.exist = false
              }
          } ).catch(error => {
            this.exist = false
          })
    }
}
</script>

<style>

</style>