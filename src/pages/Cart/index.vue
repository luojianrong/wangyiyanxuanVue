<template>
  <div class="wrapper">
    <div class="wrapper-main">
      <div class="header">
        <header class="header-main">
          <span class="logo">购物车</span>
          <span class="text">领卷</span>
        </header>
        <div class="tab">
          <ul class="service">
            <li class="item">
              <i class="iconfont iconyuandianxiao"></i>
              <span>30天无忧退货</span>
            </li>
            <li class="item">
              <i class="iconfont iconyuandianxiao"></i>
              <span>48小时快速退款</span>
            </li>
            <li class="item">
              <i class="iconfont iconyuandianxiao"></i>
              <span>满88元免邮费</span>
            </li>
          </ul>
        </div>
        <div class="content">
          <div class="img">
            <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
          </div>
          <div class="text">
            <span>去添加点什么吧</span>
            <p class="login">登录</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cart"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //rem适配的混合
  rem(p)
    $rem=750/10
    return p/$rem rem

  *
    margin 0
    padding 0

  html,body
    height 100%
    width 100%
    background-color #F4F4F4
  .wrapper
    .wrapper-main
      .header
        width 100%
        .header-main
          height rem(88)
          background-color #ffffff
          padding 0 .4rem
          .logo
            float left
            font-size .48rem
            margin-top .35rem
          .text
            float right
            margin-top .4rem
            margin-right .4rem
            color #B4282D
            font-size .4rem
        .tab
          background #eee
          .service
            height rem(70)
            background #eee
            display flex
            justify-content space-around
            flex-flow nowrap
            align-items center
            .item
              display flex
              align-items center
              flex-flow nowrap
              height rem(36)
              i
                color rgba(94, 94, 94, 0.36)
              span
                font-size .32rem
                color #666
        .content
          position absolute
          top -.66667rem
          right 0
          bottom 0
          left 0
          height 4rem
          margin auto
          .img
            position absolute
            left 0
            top 0
            right 0
            bottom 0
            margin auto
            width rem(248)
            height rem(248)
            img
              width 100%
              height 100%
          .text
            height rem(170)
            margin-top rem(250)
            text-align center
            span
              color #999999
              margin 0 0 50px
              font-size 16px
            .login
              width rem(480)
              height rem(92)
              background-color #b4282d
              font-size .4rem
              color #ffffff
              border-radius .04rem
              line-height rem(92)
              margin  auto
              margin-top rem(44)
</style>
