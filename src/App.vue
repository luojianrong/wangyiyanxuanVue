<template>
  <div id="app">
    <ele-footer v-if="$route.meta.isShow"></ele-footer>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import FooterGuild from 'components/FooterGuild'

const OK = 200;
export default {
  name: 'app',
  components: {
    'ele-footer':FooterGuild
  }
}

//rem适配
;(()=>{
  const styleNode = document.createElement('style');
  const Ww = document.documentElement.clientWidth/10;
  styleNode.innerHTML = `html{font-size:${Ww}px!important}`;
  document.head.appendChild(styleNode);
})();
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
