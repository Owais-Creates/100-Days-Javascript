
//*----------------------------------------
// Programming Question - Fibonacci Series.
//*----------------------------------------

// Write a function which takes a number as an input and  returns the corresponding Fibonacci series up to that number.


function fibonacciSeries(n) {
    let fibSeries = [];

    let a = 0, b = 1;

    fibSeries[0] = a;
    fibSeries[1] = b;

    for (let i = 2; i < n; i++) {
        let c = a + b;
        fibSeries[i] = c;
        a = b;
        b = c;
    }

    return fibSeries;
}

console.log(fibonacciSeries(10)); //OUTPUT - [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]



