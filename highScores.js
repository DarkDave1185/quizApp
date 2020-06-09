const username=document.getElementById("username");
const saveScore=document.getElementById("saveScore");
const finalScore=document.getElementById("finalScore");
const recentScore=localStorage.getItem("recentScore");

const highScore=JSON.parse(localStorage.getItem("highScore")) || [];

const maxHighScore=3
console.log(highScore);
finalScore.innerText=recentScore;

username.addEventListener("keyup",()=>{
    console.log(username.value);
    saveScore.disabled=!username.value;
});

function saveHighScore(e) {
    console.log("clicked the save button");
    e.preventDefault();

    console.log("name:", username.value)

    const score={
        score: Math.floor(Math.random()*100),
        name: username.value
    };

    highScore.push(score);
    highScore.sort((a, b)=>b.score-a.score);
    highScore.splice(3);

    localStorage.setItem("highScore", JSON.stringify(highScore));
    //Location.assign("/");
}

saveScore.addEventListener("click", saveHighScore)