const apiObj = {
  //获取一次性短信验证码
  sendcode:{
    url:'/sendcode',
    method:'get',
    corsUrl:"/4000"
  },
  //短信验证码登录
  loginSns:{
    url: "/login_sms",
    method:"post",
    corsUrl:"/4000"
  }
}

export default apiObj;
