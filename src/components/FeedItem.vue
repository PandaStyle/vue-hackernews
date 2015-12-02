<template>
  <div class="tile feed-item">
    <a class="overlay" href="{{item.link}}" target="_blank">
      <div class="lay"></div>
    </a>
    <div class="tile-image"><img :src="item.image" alt=""/></div>
    <header>
      <div class="title">{{item.title}}</div>
      <div class="summary">{{item.summary}}</div>
      <div class=meta>
        <span class="host">{{item.feed}}</span>
        <span class="diff">{{item.diff}}</span>
      </div>
    </header>
  </div>
</template>

<script type="text/babel">
  import Salvattore from 'salvattore'

export default {

  name: 'FeedItem',

  props: {
    item: Object
  },

  created () {
    console.log("FEEDITEM CREATED");
  },

  ready () {
    console.log("FEEDITEM READY");
  }


}
</script>

<style lang="sass" scoped>
 @import "../styles/feeditem.scss";
</style>
