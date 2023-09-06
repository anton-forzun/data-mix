import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    username: '',
    password: ''
    
  }),
  actions: {
    login(username: string, password: string) {
      if (username === 'test@gmail.com' && password === 'testtest') {
        this.isAuthenticated = true
        this.username = username
        this.password = password
      } else {
        throw new Error('Неправильний логін або пароль')
      }
    },
    logout() {
      this.isAuthenticated = false
      this.username = ''
      this.password = ''
    },
  },
})
