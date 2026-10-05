let arr = [1, 2, 3, 4, 5]
let size = 2
let sliptArry = []

for (let i = 0; i < arr.length; i += size) {
    let group = []

    for (let j = i; j < i + size && j < arr.length; j++) {
        group.push(arr[j])
    }

    sliptArry.push(group)
}

console.log(sliptArry)