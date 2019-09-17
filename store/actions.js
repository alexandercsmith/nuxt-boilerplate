export default {
  nuxtClientInit: async function({ dispatch }) {
    await dispatch('loadDocs')
    await dispatch('blog/loadArticles')
  },
  loadDocs: async function({ commit }) {
    await this.$fetchDocuments().then(res => {
      commit('SET_DISCLAIMER', res.disclaimer)
      commit('SET_PRIVACY_POLICY', res.privacy_policy)
      commit('SET_TERMS_CONDITIONS', res.terms_conditions)
    })
  }
}
