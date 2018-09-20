<template>
  <div class="loading t-center w-100">
      <img src="./loading.gif">
      <p class="ft-14 col-gray">{{message}}</p>
  </div>
</template>
<script type="text/javascript">
export default{
  props: {
    message: {
      type: String,
      default: '正在载入...'
    }
  }
};
</script>
<style lang="stylus" scoped>
  .loading
    margin-top: 2.0rem
    img
      width: 0.64rem
      height: 0.64rem
    p
      line-height: 0.533333rem
</style>
