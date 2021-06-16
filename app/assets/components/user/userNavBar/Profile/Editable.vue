<template>
  <div contenteditable="true" v-on:blur="onUpdate" :id="id" >
    {{content}}
  </div>

</template>

<script>
import { getUserToken,changeProfile } from '../../../../servicies/userServicies';
export default {
  props: {
     content: String, 
     id: String,
  },
  data(){
    return { 
      userInfo: [],
    }
  },
   mounted() {
    //GET USER departments
        const token = localStorage.getItem('validation_token');
       getUserToken(token)
       .then(data => {
          this.userInfo = data});
   },
  methods: {
    
    onUpdate(){
      const valor = document.getElementById(this.id);
      const text = valor.textContent
      const formData = new FormData()
        formData.append(this.id, text);
        formData.append('token', localStorage.getItem('validation_token'));
       changeProfile(formData, this.userInfo.id)
      
      },
  },
};
</script>