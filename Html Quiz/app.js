const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement =document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener("click",startGame);


nextButton.addEventListener("click",()=>{
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame(){
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(()=> Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
    quizScore = 0;
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click",selectAnswer);
            answerButtonsElement.appendChild(button);
    })
}


function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button, button.dataset.correct);
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide");
    }else{
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
    if(selectedButton.dataset = correct){
        quizScore++
    }
    document.getElementById('right-answer').innerText = quizScore;
}


function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which one of these is a JavaScript framework?',
        answers:[
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: true},
            {text: 'Eclipse', correct: false}
        ],
    },
    {
        question: 'Who is the prime minister of India?',
        answers:[
            {text: 'Narendra Modi', correct: true},
            {text: 'Rahul Gandhi', correct: false},
        ],
    },
    {
        question:'What is the correct way to declare a constant in JavaScript?',
        answers:[
            {text: 'let x=10', correct: false},
            {text: 'const x=10', correct: true},
            {text: 'var x=10', correct: false},
            {text: 'constant x=10', correct: false}
        ],
    },
    {
        question: 'What will typeof NaN return?',
        answers:[
            {text: 'undefined', correct: false},
            {text: 'object', correct: false},
            {text: 'number', correct: true},
            {text: 'string', correct: false}
        ],
    },
    {
        question: 'Which method is used to merge arrays in JavaScript?',
        answers:[
            {text: 'concat()', correct: true},
            {text: 'join()', correct: false},
            {text: 'merge()', correct: false},
            {text: 'append()', correct: false}
        ],
    },
    {
        question: 'What is the virtual DOM in React?',
        answers:[
            {text: 'A copy of the real DOM kept in memory', correct: true},
            {text: 'The actual DOM', correct: false},
            {text: 'A template for rendering components', correct: false},
            {text: 'A library for DOM manipulation', correct: false}
        ],
    },
    {
        question: 'How do you pass data from a parent to a child component in React?',
        answers:[
            {text: 'Using state', correct: false},
            {text: 'Using context', correct: false},
            {text: 'Using props', correct: true},
            {text: 'Using refs', correct: false}
        ],
    },
    {
        question: 'What is the purpose of useEffect in React?',
        answers:[
            {text: 'To manage component lifecycle events', correct: true},
            {text: 'To fetch data from an API', correct: true},
            {text: 'To handle DOM manipulations', correct: true},
            {text: 'All of the above', correct: true}
        ],
    },
    {
        question: 'Which hook is used to manage state in functional components?',
        answers:[
            {text: 'useReducer', correct: false},
            {text: 'useEffect', correct: false},
            {text: 'useState', correct: true},
            {text: 'useMemo', correct: false}
        ],
    },
]
