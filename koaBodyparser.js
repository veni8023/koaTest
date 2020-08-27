/*
 * @Author: veni
 * @Date: 2019-10-16 15:09:03
 * @LastEditors: veni
 * @LastEditTime: 2019-10-16 15:54:07
 * @Description: 使用 koa-bodyparser 中间件解析 POST 请求参数
 */
const koa = require ('koa') ;
const app = new koa () ;
const bodyParser = require ( 'koa-bodyparser' ) ;
app.use (bodyParser()) ;  // 加载 koa-bodyparser
app.use (async (ctx) => { 
    if (ctx.url === '/'&& ctx.method === 'GET'){   // 当 GET 请求时返回表单页面 
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
    } else if (ctx.url === '/'&& ctx.method === 'POST'){  
        // 当 POST 请求时，中间件 koa-bodyparser 解析 POST 表单里的数据
        let postData = ctx.request.body 
         ctx.body = postData 
         } 
})
app.listen(8888, () => { 
    console.log ('server is running at http://localhost:8888'); 
})
   