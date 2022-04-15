let userInput = prompt('Deposit money or Withdraw money')
let getMoney = 'Withdraw money'
let giveMoney = "Deposit money"
let moneyGained = 700
let moneyLossed = 300


if (userInput == giveMoney) {
    console.log(prompt(`How much would you like to deposit? `))
    alert(`Your new balance is ${moneyGained}`)
}
else if (getMoney == getMoney) {
    console.log(prompt(`How much would you like to Withdraw?`))
    alert(`Your new balance is ${moneyLossed}`)
}


