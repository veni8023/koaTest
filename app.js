/*
 * @Author: veni
 * @Date: 2019-10-16 11:05:17
 * @LastEditors: veni
 * @LastEditTime: 2019-10-16 14:36:13
 * @Description: 
 */
const koa = require ('koa') ;
const app = new koa () ;

//  这是因为在 3000 端口下启动服务器进行访问时并没有对 HTTP 请求进行响应处理，故而报“Not Found，错误。
// 为了让浏览器显示一些信息，代码还需要调整。 修改 app.js，加入一个简单的中间件处理所有请求
app.use(async (ctx, next) => {
    await next(); 
    ctx.response.type = 'text/html'; 
    ctx.response.body ='<hl>Hello World</ hl>';
}); 

 app.listen(8888, () => { 
     console.log ('server is running at http://localhost:8888'); 
 })

