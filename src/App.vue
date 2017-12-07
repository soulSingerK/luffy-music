<template>
  <div id="app">
    <router-view/>
    <footer-l></footer-l>
  </div>
</template>

<script>
  import footerL from 'components/footer-l/footer-l'
  import 'common/sass/reset.scss'
  export default {
    name: 'app',
    components: {
      footerL
    }
  }
</script>

<style>
  body, html, #app{
    height: 100%;
    width: 100%;
  }
    
</style>
