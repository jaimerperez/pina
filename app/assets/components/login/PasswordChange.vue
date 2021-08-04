<template>
  <div class="w-full h-full flex flex-col justify-center items-center  text-Barlow">
    <img class="w-full h-full sm:h-4/6 sm:w-10/12 lg:w-3/12 lg:h-3/6" :src="require('../../media/LOGO/LOGO_Piña-01.png').default">
    <div class="w-full h-full flex flex-col font-Barlow text-fontColor-primary">
        <div class="flex flex-col justify-center items-center py-2">
            <label for="email" class="w-2/6 mx-3 lg:text-xl">Enter new password </label>
            <input type="password" placeholder="new password" id="password" name="password" v-model="password" class="w-2/6 lg:w-4/12 lg:h-full bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-lg" >
        </div>
        <div class="flex justify-center items-center mt-10">
            <button type="button" v-on:click="changePassword" class="w-4/12 lg:w-1/12 lg:h-5/6 my-3 inline-flex items-center justify-center bg-sideBar-primary hover:bg-block-working-primary lg:text-xl text-white rounded-lg">Cambiar contraseña </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        password: "",

      };
    },
     methods:
    {
        changePassword(){
            const params = new URLSearchParams(document.location.search.substring(1));
            const formData = new FormData()
            const token = params.get("token")
            formData.append('password', this.password);
            formData.append('token', token);
            fetch("/api/auth/change_password",{
                method: "POST",
                body: formData
            })
            .then(resp =>  { 
            if(!resp.ok){
              throw new Error(resp.statusText);
            }
           
            this.$router.push('/login')
            return resp.json() 
          }) 
          .catch(error => {
            this.errorMessage = error;
            console.error('There was an error!', error);
            
          });
        }
    }
}
</script>

<style>

</style>