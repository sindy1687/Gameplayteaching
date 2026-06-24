// 教學網站 JavaScript

// 教學資料
const tutorials = [
    {
        id: "typing-game-intro",
        category: "英打遊戲教學",
        title: "第一步：建立英打闖關遊戲專案架構",
        description: "建立英打闖關遊戲的基本專案架構，包括 HTML、CSS、JavaScript 檔案和資料資料夾。",
        target: "適合想要從零開始建立專案的初學者。",
        steps: [
            "建立專案資料夾",
            "建立 HTML 檔案",
            "建立 CSS 檔案",
            "建立 JavaScript 檔案",
            "建立資料資料夾",
            "建立 words.json",
            "建立 levels.json"
        ],
        code: `第一步：建立英打闖關遊戲專案架構

這一步要做什麼：

我們要先建立一個新的英打闖關遊戲專案，專案名稱叫做：

typing-level-game

這一步只建立檔案架構，不寫完整遊戲功能。

請建立以下檔案與資料夾：

typing-level-game/
├── index.html
├── style.css
├── script.js
└── data/
    ├── words.json
    └── levels.json

每個檔案的用途：

1. index.html
負責網站畫面，例如首頁、關卡頁、遊戲區、結果畫面。

2. style.css
負責網站外觀，例如背景、按鈕、卡片、文字大小、手機版排版。

3. script.js
負責所有遊戲功能，例如開始遊戲、讀取關卡、出題、判斷答案、計分、星星評分。

4. data/words.json
這是唯一的總字庫，所有英文單字都放在這裡。

5. data/levels.json
這是所有關卡設定，例如第 1 關用哪些單字、第 2 關用哪些單字。

重要規則：

1. 不要建立每一關自己的 HTML。
2. 不要建立 level-1.html。
3. 不要建立 level-2.html。
4. 不要建立每一關自己的 JavaScript。
5. 不要建立每一關自己的單字檔。
6. 所有關卡都共用 index.html。
7. 所有關卡都共用 script.js。
8. 所有單字都放在 data/words.json。
9. 所有關卡設定都放在 data/levels.json。

請先只完成檔案架構。

完成後請回報目前建立了哪些檔案。

---

## 可以直接貼給 Windsurf 的指令

請幫我建立一個新的英打闖關遊戲專案。

專案名稱：
typing-level-game

請先只建立檔案架構，不要急著寫功能。

請建立以下檔案與資料夾：

index.html
style.css
script.js
data/
  words.json
  levels.json

檔案用途：

1. index.html
負責網站畫面。

2. style.css
負責網站外觀。

3. script.js
負責所有遊戲功能。

4. data/words.json
這是唯一的總字庫。

5. data/levels.json
這是所有關卡設定。

重要規則：

1. 不要建立每一關自己的 HTML。
2. 不要建立 level-1.html。
3. 不要建立 level-2.html。
4. 不要建立每一關自己的 JavaScript。
5. 不要建立每一關自己的單字檔。
6. 所有關卡都共用 index.html。
7. 所有關卡都共用 script.js。
8. 所有單字都放在 data/words.json。
9. 所有關卡設定都放在 data/levels.json。

完成後，請回報目前建立了哪些檔案。

---

## 這一步完成後應該看到的結果

typing-level-game/
├── index.html
├── style.css
├── script.js
└── data/
    ├── words.json
    └── levels.json

這一步的重點是：**先統一管理架構**，以後才不會變成每一關都有一堆重複檔案，專案會比較好維護。`,
        images: [],
        downloads: [
            {
                title: "index.html 範例檔案",
                filename: "index.html",
                src: "新增資料夾 (3)/index.html",
                note: "下載這個檔案作為 index.html 的參考"
            },
            {
                title: "script.js 範例檔案",
                filename: "script.js",
                src: "新增資料夾 (3)/script.js",
                note: "下載這個檔案作為 script.js 的參考"
            },
            {
                title: "style.css 範例檔案",
                filename: "style.css",
                src: "新增資料夾 (3)/style.css",
                note: "下載這個檔案作為 style.css 的參考"
            }
        ]
    },
    {
        id: "typing-game-setup",
        category: "英打遊戲教學",
        title: "第二步：製作 index.html 首頁畫面",
        description: "建立首頁畫面，包括遊戲標題、副標題和開始遊戲按鈕。",
        target: "適合想要了解 HTML 基本結構的初學者。",
        steps: [
            "建立 index.html 首頁結構",
            "建立 homeSection 區塊",
            "加入遊戲標題和副標題",
            "加入開始遊戲按鈕",
            "建立基本 CSS 樣式",
            "測試首頁顯示"
        ],
        code: `第二步：製作 index.html 首頁畫面

這一步要做什麼：

這一步只做首頁，不做完整遊戲功能。

請建立首頁區塊：

section id：
homeSection

首頁內容：

1. 遊戲標題：
英打闖關小英雄

2. 副標題：
看中文，輸入英文，挑戰關卡！

3. 開始遊戲按鈕
id：
startGameButton

按鈕文字：
開始遊戲

首頁規則：

1. 網頁一開始只顯示首頁。
2. 首頁要置中顯示。
3. 開始遊戲按鈕要明顯。
4. 點擊開始遊戲後，之後會進入關卡頁面。
5. 目前先建立按鈕和畫面，不需要完整功能。

請同時建立基本 CSS：

1. body 有柔和背景。
2. 首頁卡片置中。
3. 標題大一點。
4. 開始遊戲按鈕要像遊戲按鈕。
5. 手機版也要正常顯示。

請正確連結：
style.css
script.js

請加中文註解。

---

## 直接貼給 Windsurf 的指令

請幫我製作 index.html 的首頁畫面。

這一步只做首頁，不做完整遊戲功能。

請建立首頁區塊：

section id：
homeSection

首頁內容：

1. 遊戲標題：
英打闖關小英雄

2. 副標題：
看中文，輸入英文，挑戰關卡！

3. 開始遊戲按鈕
id：
startGameButton

按鈕文字：
開始遊戲

首頁規則：

1. 網頁一開始只顯示首頁。
2. 首頁要置中顯示。
3. 開始遊戲按鈕要明顯。
4. 點擊開始遊戲後，之後會進入關卡頁面。
5. 目前先建立按鈕和畫面，不需要完整功能。

請同時建立基本 CSS：

1. body 有柔和背景。
2. 首頁卡片置中。
3. 標題大一點。
4. 開始遊戲按鈕要像遊戲按鈕。
5. 手機版也要正常顯示。

請正確連結：
style.css
script.js

請加中文註解。

---

## 這一步完成後應該看到的結果

打開 index.html
↓
看到首頁畫面
↓
有「英打闖關小英雄」標題
↓
有「看中文，輸入英文，挑戰關卡！」副標題
↓
有「開始遊戲」按鈕
↓
畫面置中顯示
↓
按鈕明顯可點擊

---

## 你要記住的重點

這一步只建立畫面，還不需要功能。
下一步才會加入點擊按鈕的功能。`,
        images: [
            {
                title: "首頁畫面範例",
                src: "images/SEPT.2.png",
                note: "參考這張圖片了解首頁畫面"
            }
        ],
        downloads: []
    },
    {
        id: "typing-game-js-basic",
        category: "英打遊戲教學",
        title: "第三步：製作關卡選單頁面",
        description: "建立關卡選單頁面，包括 20 個關卡卡片、進度條、返回按鈕和畫面切換功能。",
        target: "適合想要了解頁面佈局和切換的初學者。",
        steps: [
            "建立關卡選單 HTML 結構",
            "建立 20 個關卡卡片容器",
            "加入返回首頁按鈕",
            "加入進度條顯示",
            "建立關卡卡片 CSS 樣式",
            "建立畫面切換功能",
            "測試關卡選單顯示"
        ],
        code: `第三步：製作關卡選單頁面

這一步要做什麼：

依照提供的圖片風格，製作關卡選單頁面。

關卡數量改成：總共 20 關

畫面設定：

1. 背景是深藍紫色宇宙星空。
2. 左上角有返回首頁按鈕。
3. 右上角有總星數顯示。
4. 中間大標題：英打闖關小英雄
5. 標題下方顯示：選擇關卡
6. 顯示通關進度條：通關進度 0/20
7. 關卡排列方式：共 20 關，電腦版使用 5 欄 × 4 列的關卡格子。
8. 每個關卡卡片顯示：關卡數字、星星評分、鎖頭狀態
9. 已解鎖關卡：顏色明亮、有藍色或金色發光邊框、可以點擊
10. 已通關關卡：顯示獲得幾顆星，例如 ★★★
11. 未解鎖關卡：顏色變暗、顯示鎖頭、不可以進入
12. 第 1 關一開始解鎖
13. 第 2 關之後一開始鎖住
14. 通關前一關後，下一關解鎖

重要注意事項：

1. 不要在 HTML 手寫 20 個關卡
2. 關卡要由 script.js 讀取 data/levels.json 自動產生
3. 關卡卡片要放在 id 為 levelGrid 的容器中
4. 電腦版顯示 5 欄
5. 平板版可以顯示 4 欄
6. 手機版可以顯示 2 欄
7. 不可以水平捲動
8. 請加中文註解

---

## 直接貼給 Windsurf 的指令

請幫我依照提供的圖片風格，製作關卡選單頁面。

關卡數量改成：總共 20 關

畫面設定：

1. 背景是深藍紫色宇宙星空。
2. 左上角有返回首頁按鈕。
3. 右上角有總星數顯示。
4. 中間大標題：英打闖關小英雄
5. 標題下方顯示：選擇關卡
6. 顯示通關進度條：通關進度 0/20
7. 關卡排列方式：共 20 關，電腦版使用 5 欄 × 4 列的關卡格子。
8. 每個關卡卡片顯示：關卡數字、星星評分、鎖頭狀態
9. 已解鎖關卡：顏色明亮、有藍色或金色發光邊框、可以點擊
10. 已通關關卡：顯示獲得幾顆星，例如 ★★★
11. 未解鎖關卡：顏色變暗、顯示鎖頭、不可以進入
12. 第 1 關一開始解鎖
13. 第 2 關之後一開始鎖住
14. 通關前一關後，下一關解鎖

重要注意事項：

1. 不要在 HTML 手寫 20 個關卡
2. 關卡要由 script.js 讀取 data/levels.json 自動產生
3. 關卡卡片要放在 id 為 levelGrid 的容器中
4. 電腦版顯示 5 欄
5. 平板版可以顯示 4 欄
6. 手機版可以顯示 2 欄
7. 不可以水平捲動
8. 請加中文註解

星星區先預留：★★★
未完成：☆☆☆

返回首頁按鈕 id：backHomeButton，文字：返回首頁

畫面切換規則：

初始：顯示 homeSection，隱藏 levelSelectSection
點擊開始遊戲後：隱藏 homeSection，顯示 levelSelectSection
點擊返回首頁：隱藏 levelSelectSection，顯示 homeSection

請同時建立 style.css 樣式：

1. 關卡卡片要可愛風格
2. 有圓角
3. 有陰影
4. 滑鼠移過去會微微放大
5. 已解鎖關卡比較亮
6. 未解鎖關卡變灰色
7. 星星顯示漂亮
8. 手機版正常
9. 請加中文註解

目前先做畫面與切換效果。

先不要做：
1. 關卡資料讀取
2. levels.json
3. 單字功能
4. 英打功能
5. 分數功能
6. 星星計算

---

## 這一步完成後應該看到的結果

打開 index.html
↓
看到首頁
↓
點擊「開始遊戲」
↓
首頁隱藏，關卡選單顯示
↓
看到 20 個關卡卡片
↓
第 1 關解鎖（明亮）
↓
第 2-20 關鎖定（灰色）
↓
點擊「返回首頁」
↓
關卡選單隱藏，首頁顯示

---

## 你要記住的重點

這一步只建立畫面和切換功能。
關卡卡片目前先靜態顯示，之後才會動態產生。`,
        images: [
            {
                title: "關卡選單畫面參考",
                src: "images/sept.3.png",
                note: "參考這張圖片了解關卡選單的風格"
            }
        ],
        downloads: []
    },
    {
        id: "typing-game-css",
        category: "英打遊戲教學",
        title: "第四步：建立 data/words.json 總字庫",
        description: "建立整個遊戲唯一的總字庫，包含 100 個國小常用英文單字。",
        target: "適合想要了解 JSON 資料結構的初學者。",
        steps: [
            "建立 data/words.json 檔案",
            "建立動物單字 20 個",
            "建立水果單字 20 個",
            "建立學校單字 20 個",
            "建立顏色與數字單字 20 個",
            "建立動作與生活單字 20 個",
            "設定 category 分類",
            "加入中文 hint 提示"
        ],
        code: `第四步：建立 data/words.json 總字庫

這一步要做什麼：

建立 data/words.json 檔案。

這是整個遊戲唯一的總字庫。
所有關卡都從這一份 words.json 讀取單字。

每一筆單字資料包含：

id：單字 ID，不能重複
word：英文單字，學生要輸入的答案
meaning：中文意思，畫面顯示的題目
hint：提示
category：分類
difficulty：難度

請先建立 400 個國小常用英文單字。
如果一次無法完成 400 個，請先建立至少 100 個，架構要能繼續擴充。

重要規則：

1. 所有單字都放在同一個 JSON 陣列。
2. 不要建立每一關自己的單字檔。
3. 不要建立 data/words/level-1.json。
4. id 請使用英文小寫。
5. word 是英文答案。
6. meaning 是中文題目。
7. hint 是答錯時顯示的提示。
8. category 用來分類。
9. difficulty 可以先全部設為「簡單」。
10. JSON 格式一定要正確。

---

## 直接貼給 Windsurf 的指令

請幫我建立 data/words.json。

這是整個遊戲唯一的總字庫。
所有關卡都從這一份 words.json 讀取單字。

每一筆單字資料包含：

id：單字 ID，不能重複
word：英文單字，學生要輸入的答案
meaning：中文意思，畫面顯示的題目
hint：提示
category：分類
difficulty：難度

請先建立 400 個國小常用英文單字。
如果一次無法完成 400 個，請先建立至少 100 個，架構要能繼續擴充。

重要規則：

1. 所有單字都放在同一個 JSON 陣列。
2. 不要建立每一關自己的單字檔。
3. 不要建立 data/words/level-1.json。
4. id 請使用英文小寫。
5. word 是英文答案。
6. meaning 是中文題目。
7. hint 是答錯時顯示的提示。
8. category 用來分類。
9. difficulty 可以先全部設為「簡單」。
10. JSON 格式一定要正確。

請先建立以下 100 個單字：

第 1 組：動物 20 個
dog 狗
cat 貓
bird 鳥
fish 魚
rabbit 兔子
lion 獅子
tiger 老虎
monkey 猴子
horse 馬
cow 牛
sheep 羊
pig 豬
duck 鴨
chicken 雞
bear 熊
elephant 大象
zebra 斑馬
frog 青蛙
mouse 老鼠
panda 貓熊

第 2 組：水果 20 個
apple 蘋果
banana 香蕉
orange 橘子
grape 葡萄
watermelon 西瓜
mango 芒果
lemon 檸檬
peach 桃子
pear 梨子
cherry 櫻桃
pineapple 鳳梨
strawberry 草莓
kiwi 奇異果
melon 甜瓜
papaya 木瓜
coconut 椰子
plum 李子
guava 芭樂
tomato 番茄
blueberry 藍莓

第 3 組：學校 20 個
book 書
pen 原子筆
pencil 鉛筆
eraser 橡皮擦
ruler 尺
bag 書包
desk 書桌
chair 椅子
teacher 老師
student 學生
school 學校
classroom 教室
blackboard 黑板
notebook 筆記本
paper 紙
glue 膠水
scissors 剪刀
crayon 蠟筆
marker 麥克筆
computer 電腦

第 4 組：顏色與數字 20 個
red 紅色
blue 藍色
green 綠色
yellow 黃色
black 黑色
white 白色
pink 粉紅色
purple 紫色
brown 棕色
gray 灰色
one 一
two 二
three 三
four 四
five 五
six 六
seven 七
eight 八
nine 九
ten 十

第 5 組：動作與生活 20 個
run 跑
walk 走
jump 跳
read 讀
write 寫
eat 吃
drink 喝
sleep 睡覺
play 玩
sing 唱歌
dance 跳舞
swim 游泳
open 打開
close 關上
look 看
listen 聽
speak 說
wash 洗
cook 煮
study 學習

category 設定：
動物單字 category 設為「動物」
水果單字 category 設為「水果」
學校單字 category 設為「學校」
顏色與數字單字 category 設為「顏色數字」
動作與生活單字 category 設為「動作生活」

請幫每一個單字建立簡單中文 hint。

---

## 這一步完成後應該看到的結果

data/words.json 檔案包含 100 個單字
每個單字都有 id、word、meaning、hint、category、difficulty
JSON 格式正確，沒有語法錯誤
可以繼續擴充到 400 個單字

---

## 你要記住的重點

這一步只建立字庫資料，還不需要讀取功能。
下一步才會加入讀取 words.json 的功能。`,
        images: [],
        downloads: [
            {
                title: "words.json 範例檔案",
                filename: "words.json",
                src: "新增資料夾 (3)/data/words.json",
                note: "下載這個檔案作為 words.json 的參考"
            }
        ]
    },
    {
        id: "typing-game-js-basic",
        category: "英打遊戲教學",
        title: "第五步：建立 data/levels.json 關卡設定",
        description: "建立 20 個關卡設定，每關固定 20 個單字，對應 data/words.json 的單字 ID。",
        target: "適合想要了解關卡資料結構的初學者。",
        steps: [
            "建立 data/levels.json 檔案",
            "建立第 1-5 關基礎關卡",
            "建立第 6-10 關進階關卡",
            "建立第 11-15 關混合複習關卡",
            "建立第 16-20 關終極挑戰關卡",
            "設定難度、分數、時間、愛心",
            "設定關卡解鎖條件"
        ],
        code: `第五步：建立 data/levels.json 關卡設定

這一步要做什麼：

建立 data/levels.json 檔案。

這個檔案只放關卡設定。
所有單字都從 data/words.json 讀取。

我要建立 20 個關卡。
每一關固定 20 個單字。
每一關的 wordIds 都要對應 data/words.json 裡的 id。

每一關資料包含：

id：關卡 ID
order：關卡順序
title：關卡名稱
description：關卡說明
questionCount：本關題目數
scorePerQuestion：每題分數
requiredLevelId：需要先通關哪一關才能解鎖
timeLimit：每題時間秒數
hearts：愛心數
wordIds：本關指定要考的 20 個單字 ID

請先用 data/words.json 的 100 個單字建立 5 組關卡，每組重複變化成 20 關。

重要規則：

1. 第 1 關 requiredLevelId 是 null。
2. 第 2 關 requiredLevelId 是 level-1。
3. 第 3 關 requiredLevelId 是 level-2。
4. 依此類推。
5. 第 20 關 requiredLevelId 是 level-19。
6. 每一關 questionCount 都是 20。
7. 每一關 wordIds 都要有 20 個單字。
8. 每一關只會考自己的 wordIds。
9. 每次進入同一關時，20 個單字內容固定。
10. 每次進入同一關時，20 個單字順序隨機。

---

## 直接貼給 Windsurf 的指令

請幫我建立 data/levels.json。

這個檔案只放關卡設定。
所有單字都從 data/words.json 讀取。

我要建立 20 個關卡。
每一關固定 20 個單字。
每一關的 wordIds 都要對應 data/words.json 裡的 id。

每一關資料包含：

id：關卡 ID
order：關卡順序
title：關卡名稱
description：關卡說明
questionCount：本關題目數
scorePerQuestion：每題分數
requiredLevelId：需要先通關哪一關才能解鎖
timeLimit：每題時間秒數
hearts：愛心數
wordIds：本關指定要考的 20 個單字 ID

請先用 data/words.json 的 100 個單字建立 5 組關卡，每組重複變化成 20 關。

重要規則：

1. 第 1 關 requiredLevelId 是 null。
2. 第 2 關 requiredLevelId 是 level-1。
3. 第 3 關 requiredLevelId 是 level-2。
4. 依此類推。
5. 第 20 關 requiredLevelId 是 level-19。
6. 每一關 questionCount 都是 20。
7. 每一關 wordIds 都要有 20 個單字。
8. 每一關只會考自己的 wordIds。
9. 每次進入同一關時，20 個單字內容固定。
10. 每次進入同一關時，20 個單字順序隨機。

請建立：

第 1 關：動物單字 1
使用 20 個動物單字。

第 2 關：水果單字 1
使用 20 個水果單字。

第 3 關：學校單字 1
使用 20 個學校單字。

第 4 關：顏色與數字 1
使用 20 個顏色與數字單字。

第 5 關：動作與生活 1
使用 20 個動作與生活單字。

第 6 關：動物單字 2
使用同樣 20 個動物單字，但關卡名稱不同。

第 7 關：水果單字 2
使用同樣 20 個水果單字。

第 8 關：學校單字 2
使用同樣 20 個學校單字。

第 9 關：顏色與數字 2
使用同樣 20 個顏色與數字單字。

第 10 關：動作與生活 2
使用同樣 20 個動作與生活單字。

第 11 關到第 15 關：
建立「混合複習 1」到「混合複習 5」。
每關從不同分類中各取一些單字，共 20 個 wordIds。

第 16 關到第 20 關：
建立「終極挑戰 1」到「終極挑戰 5」。
每關混合不同分類，共 20 個 wordIds。

難度設定：
第 1 到 5 關：簡單
第 6 到 10 關：普通
第 11 到 15 關：困難
第 16 到 20 關：挑戰

分數設定：
簡單：每題 10 分
普通：每題 15 分
困難：每題 20 分
挑戰：每題 25 分

時間設定：
簡單：每題 30 秒
普通：每題 25 秒
困難：每題 20 秒
挑戰：每題 15 秒

愛心設定：
簡單：5 顆
普通：4 顆
困難：3 顆
挑戰：3 顆

請產生完整 20 關 JSON。
JSON 格式一定要正確。

---

## 這一步完成後應該看到的結果

data/levels.json 檔案包含 20 個關卡
每個關卡都有 id、order、title、description、questionCount、scorePerQuestion、requiredLevelId、timeLimit、hearts、wordIds
JSON 格式正確，沒有語法錯誤
每關的 wordIds 都對應 data/words.json 的 id

---

## 你要記住的重點

這一步只建立關卡設定資料，還不需要讀取功能。
下一步才會加入讀取 levels.json 的功能。`,
        images: [
            {
                title: "關卡設定範例",
                src: "images/sept.5-1.png",
                note: "參考這張圖片了解關卡設定"
            },
            {
                title: "關卡結構說明",
                src: "images/sept.5-2.png",
                note: "參考這張圖片了解關卡結構"
            }
        ],
        downloads: [
            {
                title: "levels.json 範例檔案",
                filename: "levels.json",
                src: "新增資料夾 (3)/data/levels.json",
                note: "下載這個檔案作為 levels.json 的參考"
            }
        ]
    },
    {
        id: "typing-game-data",
        category: "英打遊戲教學",
        title: "第六步：點選關卡後，自動讀取 words.json 產生題目",
        description: "讓玩家點選關卡後，系統自動讀取 data/words.json 和 data/levels.json，並依照關卡設定產生對應題目。",
        target: "適合想要了解資料讀取的初學者。",
        steps: [
            "使用 fetch 讀取 words.json 和 levels.json",
            "建立關卡按鈕自動產生功能",
            "建立題目篩選和隨機抽取功能",
            "建立題目顯示功能",
            "建立答案判斷功能",
            "建立下一題自動進入功能"
        ],
        code: `第六步：點選關卡後，自動讀取 words.json 產生題目

這一步要做什麼：

我們要讓玩家點選某一個關卡後，遊戲會自動讀取：

data/words.json
data/levels.json

然後依照 levels.json 裡面的關卡設定，找到該關需要的單字，再從 words.json 裡抓出對應的題目。

重要觀念：

1. words.json 是總字庫
2. levels.json 是關卡設定
3. 玩家點第幾關，就讀取該關指定的單字
4. 不要每一關寫一個 HTML
5. 不要每一關寫一個 JS
6. 不要每一關寫一個單字檔
7. 所有題目都從 words.json 自動產生

---

## 直接貼給 Windsurf 的指令

請幫我製作「點選關卡後，自動讀取 words.json 產生題目」的功能。

目前專案架構是：

index.html
style.css
script.js
data/
  words.json
  levels.json

請依照以下需求處理：

一、資料來源

1. data/words.json 是唯一的總字庫。
2. data/levels.json 是所有關卡設定。
3. 不要建立每一關自己的單字檔。
4. 不要建立 level-1.html、level-2.html。
5. 所有關卡都共用 index.html 和 script.js。

二、index.html 畫面需求

請確認或建立以下區塊：

1. 首頁區塊 id：homeSection
2. 關卡選擇區塊 id：levelSection
3. 遊戲區塊 id：gameSection

遊戲區塊需要：
- 關卡標題 id：currentLevelTitle
- 題目進度 id：questionProgress
- 中文題目 id：questionChinese
- 英文輸入框 id：answerInput
- 送出答案按鈕 id：submitAnswerButton
- 答題結果提示 id：answerFeedback

三、script.js 功能需求

請在 script.js 裡完成以下功能：

1. 網頁載入後，使用 fetch 讀取：
data/words.json
data/levels.json

2. 點擊「開始遊戲」後：
- 隱藏 homeSection
- 顯示 levelSection
- 產生關卡按鈕

3. 關卡按鈕要根據 levels.json 自動產生。

例如 levels.json 有 4 關，就自動產生 4 個按鈕。

4. 點擊某一關後：
- 取得該關 level 資料
- 根據該關的 wordIds
- 從 words.json 找出對應的單字
- 隨機排列題目順序
- 顯示 gameSection
- 顯示第一題

5. 題目顯示方式：

畫面顯示中文：
狗

玩家要輸入英文：
dog

6. 判斷答案：

玩家輸入答案後，點擊「送出答案」。

如果答案正確：
顯示「答對了！」

如果答案錯誤：
顯示「答錯了，正確答案是 dog」

7. 答完一題後，自動進入下一題。

8. 如果題目全部答完：
顯示「本關完成」

四、重要規則

1. 不要寫死第 1 關、第 2 關的題目。
2. 題目一定要從 words.json 讀取。
3. 關卡一定要從 levels.json 讀取。
4. 點哪一關，就讀取該關 wordIds 的單字。
5. 不要每一關建立獨立 HTML。
6. 不要每一關建立獨立 JS。
7. 不要每一關建立獨立 JSON。
8. 請保留 UTF-8 編碼，避免中文亂碼。
9. 不要把繁體中文轉成 Unicode escape。
10. 不要破壞目前專案架構。

---

## 這一步完成後，功能流程應該是這樣

打開 index.html
↓
看到首頁
↓
點「開始遊戲」
↓
看到關卡列表
↓
點「第 1 關：動物單字 1」
↓
script.js 讀取 levels.json
↓
找到第 1 關的 wordIds
↓
script.js 讀取 words.json
↓
從 words.json 找出對應的單字
↓
產生題目
↓
顯示中文「狗」
↓
玩家輸入 dog
↓
判斷答案

---

## 你要記住的重點

words.json 負責放所有單字
levels.json 負責決定每一關要用哪些單字
script.js 負責把兩個資料檔接起來
index.html 只負責顯示畫面

下一步才適合做：**答對率、星星評分、通關條件、鎖定下一關**。`,
        images: [
            {
                title: "資料流程示意圖",
                src: "images/sept.5.png",
                note: "參考這張圖片了解資料流程"
            }
        ],
        downloads: []
    },
    {
        id: "typing-game-load-data",
        category: "英打遊戲教學",
        title: "第七步：補全通關進度系統",
        description: "補全通關進度系統，包括通關紀錄儲存、星星紀錄顯示、已通關關卡狀態、未通關關卡狀態、鎖定關卡狀態、解鎖下一關、重新整理後進度不消失、清除進度功能。",
        target: "適合想要了解進度系統的初學者。",
        steps: [
            "建立 localStorage 儲存格式",
            "初始化通關進度",
            "儲存通關進度",
            "完成關卡後更新進度",
            "星星紀錄更新規則",
            "關卡列表顯示進度",
            "首頁顯示總進度",
            "結果畫面顯示進度更新",
            "清除進度功能",
            "回首頁功能",
            "繼續挑戰功能"
        ],
        code: `第七步：補全通關進度系統

這一步要做什麼：

我要把英打闖關遊戲的「通關進度」補完整。

目前遊戲已經有：

1. 讀取 words.json
2. 讀取 levels.json
3. 點選關卡產生題目
4. 答對率
5. 星星評分
6. 通關條件
7. 鎖定下一關

現在請幫我補全：

1. 通關紀錄儲存
2. 星星紀錄顯示
3. 已通關關卡狀態
4. 未通關關卡狀態
5. 鎖定關卡狀態
6. 解鎖下一關
7. 重新整理網頁後進度不消失
8. 清除進度重新測試功能

目前專案架構是：

index.html
style.css
script.js
data/
  words.json
  levels.json

請不要建立新的關卡 HTML。
請不要建立每一關自己的 JS。
請不要建立每一關自己的 JSON。
所有進度請使用 localStorage 儲存。

==================================================
一、localStorage 儲存格式
==================================================

請使用 localStorage key：

typingLevelGameProgress

資料格式請統一為：

{
  "unlockedLevel": 1,
  "stars": {
    "1": 3,
    "2": 2,
    "3": 1
  },
  "completedLevels": [1, 2, 3],
  "lastPlayedLevel": 1
}

欄位說明：

1. unlockedLevel
代表目前解鎖到第幾關。

例如：

unlockedLevel: 1
代表只有第 1 關可以玩。

unlockedLevel: 2
代表第 1 關和第 2 關可以玩。

2. stars
儲存每一關最高星星數。

例如：

"stars": {
  "1": 3,
  "2": 1
}

代表：

第 1 關最高拿過 3 顆星。
第 2 關最高拿過 1 顆星。

3. completedLevels
儲存已經通關的關卡編號。

例如：

"completedLevels": [1, 2, 3]

代表第 1、2、3 關已經通關。

4. lastPlayedLevel
儲存最後一次玩的關卡。

例如：

lastPlayedLevel: 4

代表玩家最後一次玩第 4 關。

==================================================
二、初始化通關進度
==================================================

請在 script.js 建立預設進度：

let playerProgress = {
  unlockedLevel: 1,
  stars: {},
  completedLevels: [],
  lastPlayedLevel: null
};

請建立 loadProgress() 功能。

功能：

1. 網頁載入時讀取 localStorage。
2. 如果 localStorage 有資料，就載入資料。
3. 如果 localStorage 沒有資料，就使用預設進度。
4. 如果 localStorage 資料壞掉，請自動重設為預設進度。
5. 第 1 關永遠要解鎖。

請確保：

playerProgress.unlockedLevel 至少是 1。

==================================================
三、儲存通關進度
==================================================

請建立 saveProgress() 功能。

功能：

1. 把 playerProgress 轉成 JSON 字串。
2. 儲存到 localStorage 的 typingLevelGameProgress。
3. 每次完成關卡後都要呼叫 saveProgress()。
4. 每次清除進度後也要呼叫 saveProgress()。

範例：

localStorage.setItem(
  "typingLevelGameProgress",
  JSON.stringify(playerProgress)
);

==================================================
四、完成關卡後更新進度
==================================================

請建立 updateProgressAfterLevel(levelNumber, stars) 功能。

功能：

1. levelNumber 是目前完成的關卡編號。
2. stars 是本次獲得星星數。
3. 如果 stars >= 1，代表通關。
4. 通關後要把 levelNumber 加入 completedLevels。
5. 如果 completedLevels 裡已經有該關，不要重複加入。
6. 通關後解鎖下一關。
7. 如果目前是第 1 關通關，就解鎖到第 2 關。
8. 如果目前是第 2 關通關，就解鎖到第 3 關。
9. 依此類推。

解鎖邏輯：

const nextLevel = levelNumber + 1;

如果 nextLevel 大於 playerProgress.unlockedLevel，
就更新：

playerProgress.unlockedLevel = nextLevel;

但是不要超過 levels.json 裡的最大關卡數。

==================================================
五、星星紀錄更新規則
==================================================

請注意：

每一關只記錄「最高星星數」。

例如：

第一次玩第 1 關拿 3 顆星。
第二次玩第 1 關拿 1 顆星。
進度仍然要保留 3 顆星。

第一次玩第 2 關拿 1 顆星。
第二次玩第 2 關拿 2 顆星。
進度要更新成 2 顆星。

請使用這種邏輯：

const oldStars = playerProgress.stars[levelNumber] || 0;

if (stars > oldStars) {
  playerProgress.stars[levelNumber] = stars;
}

==================================================
六、沒有通關時不要解鎖
==================================================

如果 stars 是 0：

1. 不加入 completedLevels。
2. 不解鎖下一關。
3. 不更新該關星星。
4. 仍然可以記錄 lastPlayedLevel。
5. 顯示未通關結果。

==================================================
七、最後遊玩關卡
==================================================

每次開始關卡時，請更新：

playerProgress.lastPlayedLevel = currentLevel.order;

並呼叫 saveProgress()。

用途：

之後可以做「繼續挑戰」功能。

==================================================
八、關卡列表顯示進度
==================================================

請修改 renderLevelList()。

每一個關卡按鈕要顯示：

1. 關卡名稱
2. 關卡狀態
3. 星星紀錄
4. 鎖定狀態

顯示規則：

一、已鎖定關卡

如果 level.order > playerProgress.unlockedLevel：

顯示：

第 3 關：顏色單字
🔒 尚未解鎖

按鈕不能點。
加上 locked 樣式。

二、已解鎖但未通關

如果 level.order <= playerProgress.unlockedLevel，
但是 completedLevels 不包含該關：

顯示：

第 2 關：水果單字
尚未通關

按鈕可以點。
加上 unlocked 樣式。

三、已通關

如果 completedLevels 包含該關：

顯示：

第 1 關：寵物單字
已通關 ⭐⭐⭐

按鈕可以點。
加上 completed 樣式。

四、星星顯示

請建立 getStarsText(starCount) 功能。

規則：

starCount 是 3：
⭐⭐⭐

starCount 是 2：
⭐⭐

starCount 是 1：
⭐

starCount 是 0 或沒有資料：
尚未通關

==================================================
九、首頁顯示總進度
==================================================

請在 index.html 首頁區塊加入：

<div id="progressSummary"></div>

請在 script.js 建立 renderProgressSummary()。

顯示內容：

1. 已通關幾關
2. 全部共有幾關
3. 目前解鎖到第幾關
4. 總星星數

範例：

目前進度：
已通關 3 / 20 關
目前解鎖到第 4 關
總星星：6 顆

如果還沒有通關：

目前進度：
已通關 0 / 20 關
目前解鎖到第 1 關
總星星：0 顆

請在以下時機更新首頁總進度：

1. 網頁載入後
2. 回到首頁時
3. 完成關卡後
4. 清除進度後

==================================================
十、關卡頁顯示總進度
==================================================

請在 levelSection 裡加入：

<div id="levelProgressSummary"></div>

顯示內容：

目前已通關：3 / 20 關
目前總星星：6 顆

請在 renderLevelList() 時同步更新。

==================================================
十一、結果畫面顯示進度更新
==================================================

完成關卡後，resultSection 要顯示：

1. 本次答對題數
2. 本次答對率
3. 本次獲得星星
4. 是否通關
5. 目前該關最高星星
6. 是否解鎖下一關
7. 目前總進度

範例一：通關成功

本關完成：第 1 關：寵物單字

答對題數：
19 / 20

答對率：
95%

本次獲得：
⭐⭐⭐

通關結果：
恭喜通關！

進度更新：
第 2 關已解鎖！

目前最高紀錄：
⭐⭐⭐

目前總進度：
已通關 1 / 20 關
總星星：3 顆

範例二：未通關

本關完成：第 1 關：寵物單字

答對題數：
12 / 20

答對率：
60%

本次獲得：
沒有星星

通關結果：
還沒有通關，再挑戰一次！

進度更新：
下一關尚未解鎖。

目前最高紀錄：
尚未通關

目前總進度：
已通關 0 / 20 關
總星星：0 顆

==================================================
十二、清除進度功能
==================================================

請在 levelSection 加入清除進度按鈕：

<button id="resetProgressButton">清除進度</button>

功能：

1. 點擊後跳出 confirm：

確定要清除所有通關進度嗎？

2. 如果使用者按取消，不做任何事。

3. 如果使用者按確定：

- 刪除 localStorage 裡的 typingLevelGameProgress
- 重設 playerProgress
- 只解鎖第 1 關
- 清空星星
- 清空 completedLevels
- 清空 lastPlayedLevel
- 重新顯示關卡列表
- 更新首頁進度
- 顯示提示：
通關進度已清除。

==================================================
十三、回首頁功能
==================================================

如果目前還沒有回首頁按鈕，請在 levelSection 和 resultSection 加入：

<button id="backHomeButton">回首頁</button>

或依照現有結構加入回首頁按鈕。

點擊後：

1. 隱藏 levelSection。
2. 隱藏 gameSection。
3. 隱藏 resultSection。
4. 顯示 homeSection。
5. 更新 progressSummary。

==================================================
十四、繼續挑戰功能
==================================================

請在首頁新增一個按鈕：

<button id="continueButton">繼續挑戰</button>

功能：

1. 如果 playerProgress.lastPlayedLevel 有資料，而且該關已解鎖：
   - 點擊後直接進入該關

2. 如果沒有 lastPlayedLevel：
   - 點擊後進入目前 unlockedLevel 的關卡

3. 如果 unlockedLevel 找不到：
   - 回到關卡選擇畫面

4. 如果目前完全沒有進度：
   - 進入第 1 關

==================================================
十五、進度防呆
==================================================

請加入以下防呆：

1. 如果 localStorage 裡的 unlockedLevel 不是數字，重設成 1。
2. 如果 stars 不是物件，重設成 {}。
3. 如果 completedLevels 不是陣列，重設成 []。
4. 如果 unlockedLevel 小於 1，重設成 1。
5. 如果 unlockedLevel 超過最大關卡數，改成最大關卡數。
6. 如果 completedLevels 裡有不存在的關卡，請過濾掉。
7. 如果 stars 裡有不存在的關卡，也請忽略或移除。
8. 第 1 關永遠要能玩。

==================================================
十六、請建立或確認這些功能名稱
==================================================

請在 script.js 裡建立或確認以下功能：

1. loadProgress()
2. saveProgress()
3. resetProgress()
4. updateProgressAfterLevel(levelNumber, stars)
5. getStarsText(starCount)
6. getTotalStars()
7. getCompletedCount()
8. renderProgressSummary()
9. renderLevelProgressSummary()
10. renderLevelList()
11. startLevel(levelData)
12. finishLevel()
13. goHome()
14. continueGame()

==================================================
十七、CSS 樣式補強
==================================================

請在 style.css 加入或確認以下樣式：

.level-button.locked {
  opacity: 0.5;
  cursor: not-allowed;
}

.level-button.unlocked {
  cursor: pointer;
}

.level-button.completed {
  border: 2px solid #f6c343;
}

.progress-summary {
  margin-top: 16px;
  padding: 14px;
  border-radius: 16px;
  background: #fff7d6;
  color: #4a3b00;
  font-weight: bold;
}

.level-progress-summary {
  margin: 12px 0;
  padding: 12px;
  border-radius: 14px;
  background: #eef7ff;
  color: #12324a;
  font-weight: bold;
}

.result-progress-box {
  margin-top: 16px;
  padding: 14px;
  border-radius: 16px;
  background: #f5f5ff;
  color: #222;
}

.star-text {
  font-size: 1.4rem;
  letter-spacing: 2px;
}

.reset-button {
  background: #ff6b6b;
  color: #ffffff;
}

.reset-button:hover {
  background: #e85555;
}

請注意：

1. 按鈕文字一定要清楚。
2. 填滿色按鈕的文字不能看不見。
3. 鎖定關卡要明顯。
4. 已通關關卡要看得出來。
5. 手機版不能跑版。

==================================================
十八、重要規則
==================================================

1. 不要重建整個專案。
2. 不要刪除 words.json。
3. 不要刪除 levels.json。
4. 不要改變原本讀取單字的邏輯。
5. 不要建立 level-1.html。
6. 不要建立 level-2.html。
7. 不要建立每一關自己的 JS。
8. 不要建立每一關自己的 JSON。
9. 所有關卡共用 index.html。
10. 所有單字共用 words.json。
11. 所有關卡設定共用 levels.json。
12. 保持 UTF-8 編碼。
13. 不要把中文轉成 Unicode escape。
14. 不要讓中文變亂碼。
15. 不要破壞原本功能。

==================================================
十九、完成後請回報
==================================================

完成後請告訴我：

1. 修改了哪些檔案。
2. 新增了哪些通關進度功能。
3. localStorage 儲存格式。
4. 如何判斷已通關。
5. 如何判斷已解鎖。
6. 如何計算總星星。
7. 如何清除進度重新測試。
8. 如何確認重新整理後進度沒有消失。

---

## 這一步完成後，遊戲進度應該會變成這樣

首頁：
目前進度：
已通關 3 / 20 關
目前解鎖到第 4 關
總星星：6 顆

關卡列表：
第 1 關：寵物單字
已通關 ⭐⭐⭐

第 2 關：水果單字
已通關 ⭐⭐

第 3 關：顏色單字
已通關 ⭐

第 4 關：學校用品
尚未通關

第 5 關：
🔒 尚未解鎖

---

## 補充：如果 Windsurf 做完後進度還是不會存

再貼這段給 Windsurf 修正：

請幫我檢查通關進度沒有正確儲存的問題。

請確認以下事情：

1. 完成關卡後有呼叫 updateProgressAfterLevel(levelNumber, stars)。
2. updateProgressAfterLevel 裡面有呼叫 saveProgress()。
3. saveProgress() 有使用 localStorage.setItem。
4. localStorage key 是 typingLevelGameProgress。
5. 回到關卡選擇時有重新呼叫 renderLevelList()。
6. 首頁和關卡頁有重新呼叫 renderProgressSummary()。
7. 重新整理網頁時有呼叫 loadProgress()。
8. loadProgress() 讀到資料後有更新 playerProgress。
9. playerProgress 沒有在其他地方被重新覆蓋成預設值。
10. 第 1 關永遠解鎖。
11. 通關後 unlockedLevel 有增加。
12. 星星資料有存到 playerProgress.stars。
13. completedLevels 有加入通關關卡。

請不要重構整個專案，只修正通關進度儲存與讀取問題。`,
        images: [
            {
                title: "評分系統流程圖",
                src: "images/圖片7.png",
                note: "參考這張圖片了解評分系統流程"
            }
        ],
        downloads: []
    },
    {
        id: "typing-game-progress-stars",
        category: "英打遊戲教學",
        title: "第八步：把進度改成星星總數",
        description: "不要再用「通關幾關」當進度，而是改成「目前獲得星星總數」當進度。例如 20 關，每關最多 3 顆星，總共 60 顆星。",
        target: "適合想要了解進度計算的初學者。",
        steps: [
            "修改 index.html 顯示文字改成星星總數",
            "新增或確認 getTotalStars() 功能",
            "修改 updateProgressBar() 使用星星總數計算",
            "清除進度後要回到 0/60",
            "通關後要更新星星總數",
            "首頁和關卡頁的文字也要改",
            "測試進度條顯示"
        ],
        code: `第八步：把進度改成星星總數

這一步要做什麼：

不要再用「通關幾關」當進度，而是改成「目前獲得星星總數」當進度。

例如 20 關，每關最多 3 顆星：

20 關 × 3 顆星 = 總共 60 顆星

所以畫面要從：

通關進度 1/20

改成：

星星總數 2/60

如果第 1 關拿 2 顆星，進度條就顯示：

2 ÷ 60 = 約 3%

---

## 直接貼給 Windsurf 的指令

請幫我把英打闖關遊戲的「通關進度」改成「星星總數進度」。

目前畫面顯示：

通關進度 0/20

我不要用「通關幾關」來當進度了。

我要改成：

星星總數 0/60

計算方式：

如果 levels.json 總共有 20 關，
每一關最多 3 顆星，
那星星總數上限就是：

20 × 3 = 60 顆星

所以畫面要顯示：

星星總數 目前星星 / 最大星星

例如：

第 1 關拿 2 顆星：
星星總數 2/60

第 1 關拿 3 顆星，第 2 關拿 2 顆星：
星星總數 5/60

全部 20 關都拿 3 顆星：
星星總數 60/60

請只修改進度顯示和進度條計算，不要重建專案。

==================================================
一、index.html 顯示文字改成星星總數
==================================================

請確認關卡選擇畫面 levelSection 裡有這個結構：

<div class="progress-area">
  <div class="progress-bar">
    <div id="progressFill" class="progress-fill"></div>
  </div>
  <div id="progressText" class="progress-text">星星總數 0/60</div>
</div>

如果原本是：

通關進度 0/20

請改成：

星星總數 0/60

注意：

1. progressFill 還是進度條填滿元素。
2. progressText 還是進度文字。
3. 不要重複建立新的 progressFill。
4. 不要保留舊的「通關進度」文字。

==================================================
二、script.js 請新增或確認 getTotalStars()
==================================================

請在 script.js 建立或確認這個功能：

function getTotalStars() {
  if (!playerProgress.stars || typeof playerProgress.stars !== "object") {
    return 0;
  }

  return Object.values(playerProgress.stars).reduce((total, starCount) => {
    const stars = Number(starCount) || 0;
    return total + stars;
  }, 0);
}

功能說明：

1. playerProgress.stars 裡面存每一關的最高星星數。
2. 把所有關卡星星加起來。
3. 這就是目前星星總數。

例如：

{
  "1": 2,
  "2": 3,
  "3": 1
}

星星總數就是：

2 + 3 + 1 = 6

==================================================
三、script.js 請修改 updateProgressBar()
==================================================

請把原本用 completedLevels.length 計算的進度，改成用星星總數計算。

請將 updateProgressBar() 改成：

function updateProgressBar() {
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");

  if (!progressFill || !progressText) return;

  const totalLevels = Array.isArray(levels) ? levels.length : 0;
  const maxStars = totalLevels * 3;
  const totalStars = getTotalStars();

  const percent = maxStars > 0
    ? Math.round((totalStars / maxStars) * 100)
    : 0;

  progressFill.style.width = \`\${percent}%\`;
  progressText.textContent = \`星星總數 \${totalStars}/\${maxStars}\`;
}

重點：

1. 不再使用 completedLevels.length。
2. 改用 getTotalStars()。
3. 最大星星 = levels.length × 3。
4. 進度條比例 = 目前星星總數 / 最大星星。
5. 文字改成「星星總數」。

==================================================
四、清除進度後要回到 0/60
==================================================

請檢查 resetProgress()。

清除進度後，playerProgress 要重設為：

playerProgress = {
  unlockedLevel: 1,
  stars: {},
  completedLevels: [],
  lastPlayedLevel: null
};

然後呼叫：

saveProgress();
renderLevelList();
updateProgressBar();

如果 levels.json 有 20 關，畫面要顯示：

星星總數 0/60

進度條寬度要是：

0%

==================================================
五、通關後要更新星星總數
==================================================

請檢查 updateProgressAfterLevel(levelNumber, stars)。

請確認星星紀錄是存最高星星數。

規則：

1. 如果這次星星比舊星星高，要更新。
2. 如果這次星星比舊星星低，不要覆蓋。
3. 更新完後要呼叫 updateProgressBar()。

請確認有類似這段：

const levelKey = String(levelNumber);
const oldStars = Number(playerProgress.stars[levelKey] || 0);

if (stars > oldStars) {
  playerProgress.stars[levelKey] = stars;
}

saveProgress();
updateProgressBar();

範例：

第 1 關原本 2 顆星。
重玩拿 1 顆星。
星星總數仍然保持 2，不要變少。

第 1 關原本 2 顆星。
重玩拿 3 顆星。
星星總數從 2 變成 3。

==================================================
六、首頁和關卡頁的文字也要改
==================================================

如果其他地方有顯示：

通關進度
已通關幾關
目前已通關

請保留已通關資訊可以，但主要進度條文字要改成星星總數。

請把關卡選擇上方大進度條文字改成：

星星總數 0/60

不要再顯示：

通關進度 0/20

如果首頁有 progressSummary，可以顯示：

目前進度：
已通關 0 / 20 關
星星總數：0 / 60

如果關卡頁有 levelProgressSummary，可以顯示：

目前已通關：0 / 20 關
星星總數：0 / 60

==================================================
七、進度條測試
==================================================

請幫我測試以下狀況：

1. 沒有任何星星時：
星星總數 0/60
進度條 0%

2. 第 1 關拿 2 顆星時：
星星總數 2/60
進度條約 3%

3. 第 1 關拿 3 顆星時：
星星總數 3/60
進度條 5%

4. 第 1 關拿 3 顆星，第 2 關拿 2 顆星：
星星總數 5/60
進度條約 8%

5. 全部 20 關都拿 3 顆星時：
星星總數 60/60
進度條 100%

6. 清除進度後：
星星總數 0/60
進度條 0%

7. 重新整理網頁後：
星星總數不能消失。

==================================================
八、不要做的事情
==================================================

1. 不要重建整個專案。
2. 不要刪除 words.json。
3. 不要刪除 levels.json。
4. 不要改變答題邏輯。
5. 不要改變星星評分規則。
6. 不要改變關卡解鎖規則。
7. 不要建立新的關卡 HTML。
8. 不要建立新的關卡 JS。
9. 不要把中文轉成 Unicode escape。
10. 不要讓中文亂碼。

==================================================
九、完成後請回報
==================================================

完成後請告訴我：

1. 修改了哪些檔案。
2. 原本「通關進度」改成哪個文字。
3. 星星總數怎麼計算。
4. 最大星星數怎麼計算。
5. 進度條比例怎麼計算。
6. 清除進度後是否會回到 0/60。
7. 重新整理後星星總數是否會保留。

---

## 改完後你畫面應該會變成

星星總數 2/60

因為你第 1 關已經有 2 顆星。

上面的進度條也會有一點點填滿：

2 ÷ 60 = 約 3%`,
        images: [
            {
                title: "進度顯示範例",
                src: "images/圖片15-1.png",
                note: "參考這張圖片了解進度顯示"
            }
        ],
        downloads: []
    },
    {
        id: "typing-game-remove-star-pill",
        category: "英打遊戲教學",
        title: "第九步：刪除畫面左上角星星數量膠囊顯示區",
        description: "刪除畫面上方顯示「⭐ 0」的星星膠囊區塊，只刪除這個畫面顯示，不要刪除遊戲裡面的星星資料。",
        target: "適合想要了解畫面清理的初學者。",
        steps: [
            "檢查並刪除星星膠囊 HTML 區塊",
            "移除相關 JS 更新程式",
            "移除相關 CSS 樣式",
            "確認星星功能仍然正常"
        ],
        code: `第九步：刪除畫面左上角星星數量膠囊顯示區

這一步要做什麼：

刪除畫面上方顯示「⭐ 0」的星星膠囊區塊。

只刪除這個畫面顯示，不要刪除遊戲裡面的星星資料。

---

## 直接貼給 Windsurf 的指令

請幫我刪除畫面上方顯示「⭐ 0」的星星膠囊區塊。

目前畫面左上角有一個圓角膠囊，內容是：

⭐ 0

我不要顯示這個區塊。

請只刪除這個畫面顯示，不要刪除遊戲裡面的星星資料。

==================================================
一、要刪除的東西
==================================================

請檢查 index.html、script.js、style.css 中是否有類似以下內容：

1. 顯示星星數量的 HTML：

<div id="starCounter">
  ⭐ <span id="starCount">0</span>
</div>

或：

<div class="star-counter">
  ⭐ 0
</div>

或：

<div class="stars-display">
  ⭐ <span>0</span>
</div>

或任何畫面上方顯示「⭐ 0」的區塊。

請把這個區塊從畫面移除。

==================================================
二、不要刪除的東西
==================================================

請不要刪除以下功能：

1. 關卡完成後的星星評分
2. 每一關顯示的星星
3. localStorage 裡的 stars 資料
4. 星星總數進度條
5. 關卡解鎖功能
6. 通關紀錄
7. resultSection 結果畫面的星星
8. 關卡卡片上的星星

這次只刪除畫面上方那個「⭐ 0」膠囊顯示。

==================================================
三、script.js 檢查
==================================================

如果 script.js 裡面有更新這個區塊的程式，例如：

document.getElementById("starCount").textContent = totalStars;

或：

updateStarCounter();

或：

renderStarCounter();

請一併移除或停用，避免找不到元素造成錯誤。

但是請保留：

getTotalStars()
updateProgressBar()
playerProgress.stars
finishLevel()
updateProgressAfterLevel()

==================================================
四、style.css 檢查
==================================================

如果 style.css 裡面有這些樣式，請刪除：

.star-counter
.stars-display
.star-pill
.star-status
.star-count-box

或任何只用來顯示上方「⭐ 0」膠囊的樣式。

如果這些 class 也被其他功能共用，請不要亂刪，改成只移除 HTML 顯示區塊即可。

==================================================
五、完成後畫面應該要變成
==================================================

1. 左上角不要再出現「⭐ 0」。
2. 關卡選擇畫面仍然正常。
3. 星星總數進度條仍然正常。
4. 第 1 關卡片上的星星仍然正常。
5. 完成關卡後仍然會依答對率給星星。
6. 重新整理後不會出現錯誤。

==================================================
六、重要規則
==================================================

1. 不要重建整個專案。
2. 不要刪除 stars 的資料邏輯。
3. 不要清除 localStorage。
4. 不要刪除關卡卡片上的星星。
5. 不要刪除結果畫面的星星。
6. 不要改變星星評分規則。
7. 不要破壞星星總數進度條。
8. 不要把中文轉成 Unicode escape。
9. 不要讓中文亂碼。

完成後請回報：

1. 刪除了哪個 HTML 區塊。
2. 是否有移除相關 JS 更新程式。
3. 是否有移除相關 CSS。
4. 星星總數進度條是否仍然正常。

---

## 如果 Windsurf 找不到是哪一個

請幫我搜尋整個專案中所有可能顯示「⭐ 0」的地方。

請搜尋：

1. star
2. stars
3. starCount
4. starCounter
5. starDisplay
6. totalStars
7. ⭐
8. playerStars

找到後請判斷哪一個是畫面左上角的「⭐ 0」膠囊區塊。

請只刪除這個膠囊區塊，不要刪除關卡卡片、結果畫面、星星總數進度條使用到的星星功能。`,
        images: [
            {
                title: "星星膠囊顯示位置",
                src: "images/圖片9-1.png",
                note: "參考這張圖片了解要刪除的星星膠囊位置"
            }
        ],
        downloads: []
    },
    {
        id: "typing-game-wrong-practice",
        category: "英打遊戲教學",
        title: "第十步：加入結算畫面與錯題練習（連續答對2次才算熟練）",
        description: "在結算畫面加入錯題練習功能，每個錯題都要連續答對2次才算熟練，讓學生真正記住單字。",
        target: "適合想要了解錯題練習功能的初學者。",
        steps: [
            "加入錯題資料記錄變數（含熟練度）",
            "答錯時記錄錯題",
            "補強 index.html 結算畫面",
            "修改 finishLevel() 結算畫面顯示",
            "建立 renderWrongList()",
            "加入錯題練習按鈕功能",
            "實作連續答對2次邏輯",
            "錯題練習模式完成後的結算",
            "加入 CSS 樣式"
        ],
        code: `第十步：加入結算畫面與錯題練習（連續答對2次才算熟練）

這一步要做什麼：

在結算畫面加入「錯題練習」功能。
每個錯題都要連續答對2次才算熟練，讓學生真正記住單字。

---

## 設計理念

錯題練習不要只做「再打一遍」，要設計成比較像教學遊戲，讓學生真的記住。

**操作流程：**

玩家完成關卡
↓
結算畫面顯示錯題列表
↓
點「錯題練習」
↓
進入錯題練習模式
↓
畫面顯示中文
↓
學生輸入英文
↓
答對：熟練次數 +1
↓
答錯：熟練次數歸 0
↓
每個錯題連續答對 2 次後移除
↓
全部錯題都熟練
↓
顯示「錯題練習完成」

**錯題練習畫面：**

錯題練習：第 1 關 寵物單字

剩餘錯題：3 題
目前單字熟練度：1 / 2

中文：
狗

[播放發音]

請輸入英文：
_________

[送出答案]

答對時：
答對了！
熟練度 1 / 2

再次答對：
太棒了！這個單字已熟練

答錯時：
答錯了，正確答案是 dog
熟練度歸 0，再練一次

---

## 直接貼給 Windsurf 的指令

請幫我把錯題練習設計成「連續答對 2 次才算熟練」的模式。

需求：

1. 正常關卡完成後，結算畫面顯示錯題列表。
2. 如果有錯題，顯示「錯題練習」按鈕。
3. 點擊錯題練習後，只練習剛剛答錯的題目。
4. 每個錯題都要連續答對 2 次才算熟練。
5. 答對一次，該題熟練度 +1。
6. 答錯時，該題熟練度歸 0。
7. 熟練度達到 2/2 時，該題從錯題練習中移除。
8. 畫面要顯示：
   - 剩餘錯題數
   - 目前題目熟練度
   - 中文題目
   - 英文輸入框
   - 播放發音按鈕
9. 全部錯題都熟練後，顯示「錯題練習完成」。
10. 錯題練習不更新星星。
11. 錯題練習不解鎖下一關。
12. 錯題練習不覆蓋原本成績。
13. 保留原本重新挑戰與回到關卡選擇功能。

==================================================
一、錯題資料記錄（含熟練度）
==================================================

請在 script.js 加入錯題陣列：

let wrongQuestions = [];
let isWrongPracticeMode = false;

用途：

1. wrongQuestions 用來存本關答錯的題目。
2. isWrongPracticeMode 用來判斷目前是不是錯題練習模式。

每個錯題物件要包含：

{
  id: "dog",
  english: "dog",
  chinese: "狗",
  masteryCount: 0,
  requiredMastery: 2
}

masteryCount：目前熟練次數
requiredMastery：需要熟練次數（固定為2）

每次開始正常關卡時，要清空 wrongQuestions。

startLevel(levelData) 裡請加入：

wrongQuestions = [];
isWrongPracticeMode = false;

==================================================
二、答錯時記錄錯題
==================================================

請修改 submitAnswer()。

當玩家答錯時，除了 wrongCount + 1，也要把目前題目存進 wrongQuestions。

請注意：

1. 不要重複加入同一題。
2. 錯題資料要包含 english、chinese、category。
3. 如果 words.json 裡有 id，也要保留 id。
4. 初始熟練度設為 0。

範例邏輯：

if (!isCorrect) {
  wrongCount++;

  const alreadyExists = wrongQuestions.some((item) => {
    return item.id
      ? item.id === currentQuestion.id
      : item.english === currentQuestion.english;
  });

  if (!alreadyExists) {
    wrongQuestions.push({
      ...currentQuestion,
      masteryCount: 0,
      requiredMastery: 2
    });
  }
}

==================================================
三、index.html 結算畫面補強
==================================================

請確認 resultSection 裡有以下元素。

如果沒有，請補上：

<section id="resultSection" class="hidden">
  <div class="result-card">
    <h2>本關完成</h2>

    <p id="resultLevelTitle"></p>
    <p id="resultScoreText"></p>
    <p id="resultWrongText"></p>
    <p id="resultAccuracyText"></p>

    <div id="resultStars" class="result-stars"></div>
    <p id="resultPassText"></p>

    <div id="wrongListBox" class="wrong-list-box">
      <h3>錯題列表</h3>
      <div id="wrongList"></div>
    </div>

    <div class="result-buttons">
      <button id="wrongPracticeButton" type="button">錯題練習</button>
      <button id="retryLevelButton" type="button">重新挑戰</button>
      <button id="backToLevelsButton" type="button">回到關卡選擇</button>
    </div>
  </div>
</section>

注意：

1. resultWrongText 顯示答錯題數。
2. wrongListBox 顯示錯題區。
3. wrongList 顯示錯題內容。
4. wrongPracticeButton 是錯題練習按鈕。
5. 不要刪除原本結果畫面的星星與通關資料。

==================================================
四、finishLevel() 結算畫面顯示
==================================================

請修改 finishLevel()。

完成關卡後，要顯示：

1. 關卡名稱
2. 答對題數
3. 答錯題數
4. 答對率
5. 星星
6. 通關結果
7. 錯題列表
8. 錯題練習按鈕是否顯示

範例顯示：

本關完成：第 1 關：寵物單字

答對題數：
18 / 20

答錯題數：
2 題

答對率：
90%

本次獲得：
⭐⭐

通關結果：
恭喜通關！

錯題列表：
1. 狗 dog
2. 貓 cat

如果沒有錯題：

錯題列表：
太棒了，沒有錯題！

錯題練習按鈕要隱藏或 disabled。

==================================================
五、建立 renderWrongList()
==================================================

請在 script.js 建立：

function renderWrongList() {
  const wrongList = document.getElementById("wrongList");
  const wrongListBox = document.getElementById("wrongListBox");
  const wrongPracticeButton = document.getElementById("wrongPracticeButton");

  if (!wrongList || !wrongListBox || !wrongPracticeButton) return;

  if (!wrongQuestions || wrongQuestions.length === 0) {
    wrongList.innerHTML = \`<p class="no-wrong-text">太棒了，沒有錯題！</p>\`;
    wrongPracticeButton.disabled = true;
    wrongPracticeButton.classList.add("disabled");
    return;
  }

  wrongPracticeButton.disabled = false;
  wrongPracticeButton.classList.remove("disabled");

  wrongList.innerHTML = wrongQuestions.map((item, index) => {
    return \`
      <div class="wrong-item">
        <span class="wrong-number">\${index + 1}.</span>
        <span class="wrong-chinese">\${item.chinese}</span>
        <span class="wrong-answer">\${item.english}</span>
      </div>
    \`;
  }).join("");
}

注意：

1. 沒有錯題時顯示「太棒了，沒有錯題！」。
2. 沒有錯題時，錯題練習按鈕不能點。
3. 有錯題時，顯示錯題中文與正確英文。
4. 請保留 UTF-8，不要讓中文亂碼。

==================================================
六、加入錯題練習按鈕功能
==================================================

請幫 wrongPracticeButton 加上 click 事件。

點擊後：

1. 如果 wrongQuestions.length === 0，就不動作。
2. 把 currentQuestions 設定成 wrongQuestions 的隨機順序。
3. currentQuestionIndex = 0。
4. correctCount = 0。
5. wrongCount = 0。
6. isWrongPracticeMode = true。
7. 隱藏 resultSection。
8. 顯示 gameSection。
9. currentLevelTitle 顯示：
錯題練習：原本關卡名稱

10. 顯示第一題。

請建立功能：

function startWrongPractice() {
  if (!wrongQuestions || wrongQuestions.length === 0) {
    alert("目前沒有錯題可以練習。");
    return;
  }

  isWrongPracticeMode = true;
  currentQuestions = shuffleArray([...wrongQuestions]);
  currentQuestionIndex = 0;
  correctCount = 0;
  wrongCount = 0;

  document.getElementById("resultSection").classList.add("hidden");
  document.getElementById("gameSection").classList.remove("hidden");

  const currentLevelTitle = document.getElementById("currentLevelTitle");
  if (currentLevelTitle) {
    currentLevelTitle.textContent = \`錯題練習：\${currentLevel.title}\`;
  }

  showQuestion();
}

==================================================
七、實作連續答對2次邏輯
==================================================

請修改 showQuestion()。

在錯題練習模式下，要顯示：

1. 剩餘錯題數
2. 目前題目熟練度

請在 showQuestion() 加入：

if (isWrongPracticeMode) {
  const remainingWrong = wrongQuestions.filter(q => q.masteryCount < q.requiredMastery).length;
  const currentWrong = currentQuestions[currentQuestionIndex];
  const masteryText = \`熟練度：\${currentWrong.masteryCount} / \${currentWrong.requiredMastery}\`;

  // 顯示剩餘錯題數
  // 顯示目前題目熟練度
}

請修改 checkAnswer()。

在錯題練習模式下：

答對時：
1. 該題熟練度 +1
2. 顯示：答對了！熟練度 1 / 2
3. 如果熟練度達到 2/2：
   - 顯示：太棒了！這個單字已熟練
   - 該題從 wrongQuestions 移除
   - 顯示下一題

答錯時：
1. 該題熟練度歸 0
2. 顯示：答錯了，正確答案是 dog，熟練度歸 0，再練一次

範例邏輯：

if (isWrongPracticeMode) {
  const currentWrong = currentQuestions[currentQuestionIndex];

  if (isCorrect) {
    currentWrong.masteryCount++;

    if (currentWrong.masteryCount >= currentWrong.requiredMastery) {
      // 從 wrongQuestions 移除
      const index = wrongQuestions.findIndex(q => q.id === currentWrong.id);
      if (index > -1) {
        wrongQuestions.splice(index, 1);
      }

      // 顯示下一題
      nextQuestion();
    } else {
      // 顯示：答對了！熟練度 1 / 2
      // 清空輸入框，讓學生再答一次
    }
  } else {
    currentWrong.masteryCount = 0;
    // 顯示：答錯了，正確答案是 dog，熟練度歸 0，再練一次
  }
}

==================================================
八、錯題練習模式完成後的結算
==================================================

請修改 finishLevel()。

如果 isWrongPracticeMode === true，結算畫面要改成「錯題練習完成」。

錯題練習完成時：

1. 不要重新計算原關卡星星。
2. 不要更新 localStorage 的星星紀錄。
3. 不要解鎖下一關。
4. 不要影響原本通關進度。
5. 只顯示錯題練習結果。

顯示範例：

錯題練習完成

練習題數：
2 題

全部熟練：
是

通關結果：
錯題練習完成，可以回到關卡選擇或重新挑戰原關卡。

錯題練習模式下：

1. resultStars 可以顯示：
錯題練習不計算星星

2. wrongPracticeButton 可以隱藏或 disabled。
3. retryLevelButton 仍然可以重新挑戰原本關卡。
4. backToLevelsButton 可以回到關卡選擇。

==================================================
九、錯題練習時不要覆蓋 wrongQuestions
==================================================

重要：

正常關卡答錯時，可以加入 wrongQuestions。

但是錯題練習模式中，不要把錯題練習答錯的題目重新洗掉或造成資料錯亂。

建議：

1. 正常關卡開始時清空 wrongQuestions。
2. 正常關卡答錯時加入 wrongQuestions。
3. 錯題練習使用 wrongQuestions 產生 currentQuestions。
4. 錯題練習結束後不要更新星星。
5. 錯題練習結束後可以保留原 wrongQuestions，讓學生可以再練一次。

==================================================
十、重新挑戰按鈕
==================================================

請確認 retryLevelButton 的功能。

點擊重新挑戰時：

1. 使用 currentLevel 重新開始原本關卡。
2. isWrongPracticeMode = false。
3. wrongQuestions = []。
4. 題目重新隨機。
5. 星星與進度照正常關卡計算。

==================================================
十一、回到關卡選擇
==================================================

請確認 backToLevelsButton。

點擊後：

1. 隱藏 resultSection。
2. 隱藏 gameSection。
3. 顯示 levelSection。
4. isWrongPracticeMode = false。
5. 重新 renderLevelList()。
6. 更新星星總數進度條。

==================================================
十二、CSS 樣式
==================================================

請在 style.css 加入錯題列表樣式：

.wrong-list-box {
  margin-top: 18px;
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.wrong-list-box h3 {
  margin-bottom: 12px;
  color: #ffffff;
}

.wrong-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 8px 0;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.16);
  color: #ffffff;
  font-weight: bold;
}

.wrong-number {
  opacity: 0.8;
}

.wrong-chinese {
  min-width: 80px;
}

.wrong-answer {
  color: #ffd166;
}

.no-wrong-text {
  color: #ffffff;
  font-weight: bold;
}

.result-buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;
}

#wrongPracticeButton {
  background: #ffd166;
  color: #2b2100;
}

#wrongPracticeButton.disabled,
#wrongPracticeButton:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

請注意：

1. 錯題列表文字要看得清楚。
2. 英文答案可以用醒目的顏色。
3. 手機版不要跑版。
4. 按鈕文字一定要清楚。

==================================================
十三、測試需求
==================================================

請幫我測試以下情況：

1. 正常完成一關後，結算畫面會出現。
2. 答錯 2 題時，錯題列表顯示 2 題。
3. 錯題列表有中文和英文答案。
4. 點「錯題練習」後，只出現剛剛答錯的題目。
5. 錯題練習顯示剩餘錯題數。
6. 錯題練習顯示目前題目熟練度。
7. 答對一次，熟練度從 0/2 變成 1/2。
8. 答錯時，熟練度歸 0。
9. 連續答對 2 次，該題從錯題練習移除。
10. 全部錯題都熟練後，顯示「錯題練習完成」。
11. 錯題練習不會更新星星。
12. 錯題練習不會解鎖下一關。
13. 沒有錯題時，顯示「太棒了，沒有錯題！」。
14. 沒有錯題時，錯題練習按鈕不能點。
15. 重新挑戰會重新開始原關卡。
16. 回到關卡選擇後，星星總數進度條正常。
17. 發音功能在錯題練習時也可以正常使用。

==================================================
十四、不要做的事情
==================================================

1. 不要重建整個專案。
2. 不要刪除發音功能。
3. 不要刪除星星總數進度條。
4. 不要刪除清除進度功能。
5. 不要改變 words.json 格式。
6. 不要改變 levels.json 格式。
7. 不要建立新的 HTML 關卡頁。
8. 不要建立新的 JS 關卡檔。
9. 不要把錯題另外存成新的 JSON。
10. 不要把錯題存到 Google Sheet。
11. 不要把中文轉成 Unicode escape。
12. 不要讓中文亂碼。

==================================================
十五、完成後請回報
==================================================

完成後請告訴我：

1. 修改了哪些檔案。
2. 新增了哪些結算畫面內容。
3. 錯題資料存在哪個變數。
4. 錯題練習按鈕 id 是什麼。
5. 錯題練習如何開始。
6. 錯題練習為什麼不會影響星星。
7. 沒有錯題時畫面怎麼顯示。
8. 連續答對2次的邏輯是否正常。

---

## 完成後畫面流程

玩家完成一關
↓
進入結算畫面
↓
顯示答對、答錯、答對率、星星
↓
如果有錯題，顯示錯題列表
↓
點「錯題練習」
↓
只練習剛剛答錯的題目
↓
每題要連續答對2次
↓
答對一次：熟練度 +1
↓
答錯：熟練度歸 0
↓
熟練度達到2/2：該題移除
↓
全部錯題都熟練
↓
顯示「錯題練習完成」
↓
不更新星星、不解鎖關卡

---

## 如果錯題練習沒有出現題目，再貼這段修正

請幫我檢查為什麼錯題練習沒有題目。

請檢查：

1. submitAnswer() 答錯時是否有把 currentQuestion 加入 wrongQuestions。
2. wrongQuestions 是否在正常關卡開始時才清空。
3. wrongQuestions 是否沒有被 finishLevel() 清空。
4. wrongPracticeButton 是否有 click 事件。
5. startWrongPractice() 是否有把 currentQuestions 設定成 wrongQuestions。
6. currentQuestionIndex 是否有重設成 0。
7. showQuestion() 是否可以正常顯示 currentQuestions[0]。
8. 錯題練習模式 isWrongPracticeMode 是否有設成 true。
9. resultSection 是否有隱藏。
10. gameSection 是否有顯示。

請不要重構整個專案，只修正錯題練習沒有題目的問題。`,
        images: [
            {
                title: "錯題練習畫面範例",
                src: "images/圖片12-1.png",
                note: "參考這張圖片了解錯題練習畫面"
            },
            {
                title: "錯題練習流程",
                src: "images/圖片12.png",
                note: "參考這張圖片了解錯題練習流程"
            }
        ],
        downloads: []
    },
    {
        id: "typing-game-hint-system",
        category: "英打遊戲教學",
        title: "第十一步：加入提示系統",
        description: "建立提示按鈕，讓學生在不知道單字拼法時可以按提示，顯示第一個字母，其餘用底線代替。",
        target: "適合想要了解提示系統的初學者。",
        steps: [
            "新增提示按鈕",
            "建立 hintUsed 變數",
            "建立 showWordHint() 函式",
            "修改 showQuestion() 重設提示狀態",
            "綁定提示按鈕事件"
        ],
        code: `第十一步：加入提示系統

需求：

學生如果不會拼單字，可以按提示按鈕。

規則：

==================================================
一、新增提示按鈕
==================================================

新增提示按鈕

id：
hintButton

按鈕文字：
提示一下

位置：
放在「送出答案」按鈕旁邊。

==================================================
二、提示規則
==================================================

每一題只能提示一次。

第一次按提示：

1. 扣 1 顆愛心。
2. 顯示單字提示。
3. 本題不能再重複扣愛心提示。

第二次再按：

顯示：
本題已經提示過了！

不再扣愛心。

==================================================
三、提示顯示規則
==================================================

英文單字：

第一個字母顯示。
後面全部變成底線。

範例：

dog
顯示：
d _ _

cat
顯示：
c _ _

apple
顯示：
a _ _ _ _

banana
顯示：
b _ _ _ _ _

teacher
顯示：
t _ _ _ _ _ _

==================================================
四、建立變數
==================================================

請建立變數：

let hintUsed = false;

用途：
記錄本題是否已經使用提示。

開始新題時：
hintUsed = false

==================================================
五、建立函式 showWordHint()
==================================================

請建立函式：

function showWordHint() {
  // 取得目前題目
  const currentQuestion = currentQuestions[currentQuestionIndex];
  
  // 判斷是否已經提示過
  if (hintUsed) {
    // 顯示已提示訊息
    messageDisplay.textContent = "本題已經提示過了！";
    return;
  }
  
  // 還沒提示過
  // 扣 1 顆愛心
  currentHearts--;
  
  // 更新愛心畫面
  updateHeartsDisplay();
  
  // 將 hintUsed 設為 true
  hintUsed = true;
  
  // 顯示英文提示
  const word = currentQuestion.word;
  const hint = word[0] + " " + "_ ".repeat(word.length - 1).trim();
  
  // 顯示提示訊息
  messageDisplay.textContent = \`提示：\${hint}\`;
  
  // 如果愛心歸零
  if (currentHearts <= 0) {
    messageDisplay.textContent = "愛心用完了！";
    // 目前先不要進入失敗結算
    // 下一步再做
  }
}

功能：

1. 取得目前題目：
currentQuestions[currentQuestionIndex]

2. 判斷是否已經提示過。

如果已提示：

顯示：
本題已經提示過了！

直接 return。

如果還沒提示：

1. 扣 1 顆愛心。
2. 更新愛心畫面。
3. 將 hintUsed 設為 true。
4. 顯示英文提示。

提示格式：
只顯示第一個字母。
其餘字母變成：_

範例：
dog → d _ _
apple → a _ _ _ _
study → s _ _ _ _

提示顯示位置：
id：messageDisplay

範例：
提示：d _ _

如果扣完愛心變成 0：
顯示：
愛心用完了！

==================================================
六、修改 showQuestion()
==================================================

請修改 showQuestion()。

開始新題時：

1. hintUsed 重設為 false。
2. 清空提示訊息。

範例：

function showQuestion() {
  // 取得目前題目
  const currentQuestion = currentQuestions[currentQuestionIndex];
  
  // 重設提示狀態
  hintUsed = false;
  
  // 清空提示訊息
  messageDisplay.textContent = "";
  
  // ... 其他原本的顯示邏輯
}

==================================================
七、綁定按鈕
==================================================

請綁定按鈕：

hintButton

點擊後執行：
showWordHint()

範例：

hintButton.addEventListener('click', showWordHint);

==================================================
八、重要規則
==================================================

1. 每一題只能提示一次。
2. 提示會扣 1 顆愛心。
3. 提示顯示第一個字母，其餘用底線。
4. 第二次按提示不會再扣愛心。
5. 愛心歸零顯示「愛心用完了！」。
6. 開始新題時重置提示狀態。
7. 所有功能寫在 script.js。
8. 請加中文註解。`,
        images: [
            {
                title: "提示按鈕位置",
                src: "images/圖片7.png",
                note: "參考這張圖片了解提示按鈕位置"
            }
        ],
        downloads: []
    },
    {
        id: "typing-game-failure-result",
        category: "英打遊戲教學",
        title: "第十二步：加入失敗與結算畫面",
        description: "建立失敗處理和結算畫面，愛心歸零會挑戰失敗，完成題目會進入結算畫面顯示分數統計。",
        target: "適合想要了解失敗處理和結算邏輯的初學者。",
        steps: [
            "建立 failLevel() 函式",
            "修改 checkAnswer() 處理愛心歸零",
            "修改 showWordHint() 處理愛心歸零",
            "建立 completeLevel() 函式",
            "修改 nextQuestion() 呼叫結算",
            "建立重新挑戰按鈕",
            "建立返回關卡選單按鈕"
        ],
        code: `第十二步：加入失敗與結算畫面

目前已經有：
1. 答對加分
2. 答錯扣愛心
3. 提示扣愛心
4. 下一題功能

現在要加入：

1. 愛心歸零會挑戰失敗。
2. 完成 20 題會進入結算畫面。
3. 結算畫面顯示分數統計。

==================================================
一、建立函式 failLevel()
==================================================

請建立函式：

function failLevel(reason) {
  // 隱藏遊戲區
  gameSection.classList.add('hidden');
  
  // 顯示結算區
  resultSection.classList.remove('hidden');
  
  // 顯示挑戰失敗訊息
  if (reason === 'hearts') {
    resultTitle.textContent = '挑戰失敗：愛心用完了！';
  }
  
  // 不算通關
  // 不解鎖下一關
}

功能：

1. 隱藏遊戲區 gameSection。
2. 顯示結算區 resultSection。
3. 顯示挑戰失敗訊息。
4. 不算通關。
5. 不解鎖下一關。

reason 可以是：
hearts - 代表愛心用完

顯示文字：
挑戰失敗：愛心用完了！

==================================================
二、修改 checkAnswer()
==================================================

請修改 checkAnswer()。

當答錯扣愛心後：

如果 currentHearts <= 0

呼叫：
failLevel("hearts")

範例：

if (!isCorrect) {
  wrongCount++;
  currentHearts--;
  updateHeartsDisplay();
  
  // 如果愛心歸零
  if (currentHearts <= 0) {
    failLevel("hearts");
    return;
  }
  
  // ... 其他答錯處理
}

==================================================
三、修改 showWordHint()
==================================================

請修改 showWordHint()。

當提示扣愛心後：

如果 currentHearts <= 0

呼叫：
failLevel("hearts")

範例：

function showWordHint() {
  // ... 提示邏輯
  
  currentHearts--;
  updateHeartsDisplay();
  
  // 如果愛心歸零
  if (currentHearts <= 0) {
    failLevel("hearts");
    return;
  }
  
  // ... 顯示提示
}

==================================================
四、建立函式 completeLevel()
==================================================

請建立函式：

function completeLevel() {
  // 隱藏遊戲區
  gameSection.classList.add('hidden');
  
  // 顯示結算區
  resultSection.classList.remove('hidden');
  
  // 顯示關卡完成
  resultTitle.textContent = '關卡完成';
  
  // 計算正確率
  const accuracy = Math.round((correctCount / currentQuestions.length) * 100);
  
  // 顯示最終分數
  finalScore.textContent = \`最終分數：\${score}\`;
  
  // 顯示答對題數
  finalCorrect.textContent = \`答對題數：\${correctCount} / \${currentQuestions.length}\`;
  
  // 顯示答錯題數
  finalWrong.textContent = \`答錯題數：\${wrongCount}\`;
  
  // 顯示正確率
  finalAccuracy.textContent = \`正確率：\${accuracy}%\`;
}

功能：

1. 完成全部題目後執行。
2. 隱藏遊戲區 gameSection。
3. 顯示結算區 resultSection。
4. 顯示：
   - 關卡完成
   - 最終分數
   - 答對題數
   - 答錯題數
   - 正確率

正確率計算：
correctCount / currentQuestions.length * 100

四捨五入成整數。

==================================================
五、修改 nextQuestion()
==================================================

請修改 nextQuestion()。

如果沒有下一題：

不要 alert。

改成呼叫：
completeLevel()

範例：

function nextQuestion() {
  currentQuestionIndex++;
  
  // 如果還有下一題
  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    // 沒有下一題，進入結算
    completeLevel();
  }
}

==================================================
六、結算畫面顯示
==================================================

結算畫面顯示到以下 id：

finalScore - 最終分數
finalCorrect - 答對題數
finalWrong - 答錯題數
finalAccuracy - 正確率

請在 index.html 確認有這些元素：

<p id="finalScore"></p>
<p id="finalCorrect"></p>
<p id="finalWrong"></p>
<p id="finalAccuracy"></p>

==================================================
七、重新挑戰按鈕
==================================================

重新挑戰按鈕：

id：
restartButton

點擊後：

重新開始目前關卡。

呼叫：
startLevel(currentLevel.id)

範例：

restartButton.addEventListener('click', function() {
  startLevel(currentLevel.id);
});

==================================================
八、返回關卡選單按鈕
==================================================

返回關卡選單按鈕：

id：
resultBackButton

點擊後：

顯示關卡選單。
隱藏首頁、遊戲區、結算區。

範例：

resultBackButton.addEventListener('click', function() {
  // 隱藏結算區
  resultSection.classList.add('hidden');
  
  // 顯示關卡選單
  levelSection.classList.remove('hidden');
  
  // 重新渲染關卡列表
  renderLevelList();
});

==================================================
九、重要規則
==================================================

1. 愛心歸零會挑戰失敗。
2. 完成題目會進入結算畫面。
3. 失敗不算通關，不解鎖下一關。
4. 正確率四捨五入成整數。
5. 重新挑戰會重新開始目前關卡。
6. 返回關卡選單會重新渲染關卡列表。
7. 所有功能寫在 script.js。
8. 請加中文註解。`,
        images: [
            {
                title: "結算畫面範例",
                src: "images/圖片12.png",
                note: "參考這張圖片了解結算畫面"
            }
        ],
        downloads: []
    },
    {
        id: "typing-game-typing-sound",
        category: "英打遊戲教學",
        title: "第十三步：加入輸入打字音效",
        description: "使用 Web Audio API 建立打字音效，讓學生在輸入英文時每按一個字母就播放短音效，不需要額外音檔。",
        target: "適合想要了解 Web Audio API 音效的初學者。",
        steps: [
            "加入音效變數",
            "建立 initAudioContext()",
            "建立 playTypingSound()",
            "在 answerInput 加入 keydown 音效",
            "手機瀏覽器防呆"
        ],
        code: `第十三步：加入輸入打字音效

這一步要做什麼：

只加入「輸入英文時的打字音效」。
先不要做答對音效、答錯音效，只處理學生在輸入框打字時會有聲音。

---

## 直接貼給 Windsurf 的指令

請幫我在英打闖關遊戲中加入「輸入打字音效」。

這次只做一件事：

玩家在英文輸入框 answerInput 打字時，每按一個英文字母，就播放一個短短的打字音效。

目前專案架構：

index.html
style.css
script.js
data/
  words.json
  levels.json

請不要重建專案。
請不要建立新的 HTML 關卡頁。
請不要建立新的 JS 關卡檔。
請不要新增 mp3。
請不要新增 audio 資料夾。
請使用瀏覽器內建 Web Audio API 產生音效。

==================================================
一、這一步要做什麼
==================================================

我要讓學生輸入英文答案時有打字聲。

需求：

1. 玩家在 answerInput 輸入英文時播放短音效。
2. 每按一個英文字母播放一次。
3. Enter 不要播放音效。
4. Backspace 不要播放音效。
5. Shift、Ctrl、Alt、方向鍵不要播放音效。
6. 音效要小聲，不要太吵。
7. 不要影響原本 Enter 送出答案功能。
8. 不要影響發音功能。
9. 不要影響星星、通關、錯題練習。

==================================================
二、script.js 加入音效變數
==================================================

請在 script.js 上方遊戲狀態變數區加入：

let soundEnabled = true;
let audioContext = null;

==================================================
三、建立 initAudioContext()
==================================================

請在 script.js 加入：

function initAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      console.warn("此瀏覽器不支援打字音效");
      return;
    }

    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

==================================================
四、建立 playTypingSound()
==================================================

請在 script.js 加入：

function playTypingSound() {
  if (!soundEnabled) return;

  initAudioContext();

  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(520, audioContext.currentTime);

  gainNode.gain.setValueAtTime(0.025, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.04
  );

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.04);
}

功能說明：

1. 520 是音高。
2. 0.04 是音效時間，很短。
3. 0.025 是音量，很小聲。
4. square 會比較像短促打字聲。
5. 不需要任何音檔。

==================================================
五、在 answerInput 加入 keydown 音效
==================================================

請找到原本 answerInput 的事件設定。

請加入以下程式：

const answerInput = document.getElementById("answerInput");

if (answerInput) {
  answerInput.addEventListener("keydown", (event) => {
    const ignoredKeys = [
      "Backspace",
      "Delete",
      "Shift",
      "Control",
      "Alt",
      "Meta",
      "Tab",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "CapsLock",
      "Escape"
    ];

    if (ignoredKeys.includes(event.key)) {
      return;
    }

    if (event.key.length === 1) {
      playTypingSound();
    }
  });
}

注意：

1. 如果原本已經有 answerInput 的 keydown 事件，請整合進原本事件，不要讓 Enter 送出失效。
2. Enter 原本如果可以送出答案，要繼續保留。
3. 只有 event.key.length === 1 的文字鍵才播放音效。
4. Backspace、Enter、Shift 不播放。

==================================================
六、手機瀏覽器防呆
==================================================

手機瀏覽器可能需要使用者先點擊頁面，才能播放音效。

請在以下地方加入：

initAudioContext();

建議加入位置：

1. startGameButton 點擊時
2. startLevel(levelData) 開始關卡時
3. answerInput 第一次 keydown 時

例如：

startGameButton.addEventListener("click", () => {
  initAudioContext();
  // 原本開始遊戲功能保留
});

在 startLevel(levelData) 裡加入：

initAudioContext();

==================================================
七、不要和發音功能衝突
==================================================

如果專案已經有英文發音功能 speakWord()，請保留。

打字音效使用：
Web Audio API

英文發音使用：
SpeechSynthesis

兩個功能不要合併。

請不要刪除：

1. speakWord()
2. speakButton
3. SpeechSynthesisUtterance

==================================================
八、測試需求
==================================================

請幫我測試：

1. 點進關卡後，answerInput 可以正常輸入。
2. 輸入 a、b、c 時會播放短音效。
3. 按 Enter 不會播放打字音效。
4. 按 Enter 仍然可以送出答案。
5. 按 Backspace 不播放音效。
6. 按方向鍵不播放音效。
7. 發音按鈕仍然可以正常播放英文發音。
8. 星星、通關、錯題練習不受影響。
9. 手機版第一次點擊後可以播放音效。
10. 如果瀏覽器不支援 Web Audio API，不會讓遊戲壞掉。

==================================================
九、不要做的事情
==================================================

1. 不要新增 mp3。
2. 不要新增 audio 資料夾。
3. 不要刪除發音功能。
4. 不要刪除錯題練習。
5. 不要刪除星星總數進度條。
6. 不要修改 words.json。
7. 不要修改 levels.json。
8. 不要改變答題邏輯。
9. 不要改變星星評分規則。
10. 不要把中文轉成 Unicode escape。
11. 不要讓中文亂碼。

==================================================
十、完成後請回報
==================================================

完成後請告訴我：

1. 修改了哪些檔案。
2. 打字音效加在哪個輸入框。
3. 使用哪個 API 產生音效。
4. 哪些按鍵不會播放音效。
5. 是否有保留 Enter 送出答案功能。
6. 是否有保留發音功能。

---

## 如果你只想補最小程式碼

可以再貼這段給 Windsurf：

請只幫我在 answerInput 輸入文字時加入打字音效。

請使用 Web Audio API，不要新增 mp3。

請加入：

1. initAudioContext()
2. playTypingSound()
3. answerInput keydown 事件

只有一般文字鍵播放音效。

不要讓 Enter、Backspace、Shift、Ctrl、方向鍵播放音效。

請保留 Enter 送出答案功能。
請不要改其他遊戲功能。

完成後，學生每打一個英文字母就會有短短的打字聲。`,
        images: [],
        downloads: [
            {
                title: "打字音效範例",
                src: "sounds/打字.mp3",
                filename: "打字.mp3",
                note: "參考這個音效檔了解打字聲音（實作時使用 Web Audio API 產生，不需要下載此檔案）"
            }
        ]
    },
    {
        id: "typing-game-background-image",
        category: "英打遊戲教學",
        title: "第十四步：套用背景圖片",
        description: "將可愛背景圖片套用到整個英打闖關遊戲網站，讓畫面更夢幻可愛，同時確保文字可讀性。",
        target: "適合想要了解背景圖片套用的初學者。",
        steps: [
            "建立 images 資料夾",
            "放置背景圖片",
            "在 style.css 套用背景圖",
            "加入半透明遮罩或卡片底色",
            "調整文字可讀性",
            "手機版調整"
        ],
        code: `第十四步：套用背景圖片

這一步要做什麼：

把你剛剛生成的可愛背景圖片，正式套用到英打闖關遊戲裡。

這次要做的是：
把我選好的背景圖，套用到目前的遊戲畫面中，讓整個網站看起來更可愛、更完整。

請不要重建專案。
請不要刪除原本功能。
請只處理背景圖片套用與相關版面調整。

目前專案架構是：

typing-level-game/
├── index.html
├── style.css
├── script.js
├── data/
│   ├── words.json
│   └── levels.json
├── sounds/
│   └── 打字.MP3
└── images/
    └── background.png

如果 images 資料夾還沒有建立，請幫我建立。

==================================================
一、背景圖片檔案位置
==================================================

請提醒我把背景圖片放到：

images/background.png

如果我目前的背景檔案名稱不是 background.png，
請幫我統一改成比較穩定的英文檔名：

background.png

注意：

1. 不要直接使用 C 槽絕對路徑。
2. 網頁要使用相對路徑：
   images/background.png
3. 請不要使用太長或中文檔名當正式套用檔名，避免部署後讀取問題。
4. 如果目前已經有其他背景圖，請改成新的這張。

==================================================
二、套用範圍
==================================================

我要把這張背景圖套用在整個網站主畫面。

請優先套用到：

1. body
2. 或主要外層容器

需求：

1. 首頁 homeSection 要看得到背景圖
2. 關卡選擇頁 levelSection 要看得到背景圖
3. 遊戲頁 gameSection 要看得到背景圖
4. 結算頁 resultSection 要看得到背景圖
5. 排除障礙頁 troubleshootingSection 也要維持同一風格

也就是整個遊戲網站都共用這張背景圖。

==================================================
三、style.css 套用背景圖片
==================================================

請在 style.css 中幫我整理 body 背景設定。

請加入或修改成類似以下方式：

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Noto Sans TC", "Microsoft JhengHei", sans-serif;
  background-image: url("images/background.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  background-color: #0f1d4d;
  color: #ffffff;
}

功能說明：

1. background-image：
   套用 images/background.png

2. background-repeat: no-repeat;
   不要重複平鋪

3. background-position: center center;
   置中顯示

4. background-size: cover;
   背景圖鋪滿畫面

5. background-attachment: fixed;
   背景固定，看起來比較漂亮

6. background-color:
   如果圖片一時沒讀到，至少還有深藍色底色

==================================================
四、避免背景太花，影響文字閱讀
==================================================

因為背景圖比較夢幻、比較亮，請幫我加上半透明遮罩或卡片底色，讓文字清楚一點。

請選擇以下其中一種方式，優先使用不破壞版面的做法。

方式一：在 body 外加遮罩層

可以在 body 或主要容器上加一層深色透明遮罩。

例如：

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background: rgba(8, 18, 60, 0.35);
  pointer-events: none;
  z-index: -1;
}

如果這種做法會影響層級，請改用方式二。

方式二：讓主要卡片或區塊有半透明背景

例如：

.home-card,
.level-panel,
.game-panel,
.result-card,
.troubleshooting-card {
  background: rgba(10, 20, 55, 0.45);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

請依照目前專案實際 class 名稱調整，
但目標是：

1. 文字清楚
2. 按鈕清楚
3. 不要被背景吃掉
4. 卡片看起來像漂浮在夢幻背景上

==================================================
五、按鈕與文字可讀性調整
==================================================

請特別幫我檢查以下文字可讀性：

1. 網站標題
2. 選擇關卡
3. 星星總數
4. 清除進度按鈕
5. 返回首頁按鈕
6. 關卡卡片數字
7. 鎖頭圖示
8. 錯題練習按鈕
9. 播放發音按鈕
10. 排除障礙按鈕

請確保：

1. 白色字要清楚
2. 填滿色按鈕上的字要清楚
3. 不可以因為背景變亮就看不到文字
4. 必要時請加入 text-shadow

例如：

h1, h2, h3, .progress-text, .level-number {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
}

==================================================
六、關卡卡片不要被背景吃掉
==================================================

目前關卡卡片很多，請確認背景圖套上後，卡片仍然清楚。

請幫我檢查：

1. 已解鎖關卡卡片
2. 已通關關卡卡片
3. 鎖定關卡卡片

建議樣式：

.level-button {
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
}

.level-button.unlocked,
.level-button.completed {
  background: linear-gradient(180deg, #48c6ff, #22d3ee);
  border: 2px solid #ffd54a;
}

.level-button.locked {
  background: rgba(40, 48, 70, 0.7);
}

請保持原本關卡邏輯不變，只強化背景套用後的可讀性。

==================================================
七、如果只想套用在特定頁面，也請整理好
==================================================

如果目前整站共用背景不方便，
請改成讓以下區塊共用背景風格：

1. homeSection
2. levelSection
3. gameSection
4. resultSection
5. troubleshootingSection

例如：

#homeSection,
#levelSection,
#gameSection,
#resultSection,
#troubleshootingSection {
  min-height: 100vh;
  background-image: url("images/background.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

但如果 body 直接套用比較乾淨，優先套用 body。

==================================================
八、手機版也要正常
==================================================

請幫我確認手機版背景圖片也正常顯示。

需求：

1. 手機版不要背景變形太嚴重
2. 手機版不要水平捲動
3. 文字仍然清楚
4. 關卡卡片仍然清楚
5. 按鈕不要看不見

如果 background-attachment: fixed 在手機有問題，
請在手機版 media query 裡調整：

@media (max-width: 768px) {
  body {
    background-attachment: scroll;
  }
}

==================================================
九、不要做的事情
==================================================

1. 不要重建整個專案
2. 不要刪除 words.json
3. 不要刪除 levels.json
4. 不要刪除打字音效
5. 不要刪除英文發音功能
6. 不要刪除星星總數進度條
7. 不要刪除錯題練習
8. 不要刪除排除障礙區塊
9. 不要改變關卡解鎖邏輯
10. 不要改變星星評分規則
11. 不要把中文轉成 Unicode escape
12. 不要讓中文亂碼

==================================================
十、完成後請回報
==================================================

完成後請告訴我：

1. 是否建立 images 資料夾
2. 背景圖片應該放在哪裡
3. style.css 哪裡套用了背景圖
4. 是套用在 body 還是各 section
5. 是否有加遮罩或半透明卡片底
6. 手機版是否有調整背景顯示
7. 是否有檢查文字清楚度

---

# 你自己要做的動作

你要把背景圖放到專案裡：

typing-level-game/images/background.png

如果你現在的檔名不是 \`background.png\`，建議你改名，這樣最穩定。

---

# 最後專案建議長這樣

typing-level-game/
├── index.html
├── style.css
├── script.js
├── data/
│   ├── words.json
│   └── levels.json
├── sounds/
│   └── 打字.MP3
└── images/
    └── background.png`,
        images: [
            {
                title: "背景圖片範例",
                src: "images/圖片14.png",
                note: "參考這張圖片了解背景風格"
            }
        ],
        downloads: [
            {
                title: "背景圖片下載",
                src: "images/圖片14.png",
                filename: "background.png",
                note: "下載這張背景圖片並放到 images 資料夾中"
            }
        ]
    },
    {
        id: "typing-game-appearance-beautification",
        category: "英打遊戲教學",
        title: "第十五步：整理所有網頁外觀排版美化",
        description: "統一美化所有畫面，讓網站看起來像一個完整、可愛、適合學生使用的英打闖關遊戲，包含玻璃卡片風格、按鈕美化、手機版調整。",
        target: "適合想要了解網頁美化的初學者。",
        steps: [
            "套用背景圖片",
            "統一頁面容器",
            "統一玻璃卡片風格",
            "標題美化",
            "首頁排版",
            "關卡選擇頁排版",
            "星星總數進度條美化",
            "遊戲答題頁美化",
            "所有按鈕統一美化",
            "結算畫面美化",
            "錯題練習美化",
            "手機版整體修正"
        ],
        code: `第十五步：整理所有網頁外觀排版美化

請幫我整理英打闖關遊戲所有網頁外觀與排版，統一美化所有畫面。

【背景設定】
  - body 設定背景圖片：**images/background.png**
  - background-repeat：**no-repeat**
  - background-position：**center center**
  - background-size：**cover**
  - background-attachment：**fixed**
  - background-color：**#0f1d4d**
  - color：**#ffffff**
  - 手機版 background-attachment：**scroll**

【頁面容器】
  - #homeSection, #levelSection, #gameSection, #resultSection, #troubleshootingSection
  - min-height：**100vh**
  - padding：**32px 20px**
  - box-sizing：**border-box**

【玻璃卡片風格】
  - .home-card, .level-panel, .game-card, .game-panel, .result-card, .troubleshooting-card
  - width：**min(920px, 94%)**
  - margin：**0 auto**
  - padding：**28px**
  - border-radius：**28px**
  - background：**rgba(10, 20, 55, 0.48)**
  - border：**1px solid rgba(255, 255, 255, 0.22)**
  - box-shadow：**0 18px 45px rgba(0, 0, 0, 0.28)**
  - backdrop-filter：**blur(8px)**

【標題樣式】
  - h1：font-size **clamp(2.2rem, 5vw, 4rem)**, text-align **center**, color **#ffffff**, text-shadow
  - h2：font-size **clamp(1.5rem, 3vw, 2.4rem)**, text-align **center**, color **#ffffff**, text-shadow
  - h3：color **#ffd166**
  - p：line-height **1.7**

【按鈕群組】
  - .home-actions, .button-group
  - display：**flex**, justify-content：**center**, align-items：**center**
  - gap：**14px**, flex-wrap：**wrap**
  - margin-top：**24px**

【關卡列表】
  - #levelList：width **min(980px, 94%)**, display **grid**, grid-template-columns **repeat(auto-fit, minmax(150px, 1fr))**, gap **18px**
  - .level-button：min-height **120px**, border-radius **24px**, cursor **pointer**, transition
  - .level-button.unlocked/.completed：background **linear-gradient**, border-color **#ffdd4a**
  - .level-button.locked：background **rgba(40, 48, 70, 0.78)**, cursor **not-allowed**
  - .level-number：font-size **2.3rem**, text-shadow
  - .level-stars：margin-top **8px**, font-size **1.2rem**

【進度條】
  - .progress-area：width **min(520px, 90%)**, text-align **center**
  - .progress-bar：height **20px**, border-radius **999px**, background **rgba(255, 255, 255, 0.22)**
  - .progress-fill：background **linear-gradient(90deg, #ff6fb1, #ffd166)**, transition **width**
  - .progress-text：font-size **1.25rem**, font-weight **bold**, text-shadow

【遊戲答題頁】
  - #questionChinese：font-size **clamp(2.4rem, 7vw, 5rem)**, font-weight **900**, text-shadow
  - #answerInput：width **min(520px, 90%)**, padding **16px 20px**, border-radius **18px**, background **rgba(255, 255, 255, 0.92)**
  - #answerInput:focus：border-color **#ffd166**, box-shadow

【按鈕樣式】
  - button：border-radius **999px**, padding **12px 22px**, font-weight **bold**, cursor **pointer**, transition
  - 主要按鈕：background **linear-gradient(180deg, #ffd166, #ffb703)**, color **#2b2100**
  - 返回按鈕：background **rgba(255, 255, 255, 0.22)**, color **#ffffff**
  - 清除按鈕：background **rgba(255, 107, 107, 0.9)**, color **#ffffff**

【發音按鈕】
  - #speakButton：display **block**, margin **12px auto**, background **linear-gradient(180deg, #bde0fe, #8ecae6)**, color **#073b4c**

【結算畫面】
  - .result-card：text-align **center**
  - .result-stars：font-size **2.2rem**, letter-spacing **4px**
  - .pass-text：color **#80ed99**
  - .fail-text：color **#ffccd5**
  - .result-buttons：display **flex**, justify-content **center**, flex-wrap **wrap**, gap **14px**

【錯題列表】
  - .wrong-list-box：background **rgba(255, 255, 255, 0.13)**, border-radius **22px**
  - .wrong-item：display **flex**, background **rgba(255, 255, 255, 0.16)**, gap **12px**
  - .wrong-answer：color **#ffd166**

【排除障礙頁】
  - .troubleshooting-list：display **grid**, gap **16px**
  - .troubleshooting-item：padding **18px**, background **rgba(255, 255, 255, 0.14)**, border-radius **18px**
  - .troubleshooting-item h3：color **#ffd166**

【隱藏區塊】
  - .hidden：display **none !important**

【手機版調整】
  - padding：**22px 14px**
  - 卡片 width：**94%**, padding：**20px**
  - #levelList：grid-template-columns **repeat(2, minmax(120px, 1fr))**
  - #answerInput：width **92%**, font-size **1.2rem**
  - 按鈕：flex-direction **column**, width **100%**
  - 小螢幕：grid-template-columns **1fr**

【避免跑版】
  - *：box-sizing **border-box**
  - html, body：width **100%**, overflow-x **hidden**
  - img：max-width **100%**, height **auto**

【重要規則】
  - **不要重建專案**
  - **不要刪除功能**
  - **不要改變遊戲邏輯**
  - **只整理外觀、排版、顏色**
  - **保持 UTF-8 編碼**
  - **請加中文註解**`,
        images: [
            {
                title: "美化前範例",
                src: "images/圖片15-1.png",
                note: "參考這張圖片了解美化前的樣子"
            },
            {
                title: "美化後範例",
                src: "images/圖片15-2.png",
                note: "參考這張圖片了解美化後的樣子"
            }
        ],
        downloads: []
    },
    {
        id: "typing-game-bug-checking",
        category: "英打遊戲教學",
        title: "第十六步：全面檢查所有 BUG 並修復",
        description: "全面檢查專案中的所有 BUG，包括檔案存在性、HTML 結構、CSS 顯示、JSON 格式、資料讀取、關卡選擇、星星進度條、localStorage、答題功能、結算畫面、錯題練習、發音、打字音效、排除障礙、返回首頁、清除進度、背景圖片、Console 錯誤、中文亂碼等問題。",
        target: "適合想要學習 BUG 檢查與修復的初學者。",
        steps: [
            "檢查檔案是否存在",
            "檢查 HTML 結構",
            "檢查 CSS 顯示問題",
            "檢查 JSON 格式",
            "檢查資料讀取 BUG",
            "檢查關卡選擇 BUG",
            "檢查星星總數進度條 BUG",
            "檢查 localStorage 進度 BUG",
            "檢查答題功能 BUG",
            "檢查星星評分 BUG",
            "檢查結算畫面 BUG",
            "檢查錯題練習 BUG",
            "檢查英文發音 BUG",
            "檢查打字音效 BUG",
            "檢查排除障礙區塊 BUG",
            "檢查返回首頁 BUG",
            "檢查清除進度 BUG",
            "檢查背景圖片 BUG",
            "檢查 Console 錯誤",
            "檢查中文亂碼"
        ],
        code: `第十六步：全面檢查所有 BUG 並修復

請幫我全面檢查英打闖關遊戲專案中的所有 BUG。

這次要做的是：

1. 檢查所有功能是否正常
2. 修正會造成錯誤的地方
3. 修正畫面跑版問題
4. 修正資料讀取問題
5. 修正 localStorage 進度問題
6. 修正打字音效問題
7. 修正英文發音問題
8. 修正錯題練習問題
9. 修正星星總數進度條問題
10. 修正手機版顯示問題

請不要重建整個專案。
請不要刪除原本功能。
請不要改變遊戲規則。
請只檢查與修復 BUG。

目前專案架構是：

typing-level-game/
├── index.html
├── style.css
├── script.js
├── data/
│   ├── words.json
│   └── levels.json
├── sounds/
│   └── 打字.MP3
└── images/
    └── background.png

==================================================
一、請先檢查檔案是否存在
==================================================

請確認以下檔案存在：

1. index.html
2. style.css
3. script.js
4. data/words.json
5. data/levels.json
6. sounds/打字.MP3
7. images/background.png

如果檔案不存在，請不要亂刪功能，請回報缺少哪一個檔案。

如果 sounds/打字.MP3 讀不到，請檢查是否大小寫不同：

打字.MP3
打字.mp3

請以實際檔名為準，並修正 script.js 裡的路徑。

==================================================
二、檢查 HTML 結構
==================================================

請檢查 index.html 是否有以下區塊：

1. homeSection
2. levelSection
3. gameSection
4. resultSection
5. troubleshootingSection

請確認這些 id 不要重複。

請確認以下元素存在：

首頁：
- startGameButton
- progressSummary，如果有使用
- 排除障礙按鈕，如果有使用

關卡頁：
- levelList
- progressFill
- progressText
- resetProgressButton
- 返回首頁按鈕，如果有使用

遊戲頁：
- currentLevelTitle
- questionProgress
- questionChinese
- speakButton
- answerInput
- submitAnswerButton
- answerFeedback
- correctCountText

結算頁：
- resultLevelTitle
- resultScoreText
- resultWrongText
- resultAccuracyText
- resultStars
- resultPassText
- wrongListBox
- wrongList
- wrongPracticeButton
- retryLevelButton
- backToLevelsButton

排除障礙頁：
- troubleshootingList
- backFromTroubleshootingButton

如果 script.js 有使用某個 id，但 index.html 沒有該 id，請補上或加防呆，避免出現：

Cannot read properties of null

==================================================
三、檢查 CSS 顯示問題
==================================================

請檢查 style.css：

1. .hidden 是否存在：

.hidden {
  display: none !important;
}

2. body 背景是否正確讀取：

images/background.png

3. 是否有重複衝突的 body 設定。
4. 是否有重複衝突的 button 設定。
5. 是否有重複衝突的 level-button 設定。
6. 是否有重複衝突的 progress-bar 設定。
7. 是否造成手機版水平捲動。
8. 是否造成按鈕文字看不清楚。
9. 是否造成關卡卡片太擠。
10. 是否造成鎖定關卡點得到。

請修正：

1. 文字看不清楚
2. 按鈕看不清楚
3. 關卡卡片跑版
4. 手機版超出畫面
5. 背景圖片遮住文字
6. 進度條不顯示
7. 結算畫面太擠
8. 錯題列表太擠

==================================================
四、檢查 JSON 格式
==================================================

請檢查 data/words.json：

1. 必須是合法 JSON。
2. 最外層必須是陣列。
3. 每個單字至少要有：
   - id
   - english
   - chinese
   - category

4. english 不可以空白。
5. chinese 不可以空白。
6. category 不可以空白。
7. id 不要重複。
8. 中文不要亂碼。

請檢查 data/levels.json：

1. 必須是合法 JSON。
2. 最外層必須是陣列。
3. 每一關至少要有：
   - level
   - title
   - category
   - questionCount

4. level 必須是數字。
5. level 不要重複。
6. title 不可以空白。
7. category 不可以空白。
8. questionCount 必須是數字。
9. levels.json 的 category 必須能在 words.json 找到對應單字。

如果某一關找不到任何單字，請在 Console 和畫面提示：

這一關目前沒有題目，請檢查 words.json 的 category 是否和 levels.json 相同。

==================================================
五、檢查資料讀取 BUG
==================================================

請檢查 script.js 中 fetch 讀取資料：

1. 是否正確讀取 data/words.json。
2. 是否正確讀取 data/levels.json。
3. 是否有 catch 錯誤。
4. 如果讀取失敗，畫面要顯示錯誤訊息。
5. 不要讓畫面空白。

請確認初始化流程正確：

1. DOMContentLoaded
2. 綁定按鈕事件
3. fetch words.json
4. fetch levels.json
5. loadProgress()
6. renderProgressSummary()
7. renderLevelList()
8. updateProgressBar()

請避免 levels 還沒讀取完成就先計算星星最大值。

==================================================
六、檢查關卡選擇 BUG
==================================================

請檢查關卡列表：

1. 第 1 關永遠解鎖。
2. 未解鎖關卡不能點。
3. 已解鎖關卡可以點。
4. 已通關關卡可以重玩。
5. 已通關關卡顯示星星。
6. 沒通關但已解鎖的關卡不要顯示已通關。
7. 鎖定關卡要顯示鎖頭。
8. 關卡數字要正確。
9. 不要出現重複關卡。
10. 不要出現 undefined。

請確認 renderLevelList() 裡有防呆：

1. levels 必須是陣列。
2. playerProgress 必須存在。
3. stars 必須是物件。
4. completedLevels 必須是陣列。
5. unlockedLevel 至少是 1。

==================================================
七、檢查星星總數進度條 BUG
==================================================

目前進度條要顯示：

星星總數 目前星星 / 最大星星

例如：

星星總數 5/60

請檢查：

1. 最大星星 = levels.length × 3。
2. 目前星星 = playerProgress.stars 的總和。
3. 不要再用通關關卡數當主進度。
4. 進度條寬度 = 目前星星 / 最大星星。
5. 清除進度後顯示 0/60。
6. 重新整理後星星總數不消失。
7. 重玩關卡拿低星星，不可以覆蓋高星星。
8. 重玩關卡拿高星星，要更新星星總數。

請確認 getTotalStars() 正確：

function getTotalStars() {
  if (!playerProgress.stars || typeof playerProgress.stars !== "object") {
    return 0;
  }

  return Object.values(playerProgress.stars).reduce((total, starCount) => {
    const stars = Number(starCount) || 0;
    return total + stars;
  }, 0);
}

請確認 updateProgressBar() 使用 getTotalStars()。

==================================================
八、檢查 localStorage 進度 BUG
==================================================

localStorage key 必須是：

typingLevelGameProgress

資料格式：

{
  "unlockedLevel": 1,
  "stars": {},
  "completedLevels": [],
  "lastPlayedLevel": null
}

請檢查：

1. loadProgress() 是否正確讀取。
2. saveProgress() 是否正確儲存。
3. resetProgress() 是否正確清除。
4. 通關後是否呼叫 saveProgress()。
5. 清除進度後是否重新 renderLevelList()。
6. 重新整理後是否保留進度。
7. 第 1 關是否永遠解鎖。
8. unlockedLevel 是否不會小於 1。
9. unlockedLevel 是否不會超過最大關卡數。
10. stars 是否永遠是物件。
11. completedLevels 是否永遠是陣列。
12. lastPlayedLevel 是否正確。

請修正舊資料相容問題：

如果 stars 裡某一關星星 >= 1，
但 completedLevels 沒有該關，
請自動補上 completedLevels。

==================================================
九、檢查答題功能 BUG
==================================================

請檢查遊戲答題功能：

1. 題目顯示中文。
2. 玩家輸入英文。
3. 英文答案大小寫不敏感。
4. 前後空白要自動 trim。
5. 空白答案不能送出。
6. Enter 可以送出答案。
7. 按送出按鈕可以送出答案。
8. 答對 correctCount + 1。
9. 答錯 wrongCount + 1。
10. 答錯會記錄 wrongQuestions。
11. 答完會進下一題。
12. 最後一題完成後進入結算畫面。
13. 不要跳過題目。
14. 不要同一題重複計分。
15. 不要結束後還能送出答案。

如果 submitAnswer() 可能被重複觸發，請加防呆，例如：

let isAnswerSubmitting = false;

送出時避免連續點擊造成重複計分。

==================================================
十、檢查星星評分 BUG
==================================================

請確認星星規則：

1. 答對率 95% 以上：3 顆星，通關
2. 答對率 80% 以上：2 顆星，通關
3. 答對率 75% 以上：1 顆星，通關
4. 低於 75%：0 顆星，不通關

請檢查：

1. accuracy 是否正確計算。
2. totalQuestions 不可以是 0。
3. Math.round 是否合理。
4. stars 是否正確。
5. stars >= 1 才通關。
6. 通關才解鎖下一關。
7. 未通關不解鎖下一關。
8. 錯題練習不計算星星。
9. 錯題練習不解鎖下一關。
10. 錯題練習不覆蓋原本成績。

==================================================
十一、檢查結算畫面 BUG
==================================================

請檢查 resultSection：

1. 完成正常關卡後會顯示結果。
2. 顯示關卡名稱。
3. 顯示答對題數。
4. 顯示答錯題數。
5. 顯示答對率。
6. 顯示星星。
7. 顯示是否通關。
8. 有錯題時顯示錯題列表。
9. 沒錯題時顯示「太棒了，沒有錯題！」。
10. 有錯題時錯題練習按鈕可點。
11. 沒錯題時錯題練習按鈕 disabled。
12. 重新挑戰按鈕正常。
13. 回到關卡選擇按鈕正常。
14. 結算畫面不可以出現 undefined。
15. 結算畫面文字要清楚。

==================================================
十二、檢查錯題練習 BUG
==================================================

請檢查錯題練習：

1. 正常關卡開始時清空 wrongQuestions。
2. 答錯時把 currentQuestion 加入 wrongQuestions。
3. 不要重複加入同一題。
4. 結算畫面顯示錯題列表。
5. 點錯題練習後只練習錯題。
6. 錯題練習模式 isWrongPracticeMode = true。
7. 錯題練習完成後不更新星星。
8. 錯題練習完成後不解鎖關卡。
9. 錯題練習完成後不改 localStorage 的 stars。
10. 錯題練習時發音功能仍正常。
11. 錯題練習時打字音效仍正常。
12. 回到關卡選擇後狀態重置正常。
13. 重新挑戰原關卡時 wrongQuestions 要重新清空。

如果有做「連續答對 2 次才算熟練」，請確認：

1. 每題有 masteryCount。
2. 答對 masteryCount + 1。
3. 答錯 masteryCount 歸 0。
4. 達到 2/2 才移除錯題。
5. 所有錯題熟練後才完成錯題練習。

==================================================
十三、檢查英文發音 BUG
==================================================

請檢查發音功能：

1. speakButton 是否存在。
2. speakButton 點擊後播放目前題目英文。
3. showQuestion() 顯示題目時可自動播放英文。
4. 自動播放如果被手機瀏覽器阻擋，不可以讓遊戲壞掉。
5. speakWord() 是否使用 SpeechSynthesisUtterance。
6. utterance.lang 是否是 en-US。
7. 播放前是否 cancel 舊聲音。
8. 完成關卡後不要繼續播放。
9. 錯題練習時也可以播放目前英文。
10. 如果瀏覽器不支援 speechSynthesis，要 console.warn，但遊戲不能壞掉。

==================================================
十四、檢查打字音效 BUG
==================================================

目前打字音效使用：

sounds/打字.MP3

請檢查：

1. script.js 音效路徑是否正確。
2. 檔名大小寫是否一致。
3. sounds 資料夾是否跟 index.html 同一層。
4. answerInput keydown 是否有呼叫 playTypingSound()。
5. Enter 不播放打字音效。
6. Enter 仍然可以送出答案。
7. Backspace 不播放音效。
8. Shift、Ctrl、方向鍵不播放音效。
9. 打字音效播放失敗不影響遊戲。
10. 錯題練習輸入時也有打字音效。
11. 不要重複綁定 keydown，避免打一個字播放多次。

如果中文檔名造成問題，請提醒我改成：

sounds/typing.mp3

但不要自己亂改，除非專案裡真的有 typing.mp3。

==================================================
十五、檢查排除障礙區塊 BUG
==================================================

請檢查 troubleshootingSection：

1. 排除障礙按鈕可以打開。
2. 回上一頁按鈕可以回到原本畫面。
3. 多個排除障礙按鈕不要使用重複 id。
4. troubleshootingItems 資料正常。
5. renderTroubleshooting() 不會出錯。
6. troubleshootingList 不會是 null。
7. 開啟排除障礙時，其他 section 正確隱藏。
8. 回上一頁時，正確顯示上一個 section。
9. 手機版內容不會太擠。

==================================================
十六、檢查返回首頁 BUG
==================================================

請檢查所有返回首頁按鈕：

1. 從關卡頁可以回首頁。
2. 從遊戲頁如果有返回首頁，也能正常。
3. 從結算頁可以回首頁或回關卡選擇。
4. 回首頁後 progressSummary 更新。
5. 不會同時顯示兩個 section。
6. 不會出現畫面空白。

==================================================
十七、檢查清除進度 BUG
==================================================

請檢查清除進度：

1. 點清除進度會跳 confirm。
2. 按取消不清除。
3. 按確定會刪除 localStorage。
4. playerProgress 重設為預設值。
5. 第 1 關解鎖。
6. 星星總數變 0。
7. 進度條變 0%。
8. 關卡卡片星星清空。
9. 鎖定關卡恢復鎖定。
10. 畫面立即更新。
11. 重新整理後仍然是清除狀態。

==================================================
十八、檢查背景圖片 BUG
==================================================

請檢查：

1. images/background.png 是否正確載入。
2. Console 不可以出現 404。
3. 背景不要變形太嚴重。
4. 手機版背景正常。
5. 背景不影響文字閱讀。
6. 如果 background-attachment: fixed 手機有問題，手機版改 scroll。
7. 不要讓背景造成水平捲動。

==================================================
十九、檢查 Console 錯誤
==================================================

請打開瀏覽器 Console，檢查並修復：

1. Cannot read properties of null
2. Unexpected token
3. Unexpected end of JSON input
4. Failed to fetch
5. 404 Not Found
6. SyntaxError
7. ReferenceError
8. TypeError
9. Invalid or unexpected token
10. missing ) after argument list

請修正所有會影響遊戲運作的錯誤。

==================================================
二十、檢查中文亂碼
==================================================

請確認：

1. index.html head 有：

<meta charset="UTF-8">

2. 所有 HTML、CSS、JS、JSON 使用 UTF-8。
3. 不要把中文轉成 Unicode escape。
4. 不要出現亂碼。
5. 中文按鈕、提示、結果、錯誤訊息都正常。
6. confirm、alert 裡的中文要用引號包好。
7. template string 的中文要正常。

請不要出現：

\\u958b\\u59cb
é–‹å§‹
�
蝣
撠
嚗
銝

==================================================
二十一、修復方式要求
==================================================

修復 BUG 時請遵守：

1. 優先小範圍修復。
2. 不要整個重寫 script.js。
3. 不要整個重寫 index.html。
4. 不要重建專案。
5. 不要刪除功能。
6. 不要改變遊戲規則。
7. 不要清除玩家進度，除非使用者點清除進度。
8. 不要修改 words.json 的資料格式。
9. 不要修改 levels.json 的資料格式。
10. 不要破壞 UTF-8。

==================================================
二十二、請整理測試清單
==================================================

修復完成後，請幫我依照下面流程測試：

1. 打開首頁。
2. 點開始遊戲。
3. 進入關卡選擇。
4. 星星總數顯示正常。
5. 點第 1 關。
6. 題目正常顯示中文。
7. 發音按鈕正常。
8. 輸入英文時有打字音效。
9. 按 Enter 可以送出。
10. 答對會進下一題。
11. 答錯會記錄錯題。
12. 完成一關後顯示結算畫面。
13. 星星依答對率正確。
14. 通關後下一關解鎖。
15. 星星總數更新。
16. 回到關卡選擇後卡片顯示正常。
17. 重新整理後進度還在。
18. 點錯題練習可以正常練習錯題。
19. 清除進度後回到 0 星。
20. 排除障礙頁可以打開和返回。
21. 手機版畫面不跑版。

==================================================
二十三、完成後請回報
==================================================

完成後請用條列式回報：

1. 發現哪些 BUG。
2. 修正了哪些檔案。
3. 每個檔案修正了什麼。
4. 哪些功能已測試正常。
5. 是否還有需要我手動處理的檔案，例如：
   - sounds/打字.MP3
   - images/background.png

6. 如果還有無法自動修正的問題，請明確告訴我原因。

---

## 如果你想讓 Windsurf 更嚴格，可以再貼這段

請再做一次嚴格 BUG 檢查。

請不要只看表面，請逐一檢查：

1. 所有 getElementById 是否找得到元素。
2. 所有 addEventListener 是否有防呆。
3. 所有 fetch 是否有 catch。
4. 所有 localStorage JSON.parse 是否有 try/catch。
5. 所有陣列 map/filter/reduce 前是否確認是陣列。
6. 所有 innerHTML 是否不會造成 undefined。
7. 所有按鈕是否不會重複綁定事件。
8. 所有 section 是否不會同時顯示。
9. 所有音效與發音錯誤是否不會中斷遊戲。
10. 所有手機版是否不會水平捲動。

請只修 BUG，不要改設計方向。

---

## 你要 Windsurf 最後回報的格式

請最後用這個格式回報：

【檢查結果】
- 發現的 BUG：
- 已修正的 BUG：
- 沒有問題的功能：

【修改檔案】
1. index.html：
2. style.css：
3. script.js：
4. data/words.json：
5. data/levels.json：

【測試結果】
- 首頁：
- 關卡選擇：
- 答題：
- 星星：
- localStorage：
- 發音：
- 打字音效：
- 錯題練習：
- 排除障礙：
- 手機版：

【需要手動確認】
- sounds/打字.MP3 是否存在
- images/background.png 是否存在`,
        images: [],
        downloads: [
            {
                title: "範例 levels.json",
                src: "新增資料夾 (3)/data/levels.json",
                filename: "levels.json",
                note: "下載範例關卡設定檔"
            },
            {
                title: "範例 words.json",
                src: "新增資料夾 (3)/data/words.json",
                filename: "words.json",
                note: "下載範例單字資料檔"
            },
            {
                title: "範例 index.html",
                src: "新增資料夾 (3)/index.html",
                filename: "index.html",
                note: "下載範例 HTML 檔"
            },
            {
                title: "範例 script.js",
                src: "新增資料夾 (3)/script.js",
                filename: "script.js",
                note: "下載範例 JavaScript 檔"
            },
            {
                title: "範例 style.css",
                src: "新增資料夾 (3)/style.css",
                filename: "style.css",
                note: "下載範例 CSS 檔"
            }
        ]
    }
];

// DOM 元素
const homepage = document.getElementById('homepage');
const tutorialPage = document.getElementById('tutorialPage');
const tutorialCategories = document.getElementById('tutorialCategories');
const tutorialDetail = document.getElementById('tutorialDetail');
const searchInput = document.getElementById('searchInput');
const backButton = document.getElementById('backButton');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderTutorialCategories();
    
    // 搜尋功能
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        renderTutorialCategories(searchTerm);
    });
    
    // 返回按鈕
    backButton.addEventListener('click', function() {
        homepage.classList.add('active');
        tutorialPage.classList.remove('active');
    });
    
    // 圖片模態框關閉
    modalClose.addEventListener('click', function() {
        imageModal.classList.remove('show');
    });
    
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.classList.remove('show');
        }
    });
});

// 渲染教學分類卡片
function renderTutorialCategories(searchTerm = '') {
    tutorialCategories.innerHTML = '';
    
    const filteredTutorials = tutorials.filter(tutorial => {
        const titleMatch = tutorial.title.toLowerCase().includes(searchTerm);
        const descMatch = tutorial.description.toLowerCase().includes(searchTerm);
        const categoryMatch = tutorial.category.toLowerCase().includes(searchTerm);
        return titleMatch || descMatch || categoryMatch;
    });
    
    if (filteredTutorials.length === 0) {
        tutorialCategories.innerHTML = '<p class="no-results">沒有找到符合的教學</p>';
        return;
    }
    
    filteredTutorials.forEach(tutorial => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <h3>${tutorial.title}</h3>
            <p>${tutorial.description}</p>
        `;
        card.addEventListener('click', function() {
            showTutorial(tutorial);
        });
        tutorialCategories.appendChild(card);
    });
}

// 顯示教學詳細內容
function showTutorial(tutorial) {
    homepage.classList.remove('active');
    tutorialPage.classList.add('active');
    
    // 產生步驟列表 HTML
    const stepsHtml = tutorial.steps.map(step => `<li>${step}</li>`).join('');
    
    // 產生圖片區塊 HTML
    let imagesHtml = '';
    if (tutorial.images && tutorial.images.length > 0) {
        imagesHtml = '<div class="image-section"><h3>圖片示範</h3>';
        imagesHtml += tutorial.images.map(img => {
            if (img.src) {
                return `
                    <div class="image-item">
                        <h4>${img.title}</h4>
                        <img src="${img.src}" alt="${img.title}" class="tutorial-image" onclick="openImageModal('${img.src}')">
                        <p>${img.note}</p>
                    </div>
                `;
            } else {
                return `
                    <div class="image-item">
                        <h4>${img.title}</h4>
                        <div class="image-placeholder">
                            圖片示範區：之後可以放操作截圖
                        </div>
                        <p>${img.note}</p>
                    </div>
                `;
            }
        }).join('');
        imagesHtml += '</div>';
    }
    
    // 產生下載區塊 HTML
    let downloadsHtml = '';
    if (tutorial.downloads && tutorial.downloads.length > 0) {
        downloadsHtml = '<div class="download-section"><h3>下載檔案</h3>';
        downloadsHtml += '<div class="download-buttons">';
        downloadsHtml += tutorial.downloads.map(dl => {
            const downloadText = dl.filename ? `下載 ${dl.filename}` : '下載檔案';
            return `
                <a href="${dl.src}" download="${dl.filename || ''}" class="download-link">${downloadText}</a>
            `;
        }).join('');
        downloadsHtml += '</div>';
        downloadsHtml += '<div class="download-notes">';
        downloadsHtml += tutorial.downloads.map(dl => {
            return `
                <div class="download-note">
                    <strong>${dl.title}:</strong> ${dl.note}
                </div>
            `;
        }).join('');
        downloadsHtml += '</div>';
        downloadsHtml += '</div>';
    } else {
        downloadsHtml = '<div class="download-section"><p class="no-downloads">本教學無需下載檔案</p></div>';
    }
    
    tutorialDetail.innerHTML = `
        <h2>${tutorial.title}</h2>
        
        <div class="tutorial-section">
            <h3>教學說明</h3>
            <p>${tutorial.description}</p>
        </div>
        
        <div class="tutorial-section">
            <h3>適合對象</h3>
            <p>${tutorial.target}</p>
        </div>
        
        <div class="tutorial-section">
            <h3>學習步驟</h3>
            <ul class="steps-list">
                ${stepsHtml}
            </ul>
        </div>
        
        <div class="code-section">
            <h3>程式碼</h3>
            <div class="code-block">${tutorial.code}</div>
            <button class="copy-button" onclick="copyCode(this)">複製程式碼</button>
        </div>
        
        ${imagesHtml}
        
        ${downloadsHtml}
    `;
}

// 複製程式碼
function copyCode(button) {
    const codeBlock = button.previousElementSibling;
    const code = codeBlock.textContent;
    
    navigator.clipboard.writeText(code).then(function() {
        button.textContent = '已複製！';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.textContent = '複製程式碼';
            button.classList.remove('copied');
        }, 2000);
    }).catch(function(err) {
        console.error('複製失敗:', err);
        alert('複製失敗，請手動複製');
    });
}

// 開啟圖片模態框
function openImageModal(src) {
    modalImage.src = src;
    imageModal.classList.add('show');
}
