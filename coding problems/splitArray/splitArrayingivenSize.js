function SplitArray(array, size) {
    let newSplitArray = []
    for (let i = 0; i < array.length; i = i + size) {
        newSplitArray.push(array.slice(i, i + size))
    }
    console.log(newSplitArray)
}

SplitArray([1, 2, 3, 4, 5], 2)