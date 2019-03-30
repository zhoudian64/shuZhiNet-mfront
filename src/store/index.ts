import Vue from 'vue'
import Vuex from 'vuex'
import student from './module/student/index'
import activity from './module/activity/index'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        student,
        activity
    }
})
