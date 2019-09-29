<template>
  <div class="wrapper">
    <div class="wrapper-main">
      <div class="header">
        <header class="header-main">
          <a class="home" href="./index.html"><i class="iconfont iconshouye"></i></a>
          <h2 class="title">网易严选</h2>
          <div class="line"></div>
          <div class="right">
            <a class="search" href=""><i class="iconfont iconsousuo"></i></a>
            <a class="cart" href=""><i class="iconfont icongouwuche2"></i></a>
          </div>
        </header>
      </div>
      <div class="content">
        <div class="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="login">
          <form class="login-form" action="">
            <input class="nameInput" @focus="checkPhone"  v-model="phone" v-validate="'required|phone'" name="phone" placeholder="请输入手机号"/>
            <span style="color: red; font-size: 12px" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
            <div class="codeWrap">
              <input class="codeInput" v-model="code" v-validate="{required: true,regex: /^\d{6}$/}" name="code" placeholder="请输入短信验证码"/>
              <div class="getCode" @click="getCode">获取验证码</div>
              <span style="color: red; font-size: 12px" v-show="errors.has('code')">{{ errors.first('code') }}</span>
              <span v-show="isPhone" style="color: red; font-size: 12px">请输入手机号</span>
            </div>
            <div class="problem">
              <span class=left>遇到问题？</span>
              <span class="right">使用密码验证登录</span>
            </div>
            <button class="btn" type="danger" @click.prevent="toLogin">登录</button>
            <div class="mis">
              <van-radio icon-size="15px"
                         name="1"
                         shape="square"
              >
                <span>我同意</span>
                <span class="service">《服务条款》</span>
                <span>和</span>
                <span class="service">《网易隐私政策》</span>
              </van-radio>
            </div>
            <div class="other">其他登录方式 <span>&gt;</span> </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Field,RadioGroup, Radio,Toast} from 'vant';
  import {mapActions,mapMutations} from 'vuex'

  export default {
    name: "Login",
    data(){
      return {
        phone:'',
        code:'',
        isPhone:false
      }
    },
    methods:{
      ...mapActions(['toGetUser']),
      //获取验证码
      async getCode(){
        const res = await this.$http.login.sendcode({
          phone: this.phone
        });
        if (res.code === 0) Toast.success('短信已发送成功')
        this.isPhone = this.phone ? false:true;
      },
      //校验手机号的方法
      checkPhone(){
        this.isPhone = false
      },
      //短信登录方法
      async toLogin(){
        const success =await this.$validator.validateAll(["phone","code"]);
        await this.toGetUser({
          user:{
            phone:this.phone,
            code:this.code
          }
          }
        );
        console.log(this.phone,this.code)
      }
    },
    components:{
      [Field.name]:Field,
      [RadioGroup.name]:RadioGroup,
      [Radio.name]:Radio,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //rem适配的混合
  rem(p)
    $rem=750/10
    return p/$rem rem

  //一物理像素边框
  border-1px($color)
    position relative
    &:after
      content ""
      display block
      width 100%
      height 1px
      position absolute
      bottom 0
      left 0
      background-color $color
      @media screen and (-webkit-device-pixel-ratio2)
        transform scaleY(.5)
      @media screen and (-webkit-device-pixel-ratio3)
        transform scaleY(.33333333333333333)

  *
    margin 0
    padding 0

  html,body
    height 100%
    background-color #ffffff
  .wrapper
    .wrapper-main
      .header
        width 100%
        border-1px(#ededed)
        background-color #FAFAFA
        .header-main
          height rem(88)
          display flex
          align-items center
          margin-left rem(20)
          .title
            font-size .48rem
            float right
            margin-left rem(220)
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
        .logo
          width rem(750)
          height rem(64)
          text-align center
          margin-top rem(60)
          img
            width rem(192)
            height rem(64)
            vertical-align middle

        .login
          width 100%
          padding rem(70) rem(30)
          .login-form
            height rem(616)
            width rem(675)
            .nameInput,.codeInput,.problem ,.btn,.mis,.other
              display block
              height rem(90)
              width 100%
              line-height rem(80)
              font-size rem(27)
              border-bottom 1px solid rgba(102, 102, 102, 0.17)
            .codeWrap
              position relative
              margin-top rem(30)
              .getCode
                position absolute
                right rem(12)
                top rem(12)
                width rem(176)
                height rem(52)
                line-height rem(52)
                text-align center
                font-size rem(27)
                border 1px solid rgba(102, 102, 102, 0.27)
            .problem
              margin-top rem(30)
              border none
              overflow hidden
              height rem(80)
              color rgba(102, 102, 102, 0.67)
              span
                font-size rem(28)
                display inline-block
                &.left
                  float left
                &.right
                  color black
                  float right
            .btn
              width 100%
              margin-top rem(20)
              background-color #DD1A21
              display block
              border none
              color #ffffff
            .mis
              margin-top rem(20)
              border none
              font-size rem(10)
              span
                margin-right rem(10)
                vertical-align top
                font-size rem(20)
                &.service
                  color: #007AFF
            .other
              text-align center
              border none
              span
                font-size rem(45)
                color rgba(0, 0, 0, 0.45)



</style>
