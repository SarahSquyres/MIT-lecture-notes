// FACTORIAL ALGORITHM

// Recursive approach
const factorialRecursion = function (n) {
     // Base case
     if (n === 0) {
          return 1
          // Recursive formula
     } else {
          console.log(n)
          console.log(n - 1)
          return n * factorialRecursion(n - 1)
     }
}

console.log(factorialRecursion(5))

// Loop
const factorialLoop = function (n) {
     let result = 1
     for (let i = 1; i <= n; i++) {
          console.log(i)
          result *= i
     }
     return result
}

console.log(factorialLoop(5))

// BIRTHDAY PROBLEM
// finds the students in the class with matching birthdays
const matchingBirthdays = async () => {
     try {
          const response = await fetch('a-practiceProblem.json');
          if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data
     } catch (error) {
          console.error('Error:', error);
     }
}

const createBirthdayMap = async () => {
     const students = await matchingBirthdays();
     const myMap = new Map();
     students.data.forEach((item) => {
          myMap.set(item.name, item.DOB)
     })
     return myMap
}

const findMatchingBirthdays = async () => {
     const map = await createBirthdayMap()
     const sortBirthdays = Array.from(map.entries())
     sortBirthdays.sort((a, b) => a[1].localeCompare(b[1]))
     const matchingBirthdays = {}

     sortBirthdays.forEach(([name, birthday]) => {
          if (matchingBirthdays[birthday]) {
               matchingBirthdays[birthday].push(name)
          } else {
               matchingBirthdays[birthday] = [name]
          }
     })
     
     Object.keys(matchingBirthdays).forEach(birthday => {
          if (matchingBirthdays[birthday].length > 1) {
               console.log(`The following students have the birthday ${birthday}: ${matchingBirthdays[birthday]}`)
          }
     })
}

findMatchingBirthdays()