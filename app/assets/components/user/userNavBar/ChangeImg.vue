<template>
<div>
  <div v-if="checkImg()" class="w-24 h-24 group cursor-pointer" >
        <img class="w-24 h-24" :src="src">
        
    </div>
    <div v-else class="w-24 h-24 group cursor-pointer">
        <img :src="require(`../../../media/users/avatar-loading.png`)">
        <div>
            
        </div>
    </div>
</div>
</template>

<script>
import {  getImages } from '../../../servicies/userServicies'
export default {
    props:{
        ID: String,
    },
    data(){
        return{
            src: '',
        }
    },
    methods:{
        changeImage(event){
            this.selectedFile = event.target.files[0]
            const token = localStorage.getItem('validation_token');
            const formData = new FormData()
            formData.append('image', this.selectedFile);
            formData.append('token', token);
            console.log(this.ID)
            fetch("/api/departments/" + this.ID,
            {  
            method: "POST",
            body: formData })
            .then(response =>  { 
                if (response.status === 404) {
                return response.json()
                }
            })
        },
        checkImg(){
            try {
                require(`../../../media/departments/${this.ID}.png`)
                return true
                }
                catch (e) {
                    return false
                }
        }
    },
    mounted(){
            if(this.ID){
                getImages('departments', this.ID)
                .then(blob =>{
                    (this.src = URL.createObjectURL(blob))
                
                });
            }
            
            
        }
}
</script>

<style>

</style>