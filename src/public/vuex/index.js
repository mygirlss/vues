import Vue from 'vue'
import Vuex from 'vuex'
import sloft from './modules/sloft'
Vue.use( Vuex )

const store = new Vuex.Store({
    modules:{
        sloft
    }
})

export default store;
