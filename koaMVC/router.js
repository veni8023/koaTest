/*
 * @Author: veni
 * @Date: 2019-11-01 10:16:34
 * @LastEditors: veni
 * @LastEditTime: 2019-11-07 14:27:50
 * @Description:  分离 Router
 */
const router = require('koa-router')()
const HomeController = require('./controller/home')
module.exports = (app) => {
  router.get( '/', HomeController.index )
  
  router.get('/home', HomeController.home)
  
  router.get('/home/:id/:name', HomeController.homeParams)
  
  router.get('/user', HomeController.login)
  
  router.post('/user/register', HomeController.register)
  
  app.use(router.routes())
    .use(router.allowedMethods())  // 在当所有路由中间件最后调用。此时根据ctx.status设置response响应头
}