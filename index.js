let array = [77,66,33,15,10,56,49,7,6,36]

let userInput= document.getElementById("userInput")
let findIndex= document.getElementById("findIndex")

let index= document.getElementById("index")

findIndex.addEventListener("click", findIndexFunction)

function findIndexFunction(){
    
    let userInputValue = parseInt(userInput.value)
    let indexOfNumber = array.findIndex(function(eachItem){
        if (eachItem === userInputValue){
            return true
        }else{
            return false 
        }

    
    })
    index.textContent= indexOfNumber
    userInput.value = ''
}