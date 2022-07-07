const calculatorNumbers = document.querySelector(".displayText");
const buttons = document.querySelectorAll(".button")
let num1 = "";
let num2 = "";
let oper = "";
let result = 0;

buttons.forEach(button => {
    button.addEventListener("click", onButton)
    
});

function onButton(){

    if(this.classList.contains("clear")){
        calculatorNumbers.textContent = "";
    }

    else if(this.classList.contains("number")){
        let currentNumber = calculatorNumbers.textContent;
        let updatedNumber = currentNumber + this.textContent;
        //updatedNumber is current being displayed
        calculatorNumbers.textContent = updatedNumber;
       
    }
    else if(this.classList.contains("operator")){


        if(this.textContent != "="){
            console.log
            let displayedNumber = calculatorNumbers.textContent;
            let firstNumber = displayedNumber;
            num1 = displayedNumber;
            oper = this.textContent;

            calculatorNumbers.textContent = "";
            
        }

        else{
            num2 = calculatorNumbers.textContent
            calculations(num1,num2,oper);
        } 
        }
    }


function calculations(first,second,sign){
    first = parseInt(first);
    second = parseInt(second);

    switch(sign){
        case "/":

        result = first/second;
            break;
        
        case "*":

            result = first*second;
            break;

        case "+":
            result = first+second;
            break;

        case "-":
            result = first-second;
            break;

    }

    calculatorNumbers.textContent = result;
    
}

