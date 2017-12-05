import Vue from 'vue'
import Router from 'vue-router'
const Main = (resolve) => {
  import('components/main/main').then((module) => {
    resolve(module)
  })
}
const Login = (resolve) => {
  import('components/login/login').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
