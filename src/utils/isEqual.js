import _ from 'loadsh'

export function isEqual(a, b, c) {
    return _.isEqual(a, b) && _.isEqual(a, c)
}