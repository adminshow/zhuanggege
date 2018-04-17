import Home from './../views/Home'
import Manage from './../views/Manage'
import Center from './../views/Center'
import Box from './../views/Box'
import Plan from './../views/Plan'
import Creative from './../views/Creative'
import Unit from './../views/Unit'
import New from './../views/New'
import Login from './../views/Login'
import Choose from './../views/Choose'
import Jiben from './../views/Jiben'
import Chu from './../views/Chu'
import Chuang from './../views/Chuang'
import Luo from './../views/Luo'
import Ding from './../views/Ding'
import Wei from './../views/Wei'

let routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'new',
    path: '/new',
    component: New,
    children: [
      {
        name: 'choose',
        path: '/new/choose',
        component: Choose
      },
      {
        name: 'jiben',
        path: '/new/jiben',
        component: Jiben
      },
      {
        name: 'ding',
        path: '/new/ding',
        component: Ding
      },
      {
        name: 'Wei',
        path: '/new/Wei',
        component: Wei
      },
      {
        name: 'chu',
        path: '/new/chu',
        component: Chu
      },
      {
        name: 'luo',
        path: '/new/luo',
        component: Luo
      },
      {
        name: 'chuang',
        path: '/new/chuang',
        component: Chuang
      }
    ]
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'plan',
    path: '/plan',
    component: Plan
  },
  {
    name: 'unit',
    path: '/unit',
    component: Unit
  },
  {
    name: 'creative',
    path: '/creative',
    component: Creative
  },
  {
    name: 'manage',
    path: '/manage',
    component: Manage
  },
  {
    name: 'center',
    path: '/center',
    component: Center
  },
  {
    name: 'box',
    path: '/box',
    component: Box
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  }
]

export default routes
