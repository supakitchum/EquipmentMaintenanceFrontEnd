import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('usertoken') || '',
        base_api: 'http://localhost:3000/api/v1',
        user: {}
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
})
