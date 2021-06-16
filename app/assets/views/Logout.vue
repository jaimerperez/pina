<template>
<div></div>
</template>

<script>
export default {
    mounted: function() {
            localStorage.clear()
            console.log("no")
            this.$router.push('/login')
        },
    }
</script>

<style>

</style>