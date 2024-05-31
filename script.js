const questions = [
    {
        question: "How do you prefer to spend quality time with your partner?",
        options: [
            "Going on spontaneous road trips or exploring new places.",
            "Deep conversations over a cozy dinner or a quiet walk.",
            "Watching movies or series together at home.",
            "Attending concerts, parties, or social gatherings."
        ]
    },
    {
        question: "What is most important to you in a relationship?",
        options: [
            "Feeling understood and emotionally connected.",
            "Having a partner who shares similar life goals and ambitions.",
            "Maintaining personal freedom and individuality.",
            "Mutual respect and supporting each other’s growth."
        ]
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let answers = [];

function startTest() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('question-text').innerText = question.question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.innerText = option;
        optionButton.onclick = () => selectOption(index);
        optionsDiv.appendChild(optionButton);
    });

    document.getElementById('progress').style.width = `${(currentQuestionIndex + 1) / questions.length * 100}%`;
}

function selectOption(index) {
    answers[currentQuestionIndex] = index;
    if (currentQuestionIndex < questions.length - 1) {
        nextQuestion();
    } else {
        showSummary();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function showSummary() {
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('summary-screen').style.display = 'block';

    // Calculate the result based on the answers
    const label = "The Dreamer"; // Placeholder, replace with actual calculation logic
    const traits = [
        "Values deep emotional connections",
        "Seeks long-term commitment"
    ];
    const compatibility = [
        { label: "Caregiver", percentage: 90 },
        { label: "Thinker", percentage: 80 },
        { label: "Adventurer", percentage: 70 }
    ];
    const recommendations = "Focus on finding partners who share your values and commitment to deep emotional connections.";

    document.getElementById('result-label').innerText = label;
    const traitsList = document.getElementById('traits-list');
    traitsList.innerHTML = '';
    traits.forEach(trait => {
        const li = document.createElement('li');
        li.innerText = trait;
        traitsList.appendChild(li);
    });

    const compatibilityList = document.getElementById('compatibility-list');
    compatibilityList.innerHTML = '';
    compatibility.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.label}: ${item.percentage}%`;
        compatibilityList.appendChild(li);
    });

    document.getElementById('recomm
