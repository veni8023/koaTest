/*
 * @Author: veni
 * @Date: 2019-11-01 10:16:34
 * @LastEditors: veni
 * @LastEditTime: 2019-11-07 17:18:12
 * @Description: 
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa() // 创建实例
const router = require('./router')

app.use(bodyParser()) //加载中间件

router(app)

app.listen(8888, () => {
  console.log('server is running at http://localhost:8888')
})