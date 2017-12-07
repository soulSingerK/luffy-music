import fetch from './fetch'
// 获取精品歌单
export function getHighList (limit = 20) {
  return fetch('/top/playlist/highquality', {
    limit
  })
}

// 获取歌单详情
export function getListDetail (id) {
  return fetch('/playlist/detail', {
    id
  })
}
