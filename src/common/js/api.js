import fetch from './fetch'

// 通过手机登录
export function loginByPhone (phone, password) {
  let user = fetch('/login/cellphone', {
    phone,
    password
  })
  return user
}
