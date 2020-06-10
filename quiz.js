/*console.log("we have started js coding")*/
const question = document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
const questionCounterDiff=document.getElementById("questionCounter");
const scoreDiff=document.getElementById("score");
/*console.log("choices")*/
/*console.log("question")*/
let shownQuestion={};
let correctAnswer=true;
let questionCounter=0;
let questionOptions=[];

let questions=[
    {/*question setup*/ 
        question: "The HTML5 specification includes",
        choice1:"Data storage",
        choice2:"Graphics APIs",
        choice3:"Other APIs for web apps",
        choice4:"All of the mentioned",
        answer:4
    },
    {/*question setup*/ 
        question: "JavaScript is ______ language.",
        choice1:"Scripting",
        choice2:"Programming",
        choice3:"Both a and b",
        choice4:"Application",
        answer:1
    },
    {/*question setup*/ 
        question: "Inside which HTML element do we put the JavaScript?",
        choice1:"<js>",
        choice2:"<scripting>",
        choice3:"<script>",
        choice4:"<javascript>",
        answer:3
    },
    {/*question setup*/ 
        question: "Which types of image maps can be used with JavaScript?",
        choice1:"Server-side image maps",
        choice2:"Client-side image maps",
        choice3:"Server-side image maps and Client-side image maps",
        choice4:"None of the above",
        answer:2
    },
    {/*question setup*/ 
        question: "Which of the following is not considered a JavaScript operator?",
        choice1:"new",
        choice2:"this",
        choice3:"delete",
        choice4:"typeof",
        answer:2
    },
    {/*question setup*/ 
        question: "JavaScript is interpreted by ______.",
        choice1:"Client",
        choice2:"Server",
        choice3:"Object",
        choice4:"None of the above",
        answer:1
    },{/*question setup*/ 
        question: "Using _______ statement is how you test for a specific condition.",
        choice1:"Select",
        choice2:"If",
        choice3:"Switch",
        choice4:"For",
        answer:2
    },
    {/*question setup*/ 
        question: "The _______ method of an Array object adds and/or removes elements from an array.",
        choice1:"Reverse",
        choice2:"Shift",
        choice3:"Slice",
        choice4:"Splice",
        answer:4
    },
    {/*question setup*/ 
        question: "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
        choice1:"a wrapper",
        choice2:"a link",
        choice3:"a cursor",
        choice4:"a form ",
        answer:1
    },
    {/*question setup*/ 
        question: "_________ is a wrapped Java array, accessed from within JavaScript code.",
        choice1:"JavaArray",
        choice2:"JavaClass",
        choice3:"JavaObject",
        choice4:"JavaPackage",
        answer:1
    },

]

const correctPoints=10;
const maxQuestions=10;

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
        }else(loseTime(minutes));
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
    /*console.log("num:", num)*/
   /* console.log(scoreCount)*/
    scoreCount = scoreCount + num;
   /* console.log("scoreCount: ", scoreCount)*/
    scoreDiff.innerText=scoreCount;
};
/*able to get random questions if page refreshed*/
startApp();
/*timer*/
const minutes=5;
let time=minutes*60;

const countDownEl=document.getElementById("quizTimer");

setInterval(updateCountDown, 1000);

function updateCountDown(){
    const minutes=Math.floor(time/60);
    let seconds=time%60;

    seconds=seconds<10?"0"+ seconds:seconds;

    countDownEl.innerHTML= `${minutes}:${seconds}`;
    time--;
}
/*lsoe 30 seconds*/
loseTime=lose=>{
    minutes=minutes - 30000;
    countDownEl.innerHTML=`${minutes}:${seconds}`;
    time--;

}