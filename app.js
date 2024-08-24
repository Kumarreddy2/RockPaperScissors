let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const num=Math.floor(Math.random()*3);
    return options[num];
}

const drawGame=()=>{
    msg.innerText="Game was draw! play again";
    msg.style.backgroundColor="#081b31";
    
}

const showWinner=(userWin,userchoice,compChoice)=>{
     if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText="You win! "+ "Your " +userchoice +" beats "+ compChoice;
        msg.style.backgroundColor="green";
     }
     else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText="Computer win! "+compChoice+" beats your "+userchoice;
        msg.style.backgroundColor="red";
     }
}

const playGame=(userchoice)=>{
   //generate computer choice.
   const compChoice=genCompChoice();

   if(userchoice===compChoice){
    //Draw game
    drawGame();
   }
   else{
    let userWin=true;
    if(userchoice==="rock"){
        //scissors,paper
        userWin=compChoice==="paper"?false:true;
    }else if(userchoice==="paper"){
        //scissors,rock
        userWin=compChoice==="scissors"?false:true;
    }
    else {
        //rock,paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userchoice,compChoice);
   }
   
}

choices.forEach((choice)=>{
    const userchoice=choice.getAttribute("id")
       choice.addEventListener('click',()=>{
        playGame(userchoice)
       })
})