ComputerInput = Math.floor((Math.random() * Math.random() * 9)+1);
let track = 0;
let win = 0;
let btn = document.getElementById("btn");
let second = document.getElementById("input2")
let third = document.getElementById("box");
function play() {
    let userNumber = document.getElementById("input1");
    if (track < 3) {
        if (ComputerInput == userNumber.value) {
            second.value = "YOU WON!"
            let third = document.getElementById("box");
            third.innerHTML = "<h1>CONGRATULATIONS!</h1>";
            third.style.color = "green";
            third.disabled = true;
            btn.disabled = true;
            second.disabled = true;
            userNumber.disabled = true;
            win = 1;

        }
        else if (ComputerInput > userNumber.value) {
            second.value = "SMALLER NUMBER ...TRY AGAIN!!";
            track += 1;
            userNumber.value = "";
            setTimeout(hideCountDown, 3000);
        }
        else if (ComputerInput < userNumber.value) {
            second.value = "GREATER NUMBER ...TRY AGAIN!!";
            track += 1;
            userNumber.vaue = "";
            setTimeout(hideCountDown, 3000);
        }

    }
    if (track >= 3) {
        if (win == 0) {
            third.innerHTML = "<h1>GAME OVER !</h1>";
            third.color = "red";
        }
        third.disabled = true;
        btn.disabled = true;
        second.disabled = true;
        userNumber.disabled = true;
        track = 0;
    }
}
reset.addEventListener('click', () => {

    let btn = document.getElementById("btn");
    let second = document.getElementById("input2")
    let third = document.getElementById("box");
    let userNumber = document.getElementById("input1");
    third.disabled = false;
    btn.disabled = false;
    second.disabled = false;
    userNumber.disabled = false;
    userNumber.value = "";
    second.ivalue= "";
    third.innerHTML = "";
    track = 0;
    ComputerInput = Math.floor((Math.random() * Math.random() * 9)+1);
    win=0;
})
function hideCountDown() {
    second.value = "";
    console.log("enter")
}

console.log(ComputerInput);

