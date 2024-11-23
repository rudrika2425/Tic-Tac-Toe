let boxes=document.querySelectorAll(".box");//all elemnts of same class are converted to array
let resetBtn=document.querySelector("#reset-btn");
let newGame=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true; //player X,player Y
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6], 

];//winning patterns

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
         box.innerText="X";
         turnO=true;
        }
        box.disabled=true;//can ot be accessed another time
        check();
    });
})

const check=()=>{
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
               console.log("Winner",pos1);
               for(let box of boxes){
                box.disable=true;
               }
               show(pos1);
            }
        }
    }
}
const show=(winner)=>{
  msg.innerHTML=`Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  
}

const resetGame=()=>{
    truenO=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgContainer.classList.add("hide");
    
}

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);