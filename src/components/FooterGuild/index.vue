<template>
  <!--底部导航-->
  <div class="tabBar-wrap">
    <nav class="m-tabBar">
      <router-link to="/Home" class="item">
        <i class="icon iconfont iconshouye"></i>
        <span class="text">首页</span>
      </router-link>
      <router-link to="/Categories" class="item ">
        <i class="icon iconfont iconfenlei"></i>
        <span class="text">分类</span>
      </router-link>
      <router-link to="/Manage" class="item ">
        <i class="icon iconfont icontupian"></i>
        <span class="text">识物</span>
      </router-link>
      <router-link to="/Cart" class="item ">
        <i class="icon iconfont icongouwuche2"></i>
        <span class="text">购物车</span>
      </router-link>
      <router-link to="/Personal" class="item ">
        <i class="icon iconfont icon04geren"></i>
        <span class="text">个人</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "FooterGuild"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //rem适配的混合
  rem(p)
    $rem=750/10
    return p/$rem rem
  /*底部导航样式*/
  .tabBar-wrap
    position fixed
    z-index 999
    left 0
    bottom 0
    width 100%
    .m-tabBar
      height rem(98)
      display flex
      align-items center
      justify-content space-around
      background-color #ffff
      .item
        display flex
        flex-direction column
        justify-content center
        align-items center
        color #666
        &.active
          color #b4282d
        .icon
          font-size rem(45)
        .text
          margin-top .09333rem
          font-size .32rem
</style>
