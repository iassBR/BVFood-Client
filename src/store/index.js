import Vue from 'vue'
import Vuex from 'vuex'
import companies from './modules/companies'
import { state, mutations } from './default'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        companies
    },
    state,
    mutations
})

export default store