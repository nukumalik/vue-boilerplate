import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		blogs: [
			{ title: 'A', status: 'review' },
			{ title: 'B', status: 'publish' },
			{ title: 'C', status: 'delete' }
		],
		count: 0
	},
	getters: {
		getBlogs: state => (status = 'publish') => {
			return state.blogs.filter(item => item.status === status)
		}
	},
	mutations: {
		increment(state) {
			return (state.count += 1)
		},
		decrement(state) {
			return (state.count -= 1)
		}
	},
	actions: {
		async increment({ commit }) {
			await commit('increment')
		},
		async decrement({ commit }) {
			await commit('decrement')
		}
	},
	modules: {}
})
