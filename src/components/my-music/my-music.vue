<template>
  <div class="my_music">
    <h4 class="title">我的音乐</h4>

    <scroll class="list" :data="songsList" v-if="songsList">
      <ul class="items">
        <li class="item" v-for="list in songsList" :key="list.id">
          <img :src="list.coverImgUrl" alt="" class="img">
          <p class="i_title">{{list.copywriter}}</p>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import GoodStorage from 'good-storage'
  import {getSongList} from 'common/js/user'
  import {getHighList} from 'common/js/songlist'
  import Scroll from 'base/scroll/scroll'
  export default {
    data () {
      return {
        songsList: [] // 歌单
      }
    },
    beforeCreate () {
      let user = GoodStorage.get('user', {})
      if (!user.id) {
        this.$router.push({
          path: '/login'
        })
      } else {
        this.uid = user.id
      }
    },
    created () {
      // 获取用户歌单
      this._getSongList()

      // 获取推荐歌单
      this._getHighList()
    },
    methods: {
      // 推荐歌单
      _getHighList () {
        getHighList().then((res) => {
          if (res.code === 200) {
            this.songsList = res.playlists
          }
        })
      },
      // 歌单
      _getSongList () {
        if (!this.uid) {
          return
        }
        getSongList(this.uid).then((res) => {
        })
      }
    },
    components: {
      Scroll
    }
  }
</script>
<style lang="sass" scoped>
  .my_music
    height: 100%;
  .list
    height: calc(100% - 80px);
    overflow: hidden;
  .title
    line-height: 40px;
    text-align: center;
    background-color: #FF4040;
    color: #fff;
  .items
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item 
      width: 100px;
      height: 140px;
      .i_title
        font-size: 12px
        color: #999;
      .img
        width: 100%;
        height: 100px;
</style>
