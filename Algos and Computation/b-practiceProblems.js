// Big O Notation
// array.sort() iterates over entire array = O(n)
// each element the function performs a comparison and potentially swaps elements = O(log n)
// big O = O(n log n)
const array = [32, 41, 59, 36, 41, 78, 53]

const sortArray = () => {
     const sortedArray = array.sort()
     console.log(sortedArray)
}

sortArray()
