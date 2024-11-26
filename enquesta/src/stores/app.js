import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const loginInfo = ref({
    loggedIn: false,
    username: '',
    image: '',
    
  })

  const infoVotos = ref({
    votos: [],
  })

  // Actions

  const setLoginInfo = ({ loggedIn, username, image }) => {
    loginInfo.value.loggedIn = loggedIn
    loginInfo.value.username = username
    loginInfo.value.image = image
  }

  const setVotos = (votos) => {
    infoVotos.value.votos = votos
  }

  const getVotos = () => {
    return infoVotos.value.votos
  }

  const isLoggedIn = computed(() => loginInfo.value.loggedIn)
  const getLoginInfo = computed(() => loginInfo.value)

  // Expose state and actions

  return {
    loginInfo,
    infoVotos,
    setLoginInfo,
    setVotos,
    getVotos,
    isLoggedIn,
    getLoginInfo,
  }
})
