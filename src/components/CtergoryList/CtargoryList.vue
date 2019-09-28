<template>
  <div class="right-list">
    <div class="subCateList">
      <div class="subCateContainer">
        <div class="banner">
          <img src="https://yanxuan.nosdn.127.net/01467535cd09249bd5cf0ae110845892.jpg?imageView&quality=75&thumbnail=0x196" alt="">
        </div>
        <div class="cateList">
          <ul class="list">
            <li class="item" v-for="category in currentCategory">
              <div class="cateImgWrapper">
                <img :src="category.bannerUrl" alt="">
              </div>
              <span class="name">{{category.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CtargoryList",
    props:{
      currentCategory:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  rem(p)
    $rem=750/10
    return p/$rem rem

  .right-list
    .subCateList
      margin-top rem(60)
      margin-left rem(40)
      width rem(528)
      .subCateContainer
        .banner
          width rem(528)
          img
            width rem(520)
            height rem(192)
        .cateList
          .list
            display flex
            flex-wrap wrap
            .item
              display inline-block
              width rem(144)
              height rem(216)
              margin-right rem(32)
              .cateImgWrapper
                margin-top rem(20)
                width rem(144)
                height rem(140)
                img
                  width rem(144)
                  height rem(140)
              .name
                display block
                height rem(52)
                line-height rem(35)
                text-align center
                font-size .32rem
                color #333
</style>
