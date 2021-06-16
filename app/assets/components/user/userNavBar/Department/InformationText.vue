<template>
<div>
  <div v-if="id == 3">
      ¿Tienes algun problema con las plataformas ?
      ¿Quieres solicitar la creacion de una nueva plataforma ?
      
    </div>
  <div v-else-if="id == 5">
      ¿Tienes problemas con sinergy, una web una aplicacion de la empresa, etc ?
      
  </div>
  <div v-else-if="id == 7">
      ¿Tienes problemas con tu equipo o no tienes red ?
      ¿Necesitas crear, modificar o solucionar problemas con cuentas corporativas de correo electronico ?
      
  </div>
  <div v-else>
      ¿Quieres lanzar una campaña de marketing redes sociales, etc ?
  </div>
  <router-link :to="{ name: 'incidents', params: {teamName: teamName, teamID: id, departmentName: departmentName} }">
      <button class="bg-sideBar-primary text-white rounded m-auto"> Haz click aqui</button>
    </router-link>
  </div>
</template>

<script>
export default {
    props:{
        id: String,
        teamName: String,
        departmentName: String,
    }
}
</script>

<style>

</style>