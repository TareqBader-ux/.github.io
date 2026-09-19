
const welcomeScreen = document.querySelector('.allwelcome');

let number1 = Math.floor(Math.random() * 20) + 1;

let number2 = Math.floor(Math.random() * 20) + 1;

let correctanswer = number1 * number2;

console.log(`correct answer= ${correctanswer}`);

function Startgame() {
welcomeScreen.style.opacity = "0";

setTimeout(() => {
    welcomeScreen.style.display = "none";

    document.body.innerHTML = ("<div class='bg'></div>");

    document.body.innerHTML += (`<h1 style="display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; font-size: 100px;">What is ${number1} x ${number2}</h1>`);

     document.body.innerHTML += ("<input type='text' placeholder='Your answer' style='margin-left: 35vw; font-size: 45px;' id='answer'>");


    document.body.innerHTML += ("<button onclick='Playgame()' class='Submit'>Submit</button>");

    document.body.innerHTML += ("<button onclick='Rerollgame()' class='reroll'>Reroll</button>");

        }, 2000);
}

function Playgame() {
    let answervalue = document.getElementById ("answer").value;

    let answer = document.getElementById ("answer");

    answer.readOnly = true;
       
    if (answervalue == correctanswer) {
    document.body.innerHTML += ("<h1 class='cORRECT'>Correct ✅!</h1>");
    } else {
        document.body.innerHTML += ("<h1 class='wRONG'>Wrong ❌!</h1>");
    }
}

function Rerollgame() {
    number1 = Math.floor(Math.random() * 20) + 1;

    number2 = Math.floor(Math.random() * 20) + 1;

    correctanswer = number1 * number2;

    document.body.innerHTML = "";
    document.body.innerHTML = ("<div class='bg'></div>");
    document.body.innerHTML += (`<h1 style="display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; font-size: 100px;">What is ${number1} x ${number2}</h1>`);
    document.body.innerHTML += ("<input type='text' placeholder='Your answer' style='margin-left: 35vw; font-size: 45px;' id='answer'>");
    document.body.innerHTML += ("<button onclick='Playgame()' class='Submit'>Submit</button>");
    document.body.innerHTML += ("<button onclick='Rerollgame()' class='reroll'>Reroll</button>");
}
