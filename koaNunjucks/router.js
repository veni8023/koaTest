/*
 * @Author: veni
 * @Date: 2019-11-07 17:16:33
 * @LastEditors: veni
 * @LastEditTime: 2019-11-12 16:07:00
 * @Description: 注册项目中所有的路由。
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
     .use(router.allowedMethods())
}