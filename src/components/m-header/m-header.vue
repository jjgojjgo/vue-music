<template>
  <div class="m-header">
    <div class="logo"></div>
    <div class="title">Chicken Music</div>
  </div>
</template>

<script type="text/javascript">
export default{};
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'
  .m-header
    font-size: $font0
    text-align: center
    .logo
      display: inline-block
      vertical-align: top
      bg-image('./logo')
      width: 1.173333rem
      height: 1.173333rem
    .title
      display: inline-block
      vertical-align: top
      height: 1.173333rem
      line-height: 1.173333rem
      font-size: $font18
      color: $color-yellow
      font-weight: 700
</style>
