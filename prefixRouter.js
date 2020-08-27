/*
 * @Author: veni
 * @Date: 2019-10-16 15:09:03
 * @LastEditors: veni
 * @LastEditTime: 2019-10-24 16:20:17
 * @Description: 路由前缀
 */
const koa = require ('koa') ;
const app = new koa () ;
const Router = require ('koa-router') ;

var router = new Router({
    prefix: '/users'
  });
  
router.get('/', function (ctx, next) {
    ctx.body='users'
});
router.get('/:pid', function (ctx, next) {
    ctx.body='users/pid'

});

app.use (router.routes ());

app.listen(8888 )
   