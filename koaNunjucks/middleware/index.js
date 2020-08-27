/*
 * @Author: veni
 * @Date: 2019-11-12 16:03:09
 * @LastEditors: veni
 * @LastEditTime: 2019-11-12 16:05:47
 * @Description: 集中管理项 目中用到的所有中间件，包括自定义中间件
 */

const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')

const miSend = require('./mi-send')
module.exports = (app) => {
  app.use(staticFiles(path.resolve(__dirname, "../public")))

  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }));

  app.use(bodyParser())
  app.use(miSend())
}