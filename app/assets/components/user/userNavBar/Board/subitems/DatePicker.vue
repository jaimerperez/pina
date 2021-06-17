<template>
    <div class="flex flex-row mx-4 justify-around">
       <datepicker placeholder="Seleccionar fecha" 
            @mouseover="info" 
            :monday-first="true" 
            v-model="dateLimit" 
            @input="datePicked" 
            :language="es"
            v-popover.top="{name: 'Plazo' + id_task}"
            :input-class="[taskStatus == 1 ? 'bg-block-working-primary' : taskStatus == 3 ? 'bg-block-pending-primary' : 'bg-block-complete-primary', 'rounded-xl text-white text-center placeholder-white placeholder-opacity-50 cursor-pointer']">
       </datepicker>
        <popover event="hover" :name="'Plazo'+ id_task" :width="150">
            <div v-if="outDate">Venció hace {{this.days}} días</div>
            <div v-else>
                Faltan {{this.days}} días
            </div>
        </popover>
    </div>
</template>
<script>
import IconBase from '../../../../icons/IconBase'
import Datepicker from 'vuejs-datepicker';
import Schedule from '../../../../icons/Schedule'
import {en, es} from 'vuejs-datepicker/dist/locale'
import {EventBus} from '../../../../../event-bus.js'
export default {
  components: {
      Datepicker,
      Schedule,
      IconBase

  },
  props:{
      date: '',
      taskStatus: '',
      id_task: ''
  },
  data(){
    return {
        checkin: '',
        es: es,
        dateLimit: this.date,
        color: ''  ,
        dateSelected: '',
        today: '',
        finalDate: '',
        days: '',
        outDate: false,
    }   
  },
  methods:{
      datePicked(){
        const month = this.dateLimit.getMonth()+1
        const day = this.dateLimit.getDate()
        const year = this.dateLimit.getFullYear()
        console.log(this.id_task)
        this.dateSelected = year + '-' + month + '-' + day
        EventBus.$emit('datelimit', this.id_task, this.dateSelected)
      },
      info(){

      },
  },
  mounted(){
          if(this.taskStatus=='1'){
              this.color = 'bg-block-working-primary'
          }
          else if(this.taskStatus == '3'){
              this.color = 'bg-block-pending-primary'
          }
          else{
              this.color = 'bg-block-completed-primary'
          }
        
        let fecha = new Date(this.date)
        this.today=new Date()
        this.finalDate = this.today - fecha
        if(this.finalDate / (60*60*24*1000) > 0)
            this.outDate = true

        this.days = Math.abs(this.finalDate / (60*60*24*1000)).toFixed()

  }
}
</script>