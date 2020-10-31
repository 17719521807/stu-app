import axios from "axios"
import Vue from 'vue'
Vue.prototype.axios = axios;
axios.defaults.baseURL = "https://open.duyiedu.com";
axios.interceptors.response.use(res => {
    return res.data;
})