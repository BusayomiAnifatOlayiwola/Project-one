const dicep1 = document.querySelector(".dicep1")

dicep1.addEventListener("click", e =>{
    console.log("play")
    
document.querySelector("p").innerText ="Player1"

})

const dicep2 = document.querySelector(".dicep2")

dicep2.addEventListener("click", e =>{
    console.log("play")
    
document.querySelector("p").innerText ="Player2"

})


// const randomDiceDisplay = Math.floor(Math.random()*6)+1
// //console.log(randomDiceDisplay)
// const diceRoll = "imageOfSixDice/Dice-" + randomDiceDisplay + ".png"


// const start= document.querySelector(".start")
// start.addEventListener("click", ()=>{
//     const randomDiceDisplay1 = Math.floor(Math.random()*6)+1
//     const randomDiceDisplay2 = Math.floor(Math.random()*6)+1

//     const diceRoll1 = "imageOfSixDice/Dice-" + randomDiceDisplay1 + ".png"
//     const diceRoll2 = "imageOfSixDice/Dice-" + randomDiceDisplay2+ ".png"
//     document.querySelector(".dicep1").setAttribute('src', diceRoll1)
//     console.log(dicep1)
//     document.querySelector(".dicep2").setAttribute('src', diceRoll2) 
//     console.log(dicep2)

//     if(randomDiceDisplay1=== 6){
//         document.querySelector("p").innerText ="Player1 won, you can roll again"
//     } else if(randomDiceDisplay2=== 6){
//         document.querySelector("p").innerText ="Player2 won, you can roll again"
//     }else{
//         document.querySelector("p").innerText ="Next player, current player wait for your turn"
//     }
   
// })


const start= document.querySelector(".start")
start.addEventListener("click", ()=>{
    const randomDiceDisplay1 = Math.floor(Math.random()*6)+1
    const randomDiceDisplay2 = Math.floor(Math.random()*6)+1

    const diceRoll1 = "imageOfSixDice/Dice-" + randomDiceDisplay1 + ".png"
    const diceRoll2 = "imageOfSixDice/Dice-" + randomDiceDisplay2+ ".png"
    document.querySelector(".dicep1").setAttribute('src', diceRoll1)
    console.log(dicep1)
    document.querySelector(".dicep2").setAttribute('src', diceRoll2) 
    console.log(dicep2)

    diceFunc(randomDiceDisplay1, randomDiceDisplay2)
})

function diceFunc(param1, param2){
    if(param1 === 6){
        document.querySelector("p").innerText ="Player1 won, you can roll again"
    } else if(param2 === 6){
        document.querySelector("p").innerText ="Player2 won, you can roll again"
    }else{
        document.querySelector("p").innerText ="Next player, current player wait for your turn"
    }
}


