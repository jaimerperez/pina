<template>
  <div>
      <div v-if="boardName == 'Marketing'" class="flex fixed text-4xl text-boardNames-Marketing capitalize ml-20 pt-10">
        {{boardName}}
        </div>
        <div v-else-if="boardName== 'Plataformas'" class="flex fixed text-4xl capitalize text-boardNames-Plataformas ml-20 pt-10">
            {{boardName}}
        </div>
        <div v-else-if="boardName== 'Sistemas'" class="flex fixed text-4xl text-boardNames-Sistemas capitalize ml-20 pt-10">
            {{boardName}}
        </div>
        <div v-else class="flex fixed text-4xl text-boardNames-Programación capitalize ml-20 pt-10">
            {{boardName}}
        </div>
    </div>
</template>

<script>
export default {
props:{
    boardName: String,
}
}
</script>

<style>

</style>