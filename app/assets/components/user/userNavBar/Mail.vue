<template>
  <div class="h-full w-full text-fontColor-primary ">
    <div class="header-content-tittle w-full mt-4 font-semibold text-4xl">
        <div class="tittle-header ml-20 mb-4 ">
            Buzón
        </div>
        <div class="spacer bg-fontColor-primary w-11/12 h-0.5 m-auto"></div>
    </div>
    <div class="ml-20 w-6/12">
        <div class="border border-blue-200 grid grid-cols-12 mt-3" v-for="mail in mails" :key="mail.id">
           <div class="col-span-1 rounded-full flex items-center justify-center">
               <img class="h-10 w-10" :src="`/assets/images/users/${mail.id_user}`" alt="">
            </div>
            <div class="col-span-9">
                <div class="text-base">{{mail.user.name}} </div>
                <div class="text-sm text-gray-500">
                    {{mail.task.team.name}} > {{mail.task.name}}
                </div>
            </div>
            <div class="col-span-2 text-base font-bold">
                {{time_left(mail.updated_at)}}
            </div>
           <div class="col-start-2 col-span-10 text-xl pt-3 pb-3" v-html="mail['message']"></div>
        </div>
    </div>
  </div>
</template>

<script>
import {  getMails } from '../../../servicies/userServicies';
export default {
    data(){
        return {
            mails: {},
        }
    },
    methods:{
        time_left(t){
            let now = new Date()
            let timezone = Math.abs(now.getTimezoneOffset()/(60))
            let d = new Date(t).getTime() + (timezone *1000 * 60 * 60) //+1hora
            const time_diff = now.getTime() - d
            
            let minutes = (time_diff / (1000 *60)).toFixed()
            if( minutes <60){
                return  minutes+'m';
            }

            let hours = (minutes / 60).toFixed()
            if( hours <24){
                return  hours+'h';
            }

            let days = (hours / 24).toFixed()
            return  days+'d';
        },
        setmails(){
            const token = localStorage.getItem('validation_token');
            getMails(token)
                .then(data => {
                    this.mails = data
                });
        },
    },
    mounted() {
        this.setmails();
        setInterval(() => {
            this.setmails();
        }, 60 * 1000);
      },
}
</script>

<style>

</style>