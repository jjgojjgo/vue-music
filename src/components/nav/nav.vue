<template>
  <div class="nav">
    <router-link tag="div" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" to="/singer">
      <span>歌手</span>
    </router-link>
    <router-link tag="div" to="/rank">
      <span>排行</span>
    </router-link>
    <router-link tag="div" to="/search">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script type="text/javascript">
export default{};
</script>

<style lang="stylus">
  @import '../../common/stylus/variable.styl'
  .nav
    display: flex
    flex-direction: row
    color: $color-gray
    font-size: 14px
    height: 1.173333rem
    line-height: 1.173333rem
    text-align: center
    div
      flex: 1
    .router-link-active span
      padding-bottom: 4px
      color: $color-yellow
      border-bottom: $border-yellow
</style>
