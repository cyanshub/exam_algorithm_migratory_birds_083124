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
  // 假設 arr 為記錄目擊 birdType 的正整數陣列, 陣列中的每個正整數代表目擊到的鳥群 id
  // 假設 birdType 的 id 只能為 1, 2, 3, 4, 5
  let birdTypeId1 = 0
  let birdTypeId2 = 0
  let birdTypeId3 = 0
  let birdTypeId4 = 0
  let birdTypeId5 = 0

  // 使用 for 迴圈來遍歷 arr
  for (let i = 0; i < arr.length; i++) {
    const birdTypeId = arr[i]

    if (birdTypeId === 1) {
      birdTypeId1++
    } else if (birdTypeId === 2) {
      birdTypeId2++
    } else if (birdTypeId === 3) {
      birdTypeId3++
    } else if (birdTypeId === 4) {
      birdTypeId4++
    } else if (birdTypeId === 5) {
      birdTypeId5++
    } else {
      console.error('Bird sightings outside of the known bird types.')
      return
    }
  }

  // 將目擊記錄寫成一個物件陣列, 每個物件含有 id 屬性及 count 屬性
  const birdTypes = [
    { id: 1, count: birdTypeId1 },
    { id: 2, count: birdTypeId2 },
    { id: 3, count: birdTypeId3 },
    { id: 4, count: birdTypeId4 },
    { id: 5, count: birdTypeId5 }
  ]

  // 找出目擊次數最多的鳥群 id
  let maxSightings = Math.max(
    birdTypes[0].count,
    birdTypes[1].count,
    birdTypes[2].count,
    birdTypes[3].count,
    birdTypes[4].count
  )

  // 利用 filter 篩選出最大計數的 birdTypeId, 為避免出現多個以上再用 sort 演算法由小到大排序, 然後取結果的第一個數值
  const result = birdTypes
    .filter((birdType) => birdType.count === maxSightings)
    .sort((a, b) => a.id - b.id)[0].id

  return result
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
