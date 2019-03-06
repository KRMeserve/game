window.onload = function () {

let currentMoney = 0;

const moneyCounter = (num) => {
  currentMoney += num;
  console.log(currentMoney, '= Current Money');
  document.getElementById('money').innerHTML = currentMoney;
}

moneyCounter(3);
moneyCounter(2);
moneyCounter(9);
moneyCounter(3);
moneyCounter(8);
moneyCounter(100);

setInterval(()=>{
  moneyCounter(4);
}, 1000);

}
