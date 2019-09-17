export default {
  SET_DISCLAIMER: (state, payload) => {
    state.documents.disclaimer = payload
  },
  SET_TERMS_CONDITIONS: (state, payload) => {
    state.documents.terms = payload
  },
  SET_PRIVACY_POLICY: (state, payload) => {
    state.documents.privacy = payload
  }
}
