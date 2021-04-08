import axios from 'axios'
// import { API_VERSION, URI_BASE_API } from '../../../configs/api'
import { API_VERSION } from '@/configs/api'
const RESOURCE = 'tenants'


export default {
    getCompanies({ commit }) {
        return axios.get(`${API_VERSION}/${RESOURCE}`)
            .then(response => {
                commit('SET_COMPANY', response.data)
            })
    }
}

