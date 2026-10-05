const Fibonacci = (n) => {
    let n1 = 0;
    let n2 = 1
    let fibonacciSeries = []
    for (let i = 1; i <= n; i++) {
        fibonacciSeries.push(n1)
        let n3 = n1 + n2

        n1 = n2
        n2 = n3
    }
    return fibonacciSeries
}

const fibonacciSeries = Fibonacci(6)
console.log("===fibonacciSeries", fibonacciSeries)
