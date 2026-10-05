const arr = [1, 2, 3, 4, 5, 6, 7]
const size = 4

let max = 0

for (let i = 0; i <= arr.length - size; i++) {
    let current = 0

    for (let j = i; j < i + size; j++) {
        current = current + arr[j]
    }

    if (current > max) {
        max = current
    }
}

console.log(max) // 22