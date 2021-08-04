<template>

</template>


<script>
import { getUserToken, getAllTeamsFromUser} from '../servicies/userServicies'
export default {
data(){
      return{
        getUsers: [],
        userInfo: [],
        teams:[],
        input:{
          email: "",
          password: ""
        }
      }
},
created(){
    //this.$route.params.pathMatch // '/non-existing'
    const token = localStorage.getItem('validation_token');
            getUserToken(token).then(data => {
              this.userInfo = data
              getAllTeamsFromUser(token, this.userInfo.id).then(data =>{
                (this.teams = data)
                this.$router.push('/board/' + this.teams[0].id + '/' + this.teams[0].name)
              })
            })
}

}

</script>
