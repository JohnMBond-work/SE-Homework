// ***Alternative cleaner approach to heighest number***
const maxOfThree = (arr) => {
  let sortedArr = arr.sort().reverse()
  return sortedArr[0]
}
// Input / Output ====================================
let trial1 = [1,4,2]
let trial2 = [7,8,3]
console.log("the highest number of " + trial1 + " is " + maxOfThree(trial1))
console.log("the highest number of " + trial2 + " is " + maxOfThree(trial2))
