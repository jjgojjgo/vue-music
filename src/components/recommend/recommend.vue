 <template>
  <div class="recommend">
    <div class="slider-wraper" v-if="recommends.length > 0">
      <slider>
        <div slot="slider-item" v-for="item in recommends" v-bind:key="item.id" ref="sliderItem">
          <a :href="item.linkUrl">
            <img :src="item.picUrl"/>
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script type="text/javascript">
import {getRecommends, getDiscList} from '../../api/recommend.js'
import {ERR_OK} from '../../api/config'
import Slider from '../../base/slider/slider'
export default{
  data () {
    return {
      recommends: []
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
          console.log(res.data)
        }
      })
    }
  },
  components: {
    slider: Slider
  }
};
</script>

<style lang="stylus" scoped></style>
