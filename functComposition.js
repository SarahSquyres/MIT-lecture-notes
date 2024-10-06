// Imperative programming approach
const fn1 = x => x + 1;
const fn2 = x => 2 * x;

console.log(fn1(fn2(4)))

var compose1 = function(functions) {

     return function(x) {
          for(const fn of functions.reverse()){
               x = fn(x)
          }
          return x
     }
}
const fn = compose1([x => x + 1, x => x * 2])
console.log(fn(4))

// Declarative programming approach
var compose2 = function(functions){
     const fn = (acc, f) => f(acc)
     return function(x) {
          return functions.reduceRight(fn, x)
     }
}

const fn3 = compose2([x => x + 1, x => x * 2])
console.log(fn3(4))