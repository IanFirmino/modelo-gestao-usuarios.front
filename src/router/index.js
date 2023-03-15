import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import RecoverPasswordView from '../views/RecoverPasswordView.vue'

const routes = [
  {
    path: '/',
    name: 'LoginVue',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegisterVue',
    component: RegisterView
  },
  {
    path: '/recoverPassword',
    name: 'RecoverPassowordVue',
    component: RecoverPasswordView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
