<template>
  <div class="text-white " >
      <h1 v-if="tagName == 'Paso'" class="bg-tags-paso text-center p-2">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Normal'" class="bg-tags-normal text-center p-2">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Urgente'" class="bg-tags-urgente text-center p-2">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Inminente'" class="bg-tags-inminente text-center p-2">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Bajo'" class="bg-tags-proceso text-center p-2">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Vida o muerte'" class="bg-tags-vidaomuerte text-center p-2">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Script'" class="bg-tags-script text-center p-2">{{tagName}}</h1>
      <h1 v-else-if="tagName == '+Info'" class="bg-tags-info text-center p-2">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'En proceso'" class="bg-tags-proceso text-center p-2">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Estancado'" class="bg-tags-estancado text-center p-2">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Listo'" class="bg-tags-normal text-center p-2">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Solicitada'" class="bg-tags-solicitada text-center p-2">{{tagName}}</h1>
      <h1 v-else class="bg-tags-solicitadomanuel text-center p-2">{{tagName}}</h1> 
  </div>
 
</template>

<script>
import Popper from './Popper'
export default {
    props:{
        tagName: String,
    },
    components:{
        Popper
    }
}
</script>

<style>

</style>