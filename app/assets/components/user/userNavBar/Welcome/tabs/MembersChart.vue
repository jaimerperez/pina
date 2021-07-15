<template>
  <!-- component -->
                                    <li class="relative p-6">
                                        <div class="border-t-2 absolute h-8 border-gray-400 top-0"
                                            style="left: 0px; right: 0px;"></div>
                                        <div class="relative flex justify-center">
                                            <div class="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0">
                                            </div>
                                            <div class="text-center">
                                                <div class="flex flex-col justify-center items-center">
                                                    <div class="w-16">
                                                        <router-link :to="{ name: 'profileUser', params: {idUser: id} }">
                                                            <div v-if="exist">
                                                                <img class="h-10 w-10 rounded mx-3 mt-2" :src="`/assets/images/users/${id}`" >
                                                            </div>
                                                            <div v-else>
                                                                <img class="w-12 h-12 rounded-full " src="/assets/images/users/avatar.svg">
                                                            </div>
                                                        </router-link>
                                                    </div>
                                                    <div class="text-gray-600">
                                                        <p>{{usersName}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
</template>

<script>
export default {
    props:{
        usersName: String,
        id: String
    },
    data(){
        return{
            exist: false
        }
    },
    created(){
       fetch("/assets/images/users/" + this.id ) 
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