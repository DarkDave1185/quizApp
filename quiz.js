/*console.log("we have started js coding")*/
const question = document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
const questionCounterDiff=document.getElementById("questionCounter");
const scoreDiff=document.getElementById("score")
/*console.log("choices")*/
/*console.log("question")*/
let shownQuestion={};
let correctAnswer=true;
let scoreCount=0;
let questionCounter=0;
let questionOptions=[];

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
    if(questionOptions.length==0 || questionCounter>=maxQuestions){
        /*goes to finished page*/
        return window.location.assign("highScores.html");
    }
    questionCounter++;
    /*question number on display*/
    questionCounterDiff.innerText= questionCounter +"/"+ maxQuestions;
    /*setup random number choice for array of questions*/
    const questionChoices=Math.floor(Math.random()*questionOptions.length);
    shownQuestion=questionOptions[questionChoices];
    question.innerText=shownQuestion.question;

    choices.forEach(choices=>{
        const number=choices.dataset["number"];
        choices.innerText=shownQuestion["choice"+number];
    })

    questionOptions.splice(questionChoices, 1);
    correctAnswer=true;
    /*console.log(selectedChoice)*/
}
choices.forEach(choices=>{
    choices.addEventListener("click", e=>{
        if(!correctAnswer)return;

        correctAnswer=false;
        const selectedChoice=e.target;
        const selectedAnswer=selectedChoice.dataset["number"];
        /*console.log(selectedAnswer, shownQuestion.answer);*/
        /*check if answer is right or wrong*/
        const resultChoice=
            selectedAnswer == shownQuestion.answer?"correct":"incorrect";
        /*console.log(resultChoice);*/
        if(resultChoice=="correct"){
            increaseScore(correctPoints);
        }
        /*adds color effect to correct/incorrect answer*/
        selectedChoice.parentElement.classList.add(resultChoice);

        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(resultChoice);
            getQuestions();
        }, 1500);
    });
});
/*increase score count*/
increaseScore= num =>{
    score+= num;
    scoreDiff.innerText=score;
};
/*able to get random questions if page refreshed*/
startApp();