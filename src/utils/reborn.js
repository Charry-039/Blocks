import {useMatrix} from "../store/matrixStore.js";
import {getRandomNumberInclusive} from "./getRandomNumberInclusive.js";

export function reborn(y, x) {
    const Matrix = useMatrix().matrix
    let newDot;
    do {
        newDot = getRandomNumberInclusive(1, 18)
        console.log('......')
    } while (newDot === Matrix[y][x])
    Matrix[y][x] = newDot
}