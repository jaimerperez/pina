<template>
    <div class="flex flex-col h-screen justify-center items-center">
      <LoginForm/>  
    </div>
             
</template>

<script>
import LoginForm from '../components/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  created: function() {
        if(localStorage.getItem('validation_token') !== null)
            this.$router.push('/user')    
  },

}
</script>