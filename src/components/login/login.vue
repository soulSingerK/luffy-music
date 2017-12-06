<template>

</template>

<script>
  import {loginByPhone} from 'common/js/api'
  import {user} from './config'
  import goodStorage from 'good-storage'
  export default {
    mounted () {
      this._loginByPhone()
    },
    methods: {
      _loginByPhone () {
        loginByPhone(user.name, user.password).then((res) => {
          let account = {
            id: res.account.id,
            username: res.userName,
            clientId: res.clientId
          }
          goodStorage.set('user', account)
          this.$router.push('/find-music')
        })
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
