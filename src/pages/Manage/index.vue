<template>
  <div class="wrapper">
    <div class="wrapper-main">
      <div class="header">
        <div class="position-fixed">
          <header class="header-main">
            <a class="home" href="./index.html"><i class="iconfont iconshouye"></i></a>
            <div class="title">
              <a class="active">发现</a>
              <a>甄选家</a>
            </div>
            <div class="right">
              <a class="search" href=""><i class="iconfont iconsousuo"></i></a>
              <a class="cart" href=""><i class="iconfont icongouwuche2"></i></a>
            </div>
          </header>
          <div class="nav">
            <div class="nav-tabs" >
              <a class="item active" href="">推荐</a>
              <a class="item" href="">好货内部价</a>
              <a class="item" href="">选购指南</a>
              <a class="item" href="">回购榜</a>
              <a class="item" href="">晒单</a>
              <a class="item" href="">达人</a>
              <a class="item" href="">HOME</a>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-main" style="padding-top: 5px ">
          <div class="item">
            <a href="">
              <div class="pic">
                <img src="https://yanxuan.nosdn.127.net/2079bbd71b87befd24070a83f1080e58.jpg?imageView&quality=65&thumbnail=690y376" alt="">
              </div>
            </a>
          </div>
          <div class="item">
            <a href="">
              <div class="title">新鲜的，有创意的，可以打开你新世界大门的好物，给你意想不到的生活惊喜！</div>
              <div class="pic">
                <img src="https://yanxuan.nosdn.127.net/2c278f4048125b135ab8e3303de65b19.jpg?imageView&quality=65&thumbnail=690y376" alt="">
              </div>
              <div class="rcount">
                <i class="icon iconfont iconyanjing"></i>
                <span>7426人看过</span>
              </div>
            </a>
          </div>
          <div class="piker">
            <a href="">
              <div class="info">
                <div class="name">
                  <span class="img"><img src="https://yanxuan.nosdn.127.net/6bbce2ec26816a0068fa1f76c9d4ef77.png?imageView&quality=65&thumbnail=56y56" alt=""></span>
                  <span class="title">网易员工精选</span>
                </div>
                <div class="eat">吃过猫山王，其他榴莲皆路人</div>
                <div class="desc">开盒即食，全程冷鲜速达</div>
                <div class="rcount">
                  <i class="icon iconfont iconyanjing"></i>
                  <span>7426人看过</span>
                </div>
              </div>
              <div class="pic">
                <img class="img" src="https://yanxuan.nosdn.127.net/3fb07b212a1c1d3a704f596ed5c31b2e.jpg?imageView&quality=65&thumbnail=272y272" alt="">
              </div>
            </a>
          </div>
          <div class="item">
            <a href="">
              <div class="title">新鲜的，有创意的，可以打开你新世界大门的好物，给你意想不到的生活惊喜！</div>
              <div class="pic">
                <img src="https://yanxuan.nosdn.127.net/d3a2e269f7117e8b183338a61cd276ed.jpg?imageView&quality=65&thumbnail=690y376" alt="">
              </div>
              <div class="rcount">
                <i class="icon iconfont iconyanjing"></i>
                <span>7426人看过</span>
              </div>
            </a>
          </div>
          <div class="piker">
            <a href="">
              <div class="info">
                <div class="name">
                  <span class="img"><img src="https://yanxuan.nosdn.127.net/6bbce2ec26816a0068fa1f76c9d4ef77.png?imageView&quality=65&thumbnail=56y56" alt=""></span>
                  <span class="title">网易味央：小周</span>
                </div>
                <div class="eat">秋天最要紧的，就是吃大闸蟹</div>
                <div class="desc">大闸蟹礼券限时8.8折</div>
                <div class="rcount">
                  <i class="icon iconfont iconyanjing"></i>
                  <span>7426人看过</span>
                </div>
              </div>
              <div class="pic">
                <img class="img" src="https://yanxuan.nosdn.127.net/debe90c6dbfa8593f4a17b59ddbcf466.jpg?imageView&quality=65&thumbnail=272y272" alt="">
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Manage"
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
  .wrapper
    .wrapper-main
      .header
        .position-fixed
          position fixed
          background-color #FAFAFA
          .header-main
            width 100%
            height rem(100)
            display flex
            justify-content space-around
            align-items center
            position relative
            z-index 999
            .home
              position absolute
              left rem(20)
            .title
              position absolute
              width 3.2rem
              height rem(100)
              line-height rem(100)
              text-align center
              top 0
              margin-left -1.6rem
              font-size .28rem
              color #7F7F7F
              z-index 1
              a
                padding 0 .16rem
                vertical-align middle
              .active
                font-size rem(40)
                color #b4282d
                font-weight bold
            i
              font-size rem(50)
            .right
              width rem(150)
              display flex
              align-items center
              justify-content space-around
              position absolute
              left rem(580)
              a
                display inline-block
        .nav
          width rem(750)
          height rem(72)
          background #fffff
          border-top .01rem solid #d9d9d9
          border-bottom .01rem solid #d9d9d9
          box-sizing border-box
          .nav-tabs
            height .72rem
            width rem(2000)
            padding-bottom .2rem
            white-space nowrap
            .item
              display inline-block
              height rem(72)
              line-height rem(72)
              box-sizing border-box
              font-size rem(28)
              color #7F7F7F
              padding 0 .08rem
              margin 0 rem(20)
              vertical-align middle
              &.active
                color #B4282D
                border-bottom .04rem solid #B4282D
    .content
      width 100%
      overflow hidden
      padding-top rem(162)
      .content-main
        background-color #F2F5F4
        .item
          display block
          width rem(750)
          background #fff
          padding rem(36) rem(32)
          margin-top rem(20)
          a
            .pic
              width rem(690)
              height rem(188*2)
              overflow hidden
              border-radius .08rem
              background-color #0a66b7
              img
                width 100%
                height 100%
          .title
            width rem(690)
            height rem(102)
            font-size rem(36)
            color #333
            line-height .7rem
            overflow hidden
            text-overflow ellipsis
            font-family PingFangSC-Regular
          .rcount
            margin-top rem(10)
            color #999
            line-height .32rem
            font-size .28rem
            .icon
              font-size .28rem
            span
              font-size .28rem

        .piker
          display block
          width rem(750)
          padding rem(36) rem(32)
          margin-top rem(20)
          overflow hidden
          background-color #ffffff
          .info
            width rem(400)
            height rem(272)
            float left
            .name
              width rem(400)
              height rem(56)
              display flex
              align-items center
              .title
                font-size rem(28)
            .eat
              width 100%
              height rem(100)
              font-size rem(36)
              color #333
              line-height rem(45)
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              padding-top .32rem
              font-family PingFangSC-Regular
            .rcount
              margin-top rem(35)
              color #999
              line-height .32rem
              font-size .28rem
            .icon
              font-size .28rem
            span
              font-size .28rem
            .desc
              width 100%
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              font-size rem(28)
              line-height .4rem
              padding-top .08rem
              color #7f7f7f
            .img
              display inline-block
              width rem(56)
              height rem(56)
              overflow hidden
              border-radius 50%
              box-sizing border-box
              border .01rem solid #d9d9d9
              margin-right .12rem
              img
                width rem(56)
                height rem(56)
          .pic
            float left
            width rem(272)
            height rem(272)
            margin-left rem(20)
            .img
              width 100%
              height 100%
</style>
