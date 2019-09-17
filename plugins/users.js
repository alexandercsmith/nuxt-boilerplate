export default ({ $axios }, inject) => {
  inject('registerUser', user => {
    return $axios.$post(`${process.env.apiUrl}/register`, {
      name: user.name,
      email: user.email,
      password: user.password
    })
  })
}
