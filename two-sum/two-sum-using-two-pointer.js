//this two pointer approach works only for sorted array, if the array is not sorted then we have to sort it first and then apply this approach.
function TwoSum(arr, target) {
    let left = 0
    let right = arr.length - 1
    let arrayOfPairs = []
    while (left < right) {
        let currentsum = arr[left] + arr[right]
        if (currentsum === target) {
            arrayOfPairs.push([left, right])
            left++
            right--
        } else if (currentsum < target) {
            left++
        }
        else {
            right--
        }
    }
    return arrayOfPairs
}

const result = TwoSum([1, 2, 3, 4, 5, 6, 7, 8], 9)
console.log("===result", result)