import { createStore } from 'vuex'

export default createStore({
  state: {
    adminInfo: {
      id: 0,
      account: '',
      password: '',
      token: '',
      remember: false
    }
  }
})