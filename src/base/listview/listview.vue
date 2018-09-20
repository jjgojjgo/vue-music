<template>
  <div class="list-view">
    <scrollview ref="scrollView">
      <ul slot="scroll-view-content" class="ft-14 col-gray">
        <li class="singerGroup pd-b-40" v-for="(singerGroup, index) in singerList" :key="singerGroup.id">
          <span :class="{'title-fixed' : index === currentIndex}" class="pd-l-40 bg-gray2">{{singerGroup.title}}</span>
          <ul>
            <li class="singer pd-l-60 pd-t-40" v-for="singer in singerGroup.items" :key="singer.id">
              <img :src="singer.avatar"/>
              <span class="mar-l-40">{{singer.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </scrollview>
    <div class="shortcut-list bg-gray3">
      <ul ref="test">
        <li :class="{'high-color' : index === currentIndex}" class="ft-12 col-gray t-center" v-for="(shortcut, index) in shortcutList" :key="shortcut.id" @touchstart="onShortcutTouchstart" @touchmove="onShortcutTouchmove" :data-shortcut-index="index">
          {{shortcut}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import scrollView from '../scroll-view/scroll-view'
let startY = 0
let endY = 0
let disY = 0
// let shortcutHeight = 18
export default {
  data () {
    return {
      currentIndex: 0,
      // scrollY: 0,
      singerGroupsHeight: []
    }
  },
  props: {
    singerList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
    scrollview: scrollView
  },
  watch: {
    singerList () {
      this.$nextTick(() => {
        let singerGroups = document.getElementsByClassName('singerGroup')
        let singerGroupHeight = 0
        for (let i = 0; i < singerGroups.length; i++) {
          singerGroupHeight += singerGroups[i].offsetHeight
          this.singerGroupsHeight.push(singerGroupHeight)
        }
        console.log(this.singerGroupsHeight)
        console.log(this.$refs.scrollView.scroll)
        this.$refs.scrollView.scroll.on('scroll', res => {
          // console.log(res.y)
          for (let i = 0; i < this.singerGroupsHeight.length; i++) {
            if (-res.y <= this.singerGroupsHeight[i]) {
              this.currentIndex = i
              return
            }
          }
        })
      })
    }
  },
  computed: {
    shortcutList () {
      return this.singerList.map((singerGroup) => {
        return singerGroup.title.substr(0, 1)
      })
    }
  },
  methods: {
    onShortcutTouchstart (event) {
      startY = event.changedTouches[0].clientY
      let shortcutIndex = event.changedTouches[0].target.dataset.shortcutIndex
      this.currentIndex = parseInt(shortcutIndex)
      this.$refs.scrollView.scroll.scrollToElement(document.getElementsByClassName('singerGroup').item(shortcutIndex))
    },
    onShortcutTouchmove (event) {
      endY = event.changedTouches[0].clientY
      disY = endY - startY
      let shortcutIndex = Math.floor(disY / 18)
      this.currentIndex = parseInt(shortcutIndex)
      if (this.currentIndex < 0) {
        this.currentIndex = 0
      }
      if (this.currentIndex > this.shortcutList.length - 1) {
        this.currentIndex = this.shortcutList.length - 1
      }
      this.$refs.scrollView.scroll.scrollToElement(document.getElementsByClassName('singerGroup').item(shortcutIndex))
    }
  }
};
</script>
<style lang="stylus" scoped>
  .high-color
      color: #ffcd32 !important
  .singerGroup>span
    display: block
    height: 0.8rem !important
    line-height: 0.8rem  !important
    box-sizing: border-box
  .singer
    display: flex
    flex-direction: row
    box-sizing: border-box
    img
      flex: 0 0 1.333333rem
      width: 1.333333rem
      height: 1.333333rem
      border-radius: 50%
    span
      flex: 1
      height: 1.333333rem
      line-height: 1.333333rem
  .shortcut-list
    position: fixed
    right: 0
    top: 3.466667rem
    // backgroud-color: rgba(0, 0, 0, 0.3) !important
    border-radius: 0.266667rem
    padding: 0.533333rem 0
    // box-sizing: border-box
    // backgroud-color: red
    ul
      list-style: none
      padding: 0
      li
        width: 0.533333rem
        height: 0.48rem
        line-height: 0.48rem
        padding: 0 0.04rem
        // padding: 0 0.08rem
        // span
        //   line-height: 0.133333rem
          // box-sizing: border-box
</style>
