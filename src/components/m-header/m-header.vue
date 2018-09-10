<template>
  <div class="m-header t-center ft-0">
    <div class="logo v-top d-i-b"></div>
    <div class="title v-top ft-18 col-yellow fw-600 d-i-b">Chicken Music</div>
  </div>
</template>

<script type="text/javascript">
export default{};
</script>

<style lang="stylus" scoped>
  /*@import '../../common/stylus/variable.styl'*/
  @import '../../common/stylus/mixin.styl'
  .m-header
    /*font-size: $font0
    text-align: center*/
    // top: 0
    // left: 0
    // z-index: 1000
    // margin-bottom: 1.173333rem
    .logo
      /*display: inline-block
      vertical-align: top*/
      bg-image('./logo')
      width: 1.173333rem
      height: 1.173333rem
    .title
      /*display: inline-block
      vertical-align: top*/
      height: 1.173333rem
      line-height: 1.173333rem
      /*font-size: $font18
      color: $color-yellow
      font-weight: 700*/
</style>
