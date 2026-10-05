//this approch will applicable for both sorted and unsorted array.
function TwoSum(arr, target) {
    const map = new Map()
    const pairs = []

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i]
        if (map.has(complement)) {
            pairs.push([complement, arr[i]])
        }
        map.set(arr[i], i)
    }
    return pairs

}

const result = TwoSum([2, 3, 1, 4, 5], 5)
console.log(result)