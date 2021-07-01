<template>
   <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xl uppercase px-5 py-3 rounded block leading-normal text-sideBar-primary cursor-pointer group" v-on:click="toggleTabs(1)" v-bind:class="{'text-sideBar-primary': openTab !== 1, 'text-sideBar-primary': openTab === 1}">
           <TabComponent :tabName="'Equipos'"/>
           <div class="spacer bg-sideBar-primary w-11/12 h-0.5 m-auto group-hover:bg-sideBar-primary" :class="{'bg-gray-200': openTab !== 1, 'bg-sideBar-primary': openTab === 1}"></div>
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xl uppercase px-5 py-3 rounded block leading-normal cursor-pointer group" v-on:click="toggleTabs(2)">
            <TabComponent :tabName="'Miembros'"/>
            <div class="spacer w-11/12 h-0.5 m-auto group-hover:bg-sideBar-primary" :class="{'bg-gray-200': openTab !== 2, 'bg-sideBar-primary': openTab === 2}"></div>
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                      <Organization :id_team="departmentID"/>    
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <router-link :to="{ name: 'profileUser', params: {idUser: organization.team.id } }">
                <img class="h-10 w-10 rounded mx-3 mt-2"  :src="`/assets/images/users/${organization.team.id}`">
              </router-link>
              <span>{{organization.team.name}}</span>
              <div v-for="items in organization.users" :key="items.id">
                   <MembersList  
                   :userName="items.name" 
                   :userSurname="items.surname"
                   :userID="items.id"/> 
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MembersList from './MembersList.vue'
import Organization from './Organization.vue'
import TabComponent from './TabComponent'
import TeamsList from './TeamsList.vue'
import {getAllUsersFromDepartment, getAllUsers, getAllTeamsFromDepartment, getOrganization, postUserToDepartment} from '../../../../../servicies/userServicies'
export default {
  name: "blue-tabs",
  components:{
    TabComponent,
    MembersList,
    TeamsList,
    Organization,
  },
  props: {
    departmentID: String,
    departmentName: String,
    },
  data() {
    return {
      openTab: 1,
      teams: [],
      users: [],
      organization: [],
      usersDepartments: [],
      idUser: "",
      email: "",
      team: "",
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },
    addUserToDepartment(){
       const token = localStorage.getItem('validation_token');
        for(const user in this.users) {
          if(this.email == this.users[user].email){
            this.idUser = this.users[user].id
            break;
          }
        }
        
        const formData = new FormData()
        formData.append('id_user', this.idUser);
        formData.append('token', token);
        postUserToDepartment(formData, this.departmentID)
        .catch(error => {
               this.errorMessage = error;
               console.error('There was an error!', error);
             });
            this.fetchData()
    },
    fetchData(){
      const token = localStorage.getItem('validation_token');
      getAllUsers(token).then(data => (this.users = data));
        
      getAllTeamsFromDepartment(token, this.departmentID).then(data => (this.teams = data));

      getAllUsersFromDepartment(token, this.departmentID).then(data => (this.usersDepartments = data));
      
      getOrganization(token,this.departmentID ).then(data => (this.organization = data));
    }
  },
  created(){
        this.fetchData()
    },
    watch: {
    '$route': 'fetchData'
  }
}
</script>