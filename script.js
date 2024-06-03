let currentQuestionIndex = 0;
let answers = [];
let userName = '';

const questions = [
    {
        question: "How do you handle your partner spending time with their friends?",
        options: [
            "I encourage them to spend time with their friends.",
            "I feel jealous and want them to spend more time with me.",
            "I don't mind as long as it doesn't interfere with our plans.",
            "I feel anxious and need constant reassurance."
        ],
        scores: [
            { label: "Supportive", points: 2 },
            { label: "Jealous", points: -2 },
            { label: "Balanced", points: 1 },
            { label: "Insecure", points: -1 }
        ]
    },
    {
        question: "What is your approach to financial management in a relationship?",
        options: [
            "Joint accounts and shared expenses.",
            "Separate accounts but shared major expenses.",
            "Completely separate finances.",
            "One partner manages finances."
        ],
        scores: [
            { label: "Collaborative", points: 2 },
            { label: "Independent", points: 1 },
            { label: "Independent", points: -1 },
            { label: "Controlling", points: -2 }
        ]
    },
    {
        question: "How do you handle conflicts in a relationship?",
        options: [
            "Discuss openly and resolve issues immediately.",
            "Take some time to cool off before discussing.",
            "Avoid confrontation and hope it resolves itself.",
            "Seek a mediator to help resolve the issue."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Patient", points: 1 },
            { label: "Avoidant", points: -1 },
            { label: "Mediator", points: 1 }
        ]
    },
    {
        question: "How do you feel about your partner having close friends of the opposite sex?",
        options: [
            "I trust them completely and have no issues.",
            "I'm okay with it as long as boundaries are respected.",
            "I'm somewhat uncomfortable but try to be understanding.",
            "I have strong reservations and prefer it not to happen."
        ],
        scores: [
            { label: "Trusting", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Jealous", points: -2 }
        ]
    },
    {
        question: "What is most important to you in a relationship?",
        options: [
            "Feeling understood and emotionally connected.",
            "Having a partner who shares similar life goals and ambitions.",
            "Maintaining personal freedom and individuality.",
            "Mutual respect and supporting each other’s growth."
        ],
        scores: [
            { label: "Dreamer", points: 2 },
            { label: "Goal-Digger", points: 2 },
            { label: "Independent", points: 2 },
            { label: "Supportive", points: 2 }
        ]
    },
    {
        question: "How do you handle jealousy in a relationship?",
        options: [
            "I communicate my feelings openly.",
            "I try to manage it internally without burdening my partner.",
            "I seek reassurance from my partner.",
            "I ignore it and hope it goes away."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Self-Aware", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Avoidant", points: -1 }
        ]
    },
    {
        question: "How do you feel about public displays of affection?",
        options: [
            "I love it and am very affectionate in public.",
            "I don't mind some light affection.",
            "I'm reserved and prefer to keep affection private.",
            "I don't like public displays of affection at all."
        ],
        scores: [
            { label: "Affectionate", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Reserved", points: -1 },
            { label: "Reserved", points: -2 }
        ]
    },
    {
        question: "What kind of support do you expect from your partner?",
        options: [
            "Emotional support and understanding.",
            "Financial support and stability.",
            "Physical support and presence.",
            "Intellectual support and stimulation."
        ],
        scores: [
            { label: "Supportive", points: 2 },
            { label: "Dependent", points: -1 },
            { label: "Affectionate", points: 1 },
            { label: "Intellectual", points: 1 }
        ]
    },
    {
        question: "How do you handle your partner's past relationships?",
        options: [
            "I respect their past and focus on the present.",
            "I'm curious but don't let it affect us.",
            "I feel insecure and it sometimes bothers me.",
            "I prefer not to know about their past relationships."
        ],
        scores: [
            { label: "Mature", points: 2 },
            { label: "Curious", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Avoidant", points: -1 }
        ]
    },
    {
        question: "What is your approach to relationship milestones?",
        options: [
            "I like to plan and celebrate each milestone.",
            "I acknowledge them but don't make a big deal.",
            "I find them unnecessary and don't focus on them.",
            "I'm unsure and need more time to think."
        ],
        scores: [
            { label: "Romantic", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Detached", points: -1 },
            { label: "Indecisive", points: -1 }
        ]
    },
    {
        question: "How do you feel about expressing emotions in a relationship?",
        options: [
            "I'm very open and expressive.",
            "I express emotions but with some reservation.",
            "I find it difficult to express my emotions.",
            "I prefer to keep emotions private."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Reserved", points: -1 },
            { label: "Detached", points: -2 }
        ]
    },
    {
        question: "How important is it for you to have shared interests with your partner?",
        options: [
            "Very important, we should enjoy the same activities.",
            "Somewhat important, but it's okay to have individual hobbies.",
            "Not very important, it's good to have our own interests.",
            "Not important at all, I value our differences."
        ],
        scores: [
            { label: "Supportive", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Independent", points: 1 },
            { label: "Detached", points: -1 }
        ]
    },
    {
        question: "How do you handle stress in a relationship?",
        options: [
            "I talk it out with my partner.",
            "I take some time alone to decompress.",
            "I engage in physical activities to relieve stress.",
            "I seek support from friends or family."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Independent", points: 1 },
            { label: "Active", points: 1 },
            { label: "Dependent", points: -1 }
        ]
    },
    {
        question: "What kind of lifestyle do you envision with your partner?",
        options: [
            "A busy, active lifestyle with lots of social events.",
            "A quiet, peaceful life with a focus on family.",
            "A balanced life with a mix of activities.",
            "A life centered around work and career goals."
        ],
        scores: [
            { label: "Socialite", points: 2 },
            { label: "Homebody", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Goal-Digger", points: 2 }
        ]
    },
    {
        question: "How do you deal with jealousy in a relationship?",
        options: [
            "I communicate my feelings openly.",
            "I try to manage it internally without burdening my partner.",
            "I seek reassurance from my partner.",
            "I ignore it and hope it goes away."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Self-Aware", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Avoidant", points: -1 }
        ]
    },
    {
        question: "How important is independence in a relationship to you?",
        options: [
            "Very important, I need my own space.",
            "Somewhat important, a healthy balance is key.",
            "Not very important, I prefer being together most of the time.",
            "Not important at all, I like being completely intertwined."
        ],
        scores: [
            { label: "Independent", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Dependent", points: -1 },
            { label: "Insecure", points: -2 }
        ]
    },
    {
        question: "How do you feel about public displays of affection?",
        options: [
            "I love it and am very affectionate in public.",
            "I don't mind some light affection.",
            "I'm reserved and prefer to keep affection private.",
            "I don't like public displays of affection at all."
        ],
        scores: [
            { label: "Affectionate", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Reserved", points: -1 },
            { label: "Reserved", points: -2 }
        ]
    },
    {
        question: "What kind of support do you expect from your partner?",
        options: [
            "Emotional support and understanding.",
            "Financial support and stability.",
            "Physical support and presence.",
            "Intellectual support and stimulation."
        ],
        scores: [
            { label: "Supportive", points: 2 },
            { label: "Dependent", points: -1 },
            { label: "Affectionate", points: 1 },
            { label: "Intellectual", points: 1 }
        ]
    },
    {
        question: "How do you handle your partner's past relationships?",
        options: [
            "I respect their past and focus on the present.",
            "I'm curious but don't let it affect us.",
            "I feel insecure and it sometimes bothers me.",
            "I prefer not to know about their past relationships."
        ],
        scores: [
            { label: "Mature", points: 2 },
            { label: "Curious", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Avoidant", points: -1 }
        ]
    },
    {
        question: "What is your approach to relationship milestones?",
        options: [
            "I like to plan and celebrate each milestone.",
            "I acknowledge them but don't make a big deal.",
            "I find them unnecessary and don't focus on them.",
            "I'm unsure and need more time to think."
        ],
        scores: [
            { label: "Romantic", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Detached", points: -1 },
            { label: "Indecisive", points: -1 }
        ]
    },
    {
        question: "How do you feel about expressing emotions in a relationship?",
        options: [
            "I'm very open and expressive.",
            "I express emotions but with some reservation.",
            "I find it difficult to express my emotions.",
            "I prefer to keep emotions private."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Reserved", points: -1 },
            { label: "Detached", points: -2 }
        ]
    },
    {
        question: "How important is it for you to have shared interests with your partner?",
        options: [
            "Very important, we should enjoy the same activities.",
            "Somewhat important, but it's okay to have individual hobbies.",
            "Not very important, it's good to have our own interests.",
            "Not important at all, I value our differences."
        ],
        scores: [
            { label: "Supportive", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Independent", points: 1 },
            { label: "Detached", points: -1 }
        ]
    },
    {
        question: "How do you handle stress in a relationship?",
        options: [
            "I talk it out with my partner.",
            "I take some time alone to decompress.",
            "I engage in physical activities to relieve stress.",
            "I seek support from friends or family."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Independent", points: 1 },
            { label: "Active", points: 1 },
            { label: "Dependent", points: -1 }
        ]
    },
    {
        question: "What kind of lifestyle do you envision with your partner?",
        options: [
            "A busy, active lifestyle with lots of social events.",
            "A quiet, peaceful life with a focus on family.",
            "A balanced life with a mix of activities.",
            "A life centered around work and career goals."
        ],
        scores: [
            { label: "Socialite", points: 2 },
            { label: "Homebody", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Goal-Digger", points: 2 }
        ]
    },
    {
        question: "How do you deal with jealousy in a relationship?",
        options: [
            "I communicate my feelings openly.",
            "I try to manage it internally without burdening my partner.",
            "I seek reassurance from my partner.",
            "I ignore it and hope it goes away."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Self-Aware", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Avoidant", points: -1 }
        ]
    },
    {
        question: "How important is independence in a relationship to you?",
        options: [
            "Very important, I need my own space.",
            "Somewhat important, a healthy balance is key.",
            "Not very important, I prefer being together most of the time.",
            "Not important at all, I like being completely intertwined."
        ],
        scores: [
            { label: "Independent", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Dependent", points: -1 },
            { label: "Insecure", points: -2 }
        ]
    },
    {
        question: "How do you feel about public displays of affection?",
        options: [
            "I love it and am very affectionate in public.",
            "I don't mind some light affection.",
            "I'm reserved and prefer to keep affection private.",
            "I don't like public displays of affection at all."
        ],
        scores: [
            { label: "Affectionate", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Reserved", points: -1 },
            { label: "Reserved", points: -2 }
        ]
    },
    {
        question: "What kind of support do you expect from your partner?",
        options: [
            "Emotional support and understanding.",
            "Financial support and stability.",
            "Physical support and presence.",
            "Intellectual support and stimulation."
        ],
        scores: [
            { label: "Supportive", points: 2 },
            { label: "Dependent", points: -1 },
            { label: "Affectionate", points: 1 },
            { label: "Intellectual", points: 1 }
        ]
    },
    {
        question: "How do you handle your partner's past relationships?",
        options: [
            "I respect their past and focus on the present.",
            "I'm curious but don't let it affect us.",
            "I feel insecure and it sometimes bothers me.",
            "I prefer not to know about their past relationships."
        ],
        scores: [
            { label: "Mature", points: 2 },
            { label: "Curious", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Avoidant", points: -1 }
        ]
    },
    {
        question: "What is your approach to relationship milestones?",
        options: [
            "I like to plan and celebrate each milestone.",
            "I acknowledge them but don't make a big deal.",
            "I find them unnecessary and don't focus on them.",
            "I'm unsure and need more time to think."
        ],
        scores: [
            { label: "Romantic", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Detached", points: -1 },
            { label: "Indecisive", points: -1 }
        ]
    },
    {
        question: "How do you feel about expressing emotions in a relationship?",
        options: [
            "I'm very open and expressive.",
            "I express emotions but with some reservation.",
            "I find it difficult to express my emotions.",
            "I prefer to keep emotions private."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Reserved", points: -1 },
            { label: "Detached", points: -2 }
        ]
    },
    {
        question: "How important is it for you to have shared interests with your partner?",
        options: [
            "Very important, we should enjoy the same activities.",
            "Somewhat important, but it's okay to have individual hobbies.",
            "Not very important, it's good to have our own interests.",
            "Not important at all, I value our differences."
        ],
        scores: [
            { label: "Supportive", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Independent", points: 1 },
            { label: "Detached", points: -1 }
        ]
    },
    {
        question: "How do you handle stress in a relationship?",
        options: [
            "I talk it out with my partner.",
            "I take some time alone to decompress.",
            "I engage in physical activities to relieve stress.",
            "I seek support from friends or family."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Independent", points: 1 },
            { label: "Active", points: 1 },
            { label: "Dependent", points: -1 }
        ]
    },
    {
        question: "What kind of lifestyle do you envision with your partner?",
        options: [
            "A busy, active lifestyle with lots of social events.",
            "A quiet, peaceful life with a focus on family.",
            "A balanced life with a mix of activities.",
            "A life centered around work and career goals."
        ],
        scores: [
            { label: "Socialite", points: 2 },
            { label: "Homebody", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Goal-Digger", points: 2 }
        ]
    },
    {
        question: "How do you deal with jealousy in a relationship?",
        options: [
            "I communicate my feelings openly.",
            "I try to manage it internally without burdening my partner.",
            "I seek reassurance from my partner.",
            "I ignore it and hope it goes away."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Self-Aware", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Avoidant", points: -1 }
        ]
    },
    {
        question: "How important is independence in a relationship to you?",
        options: [
            "Very important, I need my own space.",
            "Somewhat important, a healthy balance is key.",
            "Not very important, I prefer being together most of the time.",
            "Not important at all, I like being completely intertwined."
        ],
        scores: [
            { label: "Independent", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Dependent", points: -1 },
            { label: "Insecure", points: -2 }
        ]
    },
    {
        question: "How do you feel about public displays of affection?",
        options: [
            "I love it and am very affectionate in public.",
            "I don't mind some light affection.",
            "I'm reserved and prefer to keep affection private.",
            "I don't like public displays of affection at all."
        ],
        scores: [
            { label: "Affectionate", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Reserved", points: -1 },
            { label: "Reserved", points: -2 }
        ]
    },
    {
        question: "What kind of support do you expect from your partner?",
        options: [
            "Emotional support and understanding.",
            "Financial support and stability.",
            "Physical support and presence.",
            "Intellectual support and stimulation."
        ],
        scores: [
            { label: "Supportive", points: 2 },
            { label: "Dependent", points: -1 },
            { label: "Affectionate", points: 1 },
            { label: "Intellectual", points: 1 }
        ]
    },
    {
        question: "How do you handle your partner's past relationships?",
        options: [
            "I respect their past and focus on the present.",
            "I'm curious but don't let it affect us.",
            "I feel insecure and it sometimes bothers me.",
            "I prefer not to know about their past relationships."
        ],
        scores: [
            { label: "Mature", points: 2 },
            { label: "Curious", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Avoidant", points: -1 }
        ]
    },
    {
        question: "What is your approach to relationship milestones?",
        options: [
            "I like to plan and celebrate each milestone.",
            "I acknowledge them but don't make a big deal.",
            "I find them unnecessary and don't focus on them.",
            "I'm unsure and need more time to think."
        ],
        scores: [
            { label: "Romantic", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Detached", points: -1 },
            { label: "Indecisive", points: -1 }
        ]
    },
    {
        question: "How do you feel about expressing emotions in a relationship?",
        options: [
            "I'm very open and expressive.",
            "I express emotions but with some reservation.",
            "I find it difficult to express my emotions.",
            "I prefer to keep emotions private."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Reserved", points: -1 },
            { label: "Detached", points: -2 }
        ]
    },
    {
        question: "How important is it for you to have shared interests with your partner?",
        options: [
            "Very important, we should enjoy the same activities.",
            "Somewhat important, but it's okay to have individual hobbies.",
            "Not very important, it's good to have our own interests.",
            "Not important at all, I value our differences."
        ],
        scores: [
            { label: "Supportive", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Independent", points: 1 },
            { label: "Detached", points: -1 }
        ]
    },
    {
        question: "How do you handle stress in a relationship?",
        options: [
            "I talk it out with my partner.",
            "I take some time alone to decompress.",
            "I engage in physical activities to relieve stress.",
            "I seek support from friends or family."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Independent", points: 1 },
            { label: "Active", points: 1 },
            { label: "Dependent", points: -1 }
        ]
    },
    {
        question: "What kind of lifestyle do you envision with your partner?",
        options: [
            "A busy, active lifestyle with lots of social events.",
            "A quiet, peaceful life with a focus on family.",
            "A balanced life with a mix of activities.",
            "A life centered around work and career goals."
        ],
        scores: [
            { label: "Socialite", points: 2 },
            { label: "Homebody", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Goal-Digger", points: 2 }
        ]
    },
    {
        question: "How do you deal with jealousy in a relationship?",
        options: [
            "I communicate my feelings openly.",
            "I try to manage it internally without burdening my partner.",
            "I seek reassurance from my partner.",
            "I ignore it and hope it goes away."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Self-Aware", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Avoidant", points: -1 }
        ]
    },
    {
        question: "How important is independence in a relationship to you?",
        options: [
            "Very important, I need my own space.",
            "Somewhat important, a healthy balance is key.",
            "Not very important, I prefer being together most of the time.",
            "Not important at all, I like being completely intertwined."
        ],
        scores: [
            { label: "Independent", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Dependent", points: -1 },
            { label: "Insecure", points: -2 }
        ]
    },
    {
        question: "How do you feel about public displays of affection?",
        options: [
            "I love it and am very affectionate in public.",
            "I don't mind some light affection.",
            "I'm reserved and prefer to keep affection private.",
            "I don't like public displays of affection at all."
        ],
        scores: [
            { label: "Affectionate", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Reserved", points: -1 },
            { label: "Reserved", points: -2 }
        ]
    },
    {
        question: "What kind of support do you expect from your partner?",
        options: [
            "Emotional support and understanding.",
            "Financial support and stability.",
            "Physical support and presence.",
            "Intellectual support and stimulation."
        ],
        scores: [
            { label: "Supportive", points: 2 },
            { label: "Dependent", points: -1 },
            { label: "Affectionate", points: 1 },
            { label: "Intellectual", points: 1 }
        ]
    },
    {
        question: "How do you handle your partner's past relationships?",
        options: [
            "I respect their past and focus on the present.",
            "I'm curious but don't let it affect us.",
            "I feel insecure and it sometimes bothers me.",
            "I prefer not to know about their past relationships."
        ],
        scores: [
            { label: "Mature", points: 2 },
            { label: "Curious", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Avoidant", points: -1 }
        ]
    },
    {
        question: "What is your approach to relationship milestones?",
        options: [
            "I like to plan and celebrate each milestone.",
            "I acknowledge them but don't make a big deal.",
            "I find them unnecessary and don't focus on them.",
            "I'm unsure and need more time to think."
        ],
        scores: [
            { label: "Romantic", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Detached", points: -1 },
            { label: "Indecisive", points: -1 }
        ]
    },
    {
        question: "How do you feel about expressing emotions in a relationship?",
        options: [
            "I'm very open and expressive.",
            "I express emotions but with some reservation.",
            "I find it difficult to express my emotions.",
            "I prefer to keep emotions private."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Reserved", points: -1 },
            { label: "Detached", points: -2 }
        ]
    },
    {
        question: "How important is it for you to have shared interests with your partner?",
        options: [
            "Very important, we should enjoy the same activities.",
            "Somewhat important, but it's okay to have individual hobbies.",
            "Not very important, it's good to have our own interests.",
            "Not important at all, I value our differences."
        ],
        scores: [
            { label: "Supportive", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Independent", points: 1 },
            { label: "Detached", points: -1 }
        ]
    },
    {
        question: "How do you handle stress in a relationship?",
        options: [
            "I talk it out with my partner.",
            "I take some time alone to decompress.",
            "I engage in physical activities to relieve stress.",
            "I seek support from friends or family."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Independent", points: 1 },
            { label: "Active", points: 1 },
            { label: "Dependent", points: -1 }
        ]
    },
    {
        question: "What kind of lifestyle do you envision with your partner?",
        options: [
            "A busy, active lifestyle with lots of social events.",
            "A quiet, peaceful life with a focus on family.",
            "A balanced life with a mix of activities.",
            "A life centered around work and career goals."
        ],
        scores: [
            { label: "Socialite", points: 2 },
            { label: "Homebody", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Goal-Digger", points: 2 }
        ]
    },
    {
        question: "How do you deal with jealousy in a relationship?",
        options: [
            "I communicate my feelings openly.",
            "I try to manage it internally without burdening my partner.",
            "I seek reassurance from my partner.",
            "I ignore it and hope it goes away."
        ],
        scores: [
            { label: "Communicator", points: 2 },
            { label: "Self-Aware", points: 1 },
            { label: "Insecure", points: -1 },
            { label: "Avoidant", points: -1 }
        ]
    },
    {
        question: "How important is independence in a relationship to you?",
        options: [
            "Very important, I need my own space.",
            "Somewhat important, a healthy balance is key.",
            "Not very important, I prefer being together most of the time.",
            "Not important at all, I like being completely intertwined."
        ],
        scores: [
            { label: "Independent", points: 2 },
            { label: "Balanced", points: 1 },
            { label: "Dependent", points: -1 },
            { label: "Insecure", points: -2 }
        ]
    }
];

const labels = [
    { name: "The Dreamer", points: 0 },
    { name: "The Caregiver", points: 0 },
    { name: "The Adventurer", points: 0 },
    { name: "The Thinker", points: 0 },
    { name: "The Independent", points: 0 },
    { name: "The Non-Committal", points: 0 },
    { name: "The Free Spirit", points: 0 },
    { name: "Supportive", points: 0 },
    { name: "Insecure", points: 0 },
    { name: "Jealous", points: 0 },
    { name: "Affectionate", points: 0 },
    { name: "Reserved", points: 0 },
    { name: "Intellectual", points: 0 },
    { name: "Communicator", points: 0 },
    { name: "Goal-Digger", points: 0 },
    { name: "Self-Aware", points: 0 },
    { name: "Mature", points: 0 },
    { name: "Curious", points: 0 },
    { name: "Avoidant", points: 0 },
    { name: "Balanced", points: 0 },
    { name: "Romantic", points: 0 },
    { name: "Patient", points: 0 },
    { name: "Mediator", points: 0 },
    { name: "Dependent", points: 0 },
    { name: "Detached", points: 0 },
    { name: "Indecisive", points: 0 }
];

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
    const question = questions[currentQuestionIndex];
    question.scores.forEach((score, scoreIndex) => {
        if (scoreIndex === index) {
            labels.find(label => label.name === score.label).points += score.points;
        }
    });
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
    } else {
        showSummary();
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

    // Determine the label with the highest points
    labels.sort((a, b) => b.points - a.points);
    const bestLabel = labels[0];
    const worstLabel = labels[labels.length - 1];

    const bestCompatibility = labels.slice(1, 4).map(label => ({
        label: label.name,
        percentage: (label.points / labels.reduce((sum, label) => sum + label.points, 0) * 100).toFixed(2)
    }));

    const worstCompatibility = labels.slice(-3).map(label => ({
        label: label.name,
        percentage: (label.points / labels.reduce((sum, label) => sum + label.points, 0) * 100).toFixed(2)
    }));

    const recommendations = "Focus on finding partners who share your values and commitment to deep emotional connections.";

    const now = new Date();
    const dateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    document.getElementById('result-label').innerText = `Your Dating Style: ${bestLabel.name}`;
    document.getElementById('user-name-result').innerText = `Name: ${userName}`;
    document.getElementById('date-time').innerText = `Date: ${dateTime}`;

    const traitsList = document.getElementById('traits-list');
    traitsList.innerHTML = '';
    ["Values deep emotional connections", "Seeks long-term commitment"].forEach(trait => {
        const li = document.createElement('li');
        li.innerText = trait;
        traitsList.appendChild(li);
    });

    const compatibilityList = document.getElementById('compatibility-list');
    compatibilityList.innerHTML = '';
    bestCompatibility.forEach(item => {
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
    labels.forEach(label => label.points = 0); // Reset points
    document.getElementById('summary-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
}

function finishTest() {
    alert("Thank you for taking the test!");
    // Optionally, you can redirect the user or perform other actions
}
