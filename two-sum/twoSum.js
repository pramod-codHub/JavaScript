
//// O(n^2) -> using tradistional method
let arr = [1, 5, 6, 5, 3, 2, 4, 7]
let target = 10
let pairs = []

for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            pairs.push([arr[i], arr[j]])
        }
    }
}

console.log(pairs)
