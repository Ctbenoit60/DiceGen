function d6() {
    console.log('button clicked')
    console.log('this is a d6')
    numberMinMax(1,6)
    document.getElementById("roll6").innerHTML = numberMinMax(1,6)
}

function d10() {
    console.log('button clicked')
    console.log('this is a d10')
    numberMinMax(1,10)
    document.getElementById("roll10").innerHTML = numberMinMax(1,6)
}

function numberMinMax(min, max) {
    const diceRoll=Math.floor(Math.random() * (max - min +1)) + min
    console.log(diceRoll)
    return(diceRoll)
}