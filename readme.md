# Algorithm - Migratory Birds

## 開始使用
+ 請在本機安裝 Node.js
+ 複製專案到本機: Bash 指令 `git clone https://github.com/cyanshub/exam_algorithm_migratory_birds_083124.git`
+ 進入專案資料夾: Bash 指令 `cd exam_algorithm_migratory_birds_083124`
+ 啟動專案: Bash 指令 `node app.js`

## 解題思路
+ (1) 假設 arr 為記錄目擊 birdType 的正整數陣列, 陣列中的每個正整數代表目擊到的鳥群 id
+ (2) 假設 birdType 的 id 只能為 1, 2, 3, 4, 5
+ (3) 使用 for 迴圈來遍歷 arr
+ (4) 將目擊記錄寫成一個物件陣列, 每個物件含有 id 屬性及 count 屬性
+ (5) 找出目擊次數最多的鳥群 id
+ (6) 利用 filter 篩選出最大計數的 birdTypeId, 為避免出現多個以上再用 sort 演算法由小到大排序
+ (7) 取結果的第一個數值即為演算法預期的值: 目擊次數最多的鳥群 id (若當有同樣多者時,取 id 靠前的鳥群)