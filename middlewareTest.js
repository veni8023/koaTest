/*
 * @Author: veni
 * @Date: 2019-10-16 14:58:45
 * @LastEditors: veni
 * @LastEditTime: 2019-10-16 15:06:03
 * @Description: 使用中间件获取晌应时间
 */
const koa = require ('koa') ;
const app = new koa () ;
app.use(async (ctx, next)=>{            // 记录服务器响应时间的中间件
    let stime = new Date ().getTime (); // 记录当前时间戳
    await next();                       // 事件控制权中转
    let etime = new Date().getTime();   // 所有中间件执行完成后记录当前时间
    ctx.response.type ='text/html'; 
    ctx.response.body = '<hl>Hello World</hl>';
    console.log(`请求地址：${ctx.path}，响应时间：${etime - stime}ms`)
}) 
app.use(async (ctx, next)=>{
    console.log ('中间件 doSoming');
    await next();
    console.log ('中间件 执行over');
})

app.listen(8888, () => { 
    console.log ('server is running at http://localhost:8888'); 
})