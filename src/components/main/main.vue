<template>
  
</template>

<script>
  import storage from 'good-storage'
  export default {
    beforeCreate () {
      let user = storage.get('user', '')
      if (user === '') {
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
