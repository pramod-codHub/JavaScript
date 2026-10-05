const FrequncyCounter = (array) => {
    let frequncy = {}
    for (let number of array) {
        if (frequncy[number]) {
            frequncy[number] = frequncy[number] + 1
        } else {
            frequncy[number] = 1
        }
    }
    return frequncy
}

const frq = FrequncyCounter([1, 1, 3, 5, 6, 1, 6, 2])

console.log(frq)