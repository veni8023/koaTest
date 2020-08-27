/*
 * @Author: veni
 * @Date: 2019-10-16 15:09:03
 * @LastEditors: veni
 * @LastEditTime: 2019-10-17 17:31:23
 * @Description: 使用 koa-bodyparser 中间件解析 POST 请求参数
 */
const koa = require ('koa') ;
const app = new koa () ;
const bodyParser = require ( 'koa-bodyparser' ) ;
const Router = require ('koa-router') ;
const router = new Router() ;
router. get ('/', (ctx, next) => { 
    ctx. type = 'html'; 
    let html =`
    <hl>登录</hl>
    <form method='POST' action='/'>
        <p>用户名</p><input name='userName' /><br/>
        <p>用户名</p><input name='password' type='password'/><br/>
        <button type='submit' >submit</button>
    </form> 
    ` 
     ctx.body = html;
})
router .post ('/',(ctx, next) => {
    let postData = ctx.request.body 
    ctx.body = postData 
})

app
.use (bodyParser()) // 加载 koa-bodyparser 中间件 
.use (router.routes ()) // 加载 koa-router 中间件 
.use (router.allowedMethods ())  ;  // 对异常状态码的处

app.listen(8888 )
   