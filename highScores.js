const username=document.getElementById("username");
const saveScore=document.getElementById("saveScore");
const finalScore=document.getElementById("finalScore");
//score display
const scorezList=document.getElementById("scorezList");
//storage
const recentScore=localStorage.getItem("recentScore");

const highScore=JSON.parse(localStorage.getItem("highScore")) || [];

const maxHighScore=3;
console.log(highScore);
finalScore.innerText=recentScore;

username.addEventListener("keyup",()=>{
    console.log(username.value);
    saveScore.disabled=!username.value;
});

function saveHighScore(e) {
    console.log("clicked the save button");
    e.preventDefault();

    console.log("name:", username.value);

    const score={
        score: recentScore,
        name: username.value
    };

    highScore.push(score);
    highScore.sort((a, b)=>b.score-a.score);
    highScore.splice(3);

    localStorage.setItem("highScore", JSON.stringify(highScore));
    //Location.assign("/");
}

saveScore.addEventListener("click", saveHighScore);

//score dispaly js
const listItem = document.createElement("li");

scorezList.innerHTML=highScore
.forEach(scoreObj => {
   
    listItem.innerText = "${scoreObj.name} - ${scoreObj.score}";
    listItem.classList.add("high-score");
    scorezList.appendChild(listItem);
   })