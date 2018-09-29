<template>
  <div class="song-list">
    <ul>
      <li v-for="song in songList" :key="song.id" class="item">
        <div class="content">
          <h2 class="name col-white ft-14">{{song.name}}</h2>
          <p class="desc col-gray ft-12">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    songList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    getDesc (song) {
      return `${song.singer} . ${song.album}`
    }
  }
};
</script>

<style lang="stylus" scoped>
  .song-list
    padding: 0.533333rem 0.8rem
    box-sizing: border-box
    ul
      list-style: none
      .item
        height: 1.706667rem
        .name
          font-weight: 400
          text-overflow: ellipsis
          overflow: hidden
          white-space: nowrap
        .desc
          margin-top: 0.106667rem
          text-overflow: ellipsis
          overflow: hidden
          white-space: nowrap
</style>
