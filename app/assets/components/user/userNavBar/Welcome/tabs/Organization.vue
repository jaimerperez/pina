<template>
  <!-- component -->
<div class="flex flex-col justify-center items-center">
    <div class="container mx-auto text-center pt-24">
        <div class="items-center justify-center flex" >
            <div class="text-center">
                <div class="flex flex-col justify-center items-center">
                    <div class="w-16">
                        <router-link :to="{ name: 'profileUser', params: {idUser: department.id} }">
                            <img class="h-10 w-10 rounded mx-3 mt-2"  :src="`/assets/images/users/${department.id}`">
                        </router-link>
                    </div>
                    <div class="text-gray-600">
                        <div>
                            <p>{{department.name}}</p>
                            <p>Encargado/a del departamento</p>
                        </div>
                    </div>
                </div>
                <ul class="flex flex-row mt-10 justify-center">
                    <div class="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
                    <li class="relative p-6">
                        <div class="border-t-2 absolute h-8 border-gray-400 top-0"
                            style="left: 50%; right: 50%;"></div>
                        <div class="relative flex justify-center">
                            <div class="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
                            <div class="text-center">
                                <div class="flex flex-col justify-center items-center">
                                    <div class="w-16">
                                        <router-link :to="{ name: 'profileUser', params: {idUser: team.id} }">
                                            <img class="h-10 w-10 rounded mx-3 mt-2"  :src="`/assets/images/users/${team.id}`">
                                        </router-link>
                                    </div>
                                    <div class="text-gray-600">
                                        <p>{{team.name}}</p>
                                        <p>Encargado/a del equipo</p>
                                    </div>
                                </div>
                                <ul class="flex flex-row mt-10 justify-center">
                                    <div class="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
                                    <MembersChart v-for="items in user" :key="items.id" :usersName="items.name" :id="items.id"/>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {getAllUsersFromDepartment, getAllUsers, getOrganization} from '../../../../../servicies/userServicies'
import MembersChart from './MembersChart.vue'
export default {
    data() {
        return {
        teams: [],
        users: [],
        organization: [],
        department: [],
        team: [],
        user: [],
            }
    },
    components:{
        MembersChart,
    },
    props:{
        id_team: String,
    },
    methods:{
        fetchData(){
            const token = localStorage.getItem('validation_token');
            getAllUsers(token).then(data => (this.users = data));
            getOrganization(token,this.id_team ).then(data =>{
                this.department = data.department
                this.team = data.team
                this.user = data.users
            } );
            
            }
    },
    created(){
        this.fetchData()
    },
    watch: {
    '$route': 'fetchData'
  },
}
</script>
