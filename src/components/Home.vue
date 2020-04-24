<template>
    <div class="home">
        <h1>Home</h1>
        <h3>your funds is: {{funds | currency}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Home",

        computed:{
            funds(){
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>

</style>
