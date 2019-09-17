export default {
  siteInfo: state => {
    return state.site
  },
  socialInfo: state => {
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
