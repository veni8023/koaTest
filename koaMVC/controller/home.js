/*
 * @Author: veni
 * @Date: 2019-11-07 14:21:36
 * @LastEditors: veni
 * @LastEditTime: 2019-11-07 14:29:12
 * @Description: 分离 controller ( 存放响应 HTPP 请求的业务逻辑代码 )
 */
const HomeService = require('../service/home')
module.exports = {
  index: async(ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
  },
  home: async(ctx, next) => {
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.response.body = '<h1>HOME page</h1>'
  },
  homeParams: async(ctx, next) => {
    ctx.response.body = `<h1>HOME page /${ctx.params.id}/${ctx.params.name}</h1>`
  },
  login: async(ctx, next) => {
    ctx.response.body =
      `
      <form action="/user/register" method="post">
        <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
        <br/>
        <input name="password" type="text" placeholder="请输入密码：123456"/>
        <br/> 
        <button>GoGoGo</button>
      </form>
    `
  },
  register: async(ctx, next) => {
    let {
      name,
      password
    } = ctx.request.body
    let data = await HomeService.register(name, password)
    ctx.response.body = data
  }
}