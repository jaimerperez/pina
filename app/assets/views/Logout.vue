<template>
<div></div>
</template>

<script>
export default {
    mounted: function() {
            localStorage.clear()
            
            this.$router.push('/login')
        },
    }
</script>

<style>

</style>