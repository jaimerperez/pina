<template>
  <div class="flex flex-col justify-center items-center m-10 text-fontColor-primary">
    <div class="header  flex text-2xl">
      <h1>ARCHIVADAS</h1>
      <h1 class="font-bold">/{{boardName}}</h1>
    </div>
      <!-- <div class=" relative text-gray-600 focus-within:text-gray-400 border-2 border-black rounded-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-2">
              <icon-base iconColor="#4D4D4D" width="15" height="15" icon-name="search"><Search/></icon-base>
            </div>
            <input type="search" id="search" v-model="search" name="email" placeholder="Buscar" class="pl-10 rounded-lg z-0 focus:shadow focus:outline-none" >
        </div> -->
      <div v-for="items in taskstored" :key="items.id" class="taskstored-content mt-10 sm:w-2/5 flex flex-row justify-between border rounded-lg p-5">
        <div>
          <div>
            {{searchForUsersName(items.id_user_update)}}archivó el elemento 
            <span class="font-bold">{{items.name}}</span>
          </div>
          <div>
            {{items.updated_at}}
          </div> 
        </div>
        <div>
          <button class="border rounded-xl bg-sideBar-primary text-white self-end py-2 px-4"> Restaurar </button>
        </div> 
      </div>
  </div>
</template>

<script>
import {getTaskStored, getAllUsers} from '../../../../../servicies/userServicies'
export default {
name: 'StoreFile',
  props:{
    boardName: String,
    boardId: String,
  },
  data(){
    return{
      taskstored: [],
      usuarios: [],
    }
  },
  created(){
    const token = localStorage.getItem('validation_token');
      getTaskStored(token, this.boardId)
       .then(data => (this.taskstored = data));
       getAllUsers(token)
        .then(data => (this.usuarios = data));
  },
  methods:{
     searchForUsersName(id_user){
            for(let items of this.usuarios)
            {
                if(id_user == items.id)
                    if(items.name == null)
                        return items.email
                    else
                        return items.name
            }
            return false
        },
        
  }
}
</script>

<style>

</style>