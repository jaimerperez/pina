<template>
<div class="member-list flex flex-row items-center mb-4">
    <img class="h-16 w-16 border-2 border-black rounded-full mr-5" :src="`/assets/images/users/${userID}`" >
   <span class="text-2xl">{{userName}}{{userSurname}}</span>
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
}
</script>

<style>

</style>