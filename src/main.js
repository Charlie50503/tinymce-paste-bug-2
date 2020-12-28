/*
 * @Descripttion:
 * @version: 1.1
 * @Author: Ko Kanei
 * @Date: 2020-12-15 03:00:56
 * @LastEditors: Ko Kanei
 * @LastEditTime: 2020-12-28 14:41:23
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
