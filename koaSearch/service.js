/*
 * @Author: veni
 * @Date: 2019-11-01 11:25:58
 * @LastEditors: veni
 * @LastEditTime: 2019-11-05 10:49:52
 * @Description: 请求数据
 */
const http = require('http') // 提供 HTTP 操作的底层功能
const Querystring = require ('querystring') // querystring 用于解析与格式化 URL 查询字符串


module.exports = { 
    search:async(kw='')=>{
         return new Promise ((resolve, reject) => {  // 创建一个 Promise 实例并返回，用 以处理异步搜索电影列表信息请求
             http.request ({  // 调用 http 模块的 request 方法， 请求远端服务获取影片信息。
                 hostname:'m.maoyan.com', 
                 path: '/ajax/search?' + Querystring. stringify({
                     kw,
                     cityId:10
                 })
             },(res)=>{
                 res .setEncoding('utf8');
                 let data=[];
                 res.on('data',(chunk)=>{
                     data.push(chunk)
                 }).on('end',()=>{
                     resolve(data.join(''))  // 调用函数 resolve，并传入请求成功的数据内容。
                 })
             }).end();
         })
     }
 } 