const min = document.querySelector(".min")
const max = document.querySelector(".max")
const lifes = document.querySelector(".lifes-number")
const playersAnswer = document.querySelector(".players-answer")
// End caption
const endCaption =  document.querySelector(".win")



class Validation {
    
    constructor(min, max, lifes) {
        this.arr = [parseInt(min.value), parseInt(max.value), parseInt(lifes.value)]
    }
    checkInput() {
        if(this.arr[0] < 0 || this.arr[1] < 0 || this.arr[2] < 0) {
            alert("Number cannot be negative")
        } else if( this.arr.includes(NaN,undefined)) {
            alert("Inputs cannot be empty or include special characters")
        } else if (this.arr[0] === this.arr[1]) {
            alert("Numbers are the same")
            
        } else {
            document.querySelector(".wrapper").classList.add("hidden") 
            document.querySelector(".wrapper2").classList.remove("hidden") 
            document.querySelector(".numerical-range").innerText = `${this.arr[0]} do ${this.arr[1]}`
        }
    }  
}

class Hint  {

    constructor(playersAnswer) {
        this.playersAnswer = parseInt(playersAnswer.value)
    }
    getTip() {
        if(this.playersAnswer < random) {
            return "Given number is smaller than the drawn one"
        } else {
            return "Given number is greater than the drawn one"
        }
    }
}

class RestartGame {
    constructor(lifes) {
        this.lifes = parseInt(lifes.value)
    } 
    playAgain() {
        const check = document.querySelector(".check-button")
        const play = document.querySelector(".play-again")
     
         check.classList.add("hidden")
         play.classList.remove("hidden")
     
         play.addEventListener("click", () => {
             startGame.clear()
             check.classList.remove("hidden")
             play.classList.add("hidden")
             
             endCaption.innerText = ""
             confetti.stop()
             document.querySelector(".wrapper").classList.remove("hidden") 
             document.querySelector(".wrapper2").classList.add("hidden") 
        })
    } 

    gameOver() {
        if (this.lifes === 1 || this.lifes === 0) {
            endCaption.innerText = ("Game Over :( Try again")
            this.playAgain()
        } else {
            parseInt(lifes.value--)
            const tip = new Hint(playersAnswer)
            alert(
                ` WRONG NUMBER
                
                Lifes: ${parseInt(lifes.value)}
                Tip: ${tip.getTip()}
                `
            )
        }
    } 
}


class CheckAnswer extends RestartGame {
    constructor(lifes, playersAnswer) {
        super(lifes)
        this.playersAnswer = parseInt(playersAnswer.value)
    }
    checkPlayersAnswer() {
        if (this.playersAnswer === random) {
            confetti.start();
            endCaption.innerText = "You won!"
            super.playAgain()
        } else {
            super.gameOver()
        }
    }
}

class Buttons {

    startButton() {
        document.querySelector(".start-button").addEventListener("click", () => {
            const getInputValue = new Validation(min, max, lifes)
            
            getInputValue.checkInput()
            getRandomNumber()

        })
    }
    checkButton() { 
        document.querySelector(".check-button").addEventListener("click", () => {
            const check = new CheckAnswer(lifes, playersAnswer)

            check.checkPlayersAnswer()
        })
    }
} 

class GameInitiation {

    clear() {
        min.value = "" 
        max.value = ""
        lifes.value = ""
        playersAnswer.value = ""
    }
    startGame() {
        const buttons = new Buttons()
        buttons.checkButton()
        buttons.startButton()
        
    }
    
}

function getRandomNumber() {
  random = Math.floor(Math.random() * (parseInt(Math.floor(max.value)) - parseInt(Math.ceil(min.value)) + 1) ) + parseInt(Math.ceil(min.value))
  console.log(random)
}

const startGame = new GameInitiation()


if (window.performance) {
   startGame.clear()
}

startGame.startGame()






   

    

