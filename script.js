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
    {
        question: "How do you handle conflicts in a relationship?",
        options: [
            "Discuss openly and resolve issues immediately.",
            "Take some time to cool off before discussing.",
            "Avoid confrontation and hope it resolves itself.",
            "Seek a mediator to help resolve the issue."
        ]
    },
    {
        question: "What kind of dates do you prefer?",
        options: [
            "Adventurous and outdoorsy activities.",
            "Quiet and intimate dinners.",
            "Fun and exciting events like concerts or sports games.",
            "Relaxed and casual hangouts at home."
        ]
    },
    {
        question: "How do you express love and affection?",
        options: [
            "Through words of affirmation.",
            "By spending quality time together.",
            "With physical touch and closeness.",
            "By giving gifts and doing acts of service."
        ]
    },
    {
        question: "What is your approach to financial management in a relationship?",
        options: [
            "Joint accounts and shared expenses.",
            "Separate accounts but shared major expenses.",
            "Completely separate finances.",
            "One partner manages finances."
        ]
    },
    {
        question: "How important is physical attraction to you in a relationship?",
        options: [
            "Very important, it's a top priority.",
            "Somewhat important, but not the most crucial factor.",
            "Not very important, personality matters more.",
            "Not important at all, other factors are much more significant."
        ]
    },
    {
        question: "How do you feel about long-distance relationships?",
        options: [
            "I'm open to them and can make it work.",
            "I'm hesitant but willing to try if necessary.",
            "I would prefer to avoid them if possible.",
            "I don't believe they can work for me."
        ]
    },
    {
        question: "What role does family play in your relationship?",
        options: [
            "Family opinions are very important.",
            "Family is important, but our relationship comes first.",
            "Family has little influence on my relationship decisions.",
            "My partner and I are the only ones who matter."
        ]
    },
    {
        question: "How do you handle your partner's friendships with the opposite sex?",
        options: [
            "I trust them completely and have no issues.",
            "I'm okay with it as long as boundaries are respected.",
            "I'm somewhat uncomfortable but try to be understanding.",
            "I have strong reservations and prefer it not to happen."
        ]
    },
    {
        question: "What are your thoughts on marriage?",
        options: [
            "I definitely want to get married.",
            "I'm open to marriage but not a necessity.",
            "I'm unsure about marriage.",
            "I don't believe in marriage."
        ]
    },
    {
        question: "How do you approach planning for the future?",
        options: [
            "I like to plan everything in detail.",
            "I have a general idea but stay flexible.",
            "I prefer to live in the moment and not plan too far ahead.",
            "I rely on my partner to do the planning."
        ]
    },
    {
        question: "What is your communication style in a relationship?",
        options: [
            "Very open and expressive.",
            "Direct and to the point.",
            "Reserved and thoughtful.",
            "I prefer non-verbal communication."
        ]
    },
    {
        question: "How important is it for you to have shared interests with your partner?",
        options: [
            "Very important, we should enjoy the same activities.",
            "Somewhat important, but it's okay to have individual hobbies.",
            "Not very important, it's good to have our own interests.",
            "Not important at all, I value our differences."
        ]
    },
    {
        question: "How do you handle stress in a relationship?",
        options: [
            "I talk it out with my partner.",
            "I take some time alone to decompress.",
            "I engage in physical activities to relieve stress.",
            "I seek support from friends or family."
        ]
    },
    {
        question: "What kind of lifestyle do you envision with your partner?",
        options: [
            "A busy, active lifestyle with lots of social events.",
            "A quiet, peaceful life with a focus on family.",
            "A balanced life with a mix of activities.",
            "A life centered around work and career goals."
        ]
    },
    {
        question: "How do you deal with jealousy in a relationship?",
        options: [
            "I communicate my feelings openly.",
            "I try to manage it internally without burdening my partner.",
            "I seek reassurance from my partner.",
            "I ignore it and hope it goes away."
        ]
    },
    {
        question: "How important is independence in a relationship to you?",
        options: [
            "Very important, I need my own space.",
            "Somewhat important, a healthy balance is key.",
            "Not very important, I prefer being together most of the time.",
            "Not important at all, I like being completely intertwined."
        ]
    },
    {
        question: "How do you feel about public displays of affection?",
        options: [
            "I love it and am very affectionate in public.",
            "I don't mind some light affection.",
            "I'm reserved and prefer to keep affection private.",
            "I don't like public displays of affection at all."
        ]
    },
    {
        question: "What is your approach to resolving disagreements?",
        options: [
            "I believe in talking things through calmly.",
            "I prefer to wait until emotions have settled.",
            "I seek a compromise or middle ground.",
            "I tend to avoid confrontation and hope it resolves."
        ]
    },
    {
        question: "How important is intellectual compatibility to you?",
        options: [
            "Very important, we need to be on the same wavelength.",
            "Somewhat important, as long as we can communicate well.",
            "Not very important, I value emotional connection more.",
            "Not important at all, other factors matter more."
        ]
    },
    {
        question: "How do you feel about having children or having more children?",
        options: [
            "I definitely want more children.",
            "I'm open to the idea but not certain.",
            "I already have children and don't want more.",
            "I don't want children at all."
        ]
    }
];
questions.push(
    {
        question: "How do you handle your partner's family dynamics?",
        options: [
            "I try to integrate and get along with them.",
            "I maintain a polite but distant relationship.",
            "I focus on my relationship with my partner only.",
            "I avoid getting involved in their family matters."
        ]
    },
    {
        question: "How important is religion or spirituality in your relationship?",
        options: [
            "Very important, it should be a shared belief.",
            "Somewhat important, but not a dealbreaker.",
            "Not very important, as long as there's mutual respect.",
            "Not important at all, I don't consider it in relationships."
        ]
    },
    {
        question: "What role does physical fitness play in your life?",
        options: [
            "It's a major part of my lifestyle.",
            "I try to stay active and healthy.",
            "I exercise occasionally but it's not a priority.",
            "I don't focus much on physical fitness."
        ]
    },
    {
        question: "How do you handle your partner's past relationships?",
        options: [
            "I respect their past and focus on the present.",
            "I'm curious but don't let it affect us.",
            "I feel insecure and it sometimes bothers me.",
            "I prefer not to know about their past relationships."
        ]
    },
    {
        question: "How do you feel about social media use in a relationship?",
        options: [
            "I'm very active on social media and expect my partner to be too.",
            "I use social media moderately and value privacy.",
            "I'm not very active and prefer minimal social media presence.",
            "I don't use social media and prefer my partner not to either."
        ]
    },
    {
        question: "What kind of vacation do you prefer with your partner?",
        options: [
            "Adventure trips with lots of activities.",
            "Relaxing beach vacations.",
            "Cultural trips exploring new places.",
            "Staycations at home."
        ]
    },
    {
        question: "How do you manage differences in opinions with your partner?",
        options: [
            "We discuss and respect each other's viewpoints.",
            "We agree to disagree and move on.",
            "We try to find common ground.",
            "We often have heated arguments."
        ]
    },
    {
        question: "How important is career ambition in a relationship?",
        options: [
            "Very important, I want a partner with strong career goals.",
            "Somewhat important, it's good to have ambitions.",
            "Not very important, as long as they are happy.",
            "Not important at all, I don't value career ambition."
        ]
    },
    {
        question: "How do you feel about gender roles in a relationship?",
        options: [
            "I believe in traditional gender roles.",
            "I prefer modern and equal roles.",
            "I'm open to a mix of both traditional and modern roles.",
            "I don't believe in any specific gender roles."
        ]
    },
    {
        question: "How do you feel about your partner having close friends of the opposite sex?",
        options: [
            "I trust them completely and have no issues.",
            "I'm okay with it as long as boundaries are respected.",
            "I'm somewhat uncomfortable but try to be understanding.",
            "I have strong reservations and prefer it not to happen."
        ]
    },
    {
        question: "How important is personal growth in a relationship?",
        options: [
            "Very important, we should grow together.",
            "Somewhat important, as long as we support each other.",
            "Not very important, I'm okay with the status quo.",
            "Not important at all, I don't focus on personal growth."
        ]
    },
    {
        question: "How do you handle financial disagreements?",
        options: [
            "We discuss and come to a mutual agreement.",
            "We split finances and avoid conflicts.",
            "One partner takes charge of financial decisions.",
            "We seek external advice or counseling."
        ]
    },
    {
        question: "How do you feel about expressing emotions in a relationship?",
        options: [
            "I'm very open and expressive.",
            "I express emotions but with some reservation.",
            "I find it difficult to express my emotions.",
            "I prefer to keep emotions private."
        ]
    },
    {
        question: "What kind of support do you expect from your partner?",
        options: [
            "Emotional support and understanding.",
            "Financial support and stability.",
            "Physical support and presence.",
            "Intellectual support and stimulation."
        ]
    },
    {
        question: "How do you feel about pets in a relationship?",
        options: [
            "I love pets and want them in my life.",
            "I'm okay with pets but not a necessity.",
            "I don't like pets but can tolerate them.",
            "I don't want pets in my life."
        ]
    },
    {
        question: "How do you handle cultural differences in a relationship?",
        options: [
            "I embrace and celebrate them.",
            "I respect them but maintain my own culture.",
            "I find it challenging but try to adapt.",
            "I prefer not to have cultural differences."
        ]
    },
    {
        question: "How do you feel about taking breaks in a relationship?",
        options: [
            "I believe breaks can be healthy.",
            "I'm open to breaks but with clear boundaries.",
            "I don't believe in taking breaks.",
            "I'm undecided and need more time to think."
        ]
    },
    {
        question: "How important is sexual compatibility in a relationship?",
        options: [
            "Very important, it's a top priority.",
            "Somewhat important, but not the most crucial factor.",
            "Not very important, emotional connection matters more.",
            "Not important at all, other factors are much more significant."
        ]
    },
    {
        question: "How do you handle your partner's career success?",
        options: [
            "I celebrate and support their success.",
            "I feel proud but sometimes insecure.",
            "I find it challenging to deal with.",
            "I don't focus on their career success."
        ]
    },
    {
        question: "How do you feel about sharing responsibilities in a relationship?",
        options: [
            "I believe in equal sharing of responsibilities.",
            "I'm okay with one partner taking more responsibility.",
            "I prefer to handle most responsibilities myself.",
            "I expect my partner to handle most responsibilities."
        ]
    },
    {
        question: "How do you approach relationship milestones?",
        options: [
            "I like to plan and celebrate each milestone.",
            "I acknowledge them but don't make a big deal.",
            "I find them unnecessary and don't focus on them.",
            "I'm unsure and need more time to think."
        ]
    },
    {
        question: "How do you feel about open relationships?",
        options: [
            "I'm open to and supportive of open relationships.",
            "I'm curious but unsure if it's for me.",
            "I'm not interested in open relationships.",
            "I strongly prefer monogamous relationships."
        ]
    },
    {
        question: "How do you handle your partner's hobbies and interests?",
        options: [
            "I actively participate and share their interests.",
            "I support them but maintain my own hobbies.",
            "I find it challenging to engage with their interests.",
            "I prefer we have completely separate hobbies."
        ]
    },
    {
        question: "How do you feel about relationship counseling?",
        options: [
            "I believe it's beneficial and support it.",
            "I'm open to it if necessary.",
            "I find it unnecessary but won't oppose it.",
            "I'm against relationship counseling."
        ]
    },
    {
        question: "How do you approach relationship boundaries?",
        options: [
            "I set and respect clear boundaries.",
            "I believe in flexible boundaries.",
            "I find it challenging to set boundaries.",
            "I don't believe in setting boundaries."
        ]
    },
    {
        question: "How do you feel about giving and receiving feedback in a relationship?",
        options: [
            "I'm open to both giving and receiving feedback.",
            "I prefer to give feedback but struggle to receive it.",
            "I find it challenging to give feedback but can receive it.",
            "I avoid giving and receiving feedback."
        ]
    },
    {
        question: "How do you handle your partner's emotional needs?",
        options: [
            "I actively support and fulfill their needs.",
            "I try my best but sometimes struggle.",
            "I find it challenging to meet their emotional needs.",
            "I focus on my own needs first."
        ]
    },
    {
        question: "How do you feel about maintaining individuality in a relationship?",
        options: [
            "I believe it's crucial to maintain individuality.",
            "I'm okay with some individuality but prefer closeness.",
            "I find it challenging to balance individuality and togetherness.",
            "I prefer we do everything together."
        ]
    },
    {
        question: "How do you handle your partner's achievements?",
        options: [
            "I celebrate and support their achievements.",
            "I feel proud but sometimes insecure.",
            "I find it challenging to deal with.",
            "I don't focus on their achievements."
        ]
    }
);

// Continue script below
let currentQuestionIndex = 0;
let answers = [];
let userName = '';

function startTest() {
    userName = document.getElementById('user-name').value;
    if (userName.trim() === '') {
        alert('Please enter your name.');
        return;
    }
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
    const worstCompatibility = [
        { label: "Independent", percentage: 40 },
        { label: "Non-Committal", percentage: 30 },
        { label: "Free Spirit", percentage: 20 }
    ];
    const recommendations = "Focus on finding partners who share your values and commitment to deep emotional connections.";

    const now = new Date();
    const dateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    document.getElementById('result-label').innerText = `Your Dating Style: ${label}`;
    document.getElementById('user-name-result').innerText = `Name: ${userName}`;
    document.getElementById('date-time').innerText = `Date: ${dateTime}`;

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

    const worstCompatibilityList = document.getElementById('worst-compatibility-list');
    worstCompatibilityList.innerHTML = '';
    worstCompatibility.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.label}: ${item.percentage}%`;
        worstCompatibilityList.appendChild(li);
    });

    document.getElementById('recommendations').innerText = recommendations;
}

function retakeTest() {
    currentQuestionIndex = 0;
    answers = [];
    document.getElementById('summary-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
}

function finishTest() {
    alert("Thank you for taking the test!");
    // Optionally, you can redirect the user or perform other actions
}
