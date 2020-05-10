// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from './http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';
import VDistpicker from 'v-distpicker';
Vue.component('v-distpicker', VDistpicker)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: '',
    user_list: [{
        id: '01',
        nike_name: "nike",
        user: '17603216696',
        psd: '123456abc',
        user_img: 'static\img\tt1.jpg',
        message:{
          name:'娜美',
          sex:"2",
          birthday:'2020-03-04',
          idcard:'470182199110101593'
        }
      },
      {
        id: '02',
        nike_name: "Tom",
        user: '17603216697',
        psd: '123456abd',
        user_img: 'static\img\tt1.jpg',
        message:{
          name:'路飞',
          sex:"1",
          birthday:'2018-03-04',
          idcard:'470182199110101593'
        }
      }
    ]
  },
  mutations: {
    countIncrease(state,id) {
      state.user_list.forEach(element => {
        if(element.id==id){
          state.user=element;
        }
      });
    }
  }
})

Vue.config.productionTip = false
Vue.use(http)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  http,
  ElementUI,
  store,
  VDistpicker,
  components: {
    App
  },
  template: '<App/>'
})
