import {useMatrix} from "../store/matrixStore.js";
import {getRandomNumberInclusive} from "./getRandomNumberInclusive.js";

export function reborn(y, x) {
    const Matrix = useMatrix().matrix
    Matrix[y][x] = getRandomNumberInclusive(1, 18)
}