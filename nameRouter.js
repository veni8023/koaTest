/*
 * @Author: veni
 * @Date: 2019-10-23 16:53:35
 * @LastEditors: veni
 * @LastEditTime: 2019-10-23 17:45:21
 * @Description: 不使用koa-router，自己去处理路由
 */
const Koa = require('koa');
const app = new Koa();
const Router = require ('koa-router') ;
const router = new Router() ;

router.get('user', '/users/:id', function (ctx, next) {
    // ... 
  });

let router1=router.url('user', 3);
console.log(router1)
let router2=router.url('user', 4);
console.log(router2)

  
  app.use (router.routes ()) // 加载 koa-router 中间件 


app.listen(8888, ()=>{
  console.log('server is running at http://localhost:8888')
})