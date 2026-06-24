// Typing Level Game Script

// 全域變數儲存資料
let wordsData = []; // 單字資料
let levelsData = []; // 關卡資料
let currentLevel = null; // 當前關卡
let currentQuestions = []; // 當前題目列表
let currentQuestionIndex = 0; // 當前題目索引
let currentScore = 0; // 當前分數
let currentHearts = 5; // 當前愛心數
let timerInterval = null; // 計時器
let timeRemaining = 30; // 剩餘時間
let hintUsed = false; // 本題是否已經使用提示
let correctCount = 0; // 答對題數
let wrongCount = 0; // 答錯題數
let currentStars = 0; // 當前獲得星星數
let audioEnabled = false; // 音訊是否已啟用（防止手機瀏覽器自動播放限制）
let wrongQuestions = []; // 錯題記錄
let isWrongPracticeMode = false; // 是否為錯題練習模式
let practiceQuestions = []; // 錯題練習題目（含熟練度）
const typingSoundPath = 'sounds/打字 copy.mp3'; // 打字音效檔路徑
let typingSoundAudio = null; // 打字音效 Audio 物件
let typingSoundEnabled = true; // 打字音效是否啟用

// 玩家進度資料
let playerProgress = {
    unlockedLevel: 1, // 已解鎖關卡
    stars: {}, // 各關卡星星紀錄
    completedLevels: [] // 已通關關卡列表
};

document.addEventListener('DOMContentLoaded', function() {
    // 獲取 DOM 元素
    const startGameButton = document.getElementById('startGameButton');
    const backHomeButton = document.getElementById('backHomeButton');
    const backToLevelButton = document.getElementById('backToLevelButton');
    const homeSection = document.getElementById('homeSection');
    const levelSelectSection = document.getElementById('levelSelectSection');
    const gameSection = document.getElementById('gameSection');
    const levelGrid = document.getElementById('levelGrid');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    // 遊戲區塊元素
    const currentLevelTitle = document.getElementById('currentLevelTitle');
    const currentLevelDescription = document.getElementById('currentLevelDescription');
    const questionProgress = document.getElementById('questionProgress');
    const currentScoreDisplay = document.getElementById('currentScore'); // 答對題數顯示
    const currentHeartsDisplay = document.getElementById('currentHearts');
    const timeRemainingDisplay = document.getElementById('timeRemaining');
    const questionChinese = document.getElementById('questionChinese');
    const answerInput = document.getElementById('answerInput');
    const submitAnswerButton = document.getElementById('submitAnswerButton');
    const answerFeedback = document.getElementById('answerFeedback');
    const hintArea = document.getElementById('hintArea');
    const hintText = document.getElementById('hintText');
    const hintButton = document.getElementById('hintButton');
    const messageDisplay = document.getElementById('messageDisplay');
    const resetProgressButton = document.getElementById('resetProgressButton');
    const speakButton = document.getElementById('speakButton');
    const wrongPracticeButton = document.getElementById('wrongPracticeButton');
    const wrongListBox = document.getElementById('wrongListBox');
    const wrongList = document.getElementById('wrongList');
    const resultWrongText = document.getElementById('resultWrongText');
    const practiceProgress = document.getElementById('practiceProgress');
    const masteryCount = document.getElementById('masteryCount');
    const remainingCount = document.getElementById('remainingCount');

    // 結果區塊元素
    const resultSection = document.getElementById('resultSection');
    const resultLevelTitle = document.getElementById('resultLevelTitle');
    const resultScoreText = document.getElementById('resultScoreText');
    const resultAccuracyText = document.getElementById('resultAccuracyText');
    const resultStars = document.getElementById('resultStars');
    const resultPassText = document.getElementById('resultPassText');
    const backToLevelsButton = document.getElementById('backToLevelsButton');
    const retryLevelButton = document.getElementById('retryLevelButton');

    // 載入資料和進度
    loadGameData();
    loadPlayerProgress();

    // 點擊開始遊戲按鈕 - 隱藏首頁，顯示關卡選單
    startGameButton.addEventListener('click', function() {
        homeSection.classList.add('hidden');
        levelSelectSection.classList.remove('hidden');
        // 產生關卡卡片
        generateLevelCards();
    });

    // 點擊返回首頁按鈕 - 隱藏關卡選單，顯示首頁
    backHomeButton.addEventListener('click', function() {
        levelSelectSection.classList.add('hidden');
        homeSection.classList.remove('hidden');
    });

    // 點擊返回關卡選單按鈕
    backToLevelButton.addEventListener('click', function() {
        stopTimer();
        gameSection.classList.add('hidden');
        levelSelectSection.classList.remove('hidden');
    });

    // 送出答案按鈕
    submitAnswerButton.addEventListener('click', function() {
        checkAnswer();
    });

    // 輸入框按 Enter 鍵送出 (keypress 已棄用，改用 keydown)
    // answerInput.addEventListener('keypress', function(e) {
    //     if (e.key === 'Enter') {
    //         checkAnswer();
    //     }
    // });

    // 提示按鈕點擊事件
    hintButton.addEventListener('click', function() {
        showWordHint();
    });

    // 清除進度按鈕點擊事件
    resetProgressButton.addEventListener('click', function() {
        if (confirm('確定要清除所有通關紀錄嗎？')) {
            resetProgress();
        }
    });

    // 回到關卡選擇按鈕
    backToLevelsButton.addEventListener('click', function() {
        backToLevelSelect();
    });

    // 重新挑戰按鈕
    retryLevelButton.addEventListener('click', function() {
        retryLevel();
    });

    // 播放發音按鈕
    speakButton.addEventListener('click', function() {
        const currentQuestion = currentQuestions[currentQuestionIndex];
        if (!currentQuestion) return;
        speakWord(currentQuestion.word);
    });

    // 錯題練習按鈕
    wrongPracticeButton.addEventListener('click', function() {
        startWrongPractice();
    });

    // 輸入框打字音效
    answerInput.addEventListener('keydown', function(event) {
        const ignoredKeys = [
            'Backspace',
            'Delete',
            'Shift',
            'Control',
            'Alt',
            'Meta',
            'Tab',
            'Enter',
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown',
            'CapsLock',
            'Escape'
        ];

        if (!ignoredKeys.includes(event.key) && event.key.length === 1) {
            playTypingSound();
        }

        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    // 載入遊戲資料函數
    async function loadGameData() {
        try {
            // 讀取 words.json
            const wordsResponse = await fetch('data/words.json');
            if (!wordsResponse.ok) {
                throw new Error('無法載入 words.json');
            }
            wordsData = await wordsResponse.json();

            // 讀取 levels.json
            const levelsResponse = await fetch('data/levels.json');
            if (!levelsResponse.ok) {
                throw new Error('無法載入 levels.json');
            }
            const levelsDataObj = await levelsResponse.json();
            levelsData = levelsDataObj.levels;

            console.log('資料載入完成');
            console.log('單字數量:', wordsData.length);
            console.log('關卡數量:', levelsData.length);
        } catch (error) {
            console.error('載入資料失敗:', error);
            alert('載入遊戲資料失敗，請重新整理頁面');
        }
    }

    // 載入玩家進度
    function loadPlayerProgress() {
        const savedProgress = localStorage.getItem('typingLevelGameProgress');
        if (savedProgress) {
            try {
                playerProgress = JSON.parse(savedProgress);
                // 確保資料結構正確
                if (!playerProgress) {
                    playerProgress = {
                        unlockedLevel: 1,
                        stars: {},
                        completedLevels: []
                    };
                }
                // 確保 unlockedLevel 不小於 1
                if (!playerProgress.unlockedLevel || playerProgress.unlockedLevel < 1) {
                    playerProgress.unlockedLevel = 1;
                }
                // 確保 stars 是物件
                if (!playerProgress.stars || typeof playerProgress.stars !== 'object') {
                    playerProgress.stars = {};
                }
                // 確保 completedLevels 是陣列
                if (!Array.isArray(playerProgress.completedLevels)) {
                    playerProgress.completedLevels = [];
                }
                console.log('玩家進度載入完成:', playerProgress);
                // 同步星星與通關進度（修正舊資料）
                syncCompletedLevelsFromStars();
                savePlayerProgress();
            } catch (error) {
                console.error('載入進度失敗:', error);
                // 如果載入失敗，使用預設值
                playerProgress = {
                    unlockedLevel: 1,
                    stars: {},
                    completedLevels: []
                };
            }
        } else {
            console.log('沒有儲存的進度，使用預設值');
            playerProgress = {
                unlockedLevel: 1,
                stars: {},
                completedLevels: []
            };
        }
    }

    // 同步星星與通關進度
    function syncCompletedLevelsFromStars() {
        if (!playerProgress.stars || typeof playerProgress.stars !== 'object') {
            playerProgress.stars = {};
        }

        if (!Array.isArray(playerProgress.completedLevels)) {
            playerProgress.completedLevels = [];
        }

        // 根據星星紀錄補上通關進度
        Object.keys(playerProgress.stars).forEach((levelKey) => {
            const levelNumber = Number(levelKey);
            const starCount = Number(playerProgress.stars[levelKey]);

            // 如果星星數大於等於1，代表該關已通關
            if (levelNumber >= 1 && starCount >= 1) {
                if (!playerProgress.completedLevels.includes(levelNumber)) {
                    playerProgress.completedLevels.push(levelNumber);
                }
            }
        });

        // 移除重複並排序
        playerProgress.completedLevels = [...new Set(playerProgress.completedLevels)]
            .filter((levelNumber) => {
                // 只保留存在的關卡
                return levelsData.some((level) => level.order === levelNumber);
            })
            .sort((a, b) => a - b);

        console.log('同步後的通關進度:', playerProgress.completedLevels);
    }

    // 計算星星總數
    function getTotalStars() {
        if (!playerProgress.stars || typeof playerProgress.stars !== 'object') {
            return 0;
        }

        return Object.values(playerProgress.stars).reduce((total, starCount) => {
            const stars = Number(starCount) || 0;
            return total + stars;
        }, 0);
    }

    // 播放英文單字發音
    function speakWord(word) {
        if (!word) return;

        if (!('speechSynthesis' in window)) {
            console.warn('此瀏覽器不支援發音功能');
            return;
        }

        try {
            // 取消當前正在播放的聲音
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 0.85; // 語速稍慢，讓學生容易聽清楚
            utterance.pitch = 1;
            utterance.volume = 1;

            window.speechSynthesis.speak(utterance);
        } catch (error) {
            console.warn('發音功能錯誤:', error);
        }
    }

    // 初始化打字音效
    function initTypingSound() {
        if (!typingSoundAudio) {
            typingSoundAudio = new Audio(typingSoundPath);
            typingSoundAudio.volume = 0.35;
            typingSoundAudio.preload = 'auto';
        }
    }

    // 播放打字音效
    function playTypingSound() {
        if (!typingSoundEnabled) return;

        initTypingSound();

        if (!typingSoundAudio) return;

        try {
            typingSoundAudio.currentTime = 0;
            typingSoundAudio.play().catch((error) => {
                console.warn('打字音效播放失敗：', error);
            });
        } catch (error) {
            console.warn('打字音效錯誤：', error);
        }
    }

    // 渲染錯題列表
    function renderWrongList() {
        if (!wrongList || !wrongListBox || !wrongPracticeButton) return;

        if (!wrongQuestions || wrongQuestions.length === 0) {
            wrongList.innerHTML = `<p class="no-wrong-text">太棒了，沒有錯題！</p>`;
            wrongPracticeButton.disabled = true;
            wrongPracticeButton.classList.add('disabled');
            return;
        }

        wrongPracticeButton.disabled = false;
        wrongPracticeButton.classList.remove('disabled');

        wrongList.innerHTML = wrongQuestions.map((item, index) => {
            // 防呆：確保 item 有 word 和 meaning 屬性
            const word = item.word || item.english || '';
            const meaning = item.meaning || item.chinese || '';
            return `
                <div class="wrong-item">
                    <span class="wrong-number">${index + 1}.</span>
                    <span class="wrong-chinese">${meaning}</span>
                    <span class="wrong-answer">${word}</span>
                </div>
            `;
        }).join('');
    }

    // 開始錯題練習
    function startWrongPractice() {
        if (!wrongQuestions || wrongQuestions.length === 0) {
            alert('目前沒有錯題可以練習。');
            return;
        }

        isWrongPracticeMode = true;

        // 初始化錯題練習題目，每題加入熟練度
        practiceQuestions = wrongQuestions.map(word => ({
            ...word,
            mastery: 0 // 熟練度，需要達到 2
        }));

        // 在錯題練習模式中，currentQuestions 直接使用 practiceQuestions
        currentQuestions = practiceQuestions;
        currentQuestionIndex = 0;
        correctCount = 0;
        wrongCount = 0;

        resultSection.classList.add('hidden');
        gameSection.classList.remove('hidden');

        if (currentLevelTitle) {
            currentLevelTitle.textContent = `錯題練習：${currentLevel.title}`;
        }

        // 顯示熟練度進度
        practiceProgress.classList.remove('hidden');

        // 初始化打字音效
        initTypingSound();

        showQuestion();
    }

    // 儲存玩家進度
    function savePlayerProgress() {
        localStorage.setItem('typingLevelGameProgress', JSON.stringify(playerProgress));
        console.log('玩家進度已儲存:', playerProgress);
    }

    // 清除進度
    function resetProgress() {
        localStorage.removeItem('typingLevelGameProgress');
        playerProgress = {
            unlockedLevel: 1,
            stars: {},
            completedLevels: []
        };
        generateLevelCards();
        updateProgressBar();
        alert('進度已清除，已回到第 1 關');
    }

    // 產生關卡卡片函數
    function generateLevelCards() {
        // 防呆：確保 levelsData 是陣列
        if (!Array.isArray(levelsData) || levelsData.length === 0) {
            console.error('關卡資料無效');
            return;
        }

        // 清空現有內容
        levelGrid.innerHTML = '';

        // 使用 levels.json 的資料
        levelsData.forEach((level, index) => {
            const levelCard = createLevelCard(level, index + 1);
            levelGrid.appendChild(levelCard);
        });

        // 更新進度條
        updateProgressBar();
    }

    // 建立單個關卡卡片
    function createLevelCard(levelData, levelNumber) {
        const card = document.createElement('div');
        card.className = 'level-card';

        // 防呆：確保 playerProgress 存在
        if (!playerProgress) {
            playerProgress = {
                unlockedLevel: 1,
                stars: {},
                completedLevels: []
            };
        }

        // 檢查是否解鎖（根據 playerProgress.unlockedLevel）
        const isUnlocked = levelNumber <= playerProgress.unlockedLevel;

        if (isUnlocked) {
            card.classList.add('unlocked');
        } else {
            card.classList.add('locked');
        }

        // 關卡數字
        const levelNumberSpan = document.createElement('div');
        levelNumberSpan.className = 'level-number';
        levelNumberSpan.textContent = levelNumber;

        // 星星顯示
        const starsDiv = document.createElement('div');
        starsDiv.className = 'level-stars';
        const levelStars = playerProgress.stars[levelNumber] || 0;
        if (levelStars > 0) {
            // 顯示已獲得的星星
            let starsText = '';
            for (let i = 0; i < levelStars; i++) {
                starsText += '⭐';
            }
            starsDiv.textContent = starsText;
            card.classList.add('completed');
        } else {
            // 未通關顯示空白
            starsDiv.textContent = '';
        }

        // 鎖頭圖示（僅在鎖定狀態顯示）
        if (!isUnlocked) {
            const lockIcon = document.createElement('div');
            lockIcon.className = 'lock-icon';
            lockIcon.textContent = '🔒';
            card.appendChild(lockIcon);
        }

        card.appendChild(levelNumberSpan);
        card.appendChild(starsDiv);

        // 已解鎖關卡的點擊事件
        if (isUnlocked) {
            card.addEventListener('click', function() {
                startLevel(levelData);
            });
        }

        return card;
    }

    // 開始關卡
    function startLevel(levelData) {
        currentLevel = levelData;
        currentQuestionIndex = 0;
        currentScore = 0;
        currentHearts = levelData.hearts;
        timeRemaining = levelData.timeLimit;
        hintUsed = false; // 重設提示使用狀態
        correctCount = 0; // 重設答對題數
        wrongCount = 0; // 重設答錯題數
        currentStars = 0; // 重設星星數
        audioEnabled = true; // 啟用音訊
        wrongQuestions = []; // 清空錯題記錄
        isWrongPracticeMode = false; // 設定為正常模式

        // 初始化打字音效
        initTypingSound();

        // 根據關卡的 wordIds 從 words.json 找出對應單字
        currentQuestions = getQuestionsForLevel(levelData.wordIds);

        if (currentQuestions.length === 0) {
            alert('此關卡沒有可用的題目');
            return;
        }

        // 隨機打亂題目順序
        shuffleArray(currentQuestions);

        // 顯示遊戲區塊
        levelSelectSection.classList.add('hidden');
        gameSection.classList.remove('hidden');
        resultSection.classList.add('hidden');

        // 顯示關卡資訊
        currentLevelTitle.textContent = levelData.title;
        currentLevelDescription.textContent = levelData.description;

        // 更新愛心顯示
        updateHeartsDisplay();

        // 顯示第一題
        showQuestion();
    }

    // 根據 wordIds 取得題目
    function getQuestionsForLevel(wordIds) {
        const questions = [];
        wordIds.forEach(wordId => {
            const word = wordsData.find(w => w.id === wordId);
            if (word) {
                questions.push(word);
            }
        });
        return questions;
    }

    // 顯示題目
    function showQuestion() {
        // 錯題練習模式：找到下一個未熟練的題目
        if (isWrongPracticeMode) {
            const remaining = practiceQuestions.filter(q => q.mastery < 2);
            if (remaining.length === 0) {
                // 所有錯題都熟練了
                showLevelComplete();
                return;
            }

            // 找到第一個未熟練的題目
            const nextUnmasteredIndex = practiceQuestions.findIndex(q => q.mastery < 2);
            if (nextUnmasteredIndex !== -1) {
                currentQuestionIndex = nextUnmasteredIndex;
            }
        } else {
            // 正常模式：檢查是否所有題目答完
            if (currentQuestionIndex >= currentQuestions.length) {
                showLevelComplete();
                return;
            }
        }

        const currentWord = currentQuestions[currentQuestionIndex];

        // 防呆：如果沒有題目，直接完成
        if (!currentWord) {
            showLevelComplete();
            return;
        }

        // 更新題目進度
        questionProgress.textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;

        // 顯示中文題目
        questionChinese.textContent = currentWord.meaning;

        // 錯題練習模式顯示熟練度
        if (isWrongPracticeMode) {
            const mastery = currentWord.mastery || 0;
            masteryCount.textContent = `${mastery}/2`;
            const remaining = practiceQuestions.filter(q => q.mastery < 2).length;
            remainingCount.textContent = remaining;
        }

        // 清空輸入框
        answerInput.value = '';
        answerInput.focus();

        // 隱藏回饋和提示
        answerFeedback.classList.add('hidden');
        hintArea.classList.add('hidden');
        messageDisplay.classList.add('hidden');

        // 重設提示使用狀態
        hintUsed = false;

        // 自動播放英文發音
        if (audioEnabled) {
            speakWord(currentWord.word);
        }

        // 重置計時器
        resetTimer();
    }

    // 檢查答案
    function checkAnswer() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const currentWord = currentQuestions[currentQuestionIndex];

        // 防呆：如果沒有目前題目，不判斷
        if (!currentWord) {
            console.error('沒有目前題目');
            return;
        }

        const correctAnswer = currentWord.word.toLowerCase();

        // 防呆：如果答案空白，不判斷
        if (!userAnswer) {
            messageDisplay.textContent = '請先輸入英文答案';
            messageDisplay.className = 'message-display warning';
            messageDisplay.classList.remove('hidden');
            return;
        }

        if (userAnswer === correctAnswer) {
            // 答對
            handleCorrectAnswer();
        } else {
            // 答錯
            handleWrongAnswer(currentWord);
        }
    }

    // 處理答對
    function handleCorrectAnswer() {
        stopTimer();
        correctCount++; // 答對題數 +1
        currentScore += currentLevel.scorePerQuestion;
        if (currentScoreDisplay) {
            currentScoreDisplay.textContent = currentScore;
        }

        // 錯題練習模式：增加熟練度
        if (isWrongPracticeMode) {
            const currentWord = currentQuestions[currentQuestionIndex];
            currentWord.mastery = (currentWord.mastery || 0) + 1;
        }

        // 顯示答對回饋
        answerFeedback.textContent = '答對了！';
        answerFeedback.className = 'answer-feedback correct';
        answerFeedback.classList.remove('hidden');

        // 延遲後進入下一題
        setTimeout(() => {
            currentQuestionIndex++;

            // 錯題練習模式：跳到下一個未熟練的題目
            if (isWrongPracticeMode) {
                const remaining = practiceQuestions.filter(q => q.mastery < 2);
                if (remaining.length === 0) {
                    // 所有錯題都熟練了
                    showLevelComplete();
                } else {
                    showQuestion();
                }
            } else {
                showQuestion();
            }
        }, 1000);
    }

    // 處理答錯
    function handleWrongAnswer(word) {
        stopTimer();
        wrongCount++; // 答錯題數 +1
        currentHearts--;
        updateHeartsDisplay();

        // 記錄錯題（不重複）
        const alreadyExists = wrongQuestions.some((item) => {
            return item.id
                ? item.id === word.id
                : item.word === word.word;
        });

        if (!alreadyExists) {
            wrongQuestions.push(word);
        }

        // 顯示答錯回饋
        answerFeedback.textContent = `答錯了，正確答案是 ${word.word}`;
        answerFeedback.className = 'answer-feedback wrong';
        answerFeedback.classList.remove('hidden');

        // 顯示提示
        hintText.textContent = `提示：${word.hint}`;
        hintArea.classList.remove('hidden');

        // 檢查是否還有愛心
        if (currentHearts <= 0) {
            setTimeout(() => {
                showGameOver();
            }, 2000);
        } else {
            // 延遲後進入下一題
            setTimeout(() => {
                currentQuestionIndex++;
                showQuestion();
            }, 2000);
        }
    }

    // 更新愛心顯示
    function updateHeartsDisplay() {
        let heartsDisplay = '';
        for (let i = 0; i < currentHearts; i++) {
            heartsDisplay += '❤️';
        }
        currentHeartsDisplay.textContent = heartsDisplay;
    }

    // 重置計時器
    function resetTimer() {
        stopTimer();
        timeRemaining = currentLevel.timeLimit;
        timeRemainingDisplay.textContent = timeRemaining;

        timerInterval = setInterval(() => {
            timeRemaining--;
            timeRemainingDisplay.textContent = timeRemaining;

            if (timeRemaining <= 0) {
                stopTimer();
                handleTimeout();
            }
        }, 1000);
    }

    // 停止計時器
    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    // 處理超時
    function handleTimeout() {
        const currentWord = currentQuestions[currentQuestionIndex];
        handleWrongAnswer(currentWord);
    }

    // 顯示關卡完成
    function showLevelComplete() {
        stopTimer();
        finishLevel();
    }

    // 顯示單字提示
    function showWordHint() {
        // 取得目前題目
        const currentWord = currentQuestions[currentQuestionIndex];

        // 判斷是否已經提示過
        if (hintUsed) {
            // 已經提示過，顯示警告訊息
            messageDisplay.textContent = '本題已經提示過了！';
            messageDisplay.className = 'message-display warning';
            messageDisplay.classList.remove('hidden');
            return;
        }

        // 還沒提示過
        // 檢查是否還有愛心
        if (currentHearts <= 0) {
            messageDisplay.textContent = '愛心用完了！';
            messageDisplay.className = 'message-display error';
            messageDisplay.classList.remove('hidden');
            return;
        }

        // 扣 1 顆愛心
        currentHearts--;
        updateHeartsDisplay();

        // 將 hintUsed 設為 true
        hintUsed = true;

        // 產生提示格式（第一個字母 + 底線）
        const word = currentWord.word;
        let hint = word[0]; // 第一個字母
        for (let i = 1; i < word.length; i++) {
            hint += ' _'; // 其餘字母變成底線
        }

        // 顯示提示訊息
        messageDisplay.textContent = `提示：${hint}`;
        messageDisplay.className = 'message-display warning';
        messageDisplay.classList.remove('hidden');
    }

    // 完成關卡並計算結果
    function finishLevel() {
        const totalQuestions = currentQuestions.length;
        
        // 防呆：避免除以零
        if (totalQuestions === 0) {
            console.error('題目數量為零');
            return;
        }

        const accuracy = Math.round((correctCount / totalQuestions) * 100);

        // 依照答對率給星星
        let stars = 0;
        if (accuracy >= 95) {
            stars = 3;
        } else if (accuracy >= 80) {
            stars = 2;
        } else if (accuracy >= 75) {
            stars = 1;
        } else {
            stars = 0;
        }

        currentStars = stars;

        // 判斷是否通關
        const isPassed = stars >= 1;

        // 如果通關，儲存進度
        if (isPassed) {
            const levelNumber = currentLevel.order;

            // 更新星星（只保留較高的星星）
            const oldStars = playerProgress.stars[levelNumber] || 0;
            if (stars > oldStars) {
                playerProgress.stars[levelNumber] = stars;
            }

            // 加入已通關關卡列表（不重複）
            if (!playerProgress.completedLevels.includes(levelNumber)) {
                playerProgress.completedLevels.push(levelNumber);
            }

            // 解鎖下一關
            if (levelNumber >= playerProgress.unlockedLevel && levelNumber < levelsData.length) {
                playerProgress.unlockedLevel = levelNumber + 1;
            }

            // 儲存進度
            savePlayerProgress();
        }

        // 顯示結果畫面
        showResult(accuracy, stars, isPassed);
    }

    // 顯示結果畫面
    function showResult(accuracy, stars, isPassed) {
        // 隱藏遊戲區塊，顯示結果區塊
        gameSection.classList.add('hidden');
        resultSection.classList.remove('hidden');

        // 防呆：確保元素存在
        if (!resultLevelTitle || !resultScoreText || !resultWrongText || !resultAccuracyText || !resultStars || !resultPassText) {
            console.error('結算畫面元素不存在');
            return;
        }

        if (isWrongPracticeMode) {
            // 錯題練習模式
            resultLevelTitle.textContent = '錯題練習完成';
            resultScoreText.textContent = `練習題數：${currentQuestions.length} 題`;
            resultWrongText.textContent = `答對題數：${correctCount} / ${currentQuestions.length}`;
            resultAccuracyText.textContent = `答對率：${accuracy}%`;
            resultStars.innerHTML = '<span class="no-stars-text">錯題練習不計算星星</span>';
            resultPassText.textContent = '錯題練習完成，可以回到關卡選擇或重新挑戰原關卡。';
            resultPassText.className = 'result-pass-text pass-text';
            if (wrongListBox) wrongListBox.classList.add('hidden');
            if (wrongPracticeButton) wrongPracticeButton.classList.add('hidden');
        } else {
            // 正常關卡模式
            resultLevelTitle.textContent = currentLevel.title;
            resultScoreText.textContent = `${correctCount} / ${currentQuestions.length}`;
            resultWrongText.textContent = `${wrongCount} 題`;
            resultAccuracyText.textContent = `${accuracy}%`;

            // 顯示星星
            if (stars > 0) {
                let starsText = '';
                for (let i = 0; i < stars; i++) {
                    starsText += '⭐';
                }
                resultStars.textContent = starsText;
            } else {
                resultStars.textContent = '沒有星星';
            }

            // 顯示通關結果
            if (isPassed) {
                resultPassText.textContent = '恭喜通關！下一關已解鎖！';
                resultPassText.className = 'result-pass-text pass-text';
            } else {
                resultPassText.textContent = '還沒有通關，再挑戰一次！';
                resultPassText.className = 'result-pass-text fail-text';
            }

            // 顯示錯題列表
            renderWrongList();
            if (wrongListBox) wrongListBox.classList.remove('hidden');
            if (wrongPracticeButton) wrongPracticeButton.classList.remove('hidden');
        }
    }

    // 回到關卡選擇
    function backToLevelSelect() {
        resultSection.classList.add('hidden');
        levelSelectSection.classList.remove('hidden');
        isWrongPracticeMode = false;
        if (practiceProgress) practiceProgress.classList.add('hidden');
        // 重新產生關卡列表以更新解鎖狀態和星星
        generateLevelCards();
        // 更新進度條
        updateProgressBar();
    }

    // 重新挑戰
    function retryLevel() {
        resultSection.classList.add('hidden');
        gameSection.classList.remove('hidden');
        // 重新開始同一關
        startLevel(currentLevel);
    }

    // 顯示遊戲結束
    function showGameOver() {
        stopTimer();
        alert('愛心用完了，遊戲結束！');
        gameSection.classList.add('hidden');
        levelSelectSection.classList.remove('hidden');
    }

    // 更新進度條
    function updateProgressBar() {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        if (!progressFill || !progressText) {
            console.error('找不到進度條元素');
            return;
        }

        // 防呆：確保 levelsData 是陣列
        if (!Array.isArray(levelsData) || levelsData.length === 0) {
            console.warn('關卡資料尚未載入，無法更新進度條');
            return;
        }

        const totalLevels = levelsData.length;
        const maxStars = totalLevels * 3; // 每關最多 3 顆星
        const totalStars = getTotalStars();

        const percent = maxStars > 0
            ? Math.round((totalStars / maxStars) * 100)
            : 0;

        progressFill.style.width = `${percent}%`;
        progressText.textContent = `${totalStars}/${maxStars}`;

        console.log(`星星總數進度條更新: ${totalStars}/${maxStars} (${percent}%)`);
    }

    // 隨機打亂陣列
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});
