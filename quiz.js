/*console.log("we have started js coding")*/
const question = document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
/*console.log("choices")*/
/*console.log("question")*/
let shownQuestion={};
let correctAnswer=true;
let scoreCount=0
let questionCounter=0
let questionOptions=[]

let questions=[
    {/*question setup*/ 
        question: "placement for question 0",
        choice1:"answer",
        choice2:"answer",
        choice3:"answer",
        choice4:"answer",
        answer:1
    },
    {/*question setup*/ 
        question: "placement for question 1",
        choice1:"answer",
        choice2:"answer",
        choice3:"answer",
        choice4:"answer",
        answer:4
    },
    {/*question setup*/ 
        question: "placement for question 2",
        choice1:"answer",
        choice2:"answer",
        choice3:"answer",
        choice4:"answer",
        answer:1
    },
    {/*question setup*/ 
        question: "placement for question 3",
        choice1:"answer",
        choice2:"answer",
        choice3:"answer",
        choice4:"answer",
        answer:2
    },
    {/*question setup*/ 
        question: "placement for question 4",
        choice1:"answer",
        choice2:"answer",
        choice3:"answer",
        choice4:"answer",
        answer:3
    },
    {/*question setup*/ 
        question: "placement for question 5",
        choice1:"answer",
        choice2:"answer",
        choice3:"answer",
        choice4:"answer",
        answer:4
    },
    {/*question setup*/ 
        question: "placement for question 6",
        choice1:"answer",
        choice2:"answer",
        choice3:"answer",
        choice4:"answer",
        answer:2
    },
    {/*question setup*/ 
        question: "placement for question 7",
        choice1:"answer",
        choice2:"answer",
        choice3:"answer",
        choice4:"answer",
        answer:2
    },
    {/*question setup*/ 
        question: "placement for question 8",
        choice1:"answer",
        choice2:"answer",
        choice3:"answer",
        choice4:"answer",
        answer:1
    },
    {/*question setup*/ 
        question: "placement for question 9",
        choice1:"answer",
        choice2:"answer",
        choice3:"answer",
        choice4:"answer",
        answer:3
    },
]

const correctPoints=10
const maxQuestions=10

startApp=()=> {
    questionCounter=0;
    scoreCount=0;
    /* "..." used spread operator for new array*/
    questionOptions=[... questions];
    /*console.log(questionOptions)*/
    getQuestions();
};

getQuestions=()=>{
    questionCounter++;
    /*setup random number choice for array of questions*/
    const questionChoices=Math.floor(Math.random()*questionOptions.length);
    shownQuestion=questionOptions[questionChoices];
    question.innerText=shownQuestion.question;

}
/*able to get random questions if page refresed*/
startApp();