/*
 * @Author: veni
 * @Date: 2019-10-23 16:53:35
 * @LastEditors: veni
 * @LastEditTime: 2019-10-24 15:39:38
 * @Description: 不使用koa-router，自己去处理路由
 */
const Koa = require('koa');
const app = new Koa();
const Router = require ('koa-router') ;
const router = new Router() ;


// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/') {
//         ctx.response.body = '<h1>index page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/home') {
//         ctx.response.body = '<h1>home page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/404') {
//         ctx.response.body = '<h1>404 Not Found</h1>';
//     } else {
//         await next();
//     }
// });

router
  .get('/', async (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .get('/:name/:age', function (ctx, next) {
    console.log(ctx.params);
    ctx.body = ctx.params;
    // => { category: 'programming', title: 'how-to-node' } 
  })
  .post('/users', async (ctx, next) => {
    // ... 
  })
  .put('/users/:id', async (ctx, next) => {
    // ... 
  })
  .del('/users/:id', async (ctx, next) => {
    // ... 
  })
  .all('/users/:id', async (ctx, next) => {
    // ... 
  });
  
  app.use (router.routes ()) // 加载 koa-router 中间件 


app.listen(8888, ()=>{
  console.log('server is running at http://localhost:8888')
})