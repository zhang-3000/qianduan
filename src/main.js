import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {request} from "@/network/request";
import axios from 'axios'
//其他vue组件中就可以this.$axios调用使用
Vue.prototype.$axios = axios

Vue.use(ElementUI);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

request({
  url: '/home/multidata'
}).then(res=>{
  console.log(res);
  }).catch(err=>{
  console.log(err);
})

// axios({
//       method:'POST',
//       params:
//           {
//             username:"jinweilin",
//             password_1:"2333",
//             password_2:"2333"
//           },
//       url:'http://127.0.0.1:8000/api/houduan/register'
//     }).then(resp=>{        //改为箭头函数
//       console.log(resp.data);
//     })

axios.post('http://127.0.0.1:8000/api/houduan/register','username=jinweilin&password_1=2333&password_2=2333').then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.log(error);
});

