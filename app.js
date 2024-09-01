'use strict'

main()

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Write your code here
}

function main() {
  const arr1 = [1, 4, 4, 4, 5, 3]
  const arr2 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
  const arr3 = [
    3, 1, 1, 2, 4, 1, 1, 2, 1, 4, 1, 2, 4, 2, 2, 2, 5, 1, 3, 1, 2, 2, 1, 1, 2, 4, 2, 2, 2, 2, 1, 1,
    2, 5, 2, 1, 1, 1, 2, 1, 2, 1, 3, 1, 1, 2, 1, 5, 1, 4, 1, 1, 1, 3, 5, 2, 1, 1, 4, 2, 4, 2
  ]
  console.log(migratoryBirds(arr1))
  console.log(migratoryBirds(arr2))
  console.log(migratoryBirds(arr3))
}
