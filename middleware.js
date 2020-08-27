/*
 * @Author: veni
 * @Date: 2019-10-16 14:31:24
 * @LastEditors: veni
 * @LastEditTime: 2019-11-13 17:33:28
 * @Description: 中间件洋葱模型
 */
const koa = require ('koa') ;
const app = new koa () ;
const compose = require ('koa-compose') ;

// app. use (async function (ctx, next) { 
//      console.log ('one start'); 
//       await next() ; 
//       console. log ('one end ')
// } ) ; 
// app. use (async function (ctx, next) { 
//      console.log ('two start'); 
//       await next() ; 
//       console. log ('two end ') ; 
// } ) ; 
// app. use (async function (ctx, next) { 
//      console.log ('three start'); 
//       await next() ; 
//       console. log ('three end ') ; 
// } ) ; 


// 想将多个中间件组合成一个单一的中间件 
async function middleware1 (ctx, next) { 
    console.log('middleware1');
    await next() ; 
    console.log('middleware1 end');
}
async function middleware2 (ctx, next) { 
    console.log('middleware2');
    await next() ; 
    console.log('middleware2 end');
}
async function middleware3 (ctx, next) { 
    console.log('middleware3');
    await next() ; 
    console.log('middleware3 end');
}
const all = compose ( [middleware1, middleware2, middleware3]); 
app. use (all) ; 

app.listen(8888, () => { 
     console.log ('server is running at http://localhost:8888'); 
})

