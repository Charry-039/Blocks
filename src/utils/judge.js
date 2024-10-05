import {useMatrix} from "../store/matrixStore.js";
import {reborn} from "./reborn.js";

export function judge(y, x) {
    const matrix = useMatrix().matrix;
    console.log('judge')
    if (y === 0) {
        console.log(0)
        if (x === 0) {
            console.log(1)
            // 左上角格
            if (matrix[y][x] === matrix[y][x + 1] === matrix[y][x + 2]) {
                console.log(2)
                reborn(y, x)
                reborn(y, x + 1)
                reborn(y, x + 2)
            } if (matrix[y][x] === matrix[y + 1][x] === matrix[y + 2][x]) {
                console.log(3)
                reborn(y, x)
                reborn(y + 1, x)
                reborn(y + 2, x)
            }
        } else if (x === matrix[0].length - 1) {
            console.log(4)
            // 右上角格
            if (matrix[y][x] === matrix[y][x - 1] === matrix[y][x - 2]) {
                console.log(5)
                reborn(y, x)
                reborn(y, x - 1)
                reborn(y, x - 2)
            } if (matrix[y][x] === matrix[y + 1][x] === matrix[y + 2][x]) {
                console.log(6)
                reborn(y, x)
                reborn(y + 1, x)
                reborn(y + 2, x)
            }
        } else {
            // 第一行自由格
            console.log(7)
            if (matrix[y][x] === matrix[y][x - 1] === matrix[y][x + 1]) {
                console.log(8)
                reborn(y, x)
                reborn(y, x - 1)
                reborn(y, x + 1)
            } if (matrix[y][x] === matrix[y + 1][x] === matrix[y + 2][x]) {
                console.log(9)
                reborn(y, x)
                reborn(y + 1, x)
                reborn(y + 2, x)
            }
        }
    } else if (y === matrix.length - 1) {
        console.log(10)
        if (x === 0) {
            console.log(11)
            // 左下角格
            if (matrix[y][x] === matrix[y][x + 1] === matrix[y][x + 2]) {
                console.log(12)
                reborn(y, x)
                reborn(y, x + 1)
                reborn(y, x + 2)
            } if (matrix[y][x] === matrix[y - 1][x] === matrix[y - 2][x]) {
                console.log(13)
                reborn(y, x)
                reborn(y - 1, x)
                reborn(y - 2, x)
            }
        } else if (x === matrix[0].length - 1) {
            console.log(14)
            // 右下角格
            if (matrix[y][x] === matrix[y][x - 1] === matrix[y][x - 2]) {
                console.log(15)
                reborn(y, x)
                reborn(y, x - 1)
                reborn(y, x - 2)
            } if (matrix[y][x] === matrix[y - 1][x] === matrix[y - 2][x]) {
                console.log(16)
                reborn(y, x)
                reborn(y - 1, x)
                reborn(y - 2, x)
            }
        } else {
            console.log(17)
            // 最底行自由格
            if (matrix[y][x] === matrix[y][x - 1] === matrix[y][x + 1]) {
                console.log(18)
                reborn(y, x)
                reborn(y, x - 1)
                reborn(y, x + 1)
            } if (matrix[y][x] === matrix[y - 1][x] === matrix[y - 2][x]) {
                console.log(19)
                reborn(y, x)
                reborn(y - 1, x)
                reborn(y - 2, x)
            }
        }
    } else {
        console.log(20)
        if (x === 0) {
            console.log(21)
            // 第一列自由格
            if (matrix[y][x] === matrix[y - 1][x] === matrix[y + 1][x]) {
                console.log(22)
                reborn(y, x)
                reborn(y - 1, x)
                reborn(y + 1, x)
            } if (matrix[y][x] === matrix[y][x + 1] === matrix[y][x + 2]) {
                console.log(23)
                reborn(y, x)
                reborn(y, x + 1)
                reborn(y, x + 2)
            }
        } else if (x === matrix.length[0] - 1) {
            console.log(24)
            // 最右列自由格
            if (matrix[y][x] === matrix[y - 1][x] === matrix[y + 1][x]) {
                console.log(25)
                reborn(y, x)
                reborn(y - 1, x)
                reborn(y + 1, x)
            }
            if (matrix[y][x] === matrix[y][x - 1] === matrix[y][x - 2]) {
                console.log(26)
                reborn(y, x)
                reborn(y, x - 1)
                reborn(y, x - 2)
            }
        } else {
            console.log(27)
            // 全自由格
            // 四方查
            if (matrix[y][x] === matrix[y - 1][x] === matrix[y + 1][x]) {
                console.log(28)
                console.log('四方查之上下查')
                reborn(y, x)
                reborn(y - 1, x)
                reborn(y + 1, x)
            }
            if (matrix[y][x] === matrix[y][x - 1] === matrix[y][x + 1]) {
                console.log(29)
                console.log('四方查之左右查')
                reborn(y, x)
                reborn(y, x - 1)
                reborn(y, x + 1)
            }
        }
    }
    console.log(30)
}