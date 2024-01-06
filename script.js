let calculator = document.getElementById("calculator-ValueInput")


function AddValue(value1){
    calculator.value += value1
}

function equals(value1){
    if (calculator.value == ""){
        calculator.value = ""
    }else{
        calculator.value = eval(calculator.value)
    }
    
}

function Reset(){
    calculator.value = ""
}