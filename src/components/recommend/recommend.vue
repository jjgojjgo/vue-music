 <template>
  <div class="recommend">
    <scrollview :data="discList">
      <div slot="scroll-view-content">
        <div class="slider-wraper" v-if="recommends.length > 0">
          <slider>
            <div slot="slider-item" v-for="item in recommends" v-bind:key="item.id" ref="sliderItem">
              <a :href="item.linkUrl">
                <img :src="item.picUrl"/>
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title t-center col-yellow ft-14">热门歌单推荐</h1>
          <ul>
            <li class="disc d-f flex-row pd-l-40 pd-r-40 mar-b-40" v-for="item in discList" :key="item.id">
              <img :src="item.imgurl" class="mar-r-40">
              <div class="d-f flex-column ft-14 flex-1">
                <span class="d-b col-white">{{item.creator.name}}</span>
                <span class="d-b col-gray">{{item.dissname}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scrollview>
  </div>
</template>

<script type="text/javascript">
import {getRecommends, getDiscList} from '../../api/recommend.js'
import {ERR_OK} from '../../api/config'
import scrollView from '../../base/scroll-view/scroll-view'
import Slider from '../../base/slider/slider'
export default{
  data () {
    return {
      recommends: [],
      discList: []
    }
  },
  created () {
    this._getRecommends()
    this._getDiscList()
  },
  methods: {
    _getRecommends () {
      getRecommends().then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList () {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          // console.log(res)
          console.log(res.data)
          this.discList = res.data.list
        }
      })
    }
  },
  components: {
    slider: Slider,
    scrollview: scrollView
  }
};
</script>

<style lang="stylus" scoped>
  .slider-item
    float: left
    a
      display: block
      width: 100%
      height: 100%
    img
      display block
      width: 100%
  .recommend-list
    .list-title
      height: 1.733333rem
      line-height: 1.733333rem
    .disc
      img
        width: 1.6rem
        height: 1.6rem
      span
        height: 0.8rem
        line-height: 0.8rem
</style>
