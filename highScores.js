const username=document.getElementById("username");
const saveScore=document.getElementById("saveScore");
const finalScore=document.getElementById("finalScore");
const recentScore=localStorage.getItem("recentScore")
finalScore.innerText=recentScore;

username.addEventListener("keyup",()=>{
    console.log(username.value);
    saveScore.disabled=!username.value;
});




saveHighScore = e => {
    console.log("clicked the save button");
    e.preventDefault();
};