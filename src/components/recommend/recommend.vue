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
import getRecommend from '../../api/getRecommend.js'
import {ERR_OK} from '../../api/config'
import Slider from '../../base/slider/slider'
export default{
  data () {
    return {
      recommends: []
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
          this.recommends = res.data.slider
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
