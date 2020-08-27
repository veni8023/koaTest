/*
 * @Author: veni
 * @Date: 2019-10-23 16:53:35
 * @LastEditors: veni
 * @LastEditTime: 2019-11-01 09:55:45
 * @Description: querystring
 */
const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

//  http://localhost:8888/home?id= 12&name=gn
router.get('/home', async(ctx, next) => {
  console.log(ctx.request.query)  // query 对象 { id: ' 12', name: 'gn' }
  console.log(ctx.request.querystring) // querystring字符串  id=%2012&name=gn
  ctx.response.body = '<h1>HOME page</h1>'
})

//  http://localhost:8888/home/12/gn
router.get('/home/:id/:name', async(ctx, next)=>{
  console.log(ctx.params)
  const {id,name}=ctx.params;
  ctx.response.body = `<h1>HOME page /${id}/${name}</h1>`
})

app.use(router.routes())

app.listen(8888, () => {
  console.log('server is running at http://localhost:8888')
})