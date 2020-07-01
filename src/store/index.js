import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productModalStatus: false,
        productAddModalStatus: false,
    },
    mutations: {
        cancelModal(state, toggle) {
            state.productModalStatus = toggle;
        },
        
        cancelAddModal(state, toggle) {
            state.productAddModalStatus = toggle;
        }
    },
    actions: {
    },
    modules: {
    }
})
