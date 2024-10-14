import {useMatrix} from "../store/matrixStore.js";
import {storeToRefs} from "pinia";

export function dfs(y, x, value) {
    const matrix = storeToRefs(useMatrix().matrix)
    const dy = [-1, 0, 1, 0]
    const dx = [0, 1, 0, -1]
    let cnt = 0

    const status = [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false]
    ];

    // 矩阵溢出判断
    if (y < 0 || y > 8 || x < 0 || x > 8) return
    //方块相同且此坐标未被遍历
    if (matrix[y][x] === value && !status[y][x]) {
        console.log(y, x)
        //改变坐标遍历状态
        status[y][x] = true
        ++cnt
        for (let i = 0; i < 4; i++) {
            dfs(y + dy[i], x + dx[i], matrix[y][x])
        }
    }
}