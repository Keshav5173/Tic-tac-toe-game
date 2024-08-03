let boxes= document.querySelectorAll(".button");
let msg=document.querySelector("#msg");
let h1=document.querySelector("#h1");
boxes.innerText="";
let ng=document.querySelector(".newGame");
let resetBtn=document.querySelector(".reset");

let winner =false;
let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

let turn= true;
let newGame =()=>{
    ng.addEventListener(("click"), () => { 
        boxes.forEach( (box) => {
            box.innerText="";
            box.disabled = false;
            msg.style.zIndex=-1;

        })
        winner= false;
        h1.innerText="";
    })
}
let disableBoxes=()=>{
    boxes.forEach( (box)=>{
        box.disabled = true;
    })
}
let restart=()=>{
    resetBtn.addEventListener(("click"), ()=>{
        boxes.forEach( (box) => {
            box.innerText="";
            box.disabled = false;

        })
    })
}

boxes.forEach( (box) =>{
    box.addEventListener("click", () => {
        if(turn){
            box.innerText="X";
            turn=false;
            box.disabled= true;
        }
        else{
            box.innerText= "O";
            turn= true;
            box.disabled=true;
        }
        checkWinner();
        restart();
    });
});
const checkWinner = () => {
    for(let pattern of winPattern){
        pos0Val= boxes[pattern[0]].innerText;
        pos1Val= boxes[pattern[1]].innerText;
        pos2Val= boxes[pattern[2]].innerText;
       if(pos0Val!="" && pos1Val!="" && pos2Val!=""){
        if(pos0Val==pos1Val && pos2Val==pos1Val){
            disableBoxes();
            winner =true;
            h1.innerText= `Winner is player ${pos0Val}`;
            msg.style.zIndex=4;
            newGame();
        }
       }
    }
}