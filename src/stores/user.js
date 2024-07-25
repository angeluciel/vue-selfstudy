import { defineStore } from 'pinia'

export const useUserStore = defineStore('userfoda', {
  usuario: [
    { nome: 'Bjorn the Third', lvl: 2, classe: ['Wizard', 'Barbarian'] },
    { nome: 'Rafael', lvl: 1, classe: ['Fighter'] },
    { nome: 'Catterpillar', lvl: 2, classe: ['Monk', 'Rogue'] }
  ]
})
