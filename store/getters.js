export default {
  getInfo: state => {
    return state.site
  },
  getSocials: state => {
    return state.socials
  },
  getDisclaimer: state => {
    return state.docs.disclaimer
  },
  getPrivacyPolicy: state => {
    return state.docs.privacy
  },
  getTermsConditions: state => {
    return state.docs.terms
  }
}
