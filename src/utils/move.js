import {useMatrix} from "../store/matrixStore.js";

// 合法移动两个方块
export function move(pos1, pos2) {
    const matrix = useMatrix().matrix;
    let t = matrix[pos1.y][pos1.x]
    matrix[pos1.y][pos1.x] = matrix[pos2.y][pos2.x];
    matrix[pos2.y][pos2.x] = t
}