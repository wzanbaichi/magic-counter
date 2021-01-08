/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 *
 * @param {String} str
 * @return {Boolean}
 * @description 密码校验规则
 */
export function validPassword(str) {
  const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/ // 必须包含大写+小写+数字
  if (reg.test(str)) {
    return true
  }
  return false
}

/**
 * @param {Number} str
 * @returns {Boolean}
 */

// export function validIdNumber(num) {
//   // 一代身份证15位
//   // const reg1 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/
//   // if (num.length === 15 && reg1.test(num)) {
//   //   return true
//   // }
//   // 二代身份证18位
//   const reg2 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
//   if (num.length === 18 && reg2.test(num)) {
//     return true
//   }
//   return false
// }
