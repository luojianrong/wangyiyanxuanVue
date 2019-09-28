import Home from 'pages/Home';  //首页
import Cart from 'pages/Cart';  //购物车
import Categories from 'pages/Categories';  //分类
import Manage from 'pages/Manage';  //识物
import Personal from 'pages/Personal'; //个人中心

export default [
  {path:'/Home',component:Home,meta:{isShow:true}},
  {path:'/Cart',component:Cart,meta:{isShow:true}},
  {path:'/Categories',component:Categories,meta:{isShow:true}},
  {path:'/Manage',component:Manage,meta:{isShow:true}},
  {path:'/Personal',component:Personal},
  {path:'',redirect:"/Home"},
]
