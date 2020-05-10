import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import details from '../components/details/details'
import login from '../components/login/login'
import total from '../components/total/total'
import myself from '../components/myself/myself'
import coute from '../components/myself/user_center/coute'
import user_center from '../components/myself/user_center/user_center'
import get_adress from '../components/myself/count_center/g_adress'
import count_center from '../components/myself/count_center/count_center'
import user_news from '../components/myself/count_center/user_news'
import user_message from '../components/myself/count_center/user_message'
import login_post from '../components/login/lg_post/lg_post'

Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/total/:id',
      name: 'total',
      component: total
    },
    {
      path: '/login_post',
      name: 'login_post',
      component: login_post
    },
    {
      path: '/myself',
      name: 'myself',
      component: myself,
      children: [
        {
          path: '',
          component: user_center
        },
        {
          path: 'user_center',
          name: 'user_center',
          component: user_center
        },
        {
          path: 'count_center',
          name: 'count_center',
          component: count_center
        },
        {
          path: 'coute',
          name: 'coute',
          component: coute
        },
        {
          path: 'user_news',
          name: 'user_news',
          component: user_news
        },
        {
          path: 'user_message',
          name: 'user_message',
          component: user_message
        },
        {
          path: 'get_adress',
          name: 'get_adress',
          component: get_adress
        }
      ]
    }
  ]
})
