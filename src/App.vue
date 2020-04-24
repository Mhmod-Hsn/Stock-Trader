<template>
  <div id="app">
    <Header></Header>
    <div class="mt-3">
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header";
  export default {
    name: 'App',
    components:{
      Header
    },
      created() {
        this.$store.dispatch('initStocks')
      }
  }
</script>

<style lang="scss">
  #app{
    padding: 30px;
  }
</style>
