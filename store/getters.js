export default {
  siteInfo: state => {
    return state.site
  },
  socialInfo: state => {
    return state.socials
  },
  getDisclaimer: state => {
    return state.documents.disclaimer
  },
  getPrivacyPolicy: state => {
    return state.documents.privacy
  },
  getTermsConditions: state => {
    return state.documents.terms
  }
}
