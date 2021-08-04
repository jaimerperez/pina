<template>
  <!-- component -->
                                    <li class="relative p-6">
                                        <div class="border-t-2 absolute h-8 border-gray-400 top-0"
                                            style="left: 0px; right: 0px;"></div>
                                        <div class="relative flex justify-center">
                                            <div class="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0">
                                            </div>
                                            <div class="text-center">
                                                <div class="flex flex-row justify-center items-center">
                                                    <div>
                                                        <router-link :to="{ name: 'profileUser', params: {idUser: id} }">
                                                            <img class="h-16 w-16 border-2 border-black rounded-full" :src="`/assets/images/users/${id}`" >
                                                        </router-link>
                                                    </div>
                                                    <div class="text-gray-600 text-2xl">
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
}
</script>

<style>

</style>