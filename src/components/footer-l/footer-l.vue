<template>
  <div id="footer">
    <ul>
      <li>
        <router-link to="/findMusic">发现音乐</router-link>
      </li>
      <li>
        <router-link to="/myMusic">我的音乐</router-link>
      </li>
      <li>
        <router-link to="/friend">朋友</router-link>
      </li>
      <li>
        <router-link to="/user">账号</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'footers'
  }
</script>

<style lang="sass" scoped>
  .router-link-active
    font-size: 14px
    color: #666
  #footer 
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    font-size: 12px
  ul
    list-style: none
    height: 40px
    width: 100%
    li
      float: left
      width: 25%
      line-height: 40px
      text-align: center
</style>
