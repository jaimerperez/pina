<template>
  <div class="h-full align-middle items-center text-center text-fontColor-primary " >
      <h1 v-if="tagName == 'Paso'" class="h-full bg-tags-paso align-middle pt-4 group-hover:bg-opacity-50 ">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Normal'" class="h-full bg-tags-normal pt-4 group-hover:bg-opacity-50">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Urgente'" class="h-full bg-tags-urgente pt-4 group-hover:bg-opacity-50">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Inminente'" class="h-full bg-tags-inminente pt-4 group-hover:bg-opacity-50">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Bajo'" class="h-full bg-tags-proceso  pt-4 group-hover:bg-opacity-50">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Vida o muerte'" class="h-full bg-tags-vidaomuerte text-white pt-4 group-hover:bg-opacity-50">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Script'" class="h-full bg-tags-script  pt-4 group-hover:bg-opacity-50">{{tagName}}</h1>
      <h1 v-else-if="tagName == '+Info'" class="h-full bg-tags-info pt-4 group-hover:bg-opacity-50">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'En proceso'" class="h-full bg-tags-proceso  pt-4 group-hover:bg-opacity-50">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Estancado'" class="h-full bg-tags-estancado  pt-4 group-hover:bg-opacity-50">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Listo'" class="h-full bg-tags-normal  pt-4 group-hover:bg-opacity-50">{{tagName}}</h1>
      <h1 v-else-if="tagName == 'Solicitada'" class="h-full bg-tags-solicitada  pt-4 group-hover:bg-opacity-50">{{tagName}}</h1>
      <h1 v-else class="h-full bg-tags-solicitadomanuel text-white pt-4 group-hover:bg-opacity-50">{{tagName}}</h1> 
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