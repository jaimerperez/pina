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
                                                            <img class="h-10 w-10 rounded mx-3 mt-2"  :src="`/assets/images/users/${id}`">
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
    components:{}   
}
</script>

<style>

</style>