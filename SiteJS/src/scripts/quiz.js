const DATA = [
    {
        question: "1. С помощью какого тега в таблицах создаются строки?",
        answers: [
            {
                id: '1',
                value: '&lt;td&gt;',
                correct: false,

            },
            {
                id: '2',
                value: '&lt;tr&gt;',
                correct: true,
                
            },
            {
                id: '3',
                value: '&lt;th&gt;',
                correct: false,
                
            }
        ]
    },
    {
        question: "2. Какое число заголовков первого уровня считается допустимым",
        answers: [
            {
                id: '4',
                value: '4',
                correct: false,

            },
            {
                id: '5',
                value: '2',
                correct: false,
            },
            {
                id: '6',
                value: '1',
                correct: true,
            }
        ]
    },
    {
        question: "3. Какие тэги используются для определения заголовков?",
        answers: [
            {
                id: '6',
                value: 'h1-h6',
                correct: true,

            },
            {
                id: '7',
                value: 'Heading',
                correct: false,
            }
        ]
    },
    {
        question: "4. Какие единицы измерения могут использоваться для атрибута ширины?",
        answers: [
            {
                id: '8',
                value: 'Пиксели и %',
                correct: true,

            },
            {
                id: '9',
                value: 'Миллиметры и сантиметры',
                correct: false,
            }
        ]
    },
    {
        question: "5. Использование тэга … позволяет добавлять одну строку текста без начала нового абзаца.",
        answers: [
            {
                id: '10',
                value: '&lt;line/&gt;',
                correct: false,

            },
            {
                id: '11',
                value: '&lt;br/&gt;',
                correct: true,
            }
        ]
    },
    {
        question: "6. Какие из перечисленных тэгов относятся к созданию таблицы?",
        answers: [
            {
                id: '12',
                value: '&lt;header&gt; &lt;body&gt; &lt;footer&gt;',
                correct: false,

            },
            {
                id: '13',
                value: '&lt;table&gt; &lt;tr&gt; &lt;td&gt;',
                correct: true,
            }
        ]
    },
    {
        question: "7. Для задания размеров тэгу <frameset> требуются следующие атрибуты:",
        answers: [
            {
                id: '14',
                value: 'Строки и столбцы',
                correct: false,

            },
            {
                id: '15',
                value: 'Площадь и толщина границ',
                correct: false,
            },
            {
                id: '16',
                value: 'Высота и ширина',
                correct: true,
            }
        ]
    },
    {
        question: "8. Что содержит в себе атрибут href?",
        answers: [
            {
                id: '17',
                value: 'URL страницы, на которую произойдет перенаправление',
                correct: true,

            },
            {
                id: '18',
                value: 'Имя страницы, на которую произойдет перенаправление',
                correct: false,
            }
        ]
    }
];

let localResults = {

};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) =>
                    `<li>
                        <label class="custom-radio">
                            <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                            <span><p>${answer.value}</p></span>
                        </label>
                    </li>`
        )
        .join('');
        
    questions.innerHTML = `
    <div class="quiz-questions" id="questions">
                <div class="quiz-questions-item question">${DATA[index].question}</div>
                <ul class="quiz-questions-item answers">${renderAnswers()}</ul>
            </div>
    `;
};

const renderResults = () => {
    let content = '';

    const getClassname = (answer, questionIndex) => {
        let className = '';

        if (!answer.correct && answer.id === localResults[questionIndex]) {
            className = 'answer-invalid';
        } else if (answer.correct) {
            className = 'answer-valid';
        }

        return className;
    };

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
    .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
    .join('');


    DATA.forEach((question, index) => {
        content += `
        <div class="quiz-results-item"> 
        <div class="quiz-results-item question">${question.question}</div>
        <ul class="quiz-results-item answers">${getAnswers(index)}</ul>
    </div>
        `
    })

    results.innerHTML = content; `
    <summary>
    <div class="quiz-questions" id="questions">
                <div class="quiz-questions-item question">${DATA[index].question}</div>
                <ul class="quiz-questions-item answers">${renderAnswers()}</ul>
            </div>
            </summary>
    `;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};


  quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input'))  {
        console.log('input');
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;

        console.log(localResults);
    }
});  



  quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1
        
        
        if (DATA.length === nextQuestionIndex) {
            questions.classList.add('questions-hidden');
            indicator.classList.add('indicator-hidden');
            results.classList.add('indicator-visible');
            btnNext.classList.add('btn-next-hidden');
            btnRestart.classList.add('btn-restart-visible');
            renderResults();
        } else {
            renderQuestions(nextQuestionIndex);
        }

        btnNext.disabled = true;
    }
    if (event.target.classList.contains('btn-restart')) {
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions-hidden');
        indicator.classList.remove('indicator-hidden');
        results.classList.remove('indicator-visible');
        btnNext.classList.remove('btn-next-hidden');
        btnRestart.classList.remove('btn-restart-visible');

        renderQuestions(0);
    }
});  



renderQuestions(0);