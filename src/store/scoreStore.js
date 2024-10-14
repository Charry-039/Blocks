import {defineStore} from "pinia";
import {ref} from "vue";

export const useScore = defineStore('useScore', {
    state: () => ({
            score: ref(0)
        }
    ),
    getters: {}, actions: {
        addScore: function() {
            this.score++
        }
    }
})