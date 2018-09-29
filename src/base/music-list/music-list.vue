<template>
  <div class="music-list">
    <div class="back" @click="onBack">
      <span class="al ft-30 col-yellow"></span>
    </div>
    <h1 class="name ft-18 col-white t-center" v-html="title"></h1>
    <div class="bg-image" :style="bgStyle" ref="bgImage">
      <div class="filter"></div>
    </div>
    <scroll-view :data="songList" ref="songList">
      <div class="song-list-wraper" slot="scroll-view-content">
        <song-list :songList="songList"></song-list>
      </div>
    </scroll-view>
  </div>
</template>
<script type="text/javascript">
import SongList from '../song-list/song-list'
import ScrollView from '../scroll-view/scroll-view'
export default {
  props: {
    bgImage: {
      type: String,
      default: ''
    },
    songList: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    onBack () {
      this.$router.push({
        path: '/singer'
      })
    }
  },
  computed: {
    bgStyle () {
      return `background-image: url(${this.bgImage})`
    }
  },
  components: {
    SongList,
    ScrollView
  },
  mounted () {
    console.log(this.$refs.songList)
    console.log(this.$refs.songList.$el)
    console.log(this.$refs.bgImage)
    this.$refs.songList.$el.style.top = `${this.$refs.bgImage.clientHeight}px`
  }
};
</script>
<style lang="stylus" scoped>
  .music-list
    .back
      position: absolute
      left: 0.266667rem
      top: 0.266667rem
      z-index: 1001
      span::after
        content: '\e605'
    .name
      position: absolute
      top: 0
      left: 10%
      z-index: 40
      width: 80%
      text-overflow: ellipsis
      overflow: hidden
      white-space: nowrap
      height: 1.333333rem
      line-height: 1.333333rem
      font-weight: 400
      // z-index: 1001
    .bg-image
      position: relative
      width: 100vw
      height: 0
      padding-top: 70%
      background-size: cover
      background-position: center top
      // z-index: 1000
      .filter
        position: absolute
        left: 0
        top: 0
        right: 0
        bottom: 0
        background-color: rgba(7, 17, 27, .4)
</style>
