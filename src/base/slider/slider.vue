<template>
  <div class="slider" ref="slider">
   <div class="slider-group" ref="sliderGroup">
     <slot name="slider-item"></slot>
   </div>
   <div class="dots">
     <span :class="{'active' : index === currentPageIndex}" v-for="(item, index) in dots">{{item}}</span>
   </div>
 </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'
import {addClass} from '../../common/js/addClass'
export default{
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted () {
    this.initDots()
    this.setSliderGroupWidth()
    this.initBScroll()
  },
  methods: {
    setSliderGroupWidth () {
      let slider = this.$refs.slider
      let sliderGroup = this.$refs.sliderGroup
      let childNodes = sliderGroup.children
      let width = 0
      let sliderWidth = slider.clientWidth
      for (let i = 0; i < childNodes.length; i++) {
        addClass(childNodes[i], 'slider-item')
        childNodes[i].style.width = `${sliderWidth}px`
        width += sliderWidth
      }
      if (this.loop) {
        width += sliderWidth * 2
      }
      width = `${width}px`
      console.log(width)
      sliderGroup.style.width = width
    },
    initBScroll () {
      this.bscroll = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.1,
          speed: this.interval
        }
      })
      this.bscroll.on('scrollEnd', () => {
        let pageIndex = this.bscroll.getCurrentPage().pageX
        if (this.loop) {
          pageIndex -= 1
        }
        this.currentPageIndex = pageIndex
        console.log(this.currentPageIndex)
      })
    },
    initDots () {
      this.dots = new Array(this.$refs.sliderGroup.children.length)
      console.log(this.dots)
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variable.styl';
  .slider
    position: relative
    overflow hidden
    width: 100vw
    .slider-group
      overflow: hidden
      .slider-item
        float: left
        a
          display: block
          width: 100%
          height: 100%
          img
            display block
            width: 100%
    .dots
      position: absolute
      text-align: center
      bottom: 0.4rem
      font-size: 0
      width: 100vw
      span
        display inline-block
        width: 0.2rem
        height: 0.2rem
        border-radius: 50%
        margin-right: 0.2rem
        background-color: $bg-gray
      span:last-child
        margin-right: 0
      .active
        width: 0.533333rem
        border-radius: 0.133333rem
        background-color: $bg-gray1
</style>
