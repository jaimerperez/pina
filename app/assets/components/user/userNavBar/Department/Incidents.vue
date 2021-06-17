<template>
  <div class="h-screen ">
       <div class="content ml-20 mr-20">
           <div class="head-content mt-5 mb-10">
               <div class="head tittle text-4xl text-sideBar-primary font-semibold">
                Solicitud de tareas
               </div>
               <div class="spacer bg-sideBar-primary w-full h-0.5 mt-5"></div>
           </div>
           <div class="body-content mt-10">
               <div class="body-content-head flex flex-col justify-center items-center">
                   <div class="body-department-name text-3xl text-sideBar-primary font-semibold">
                       Departamento de {{departmentName}}
                   </div>
                   <div class="body-team-name text-2xl text-fontColor-primary italic">
                       {{teamName}}
                   </div>
               </div>
               <div class="body-content-general">
                   <div class="body-subject my-10">
                        <div class=" text-2xl text-sideBar-primary">Asunto:</div> 
                        <input name="Asunto" v-model="title" class="border rounded-full w-full h-10 outline-none pl-2 border-2 border-sideBar-primary">
                        <small>Descripción breve de la solicitud</small>
                   </div>
                   <div class="body-email my-10">
                        <div class=" text-2xl text-sideBar-primary">Correo electrónico: </div> 
                        <input name="Asunto" v-model="email" class="border rounded-full w-full h-10 outline-none pl-2 border-2 border-sideBar-primary">
                        <small>Correo electrónico para los avisos automáticos sobre esta tarea.</small>
                   </div>
                   <div class="body-message">
                       <div class=" text-2xl text-sideBar-primary">Mensaje: </div> 
                        <textarea name="Asunto" v-model="message" class="border rounded-3xl w-full h-32 outline-none pt-2 pl-3 border-2 border-sideBar-primary"></textarea>
                        <small>Descripción detallada de la solicitud</small>
                   </div>
                   <div clasS="body-adjunto my-10">
                        <div class=" text-2xl text-sideBar-primary">Adjunto: </div>
                        <div @click="fakeClick" class="border flex flex-row rounded-full w-full h-10 align-middle">
                            <div class="px-4 pt-2 w-full">Seleccionar un archivo ...{{file}}</div>
                            <button  class="border float-right rounded-r-full bg-gray-300 text-sideBar-primary w-20 h-10">
                                Examinar
                                <input name="Asunto" id="realclick" type="file" class="hidden w-20 h-10" @change="fileIncident">
                            </button>
                        </div>
                        <small>Archivo adjunto relevante para la solicitud, si fuese necesario.</small>
                   </div>
               </div>
               <button class="bg-sideBar-primary text-white rounded-lg p-4 float-right" @click="createIncident">ENVIAR</button>
           </div>
       </div>
    </div>
</template>

<script>
import { postIncident } from '../../../../servicies/userServicies'
export default {
props: {
        departmentName: String,
        departmentID: String,
        teamName: String,
        teamID: String,
    },
    data(){
        return{
    
            title: '',
            message: '',
            email: '',
            file: ''
        }
    },
methods:{
    fakeClick(){
        this.realClick()
    },
    realClick(){
        document.getElementById('realclick').click()
    },
    fileIncident(event){
        this.file = event.target.files[0] 
    },
    createIncident(){
        
        const token = localStorage.getItem('validation_token');
       const formData = new FormData()
        formData.append('title', this.title);
        formData.append('image', this.file )
        formData.append('message', this.message);
        formData.append('token', token);
        postIncident(formData, this.teamID)
    }
},
}
</script>

<style>

</style>