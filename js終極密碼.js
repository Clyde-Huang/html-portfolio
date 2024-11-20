// 隨機生成 1 到 99 之間的數字
let n = Math.floor(Math.random() * 20) + 1;

// 記錄猜測次數
let attempts = 0;

// 用戶猜測的變數
let userGuess = 0;

// 使用 while 迴圈，直到用戶猜對為止
while (userGuess !== n) {
    // 提示用戶輸入猜測的數字
    userGuess = parseInt(prompt("輸入 1 ~20 的數字:"));
    if (userGuess === 111) {
        alert(`正確數字是:${n}`); break;//遊戲結束
    }
    userGuess = parseInt(userGuess);
    // 檢查用戶的輸入是否合法
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
        alert("請輸入一個有效的數字，範圍是 1 到 20! 或輸入111直接看答案");
        continue;  // 讓用戶重新猜
    }

    // 增加猜測次數
    attempts++;



    // 判斷用戶的猜測
    if (userGuess < n) {
        alert(`大於${userGuess}，或輸入111直接看答案`);
    } else if (userGuess > n) {
        alert(`小於${userGuess}，或輸入111直接看答案`);
    }
}



if (userGuess === n) {
    alert(`恭喜你猜對了！正確的數字是 ${n}，總共猜了 ${attempts} 次。`);
}