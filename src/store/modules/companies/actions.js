import axios from 'axios'
// import { API_VERSION, URI_BASE_API } from '../../../configs/api'
import { API_VERSION } from '@/configs/api'
const RESOURCE = 'tenants'


export default {
    getCompanies({ commit }) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando as empresas')

        setTimeout(() => {
            return axios.get(`${API_VERSION}/${RESOURCE}`)
                .then(response => {
                    commit('SET_COMPANIES', response.data)
                })
                .finally(() => commit('SET_PRELOADER', false))
        }, 3000)
    },

    getCategoriesByCompany({ commit }, token_company) {

        const params = { token_company }

        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando as categorias')
        return axios.get(`${API_VERSION}/categories`, { params })
            .then(response => {
                commit('SET_CATEGORIES_COMPANY', response.data)
            })
            .finally(() => commit('SET_PRELOADER', false));
    }
}

