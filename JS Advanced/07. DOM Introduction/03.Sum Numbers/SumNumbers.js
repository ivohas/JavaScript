function calc() {
    // TODO: sum = num1 + num2
    let firstNum= document.getElementById('num1').value
    let secondNum= document.getElementById('num2').value
    let result = Number(firstNum)+Number(secondNum)
    document.getElementById('sum').value=result
}
