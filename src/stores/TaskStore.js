import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    name: 'Bjorn the Third',
    race: 'Half-Orc',
    class: 'wizard',
    level: 2,
    attributes: {
      strenght: 10,
      dexterity: 10,
      vigor: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    }
  })
})
