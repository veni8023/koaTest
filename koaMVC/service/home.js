/*
 * @Author: veni
 * @Date: 2019-11-07 14:21:36
 * @LastEditors: veni
 * @LastEditTime: 2019-11-07 14:29:37
 * @Description: 分离 Service
 */
module.exports = {
  register: async(name, pwd) => {
    let data 
    if (name == 'ikcamp' && pwd == '123456') {
      data = `Hello， ${name}！`
    } else {
      data = '账号信息错误'
    }
    return data;
  }
}