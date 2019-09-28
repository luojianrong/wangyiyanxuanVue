<template>
  <div class="wrapper">
    <div class="wrapper-main">
      <div class="header">
        <header class="header-main">
          <router-link class="home" to="/Home"><i class="iconfont iconshouye"></i></router-link>
          <h2 class="title">网易严选</h2>
          <div class="line"></div>
          <div class="right">
            <a class="search" href=""><i class="iconfont iconsousuo"></i></a>
            <a class="cart" href=""><i class="iconfont icongouwuche2"></i></a>
          </div>
        </header>
        <div class="content">
          <div class="img">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="text">
            <p class="login-phone"><i class="icon iconfont iconshouji"></i>手机号快速登录</p>
            <p class="login-email"><i class="icon email iconfont iconyouxiang"></i>邮箱账号登录</p>
          </div>
        </div>
        <div class="thirdWrap">
          <div>
            <i class="iconfont iconweixin"></i>
            <span>微信</span>
          </div>
          <div>
            <i class="iconfont iconqq-copy"></i>
            <span>QQ</span>
          </div>
          <div>
            <i class="iconfont iconweibo"></i>
            <span>微博</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Personal"
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
    background-color #F2F5F4
  .wrapper
    .wrapper-main
      .header
        .header-main
          width 100%
          height rem(88)
          background-color #ffffff
          display flex
          justify-content space-around
          align-items center
          .title
            font-size .48rem
            float right
            margin-left rem(140)
          i
            font-size rem(50)
          .right
            width rem(150)
            display: flex;
            align-items center
            justify-content space-around
            float: right;
            margin-left rem(160)
            a
              display inline-block
        .content
          position absolute
          height 4rem
          margin auto
          .img
            width rem(750)
            height rem(482)
            text-align center
            line-height rem(482)
            img
              width rem(286)
              height rem(90)
              vertical-align middle
          .text
            height rem(170)
            text-align center
            .icon
              margin-right: .21333rem;
              position: relative;
              top: -.02667rem;
              font-size rem(30)
              &.email
                font-size rem(48)
                top: rem(7);
          span
            color #999999
            margin 0 0 50px
            font-size 16px
          .login-phone,.login-email
            width rem(335*2)
            height rem(94)
            font-size .4rem
            color #ffffff
            border-radius .04rem
            line-height rem(92)
            margin  auto
            margin-top rem(20)
          .login-phone
            background-color #DD1A21
          .login-email
            border 1px solid #DD1A21
            background-color #ffffff
            color #DD1A21


        .thirdWrap
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 1.06667rem;
          height: .53333rem;
          text-align: center;
          div
            height: .53333rem;
            border-right: 1px solid #979797;
            display: inline-block;
            text-align: center;
            padding: 0 .53333rem;
            font-size: .37333rem;
            line-height: .53333rem;
            color: #7F7F7F;
            margin-left: .06667rem;


</style>
