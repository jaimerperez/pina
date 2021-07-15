<template>
    <div class="flex flex-col h-screen justify-center items-center">
      <LoginForm/>  
    </div>
             
</template>

<script>
import LoginForm from '../components/LoginForm'
import { getUserToken, getAllTeamsFromUser} from '../servicies/userServicies'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data(){
    return{
      userInfo: [],
      teams: [],
    }
  },
  created() {
        if(localStorage.getItem('validation_token') !== null)
        {
          console.log('entra aqui')
          const token = localStorage.getItem('validation_token');
          getUserToken(token).then(data => {
          this.userInfo = data
          console.log(this.userInfo.id)
          getAllTeamsFromUser(token, this.userInfo.id).then(data => (this.teams = data));

          this.$router.push('/board/' + this.teams[0].id + '/' + this.teams[0].name)
         })
        }
         
  },

}
</script>