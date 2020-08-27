/*
 * @Author: veni
 * @Date: 2019-10-23 16:53:35
 * @LastEditors: veni
 * @LastEditTime: 2019-11-14 10:31:26
 * @Description: 多中间件路由
 */
const Koa = require('koa');
const app = new Koa();
const Router = require ('koa-router') ;
const router = new Router() ;

router.get(
    '/users/:id',
    function (ctx, next) {
        ctx.body='Hello';
        ctx.user={ id: 17, name: "Alex" };
        next();
    },
    function (ctx) {
      // 在这个中间件中再对用户信息做一些处理
      console.log(ctx.user);
    }
  );

  
  app.use (router.routes ()) // 加载 koa-router 中间件 


app.listen(8888, ()=>{
  console.log('server is running at http://localhost:8888')
})