let gameSeq=[];
let userSeq=[];


let btns=["yellow","red","purple","green"];

let started= false;
let level=0;

let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game started");
    started=true;
    levelUp();
    }
    
});


function reset()
{
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}


function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");
    }, 250);
}

function chkAns(idx)
{
    
     if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length==gameSeq.length)
             {
             setTimeout(levelUp,1000);
             }
     }
    else{
      h2.innerHTML=`GAME OVER !.......your score was <b>${level}</b>  <br>press any key to start`;
      reset();
    }
}

function levelUp()
{     userSeq=[];
    level++;
    h2.innerText = `level ${level}`;


    let ranIdx= Math.floor(Math.random()*3);
    let randColor= btns[ranIdx];

    let randBtn= document.querySelector(`.${randColor}`);// ye jo random button aya h is random button ka class acces krrhe h hum
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}

function buttonpress()
{
    console.log("butn pressed");
    let btn=this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    chkAns(userSeq.length-1);
    
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",buttonpress);
}