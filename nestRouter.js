/*
 * @Author: veni
 * @Date: 2019-10-16 15:09:03
 * @LastEditors: veni
 * @LastEditTime: 2019-11-15 15:54:08
 * @Description: 嵌套路由
 */
const koa = require ('koa') ;
const app = new koa () ;
const Router = require ('koa-router') ;

var forums = new Router();
var posts = new Router();

posts.get('/', function (ctx, next) {
    ctx.body=`根目录：${ctx.request.url}`
});
posts.get('/:pid', function (ctx, next) {
    ctx.body=ctx.request.url

});
forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());

// 可以匹配到的路由为 "/forums/123/posts" 或者 "/forums/123/posts/456"
app.use(forums.routes());

app.listen(8888, ()=>{
    console.log('server is running at http://localhost:8888')
  })
   