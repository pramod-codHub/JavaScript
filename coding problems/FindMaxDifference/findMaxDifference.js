const findMaxDifference = (arr) => {
    let min = arr[0]
    let max = arr[0]
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < min) {
            min = arr[i]
        }
    }
    return max - min
}
const maxDifference = findMaxDifference([12, 1, 8, 10, 9, 3, 2])
