<template>
    <div>
        <form action="http://10.10.249.171:8081/api/departments/1" method="post" enctype="multipart/form-data">
         
        <br><br>
        <input type="hidden" name="token" value="sDpvyBzMG0HulJcE">
          <input type="file" name="image" id="">
          <br><br>
          <button type="submit" value="">SUBIR</button>
        </form>
        <img src="build/images/users/4.png" alt="imagen" srcset="">
  
        <button v-popover:foo>Toggle popover</button>
  <date-picker v-model="date" valueType="format"></date-picker>
            <popover name="foo">
             popover: {{id}}
            </popover>
    </div>
    

</template>

<script>
import Vue from 'vue'
import Popover from 'vue-js-popover'
Vue.use(Popover)
  export default {
    name: "Home",
    components: {
    },
    data() {
      return{
        id:'1',
        date: ''
      }
    }
  }
</script>

<style scoped>

</style>