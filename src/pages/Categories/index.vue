<template>
  <div class="wrapper">
    <div class="wrapper-main">
      <div class="hdWraper">
        <div class="head-main">
          <div class="head-search">
            <i class="iconfont iconsousuo"></i>
            <span class="placeholder">搜索商品, 共23054款好物</span>
          </div>
        </div>
      </div>
      <div class="cateContainer">
        <div class="left-list" ref="leftList">
          <ul class="list">
            <li class="item"
                v-for="category in categoryL1List"
                @click="getCategory(category.showIndex)"
                :class="{active:category.showIndex===index}"
            >{{category.name}}</li>
          </ul>
        </div>
        <div class="right-list">
          <CtergoryList :currentCategory="currentCategory"></CtergoryList>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CtergoryList from 'components/CtergoryList/CtargoryList.vue'
  import BScroll from 'better-scroll'
  import axios from 'axios';
  const OK = 200;
  export default {
    name:"Categories",
    data(){
      return {
        currentCategory:[],  //当前展示的分类列表
        categoryL1List:[],//左侧分类列表
        index:16,
      }
    },
    async mounted(){
      //获取当前的分类列表数据
      const  currentCategory =  await axios.get("/category")
      if(currentCategory.status === OK){
        const data = currentCategory.data.data;
        this.currentCategory = data.currentCategory.subCateList;
        this.categoryL1List = data.categoryL1List;
      }

      new BScroll(this.$refs.leftList)
    },
    methods:{
      //点击左侧分类列表，接收index，更改当前的index并获取对应的子分类，更新右侧的分类数据
      getCategory(index){
        this.index = index;
       const cate = this.categoryL1List.filter((item)=> item.showIndex === index )
        this.currentCategory = cate[0].subCateList;
      }
    },
    components:{
      CtergoryList
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
    width 100%
    background-color #ffffff
  .wrapper
    .wrapper-main
      .hdWraper
        position fixed
        z-index 99
        .head-main
          padding-top rem(15)
          width rem(750)
          height rem(75)
          background-color #FAFAFA
          border-1px(#ededed)
          .head-search
            margin-left rem(30)
            display flex
            align-items center
            justify-content center
            width rem(690)
            height rem(56)
            color #666
            font-size .37333rem
            background-color #ededed
            border-radius .10667rem
      .cateContainer
        display flex
        width rem(750)
        height rem(1120)
        padding-top rem(75)
        overflow hidden
        .left-list
          width rem(162)
          margin-top rem(40)
          height 100%
          .list
            height rem(1120)
            padding .23333rem 0
            .item
              width rem(162)
              height rem(95)
              text-align center
              line-height rem(95)
              position relative
              font-size rem(28)
              &.active:after
                content ' '
                position absolute
                top rem(20)
                left 0
                bottom 0
                width .08rem
                height rem(50)
                background-color #ab2b2b
              &.active
                color #ab2b2b

</style>
