//处理请求的工具，统一请求的格式
export default  (apiObjs,axiosInsatnce) => {
  const Http ={}
  for (let name in apiObjs) {
    let {url,method,isForm,corsUrl,needToken} = apiObjs[name]
    //遍历apiObjs中所有的请求，将请求的的信息转换为请求方法
    Http[name] = async (data,config={})=>{
      //请求携带数据的转换
      let transformData = {}
      if(data&&isForm){
        transformData = new FormData()
        for (let key in data){
          transformData.append(key,data[key])
        }
      }else{
        transformData = data
      }
      //根据corsUrl判断是否需要跨域
      if (corsUrl){
        url = corsUrl+url;
        corsUrl = '';
      }

      //根据不同的请求方法处理请求
      let res = null;
      if (method === "get" || method === "delete"){
        //处理参数，统一参数格式（参数可能直接拼接在地址上，也可能在params参数上，可能是字符串，也可能是对象）
        transformData = (typeof transformData) !== "object" ? {} : transformData;
        config.params = (typeof config.params) !== "object" ? {} : config.params;
        let params = Object.assign(transformData,config.params);
        try{
          config = Object.assign(config,{url, method, params,headers:{needToken}});
          res = await axiosInsatnce(config)
          res = Promise.resolve(res)
        }catch (e) {
          res = Promise.reject(e)
        }
      }else if(method === "post" || method === "put"){
        try{
          config = Object.assign(config,{url, method, data:transformData,headers:{needToken}})
          res = await axiosInsatnce(config)
          res = Promise.resolve(res)
        }catch (e) {
          res = Promise.reject(e)
        }
      }

      return res;
    }
  }
  return Http;
}
