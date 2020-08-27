/*
 * @Author: veni
 * @Date: 2019-11-01 10:58:59
 * @LastEditors: veni
 * @LastEditTime: 2019-11-05 10:50:30
 * @Description: 
 */
// 引用项目依赖的模块
const Koa = require ('koa'); // Koa框架
const Router= require ('koa-router') ; // koa-router 中间件 
const Service=require('./service.js');

// 实例化对象
const app = new Koa () ; 
const router= new Router() ; 

const Render= (data= [])=>{
    if( data.movies){
        return data.movies.list.map(item=>{
            return `<div style='padding:20px'>
               <div> ${item.nm||''}</div>
               <div> ${item.cat||''} </div>
               <div> ${item.rt||''} &nbsp ${item.ver||''}</div>
               <div> ${item.star||''} &nbsp  ${item.pubDesc||''}</div>
            </div>`
        })    
    }else{
        return `<div>暂无数据</div>`
    }
}

router.get ('/', async (ctx, next) => { 
    let {kw}= ctx.query; // 获取 URL 参数 kw 的值 
    let data = await Service.search(kw); // 调用服务接口获取影片列表数据 
   ctx. body ='<div>'+Render(JSON.parse(data)).join('') +'</div>'; // 将数据渲染成对应的 HTML， 并响应返回 
}) ;

app .use (router.routes()) .listen (8888, () => {
    // 使用 koa-router 接管URL 与函数之间的映射关系
    console. log ('Server is running at http://localhost:8888/?kw=2' ) 
})
