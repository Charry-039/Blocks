// import getRandomInt from './getRandomNumberInclusive.js'
// import {useMatrix} from "../store/matrixStore.js";
// import {j} from "vite/dist/node/types.d-aGj9QkWt.js";
//
// export default function checkAround(y, x) {
//     const matrix = useMatrix().matrix
//     let dy = [-1, 0, 1, 0], dx = [0, 1, 0, -1]
//     let cnt;
//     do {
//         cnt = 0
//         for (let k = 0; k < 4; k++) {
//             let ry = y + dy[k], rx = x + dx[k]
//             if (matrix[ry][rx] === matrix[y][x]) {
//                 ++cnt
//             }
//         }
//     }while(cnt > 1)
// }