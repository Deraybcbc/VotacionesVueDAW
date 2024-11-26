import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    loginInfo: {
      loggedIn: false,
      username: '',
      password: ''
    },
  }),
  actions: {
    // Actions
    setLoginInfo(data) {
      this.loginInfo.loggedIn = data.loggedIn
      this.loginInfo.username = data.name
      this.loginInfo.password = data.password
    },

    isLoggedIn() {
      return this.loginInfo.loggedIn;
    },
    getLoginInfo() {
      return this.loginInfo;
    },
  },

})
