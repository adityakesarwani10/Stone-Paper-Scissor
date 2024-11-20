let choosewinner = "";
let rock = document.getElementsByClassName("rock1")[0];
let paper = document.getElementsByClassName("paper1")[0];
let scissor = document.getElementsByClassName("scissor")[0];
let you = document.getElementById("count-you");
let comp = document.getElementById("count-comp");
let submit = document.querySelector(".submit");
rock.addEventListener("click" , () => {
    choosewinner = "rock";

    checkwinner();
})
paper.addEventListener("click" , () => {
    choosewinner = "paper";

    checkwinner();
})
scissor.addEventListener("click" , () => {
    choosewinner = "scissor";

    checkwinner();
})

let winpattern = ["rock","paper","scissor"];

const getrandom = () => {
    return Math.floor(0 + Math.random() * 3);
};
let countyou = 0;
let countcomp = 0;
const checkwinner = () => {
    let computerChoice = winpattern[getrandom()];
    if (choosewinner === computerChoice) {
        submit.innerHTML = "Its a draw";
        submit.style.backgroundColor = 'black';
        submit.style.width = "15rem";
        countcomp++;
        countyou++;
    } else if (
        (choosewinner === "rock" && computerChoice === "scissor") ||
        (choosewinner === "paper" && computerChoice === "rock") ||
        (choosewinner === "scissor" && computerChoice === "paper")
    ) {
        submit.innerText = `You Win! ${choosewinner} beats ${computerChoice}`;
        submit.style.width = "23rem";
        submit.style.backgroundColor = 'green';
        countyou++;

    } else {
        submit.innerText = `You Lose! ${computerChoice} beats ${choosewinner}`;
        submit.style.width = "23rem";
        submit.style.backgroundColor = 'red';
        countcomp++;
    }
    counting();
};

const counting = () => {
    you.innerText = countyou;
    comp.innerText = countcomp;
}

