<template>
<div>
    <div class="slidein max-w-screen-sm w-[400px] p-2 fixed z-50 top-0 h-screen bg-white transition-all duration-200 ease-in-out shadow-2xl right-0">
        <div class="header-views">
            <div>
                <button @click="backToBoard">X</button>
            </div>
            <div class="header-teamName text-2xl font-bold m-4">
                {{$route.params.boardName}}
            </div>
        </div>
        <div class="views-content">
            <div class="view-content-header flex flex-row justify-between m-4 "> 
                    <div class="view-content-name">
                        Nombre
                    </div>
                    <div class="last-viewed">
                        Última vez visto
                    </div>

            </div>
            <div class="spacer fixed bg-fontColor-primary w-6/12 h-0.5 mx-auto"></div>
            <div class="view-content-inner flex flex-row justify-between mt-4 " v-for="items in viewers" :key="items.id">
                <div class="inner-name flex flex-row" >
                    <img class="w-6 h-6 rounded-full" :src="`/assets/images/users/${items.id_user}`" alt="">
                    <div v-html="getName(items.id_user)"></div>
                </div>
                <div class="inner-time">
                    <div>{{time_left(items.created_at)}}</div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default{
  props: {
      viewers: Array,
      users: Array,
  },
  
  methods: {
      getName(id){
          let nombres = ''
      this.users.forEach(function(items){
            if(id == items.id){
              nombres = items.name
            }  
        })
      return nombres
    },
    backToBoard(){
        return this.$router.push('/board/' + this.$route.params.boardTeamID + '/' + this.$route.params.boardName)
    },
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
  },

}
</script>

<style>

</style>