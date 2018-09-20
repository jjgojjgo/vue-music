<template>
  <div class="singer">
    <listview :singerList="singerList"></listview>
  </div>
</template>

<script type="text/javascript">
import {Singer} from '../../common/js/singer'
import {getSingerList} from '../../api/singer'
import {ERR_OK, HOT_NAME, HOT_SINGER_LEN} from '../../api/config'
// import scrollView from '../../base/scroll-view/scroll-view'
import listView from '../../base/listview/listview'
export default{
  data () {
    return {
      singerList: []
    }
  },
  created () {
    this._getSingerList()
  },
  methods: {
    _getSingerList () {
      getSingerList().then(res => {
        console.log(res)
        if (res.code === ERR_OK) {
          // this.singerList = res.data
          this.singerList = this.normalizeSingers(res.data.list)
          console.log(this.singerList)
        }
      })
    },
    normalizeSingers (singerList) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      singerList.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer(item.Fsinger_mid, item.Fsinger_name))
        }
        let key = item.Findex
        if (!/[A-Z]/.test(key)) {
          key = '*'
        }
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer(item.Fsinger_mid, item.Fsinger_name))
      })
      let hot = []
      let ret = []
      let others = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[A-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        } else {
          others.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      hot.push(...ret, ...others)
      return hot
    }
  },
  components: {
    // scrollview: scrollView
    listview: listView
  }
};
</script>

<style lang="stylus" scoped>
  // .singer
  //   position: fixed
  //   top: 2.346667rem
  //   left: 0
  //   bottom: 0
  //   overflow: hidden
</style>
