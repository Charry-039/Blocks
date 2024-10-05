import {useMatrix} from "../store/matrixStore.js";
import {reborn} from "./reborn.js";
import {isEqual} from "./isEqual.js";

export function search(y, x) {
    const matrix = useMatrix().matrix

    //单向两格查
    if (isEqual(matrix[y][x], matrix[y - 1][x], matrix[y - 2][x])) {
        console.log(1)
        reborn(y, x)
        reborn(y - 1, x)
        reborn(y - 2, x)
    }
    if (isEqual(matrix[y][x], matrix[y + 1][x], matrix[y + 2][x])) {
        console.log(2)
        reborn(y, x)
        reborn(y + 1, x)
        reborn(y + 2, x)
    }
    if (isEqual(matrix[y][x], matrix[y][x - 1], matrix[y][x - 2])) {
        console.log(3)
        reborn(y, x)
        reborn(y, x - 1)
        reborn(y, x - 2)
    }
    if (isEqual(matrix[y][x], matrix[y][x + 1], matrix[y][x + 2])) {
        console.log(4)
        reborn(y, x)
        reborn(y, x + 1)
        reborn(y, x + 2)
    }

    //水平相邻查
    if (isEqual(matrix[y][x], matrix[y][x - 1], matrix[y][x + 1])) {
        console.log(5)
        reborn(y, x)
        reborn(y, x - 1)
        reborn(y, x + 1)
    }
    //垂直相邻查
    if (isEqual(matrix[y][x], matrix[y - 1][x], matrix[y + 1][x])) {
        console.log(6)
        reborn(y, x)
        reborn(y - 1, x)
        reborn(y + 1, x)
    }
}