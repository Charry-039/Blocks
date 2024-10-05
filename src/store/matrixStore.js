import {defineStore} from "pinia";
import {getRandomNumberInclusive} from "../utils/getRandomNumberInclusive.js";

export const useMatrix = defineStore('useMatrix', {
    state: () => ({
            matrix: [
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            ],
            isInitiated: false,
        }
    ), getters: {}, actions: {
        fullMatrix: function () {
// 初始化随机填充矩阵
            for (let i = 0; i < this.matrix.length; i++) {
                for (let j = 0; j < this.matrix[0].length; j++) {
                    if (this.matrix[i][j] !== -1)
                        this.matrix[i][j] = getRandomNumberInclusive(1, 18)
                }
            }
        }
    }
})