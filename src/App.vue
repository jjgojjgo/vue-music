<template>
  <div>
    <mheader></mheader>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import mHeader from './components/m-header/m-header'
import Nav from './components/nav/nav'
export default{
  components: {
    navbar: Nav,
    mheader: mHeader
  }
};
</script>

<style lang="stylus"></style>
