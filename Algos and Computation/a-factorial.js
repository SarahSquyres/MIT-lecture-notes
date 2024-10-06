// Recursive approach
const factorialRecursion = function (n){
     // Base case
     if (n === 0) {
          return 1
     // Recursive formula
     } else {
          console.log(n)
          console.log(n-1)
          return n*factorialRecursion(n-1)
     }
}

console.log(factorialRecursion(5))

// Loop
const factorialLoop = function (n){
     let result = 1
     for (let i = 1; i <= n; i++) {
          console.log(i)
          result *= i
     } 
     return result
}

console.log(factorialLoop(5))