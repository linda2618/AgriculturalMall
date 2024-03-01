import { createStore } from 'vuex'

export default createStore({
    state: {
      id: 0,
      account: '',
      password: '',
      token: '',
      remember: false
    }
})