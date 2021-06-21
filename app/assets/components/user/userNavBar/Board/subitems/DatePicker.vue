<template>
    <div class="flex flex-row mx-4 justify-center">
       <!-- <datepicker placeholder="Seleccionar fecha" 
            @mouseover="info" 
            :monday-first="true" 
            v-model="dateLimit" 
            @input="datePicked" 
            :language="es"
            :input-class="[taskStatus == 1 ? 'bg-block-working-primary' : taskStatus == 3 ? 'bg-block-pending-primary' : 'bg-block-complete-primary', 'rounded-xl text-white text-center placeholder-white placeholder-opacity-50 cursor-pointer']">
       </datepicker> -->
       <div 
            @click="focusDatepicker"
            :class="[taskStatus == 1 ? 'bg-block-working-primary' : taskStatus == 3 ? 'bg-block-pending-primary' : 'bg-block-complete-primary', 'rounded-xl p-2 text-white text-center placeholder-white placeholder-opacity-50 cursor-pointer']">
           <div v-if="fechaInicioFormateada == fechaFinalFormateada">
               {{fechaInicioFormateada}}
           </div>
           <div v-else>
               {{fechaInicioFormateada}} - {{fechaFinalFormateada}}
           </div>
       </div>
       
        <date-picker
            :same-date-format="sameDateformat"
            :initialDates="dates1"
            :format="format"
            language="es"
            :switch-button-initial="true"
            apply-button-label="Añadir"
            :show-helper-buttons="false"
            :date-input="dateInput"
            @date-applied="datepicked"
            v-popover.top="{name: 'Plazo' + id_task}"
            :is-monday-first="true"/>
      
       
        
        
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
import DatePicker, { CalendarDialog } from 'vue-time-date-range-picker/dist/vdprDatePicker'
import {EventBus} from '../../../../../event-bus.js'
export default {
  components: {
      Datepicker,
      Schedule,
      IconBase,
      DatePicker,
      CalendarDialog

  },
  props:{
      date: '',
      dateend: '',
      taskStatus: '',
      id_task: ''
  },
  data(){
    return {
        checkin: '',
        dateLimit: this.date,
        dateLimitEnd: this.dateend,
        color: ''  ,
        dateSelected: '',
        datestart:'',
        datefinal:'',
        today: '',
        finalDate: '',
        days: '',
        fechaInicioFormateada: '',
        fechaFinalFormateada: '',
        outDate: false,
        dates1: [new Date(this.date), new Date (this.dateend)],
        sameDateformat: {
            from: 'DD-MM-YY',
            to: 'DD-MM-YY',
        },
        format: 'DD-MM-YY',
        dateInput:{
            inputClass: 'hidden text-white text-center placeholder-white placeholder-opacity-50 cursor-pointer bg-block-working-primary',
            refName: 'fecha',
            id: 'fecha'+ this.id_task
        },
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agost", "Sep", "Oct", "Nov", "Dec"
        ],

    }   
  },
  methods:{
    
    focusDatepicker(){
        console.log( document.getElementById("fecha"+this.id_task))
          document.getElementById("fecha"+this.id_task).click()
},
    datepicked(date1, date2){
        console.log(date1)
        console.log(date2)
        let daystart = date1.getDate()
        let monthstart = date1.getMonth()+1
        let yearstart = date1.getFullYear()
        this.datestart = yearstart + '-' + monthstart + '-' + daystart
        
        let dayend = date2.getDate()
        let monthend = date2.getMonth()+1
        let yearend = date2.getFullYear()
        this.datefinal = yearend + '-' + monthend + '-' + dayend
        EventBus.$emit('datelimit', this.id_task, this.datestart, this.datefinal)
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
        
        let fecha = new Date(this.dateend)
        this.today=new Date()
        this.finalDate = this.today - fecha
        if(this.finalDate / (60*60*24*1000) > 0)
            this.outDate = true

        this.days = Math.abs(this.finalDate / (60*60*24*1000)).toFixed()
       
        let fechaInicio = new Date(this.date)
        let fechafinal = new Date(this.dateend)

       let mesformateadoInicio = fechaInicio.getMonth()
        let diaformateadoInicio = fechaInicio.getDate()
       this.fechaInicioFormateada = diaformateadoInicio + '-' + this.monthNames[mesformateadoInicio]
        
        let mesformateadoFinal = fechafinal.getMonth()
       let diaformateadoFinal = fechafinal.getDate()
        this.fechaFinalFormateada = diaformateadoFinal + '-' + this.monthNames[mesformateadoFinal]
  }
}
</script>
