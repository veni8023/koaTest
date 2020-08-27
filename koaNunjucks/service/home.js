/*
 * @Author: veni
 * @Date: 2019-11-07 17:16:33
 * @LastEditors: veni
 * @LastEditTime: 2019-11-12 16:07:16
 * @Description: 提供 controller 逻辑中需要用到的底层数据。
 */
module.exports = {
  register: async function(name, pwd) {
    let data 
    if(name == 'admin' && pwd == '123456'){
      data = {
        status: 0,
        data: {
          title: "个人中心",
          content: "欢迎进入个人中心"
        }
      }
    }else{
      data = {
        status: -1,
        data: {
          title: '登录失败',
          content: "请输入正确的账号信息"
        }
      }
    }
    return data
  }
}