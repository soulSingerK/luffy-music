<template>

</template>

<script>
  import {loginByPhone} from 'common/js/api'
  export default {
    mounted () {
      this._loginByPhone()
    },
    methods: {
      _loginByPhone () {
        loginByPhone('15616451254', 'gs4321')
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
