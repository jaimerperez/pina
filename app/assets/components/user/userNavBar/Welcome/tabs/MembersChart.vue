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
                                                        <ImageMembers v-if="id" :ID="id"/>
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
import ImageMembers from './ImageMembers.vue'
export default {
    props:{
        usersName: String,
        id: String
    },
    components:{
        ImageMembers    }
}
</script>

<style>

</style>