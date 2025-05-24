import {useMatrix} from "../store/matrixStore.js";
import {reborn} from "./reborn.js";
import {useScore} from "../store/scoreStore.js";

export function search(y, x) {
    const useMatrixStore = useMatrix()
    const matrix = useMatrixStore.matrix
    const useScoreStore = useScore()
    const arr = []
    const status = [
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    ];

    const dfs = function (y, x, value) {
        const dy = [-1, 0, 1, 0]
        const dx = [0, 1, 0, -1]
        const rowSize = matrix.length
        const colSize = matrix[0].length

        // 矩阵溢出判断
        if (y < 0 || y > rowSize || x < 0 || x > colSize) return
        // console.log(y, x)
        // console.log(status[y][x])
        //方块相同且此坐标未被遍历
        if (matrix[y][x] === value && !status[y][x]) {
            // console.log('dfs: ', y + 3, x + 3)
            //改变坐标遍历状态
            status[y][x] = true
            arr.push({y: y, x: x})
            for (let i = 0; i < 4; i++) {
                dfs(y + dy[i], x + dx[i], matrix[y][x])
            }
        }
    }

    // console.log('enter search()', `y: ${y - 1}, x: ${x - 1}`)
    dfs(y, x, matrix[y][x])
    if (arr.length >= 3) {
        // ++useScoreStore.score
        useScoreStore.addScore()
        console.log('arr.length >= 3')
        for (let element of arr) {
            console.log(`y: ${element.y - 1}, x: ${element.x - 1}`)
            // console.log(element.y, element.x)
            reborn(element.y, element.x)
        }
    }
}