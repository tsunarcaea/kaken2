// script.js

// クイズのデータ
const quizData = [
    {
        question: "無断転載は法律違反である？",
        a: "はい",
        b: "いいえ",
        correct: "a",
        explanation: "無断転載は法律違反です。著作権者の許可無く使用することは認められていません。"
    },
    {
        question: "著作権は何を保護しますか？",
        a: "物理的財産",
        b: "知的財産",
        correct: "b",
        explanation: "著作権は知的財産を保護します。これには書籍、音楽、芸術作品などが含まれます。"
    },
    {
        question: "著作権の有効期限は通常何年ですか？",
        a: "50年",
        b: "70年",
        correct: "b",
        explanation: "著作権の有効期限は創作物の発表時から70年とされています。"
    },
    {
        question: "他人の画像を無断で使用することは許可されていますか？",
        a: "はい",
        b: "いいえ",
        correct: "b",
        explanation: "他人の画像を無断で使用することは著作権侵害となるため、許可されていません。"
    },
    {
        question: "クリエイティブ・コモンズ・ライセンスとは何ですか？",
        a: "使用条件が明示された著作権ライセンス",
        b: "著作権を完全に放棄したライセンス",
        correct: "a",
        explanation: "クリエイティブ・コモンズ・ライセンスは著作物の使用条件が明示されたライセンスで、利用者が条件を満たせば自由に使用できます。"
    },
    {
        question: "インターネット上のコンテンツも著作権で保護されますか？",
        a: "はい",
        b: "いいえ",
        correct: "a",
        explanation: "インターネット上のコンテンツも著作権で保護されています。"
    },
    {
        question: "他人の動画を無断転載することは違法ですか？",
        a: "はい",
        b: "いいえ",
        correct: "a",
        explanation: "他人の動画を無断転載することは違法です。著作権者の許可が必要です。"
    },
    {
        question: "著作権侵害の罰則として可能性があるのは？",
        a: "罰金",
        b: "懲役刑",
        c: "どちらも",
        correct: "c",
        explanation: "著作権侵害の罰則は罰金、懲役刑のどちらも可能性があります。"
    },
    {
        question: "著作物を無断で改変することは許可されていますか？",
        a: "はい",
        b: "いいえ",
        correct: "b",
        explanation: "著作物を無断で改変することは許可されておらず、著作権侵害に当たります。"
    },
    {
        question: "フェアユースとは何ですか？",
        a: "著作権侵害を免れるための教義",
        b: "著作物の公正使用を許可する例外規定",
        correct: "b",
        explanation: "フェアユースは著作物の公正使用を許可する例外規定です。"
    }
];

let currentQuiz = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');

// クイズをロードする関数
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    
    quizContainer.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        <label class="quiz-option">
            <input type="radio" name="answer" value="a">
            ${currentQuizData.a}
        </label><br>
        <label class="quiz-option">
            <input type="radio" name="answer" value="b">
            ${currentQuizData.b}
        </label><br>
        ${currentQuizData.c ? `
        <label class="quiz-option">
            <input type="radio" name="answer" value="c">
            ${currentQuizData.c}
        </label><br>` : ""}
        <div id="explanation" style="display: none; margin-top: 20px; padding: 15px; background: #e0f7fa; border-radius: 5px; font-size: 1.1em; color: #00796b; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);"></div>
    `;
}

loadQuiz();

submitButton.addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    
    if (answer) {
        const explanationContainer = document.getElementById('explanation');
        if (answer.value === quizData[currentQuiz].correct) {
            score++;
            explanationContainer.innerHTML = `<strong>正解！</strong> ${quizData[currentQuiz].explanation}`;
        } else {
            explanationContainer.innerHTML = `<strong>不正解。</strong> ${quizData[currentQuiz].explanation}`;
        }
        explanationContainer.style.display = 'block';
        submitButton.style.display = 'none';
        nextButton.style.display = 'block';
    } else {
        alert("答えを選んでください！");
    }
});

nextButton.addEventListener('click', () => {
    currentQuiz++;
    
    if (currentQuiz < quizData.length) {
        loadQuiz();
        submitButton.style.display = 'block';
        nextButton.style.display = 'none';
    } else {
        showResults();
    }
});

function showResults() {
    let message;
    const percentage = score / quizData.length * 100;
    
    if (percentage === 100) {
        message = "完璧やで。";
    } else if (percentage >= 80) {
        message = "とても良い！大部分の問題に正解しました。無断転載についてかなりの理解があります。";
    } else if (percentage >= 60) {
        message = "良いです！過半数の問題に正解しましたが、もう少し勉強する余地があります。";
    } else {
        message = "無断転載に対する理解が不足しています。もう一度基本を確認してみましょう。";
    }

    quizContainer.innerHTML = `
        <h2>あなたの得点は ${score}/${quizData.length} です。</h2>
        <p>${message}</p>
    `;
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
}
