<template>
  <div class="wrapper">
    <div class="head-main">
      <!--头部-->
      <header class="header">
        <div class="header-top">
          <a href="/">网易严选</a>
          <div class="head-search">
            <i class="iconfont iconsousuo"></i>
            <span class="placeholder">搜索商品, 共23054款好物</span>
          </div>
          <div class="loginBtn">登录</div>
        </div>
        <div class="guild">
          <div class="nav" ref="navBar">
            <div class="nav-tabs" >
              <a class="item active" href="">推荐</a>
              <a class="item" href="">居家生活</a>
              <a class="item" href="">服饰鞋包</a>
              <a class="item" href="">美食酒水</a>
              <a class="item" href="">个护清洁</a>
              <a class="item" href="">母婴亲子</a>
              <a class="item" href="">运动旅行</a>
            </div>
          </div>
          <div class="toggle">
            <i class="icon iconfont iconjiantou_down"></i>
          </div>
        </div>
      </header>
    </div>
    <van-overlay
      :show="show"
      @click="show = false"
    />
    <div class="contain">
      <!--轮播-->
      <van-swipe class="swipers" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="swiper">
          <img src="https://yanxuan.nosdn.127.net/66ea9b0ded3ab38c16e81763839edf90.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
        <van-swipe-item class="swiper">
          <img src="https://yanxuan.nosdn.127.net/a412dcf435135e294edbcad885786060.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
        <van-swipe-item class="swiper">
          <img src="https://yanxuan.nosdn.127.net/61469ce903085d2c5141ab0daf955011.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
        <van-swipe-item class="swiper">
          <img src="https://yanxuan.nosdn.127.net/ed87665872a04b9ab0ceab21fe069bbf.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
      </van-swipe>
      <!--服务导航-->
      <div class="service-policy">
        <ul class="serve-ul">
          <li v-for="serve in policyDescList">
            <a>
              <i class="iconfont iconairudiantubiaohuizhi-zhuanqu_yiwutong"></i>
              <span>{{serve.desc}}</span>
            </a>
          </li>
        </ul>
      </div>
      <!--产品数据展示-->
      <div class="data-reactid">
        <!--产品分类列表-->
        <div class="categories">
          <div class="categorie">
            <a href="/" class="categorie-item" v-for="kingKong in kingKongList">
              <div class="icon">
                <img class="img" :src="kingKong.picUrl" alt="">
              </div>
              <div class="text">{{kingKong.text}}</div>
            </a>
          </div>
        </div>
        <!--新人专享礼-->
        <div class="freshmanModule ">
          <div class="module">
            <div class="moduleTitle">
              <span class="text">新人专享礼</span>
            </div>
            <div class="content">
              <a href="/" class="left">
                <div class="name">新人专享礼包</div>
                <div class="imgWrap">
                  <div class="img ">
                    <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                  </div>
                  <div class="animate"></div>
                </div>
              </a>
              <div class="right">
                <div class="module1" v-for="active in indexActivityModule">
                  <a class="m-activityItem" href="javascript:void(0)">
                    <div class="picWrap" >
                      <div class="pic" >
                        <img :src="active.picUrl" alt="">
                      </div>
                      <div class="discount">
                        <div class="line1">{{active.activityPrice}}</div>
                        <div class="line2">{{active.originPrice}}</div>
                      </div>
                    </div>
                    <div class="cnt">
                      <div class="title">{{active.title}}</div>
                      <div class="subTitle">{{active.subTitle}}</div>
                      <span></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--品牌制造商直供-->
        <div class="indexManufacturersSupplying ">
          <div class="module">
            <div class="moduleTitle">
              <span class="text">品牌制造商直供</span>
              <span class="more">更多</span>
            </div>
            <ul class="list">
              <a class="item item1">
                <div class="cnt">
                  <h4 class="title">海外制造商</h4>
                  <div>
                  <span>
                    <span class="price">9.9</span>
                    <span class="newIcon">元起</span>
                  </span>
                    <span class="new">上新</span>
                  </div>
                </div>
              </a>
              <a class="item item2">
                <div class="cnt">
                  <h4 class="title">海外制造商</h4>
                  <div>
                  <span>
                    <span class="price">9.9</span>
                    <span class="newIcon">元起</span>
                  </span>
                    <!--<span class="new">上新</span>-->
                  </div>
                </div>
              </a>
              <a class="item item3">
                <div class="cnt">
                  <h4 class="title">海外制造商</h4>
                  <div>
                  <span>
                    <span class="price">9.9</span>
                    <span class="newIcon">元起</span>
                  </span>
                    <!-- <span class="new">上新</span>-->
                  </div>
                </div>
              </a>
              <a class="item item4">
                <div class="cnt">
                  <h4 class="title">海外制造商</h4>
                  <div>
                  <span>
                    <span class="price">9.9</span>
                    <span class="newIcon">元起</span>
                  </span>
                    <!--<span class="new">上新</span>-->
                  </div>
                </div>
              </a>
            </ul>
          </div>
        </div>
        <!--类目热销榜-->
        <div class="categoryHotSellModule ">
          <div class="module">
            <div class="moduleTitle">
              <span class="text">类目热销榜</span>
              <span class="more">更多</span>
            </div>
            <div class="content">
              <div class="line1">
                <a href="" class="item-big item1">
                  <div>
                    <div class="name">
                      <span class="txt">热销榜</span>
                    </div>
                  </div>
                  <div class="imgWrap">
                    <div class="m-lazyload">
                      <img class="img" src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
                    </div>
                  </div>
                </a>
                <a href="" class="item-big item1">
                  <div>
                    <div class="name">
                      <span class="txt">好评榜</span>
                    </div>
                  </div>
                  <div class="imgWrap">
                    <div class="m-lazyload">
                      <img class="img" src="https://yanxuan-item.nosdn.127.net/e272316176963bd54052126a7657bbb9.png?imageView&quality=65&thumbnail=200x200" alt="">
                    </div>
                  </div>
                </a>
              </div>
              <div class="line2">
                <a class="item" href="" v-for="category in hotCategoryList">
                  <div class="name">{{category.categoryName}}</div>
                  <div class="imgWrap">
                    <img class="img" :src="category.picUrl" alt="">
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--人气推荐-->
        <div class="popularItemModule">
          <div class="module">
            <div class="moduleTitle">
              <span class="text">人气推荐</span>
              <span class="more">更多</span>
            </div>
            <a class="spItem" href="">
              <div class="wraper">
                <img src="https://yanxuan-item.nosdn.127.net/7ee6fafe787e7b26498a5f49cf2b937b.png?imageView&quality=65&thumbnail=280x280" alt="">
              </div>
              <div class="right">
                <div class="tagWraper new">
                  <span class="text">上新专享</span>
                </div>
                <div class="name">95%白鹅绒保暖羽绒被 升级款</div>
                <div class="desc">热销5万+条，洁净舒柔好睡眠</div>
                <div class="price">
                  <span>￥</span>
                  <span>999</span>
                </div>
              </div>
            </a>
            <div class="line2">
              <ul class="list">
                <li class="item" v-for="item in popularItemList">
                  <a class="good" href="">
                    <div class="hd">
                      <img :src="item.scenePicUrl" alt="">
                    </div>
                    <div class="name">
                      <span class="text">{{item.name}}</span>
                    </div>
                    <div class="tagWraper">
                      <p class="status">特价</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--限时购-->
        <div class="flashSaleModule">
          <div class="module">
            <div class="moduleTitle">
              <span class="text">限时购</span>
              <span class="more">更多</span>
            </div>
            <div class="cnt">
              <a class="item" href="" v-for="flashSale in flashSaleModule">
                <div class="imgWrap">
                  <img :src="flashSale.picUrl" alt="">
                </div>
                <div class="price">
                  <span class="current-price">￥{{flashSale.activityPrice}}</span>
                  <span class="retail-price">￥{{flashSale.originPrice}}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!--新品首发-->
        <div class="newItemModule">
          <div class="module">
            <div class="moduleTitle">
              <span class="text">新品首发</span>
              <span class="more">更多</span>
            </div>
            <div class="line2">
              <ul class="list">
                <li class="item" v-for="item in newItemList">
                  <a class="good" href="">
                    <div class="hd">
                      <img :src="item.listPicUrl" alt="">
                    </div>
                    <div class="name">
                      <span class="text">{{item.simpleDesc}}</span>
                    </div>
                    <div class="tagWraper">
                      <p class="status">新品</p>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <!--超值专区-->
        <div class="LightShoppingGuideModule ">
          <div class="module">
            <div class="list">
              <a class="item">
                <div class="cnt">
                  <div class="title">9.9超值专区</div>
                  <div class="price">190款商品定价直降</div>
                  <div class="picList">
                    <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
                    <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
                  </div>
                </div>
                <div class="cnt">
                  <div class="title">9.9超值专区</div>
                  <div class="price">190款商品定价直降</div>
                  <div class="picList">
                    <img src="https://yanxuan-item.nosdn.127.net/6640e0608af25bc8c9970a9b7f338e78.png?imageView&thumbnail=150x150&quality=75" alt="">
                    <img src="https://yanxuan-item.nosdn.127.net/0068f40279c5dc90195a3703c9410547.png?imageView&thumbnail=150x150&quality=75" alt="">
                  </div>
                </div>
                <div class="cnt">
                  <div class="title">9.9超值专区</div>
                  <div class="price">190款商品定价直降</div>
                  <div class="picList">
                    <img src="https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="">
                    <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75" alt="">
                  </div>
                </div>
                <div class="cnt">
                  <div class="title">9.9超值专区</div>
                  <div class="price">190款商品定价直降</div>
                  <div class="picList">
                    <img src="https://yanxuan-item.nosdn.127.net/1a24d637b5363e66610fe18de25e3932.png?imageView&thumbnail=150x150&quality=75" alt="">
                    <img src="https://yanxuan-item.nosdn.127.net/7c230892d2958d2c6a777acd9d2d4f95.png?imageView&thumbnail=150x150&quality=75" alt="">
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="footer">
          <footer class="footer-main">
            <div class="bd">
              <a href="">下载APP</a>
              <a href="">电脑版</a>
              <p class="copyright">
                <span>网易公司版权所有 © 1997-2019</span><br/>
                <span>食品经营许可证：JY13301080111719</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import axios from 'axios'
  import BetterScroll from 'better-scroll';
  import { Overlay,Swipe, SwipeItem,CountDown,Tab,Tabs } from 'vant'

  const OK = 200
  export default {
    name: "Home",
    data(){
      return {
        show:false,
        policyDescList:[], //服务策略
        kingKongList:[], //商品导航
        flashSaleModule:[],//限时购
        newItemList:[], //新品首发
        popularItemList:[],//人气推荐
        indexActivityModule:[],//新人专享礼
        hotCategoryList:[],//热销榜
      }
    },
    async mounted(){
      new BetterScroll(this.$refs.navBar,{
        scrollX:true
      });
      this.$nextTick(()=>{
        new Swiper(this.$refs.swipers, {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
      const homeData = await axios.get('/homeData')
      if(homeData.status === OK){
        const data = homeData.data.data
        this.policyDescList = data.policyDescList
        this.kingKongList = data.kingKongModule.kingKongList
        this.flashSaleModule = data.flashSaleModule.itemList
        this.newItemList = data.newItemList
        this.popularItemList = data.popularItemList
        this.indexActivityModule = data.indexActivityModule
        this.hotCategoryList = data.categoryHotSellModule.categoryList
      }
    },
    components:{
      [Overlay.name]:Overlay,
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem,
      [CountDown.name]:CountDown,
      [Tab.name]:Tab,
      [Tabs.name]:Tabs,
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //rem适配的混合
  rem(p)
    $rem=750/10
    return p/$rem rem

  //service背景图的混合
  serviceBg(url)
    background url("url")
    background-size 100% 100%
    background-repeat no-repeat
  *
    margin 0
    padding 0

  html,body
    height 100%
  .wrapper
    width 100%
    /*头部样式*/
    .head-main
      height rem(148)
      width 100%
      position fixed
      background-color #ffffff
      z-index 888
      .header
        height rem(148)
        .header-top
          display flex
          height rem(88)
          align-items center
          a
            display inline-block
            width rem(138)
            height rem(40)
            color black
            margin-left rem(30)
          .head-search
            margin-left rem(16)
            display flex
            align-items center
            justify-content center
            width rem(442)
            height rem(56)
            color #6666
            font-size .37333rem
            background-color #ededed
            border-radius .10667rem
          .loginBtn
            width .98667rem
            height .53333rem
            line-height .53333rem
            text-align center
            color #b4282d
            border 1px solid #b4282d
            border-radius .10667rem
            margin-left .21333rem
            font-size .32rem
        .guild
          display flex
          .nav
            width rem(620)
            height rem(62)
            overflow hidden
            background #fffff
            .nav-tabs
              height .72rem
              width rem(1140)
              padding-bottom .2rem
              white-space nowrap
              margin-left rem(10)
              .item
                display inline-block
                height rem(62)
                text-align center
                line-height rem(62)
                box-sizing border-box
                font-size rem(28)
                color #665455
                margin 0 rem(30)
                vertical-align middle
                &.active
                  color #B4282D
                  border-bottom .06rem solid #B4282D
          .toggle
            width rem(80)
            height rem(60)
            margin-left rem(45)
            text-align center
          .icon
            display inline-block
            font-size rem(45)
    /*主体内容*/
    .contain
      padding-top rem(148)
      /*轮播*/
      .lunbo
      .swipers
        .swiper
          div
            height rem(370)
            width rem(750)
          img
            width 100%
            height 100%
    /*服务导航*/
    .service-policy
      height rem(72)
      .serve-ul
        display flex
        li
          width rem(227.9)
          margin-left rem(17)
          a
            height rem(72)
            display flex
            align-items center
            i
              color #b4282d
            span
              font-size .32rem
              color #333
              margin-left .10667rem
              line-height .42667re
    /*产品展示*/
    .data-reactid
      padding-bottom rem(98)
      /*产品分类列表*/
      .categories
        .categorie
          margin-left rem(20)
          margin-top rem(5)
          display flex
          flex-flow wrap
          justify-content space-around
          .categorie-item
            width rem(140)
            height rem(156)
            .icon
              width rem(110)
              height rem(110)
              .img
                width rem(110)
                height rem(110)
                background-size rem(110) rem(110)
                background-repeat no-repeat
            .text
              height rem(36)
              margin-top .13333rem
              text-align center
              font-size .32rem
              color #333
              line-height .48rem
              white-space nowrap
      /*新人专享礼*/
      .freshmanModule
        padding-top rem(20)
        padding-bottom rem(20)
        height rem(538)
        background-color #ededed
        .module
          height rem(558)
          background-color #ffffff
          .moduleTitle
            height rem(90)
            line-height rem(90)
            text-align center
            font-family PingFangSC-Regular
            font-size .42667rem
            .text
              position relative
              color #666
              &.textbefore
                content ''
                position absolute
                top rem(20)
                left rem(-40)
                width .32rem
                height .04rem
                background #333
              &.textafter
                content ''
                position absolute
                top rem(20)
                right rem(-40)
                width .32rem
                height .04rem
                background #333
          .content
            .left
              margin-left rem(30)
              float left
              width rem(343)
              height rem(434)
              background-color #F9E9CF
              .name
                font-family PingFangSC-Medium
                font-size .42667rem
                padding .4rem 0 0 .4rem
              .imgWrap
                margin .49333rem auto
                width rem(258)
                height rem(257)
                position relative
                .img
                  width rem(258)
                  height rem(257)
                  img
                    width 100%
                    height 100%
              .animate
                position absolute
                width .4rem
                height .26667rem
                bottom .24rem
                right .86667rem
            .right
              float left
              margin-left rem(5)
              width rem(343)
              height rem(436)
              .module1
                border-radius 4px
                width rem(343)
                height rem(200)
                margin-bottom .05333rem
                .m-activityItem
                  position relative
                  display block
                  color #333
                  width rem(314)
                  height rem(196)
                  float left
                  border-radius .05333rem
                  margin 0 .05333rem .05333rem 0
                  font-size .32rem
                  background-color #FBE2D3
                  padding   .26667rem 0 0 .4rem

                  .picWrap
                    width rem(200)
                    height rem(200)
                    position absolute
                    right 0
                    top 10px
                    .pic
                      width rem(200)
                      height rem(200)
                      img
                        width 100%
                        height auto
                    .discount
                      position absolute
                      top rem(5)
                      right .4rem
                      width rem(80)
                      height rem(60)
                      opacity .8
                      background #F59524
                      border-radius 50%
                      padding-top .13333rem
                      color #fff
                      text-align center
                      .line1
                        width rem(80)
                        height rem(36)
                        font-size .2rem
                      .line2
                        font-size rem(12)
                        margin-top -.09333rem
                  .cnt
                    position relative
                    .title
                      font-family PingFangSC-Medium
                      font-size .42667rem
                    .subTitle
                      padding-top rem(10)
                      font-size .31rem
                      color #7F7F7F
      /*品牌制造商直供*/
      .indexManufacturersSupplying
        padding-top rem(20)
        padding-bottom rem(20)
        height rem(626)
        background-color #ededed
        .module
          height rem(646)
          background-color #ffffff
          .moduleTitle
            padding-left rem(30)
            height rem(90)
            line-height rem(90)
            font-family PingFangSC-Regular
            font-size .42667rem
            .more
              float right
              padding-right rem(24)
          .list
            height rem(554)
            width rem(700)
            margin-left rem(30)
            .item
              display inline-block
              height rem(260)
              width  rem(343)
              background-color #5e5e5e
              position relative
              overflow hidden
              border-radius .05333rem
              &.item1
                background-color #eee
                background-image url("https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1")
                background-size 100% 100%
              &.item2
                background-color #eee
                background-image url("https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1")
                background-size 100% 100%
              &.item3
                background-color #eee
                background-image url("https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1")
                background-size 100% 100%
              &.item4
                background-color #eee
                background-image url("https://yanxuan.nosdn.127.net/c9e14b08576b6a5e2bc3ef46e0e05d08.png?imageView&thumbnail=343y260&enlarge=1")
                background-size 100% 100%
              .cnt
                position absolute
                left 0
                top 0
                padding-top .30667rem
                width 100%
                z-index 4
                text-align center
                .title
                  text-overflow ellipsis
                  white-space nowrap
                  overflow hidden
                  color #333
                  font-family PingFangSC-Medium
                  font-size .37333rem
                  line-height .45333rem
                  margin-bottom .04rem
                div
                  span
                    font-size .32rem
                    .price
                      color #7F7F7F

                  .new
                    display inline-block
                    width .85333rem
                    height .42667rem
                    color #fff
                    line-height .42667rem
                    text-align center
                    background #CBB693
                    border-radius .05333rem
                    margin-left .13333rem
      /*类目制造商直供*/
      .categoryHotSellModule
        padding-top rem(20)
        padding-bottom rem(20)
        height rem(676)
        background-color #ededed
        .module
          padding-left rem(30)
          height rem(696)
          background-color #ffffff
          .moduleTitle
            height rem(90)
            line-height rem(90)
            font-family PingFangSC-Regular
            font-size .42667rem
            .more
              float right
              padding-right rem(24)
          .line1
            .item-big
              width rem(340)
              height rem(200)
              float left
              border-radius .05333rem
              margin 0 .13333rem .13333rem 0
              position relative
              &.item1
                background-color #F9F3E4
              div
                .name
                  position relative
                  padding-left .32rem
                  color #333
                  font-family PingFangSC-Medium
                  font-size .37333rem
                  margin-top: .88rem
                  z-index 5
                .txt
                  display inline-block
                  position relative
                  &.txt:before
                    content ''
                    position absolute
                    left 0
                    bottom -.21333rem
                    width rem(48)
                    height rem(4)
                    background rgba(23, 10, 23, 0.86)
              .imgWrap
                position absolute
                right: 0
                top: 0
                width: 2.66667rem
                height: 2.66667rem
                .m-lazyload
                  width 100%
                .img
                  width 100%

          .line2
            .item
              width rem(165)
              height rem(180)
              display block
              float left
              border-radius .05333rem
              background-color #F5F5F5
              margin 0 .13333rem .13333rem 0
              .name
                margin-top .13333rem
                text-align center
                font-size .32rem
                color #333
                font-family PingFangSC-Medium
              .imgWrap
                width rem(120)
                height rem(120)
                margin .02667rem 0 0 .30667rem
                .img
                  width 100%
                  height auto
      /*人气推荐*/
      .popularItemModule
        padding-top rem(20)
        padding-bottom rem(20)
        height rem(768)
        background-color #ededed
        .module
          padding-left rem(30)
          height rem(788)
          background-color #ffffff
          .moduleTitle
            height rem(90)
            line-height rem(90)
            font-family PingFangSC-Regular
            font-size .42667rem
            .more
              float right
              padding-right rem(24)
          .spItem
            float left
            width rem(690)
            height (280)
            background-color #FEF0DF
            .wraper
              float left
              width rem(280)
              height rem(280)
              background: url(https://yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png)
              background-size: 100% 100%
              margin-right: .4rem
              img
                width 100%
                height auto
            .right
              float left
              width rem(350)
              height rem(162)
              margin-top rem(60)
              margin-left .13333rem
              .tagWraper
                .text
                  padding 0 .10667rem
                  line-height .37333rem
                  color #B4282D
                  background rgba(255,255,255,.9)
                  border 1px solid #B4282D
                  border-radius .02667rem
                  font-size .26667rem
              .name
                font-family PingFangSC-Regular
                font-size .37333rem
                width 100%
                margin-top rem(15)
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                color black
              .desc
                margin-top rem(10)
                font-size .32rem
                color #7F7F7F
                width 100%
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
              .price
                margin-top rem(6)
                span
                  margin-left 0
                  font-size .37333rem
                  color #b4282d
                  font-weight bolder
          .line2
            margin-top rem(300)
            .list
              display flex
              position relative
              overflow hidden
              padding-left 0
              .item
                width rem(216)
                height rem(354)
                margin-right rem(20)
                .good
                  width 100%
                  height rem(337)
                  .hd
                    background-color #f4f4f4
                    img
                      width 100%
                  .name
                    padding-top rem(15)
                    .text
                      display block
                      width 100%
                      height rem(72)
                      font-size .32rem
                      overflow visible
                      white-space normal
                      margin-bottom .05333rem
                  .tagWraper
                    width 100%
                    z-index 1
                    margin 0 0 .05333rem -.16rem
                    overflow hidden
                    padding-left 0
                    .status
                      margin-bottom .06667rem
                      padding 0 .16rem
                      margin-left rem(14)
                      line-height .42667rem
                      height .42667rem
                      text-align center
                      color #CE2424
                      background rgba(255,255,255,.9)
                      border 1px solid #CE2424
                      font-size .26667rem
                      border-radius .18667rem
                      display inline-block

      /*限时购*/
      .flashSaleModule
        padding-top rem(20)
        padding-bottom rem(20)
        height rem(676)
        background-color #ededed
        .module
          padding-left rem(30)
          height rem(696)
          background-color #ffffff
          .moduleTitle
            position relative
            height rem(90)
            line-height rem(90)
            font-family PingFangSC-Regular
            font-size .42667rem
            .more
              float right
              padding-right rem(24)
            .time
              position absolute
              /*left rem(100)*/
              display inline-block
              top rem(25)
              width rem(260)
              color #fff
              font-size 12px
              text-align center
              background red
              /*.item
                background-color #1989fa
                margin-left rem(10)*/
          .cnt
            height rem(600)
            .item
              display inline-block
              width rem(216)
              height rem(299)
              margin-right rem(13)
              .imgWrap
                width rem(216)
                height rem(216)
                background-color #F5F5F5
                img
                  width 100%
              .price
                padding-left .26667rem
                .current-price
                  font-size .37333rem
                  color #b4282d
                  margin-right .16rem
                .retail-price
                  font-size .32rem
                  color #7F7F7F
                  text-decoration line-through
      /*新品首发*/
      .newItemModule
        padding-top rem(20)
        padding-bottom rem(20)
        height rem(784)
        background-color #ededed
        .module
          padding-left rem(30)
          height rem(804)
          background-color #ffffff
          .moduleTitle
            height rem(90)
            line-height rem(90)
            font-family PingFangSC-Regular
            font-size .42667rem
            .more
              float right
              padding-right rem(24)
          .line2
            .list
              display flex
              flex-wrap wrap
              position relative
              overflow hidden
              padding-left 0
              .item
                width rem(216)
                height rem(354)
                margin-right rem(20)
                .good
                  width 100%
                  height rem(337)
                  .hd
                    background-color #f4f4f4
                    img
                      width 100%
                  .name
                    padding-top rem(15)
                    .text
                      display block
                      width 100%
                      height rem(72)
                      font-size .32rem
                      overflow visible
                      white-space normal
                      line-height rem(27)
                  .tagWraper
                    width 100%
                    z-index 1
                    margin 0 0 .05333rem -.16rem
                    overflow hidden
                    padding-left 0
                    .status
                      padding 0 .16rem
                      margin-left rem(14)
                      line-height .42667rem
                      height .42667rem
                      text-align center
                      color #CE2424
                      background rgba(255,255,255,.9)
                      border 1px solid #CE2424
                      font-size .26667rem
                      border-radius .18667rem
                      display inline-block
      /*超值专区*/
      .LightShoppingGuideModule
        padding-top rem(20)
        padding-bottom rem(20)
        height rem(646)
        background-color #ededed
        .module
          height rem(646)
          background-color #ffffff
          .list
            padding-top rem(40)
            height rem(554)
            width rem(700)
            margin-left rem(30)
            .item
              display flex
              flex-wrap wrap
              height 100%
              width  100%
              border-radius .05333rem
              .cnt
                margin-right rem(6)
                margin-top rem(6)
                height rem(264)
                width  rem(344)
                padding-top .30667rem
                background-color #F5F5F5
                .title
                  padding-left rem(35)
                  font-size .42667rem
                  font-family PingFangSC-Medium
                  color #333333
                .price
                  padding-top rem(10)
                  padding-left rem(35)
                  font-size .32rem
                  color #7F7F7F
                .picList
                  img
                    width rem(150)
                    height rem(150)
                    float left
                    margin-left .09333rem

      .footer
        height rem(245)
        background-color #414141
        .footer-main
          height rem(244)
          text-align center
          padding .72rem .26667rem .37333rem
          margin-right auto
          margin-left auto
          .bd
            height rem(62)
            margin-bottom .48rem
            a
              display inline-block
              border 1px solid #ffffff
              width rem(172)
              height rem(62)
              font-size .32rem
              color #ffffff
              line-height rem(62)
              margin-right rem(20)
          .copyright
            width rem(710)
            height rem(64)
            margin-top rem(20)
            color #999
            span
              font-size .32rem
</style>
