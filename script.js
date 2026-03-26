let balance = 24697;
let currentBet = null;
let time = 30;

function bet(type){
  currentBet = type;
  document.getElementById("result").innerText = "Bet: " + type;
}

setInterval(()=>{
  time--;
  if(time <= 0){
    runGame();
    time = 30;
  }
  document.getElementById("time").innerText = time;
},1000);

function runGame(){
  let resultNum = Math.floor(Math.random()*10);
  let result = resultNum % 2 === 0 ? "red" : "green";

  let win = false;
  if(currentBet === result) win = true;

  if(win){
    balance += 100;
    document.getElementById("result").innerText = "WIN 🎉 ("+resultNum+")";
  } else {
    balance -= 100;
    document.getElementById("result").innerText = "LOSS ❌ ("+resultNum+")";
  }

  document.getElementById("balance").innerText = balance;
  currentBet = null;
}