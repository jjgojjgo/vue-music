<template>
  <div class="scroll-view" ref="scrollView">
      <slot name="scroll-view-content"></slot>
  </div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
export default{
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted () {
    this._initScrollView()
  },
  methods: {
    _initScrollView () {
      this.scroll = new BScroll(this.$refs.scrollView, {
        probeType: this.probeType,
        click: this.click
      })
    }
  },
  watch: {
    data () {
      this.scroll.refresh()
    }
  }
};
</script>
<style lang="stylus" scoped>
  .scroll-view
    position: fixed
    left: 0
    top: 2.346667rem
    bottom: 0
    overflow: hidden
</style>
