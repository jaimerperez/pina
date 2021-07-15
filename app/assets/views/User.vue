<template>
    <div>
      <div class="flex w-screen h-screen font-Barlow">
        <aside class="fixed w-48 top-0 left-0 z-50"> 
          <UserSideBar :idRol="idRolName"/> 
        </aside>
        <section class="w-screen ml-40 py-0 px-5">
          <router-view><Welcome/></router-view>
        </section>
      </div>
    </div>
             
</template>

<script>
import UserSideBar from '../components/user/UserSideBar.vue';
import Footer from '../components/layout/Footer.vue';
import Welcome from '../components/user/userNavBar/Welcome/Welcome';

export default {
  name: 'User',
  components: {
    UserSideBar,
    Footer,
    Welcome
  },
  data() {
    return {
      idRol: null,
      idRolName: "",
    }
  },
  methods: {
      getUser(){
        const formData = new FormData()
        formData.append('token', localStorage.getItem('validation_token'));
        fetch("/api/user",{
           method: "POST",
           body: formData
           })
          .then(resp =>  resp.json())
          .then(data => {
            this.idRol = data.id_rol
            this.getRole(this.idRol)
          })
          .catch(error => {
            this.errorMessage = error;
            console.error('There was an error!', error);
          });
      },
      getRole(idRol){
        fetch("/api/rol/"+idRol+"?token="+localStorage.getItem('validation_token'))
          .then(resp =>  resp.json())
          .then(data => {
           this.idRolName = data
          })
          .catch(error => {
            this.errorMessage = error;
            console.error('There was an error!', error);
          });
      }
  },
    mounted: function(){
        if(localStorage.getItem('validation_token') === null)
          this.$router.push('/login') 
        this.getUser()
    },
  }
</script>