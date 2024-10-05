import {defineStore} from "pinia";
import {reactive} from "vue";
import {getRandomNumberInclusive} from "../utils/getRandomNumberInclusive.js";

export const useMatrix = defineStore('useMatrix', {
    state: () => ({
            matrix: reactive([
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            ]),
            isInitiated: false,
        }
    ), getters: {}, actions: {
        fullMatrix: function () {
// 初始化随机填充矩阵
            for (let i = 0; i < this.matrix.length; i++) {
                for (let j = 0; j < this.matrix[0].length; j++) {
                    this.matrix[i][j] = getRandomNumberInclusive(1, 18)
                }
            }
        }
    }
})