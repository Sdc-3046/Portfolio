const numbers=document.querySelectorAll('[data-number]')
const operations=document.querySelectorAll('[data-operation]')
const equals=document.querySelectorAll('[data-equals]')
const clear=document.querySelectorAll('[data-clear]')
const deleteButton =document.querySelectorAll('[data-delete]')
let previousNumber=document.querySelector('[previous-operand]')
let currentNumber=document.querySelector('[current-operand]')
var oper=undefined

numbers.forEach(button =>{
    button.addEventListener('click', () =>{      
        currentNumber.append(button.innerText)
    })
})

operations.forEach(button => {
    button.addEventListener('click', () =>{
        previousNumber.innerText=currentNumber.innerText
        currentNumber.innerText=''
        oper=button.innerText
    })
})

equals.forEach(button =>{
    button.addEventListener('click', () => {
    switch(oper){
        case '+':currentNumber.innerText=(eval(currentNumber.innerText+"+"+previousNumber.innerText))
                break
        case '-':currentNumber.innerText=(eval(previousNumber.innerText+"-"+currentNumber.innerText))
                break

        case '*':currentNumber.innerText=(eval(currentNumber.innerText+"*"+previousNumber.innerText))
                break
        
        case '/': currentNumber.innerText=(eval(previousNumber.innerText+"/"+currentNumber.innerText))
                break
    }
    previousNumber.innerText=''
    })
})

clear.forEach(button =>{
    button.addEventListener('click', () =>{
        previousNumber.innerText=''
        currentNumber.innerText=''
    })
})

deleteButton.forEach(button =>{
    button.addEventListener('click', () =>{
        currentNumber.innerText=(currentNumber.innerText).slice(0,-1)
    })
})

/*console.log(numbers)
console.log(operations)
console.log(clear)
console.log(equals)
console.log(deleteButton)*/