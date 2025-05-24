import {defineStore} from "pinia";
import {ref} from "vue";
import { sound } from '../utils/howlInstance'

export const useScore = defineStore('useScore', {
    state: () => ({
            score: ref(0)
        }
    ),
    getters: {}, actions: {
        addScore: function() {
            this.score++
            sound.play()
        }
    }
})