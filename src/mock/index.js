import Mock from "mockjs"
import category from "./category.json"
import homeData from "./homeData.json"


Mock.mock("/category",{errno:0,data:category})  //当前分类列表：推荐专区
Mock.mock("/homeData",{errno:0,data:homeData})  //获取首页数据


