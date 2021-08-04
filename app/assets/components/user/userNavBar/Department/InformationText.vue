<template>
<div>
  <div v-if="id == 3">
      ¿Tienes algún problema con las plataformas ? <br>
      ¿Quieres solicitar la creación de una nueva plataforma ?
      
    </div>
  <div v-else-if="id == 2">
      ¿Tienes problemas con sinergy, una web, una aplicación de la empresa, etc ?
      
  </div>
  <div v-else-if="id == 1">
      ¿Tienes problemas con tu equipo o no tienes red ? <br>
      ¿Necesitas crear, modificar o solucionar problemas con cuentas corporativas de correo electrónico ?
      
  </div>
  <div v-else>
      ¿Quieres lanzar una campaña de marketing, redes sociales, etc ?
  </div>
  <router-link :to="{ name: 'incidents', params: {teamID: id, teamName: teamName } }">
      <button class="mt-4 bg-buttonColor-primary text-black p-2 rounded-xl"> &lt;&lt; Haz click aqui</button>
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