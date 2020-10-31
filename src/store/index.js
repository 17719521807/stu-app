import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        show: 'stuList',
        username: false,
        stuList: []
    },
    mutations: {
        commitShow(state, paload) {
            state.show = paload.show;
        },
        commitUsername(state, paload) {
            state.username = paload.username;
        },
        commitStuList(state, paload) {
            state.stuList = paload.stuList;
        }
    },
    actions: {},
    modules: {}
})