"use sctrict"

class InvalidNumberError extends Error{
     name = "invalidNumberError"


constructor (message) {
     super (message)
     
     }

}

function getUserInput(){
let userInput = parseInt(prompt("Please enter an even number"))

try{
     if(isNaN(userInput) || userInput % 2){
          throw new InvalidNumberError("You did not enter a valid number")
     }else{
          alert("Thank you!")
     }
}catch (error){
     if(error.name == "invalidNumberError"){
          alert(error.message)
          getUserInput()
     }else{
          alert ("Error. Please try again.")
     }
}



}
getUserInput()