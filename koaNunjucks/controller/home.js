/*
 * @Author: veni
 * @Date: 2019-11-07 17:16:33
 * @LastEditors: veni
 * @LastEditTime: 2019-11-12 16:06:41
 * @Description: 路由请求对应的处理函数。
 */
const HomeService = require('../service/home')

module.exports = {
  index: async(ctx, next) => {
    await ctx.render("home/index", {title: "公牛集团欢迎您"})
  },
  home: async(ctx, next) => {
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.response.body = '<h1>HOME page</h1>'
  },
  homeParams: async(ctx, next) => {
    console.log(ctx.params)
    ctx.response.body = '<h1>HOME page /:id/:name</h1>'
  },
  login: async(ctx, next) => {
    await ctx.render('home/login', {
      btnName: 'GoGoGo'
    })
  },
  register: async(ctx, next) => {
    let params = ctx.request.body
    let name = params.name
    let password = params.password
    let res = await HomeService.register(name,password)
    if(res.status == "-1"){
      await ctx.render("home/login", res.data)
    }else{
      ctx.state.title = "个人中心"
      await ctx.render("home/success", res.data)
    }
  }
}