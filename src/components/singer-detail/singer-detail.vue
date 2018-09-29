<template>
    <transition name="slider">
      <div class="singer-detail bg-black">
        <music-list :songList="songList" :title="title" :bg-image="bgImage"></music-list>
      </div>
    </transition>
</template>
<script type="text/javascript">
import {createSong} from '../../common/js/song'
import {getSingerDetail} from '../../api/singerDetail'
import {ERR_OK} from '../../api/config'
import {mapGetters} from 'vuex'
import MusicList from '../../base/music-list/music-list'
export default{
  data () {
    return {
      songList: []
    }
  },
  mounted () {
    this._getSingerDetail()
  },
  computed: {
    ...mapGetters(['singer']),
    title () {
      return this.singer.name
    },
    bgImage () {
      return this.singer.avatar
    }
  },
  methods: {
    _getSingerDetail () {
      if (!this.singer.id) {
        this.$router.push({
          path: '/singer'
        })
        return
      }
      getSingerDetail(this.singer.id).then(res => {
        if (res.code === ERR_OK) {
          // console.log(res.data.list)
          this.songList = this._normalizeSongs(res.data.list)
          console.log(this.songList)
        }
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach((item) => {
        if (item.musicData.songid && item.musicData.albummid) {
          ret.push(createSong(item.musicData))
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  }
};
</script>
<style lang="stylus" scoped>
  .singer-detail
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 1000
  .slider-enter-active, .slider-leave-active
    transition: all 0.3s
  .slider-enter, .slider-leave-to
    transform: translate(100%, 0)
</style>
