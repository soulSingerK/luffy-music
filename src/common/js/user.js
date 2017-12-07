import fetch from './fetch'
let timestamp = Date.now()

// 通过手机登录
export function loginByPhone (phone, password) {
  let user = fetch('/login/cellphone', {
    phone,
    password,
    timestamp
  })
  return user
}

// 获取个人信息
export function getUserInfo (uid) {
  let user = fetch('/user/detail', {uid, timestamp})
  return user
}

// 获取用户歌单
export function getSongList (uid) {
  return fetch('/user/playlist', {uid, timestamp})
}

// 获取用户电台
export function getUserDj (uid) {
  return fetch('/user/dj', {uid, timestamp})
}

// 获取用户关注列表
export function getUserFollows (uid, limit = 30, offset = 0) {
  return fetch('/user/follows', {
    uid,
    limit,
    offset,
    timestamp
  })
}

// 获取用户粉丝列表
export function getUserFolloweds (uid) {
  return fetch('/user/followeds', {
    uid,
    timestamp
  })
}

// 获取用户动态
export function getUserEvent (uid) {
  return fetch('/user/event', {
    uid,
    timestamp
  })
}

// 获取用户播放记录
// type=1时只返回weekData, type=0时返回allData
export function getUserRecord (uid, type = 1) {
  return fetch('/user/record', {
    uid,
    type,
    timestamp
  })
}
