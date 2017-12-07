<template>
  <div class="wrap" ref="wrap">
    <slot></slot>
  </div>  
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      autoPlay: {
        type: Boolean,
        default: false
      },
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted () {
      setTimeout(() => {
        this._initScroll()
      }, this.refreshDelay)
    },
    methods: {
      _initScroll () {
        if (!this.$refs.wrap) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrap, {
          probeType: this.probeType,
          click: this.click
        })
      },
      refresh () {
        this.scroll && this.scroll.refresh()
      }
    },
    watch: {
      data (newVal, oldVal) {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
