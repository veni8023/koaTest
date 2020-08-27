/*
 * @Author: veni
 * @Date: 2019-11-07 17:16:33
 * @LastEditors: veni
 * @LastEditTime: 2019-11-18 17:12:07
 * @Description: 项目入口文件。
 */
const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const middleware = require('./middleware')

middleware(app)
router(app)
app.listen(8888, () => {
  console.log('server is running at http://localhost:8888')
})