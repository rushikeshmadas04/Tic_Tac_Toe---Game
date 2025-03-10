let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector(".reset");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;//palyerX,playerO
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText="X";
            box.style.color="#BFF0D4";
            turn0=true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }

};
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }

};
const showWinner = (Winner) => {
    msg.innerText = 'Congratulations, Winner is ' + Winner ;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for (let pattern of winPatterns){ 
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;

       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner",pos1Val);

            showWinner(pos1Val);
        }
       }

    }
};
newGamebtn.addEventListener("click",resetGame);
reset_button.addEventListener("click",resetGame);
