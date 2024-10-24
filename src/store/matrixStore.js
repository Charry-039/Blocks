import {defineStore} from "pinia";
import {getRandomNumberInclusive} from "../utils/getRandomNumberInclusive.js";
import {ref} from "vue";

export const useMatrix = defineStore('useMatrix', {
    state: () => ({
            matrix: ref([
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            ]),
        }
    ), getters: {}, actions: {
        fullMatrix: function () {
// 初始化随机填充矩阵
            let dy = [-1, 0, 1, 0]
            let dx = [0, 1, 0, -1]
            for (let i = 0; i < this.matrix.length; i++) {
                for (let j = 0; j < this.matrix[0].length; j++) {
                    // 边界不进行初始化赋值
                    if (this.matrix[i][j] === -1) {
                        continue
                    }
                    this.matrix[i][j] = getRandomNumberInclusive(1, 18)
                    // 相同元素计数器
                    let cnt
                    do {
                        cnt = 0;
                        for (let k = 0; k < 4; k++) {
                            let ry = i + dy[k]
                            let rx = j + dx[k]
                            if (this.matrix[ry][rx] === this.matrix[i][j]) {
                                ++cnt
                            }
                        }
                        // 重随元素
                        this.matrix[i][j] = getRandomNumberInclusive(1, 18)
                    } while (cnt > 1)
                }
            }
        }
    }
})