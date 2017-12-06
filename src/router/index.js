import Vue from 'vue'
import Router from 'vue-router'
const findMusic = (resolve) => {
  import('components/find-music/find-music').then((module) => {
    resolve(module)
  })
}
const Login = (resolve) => {
  import('components/login/login').then((module) => {
    resolve(module)
  })
}

const MyMusic = (resolve) => {
  import('components/my-music/my-music').then((module) => {
    resolve(module)
  })
}

const Friends = (resolve) => {
  import('components/friends/friends').then((module) => {
    resolve(module)
  })
}
const User = (resolve) => {
  import('components/user/user').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/find-music'
    },
    {
      path: '/find-music',
      component: findMusic
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/myMusic',
      component: MyMusic
    },
    {
      path: '/friend',
      component: Friends
    },
    {
      path: '/user',
      component: User
    }
  ]
})
