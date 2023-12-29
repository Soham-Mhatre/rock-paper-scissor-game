let youScore=0;
let compScore=0;
let choiceid

let choices= document.querySelectorAll(".img");
let msg=document.getElementById("res");
let last= document.querySelector(".result")

function draw(){
    console.log("Its a draw");
    msg.innerHTML="Its a draw"
    last.style.backgroundColor= "green";
}
function compWin(){
    console.log("Computer wins");
    msg.innerHTML="Computer win"
    compScore++;
    document.getElementById("compScore").innerHTML=compScore;
    last.style.backgroundColor= "orange";
}
function youWin(){
    console.log("You win");
    msg.innerHTML="You win"
    youScore++;
    document.getElementById("youScore").innerHTML=youScore;
    last.style.backgroundColor= "blue";
}


function playGame(choiceid){
    let rand= Math.floor((Math.random()*3))+1;
    if(rand===choiceid){
        draw();
    }
    else if(rand===1&& choiceid===3){
        compWin();
    }
    else if(rand===1&& choiceid===2){
        youWin();
    }
    else if(rand===2&& choiceid===1){
        compWin();
    }
    else if(rand===2&& choiceid===3){
        youWin();
    }
    else if(rand===3&& choiceid===2){
        compWin();
    }
    else if(rand===3&& choiceid===1){
        youWin();
    }
}

choices.forEach((choice)=>{
    let ch=choice.getAttribute("id");
    if(ch==="Rock"){
        choiceid=1;
    }
    else if(ch==="Paper"){
        choiceid=2;
    }
    else if(ch==="Scissors"){
        choiceid=3;
    }
    choice.addEventListener("click",()=>{
        playGame(choiceid);
        
    })
})


