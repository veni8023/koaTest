/*
 * @Author: veni
 * @Date: 2019-10-16 15:09:03
 * @LastEditors: veni
 * @LastEditTime: 2019-11-01 12:20:30
 * @Description:  koa-static 是专门用于加载静态资源的中间件,通过它可以为页面请求加载 css、JavaScript 等静态资源，
 *                koa-views 用于加载 HTML 模板文件
 */
const koa = require ('koa');
const views = require ('koa-views');
const path = require ('path');
const bodyParser = require ('koa-bodyparser');
const static = require ('koa-static');
const Router = require ('koa-router');
const app = new koa ();
const router = new Router ();

app. use (views(__dirname +'/views/koaView')) 

app.use(static(
    path.join(__dirname, '/public'),{    //静态文件所在目录
        maxage: 30*24*60*60*1000        //指定静态资源在浏览器中的缓存时间
    }
));

router. get ('/', async(ctx, next) => {
     await ctx. render ('index')
})

router. post ('/', async(ctx, next) => {
    let postData = ctx.request.body ;
    ctx.body = postData 
})


app
.use (bodyParser()) // 加载 koa-bodyparser 中间件 
.use (router.routes ()) // 加载 koa-router 中间件 
.use (router.allowedMethods ())  ;  // 对异常状态码的处理

app.listen(8000,()=>{
    console.log('server is starting at port 8000');
})
   