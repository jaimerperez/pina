<template>
    <div>
        <div v-for="user in users " :key="user.id">
            <div v-if="user.id == id">
                <section class="user-profile-middle-container block pt-4">
                        <div class="user-inner-container w-10/12 flex flex-col items-center text-lg justify-center">
                            <h1 class="text-fontColor-primary font-semibold pb-4">INFORMACION GENERAL</h1>
                            <div class="user-information-container w-6/12 h-full flex flex-col justify-around font-semibold text-sideBar-primary text-left">
                            <div class="flex flex-row p-2">
                                Horario Normal:&nbsp; {{user.schedule}}
                            </div>
                            <div class="flex flex-row p-2">
                                Guardia:&nbsp; {{user.duty_schedule}}
                            </div>
                            <div class="flex flex-row p-2">
                            Horario Guardia:&nbsp;
                            </div>
                            <div class="flex flex-row p-2">
                                Correo electrónico:&nbsp; {{user.email}}
                            </div>
                            <div class="flex flex-row p-2">
                                Teléfono:&nbsp;  {{user.phone}}
                            </div>
                            <div class="flex flex-row p-2">
                                <h1> Departamentos:&nbsp; </h1>
                                    <div v-for="department in departments" :key="department.id">
                                        {{department.name}}
                                    </div>
                            
                            </div> 
                            <div class="flex flex-row p-2">
                                <h1> Teams:&nbsp; </h1>
                                <div v-for="team in teams" :key="team.id">
                                        {{team.name}}
                                    </div>
                            </div>   
                            <div class="flex flex-row p-2">
                                Cumpleaños:&nbsp; {{user.birthday}}
                            </div>
                            
                        </div>
                        </div>
                    </section>
    </div>
</div>
        </div>
</template>

<script>
import { getAllUsers, getUserDepartments, getAllTeamsFromUser } from '../../../servicies/userServicies'

export default {
    props:{
        id: String,
    },
    data(){
        return{
            users: [],
            departments: [],
            teams:[]
        }
    },
    methods:{

    },
    created(){
       const token = localStorage.getItem('validation_token');
        getAllUsers(token).then (data => (this.users = data));
        getUserDepartments(token, this.id).then(data => (this.departments = data));
        getAllTeamsFromUser(token, this.id).then(data => (this.teams = data));
    }
}
</script>

<style>

</style>