export function isJoin(pos1, pos2) {
    // 检查两个点是否在同一行或同一列，并且它们之间的距离为1
    return (pos1.y === pos2.y && Math.abs(pos1.x - pos2.x) === 1) ||
        (pos1.x === pos2.x && Math.abs(pos1.y - pos2.y) === 1);
}