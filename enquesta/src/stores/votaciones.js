import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useVotacionsStore = defineStore('votaciones', {
  state: () => ({
    infoVotos: null,
  }),
  actions: {
    setVotos(votos) {
      console.log("Pinia", votos)
      this.infoVotos = votos
    },

    getVotos() {
      return this.infoVotos
    },
  },
})
