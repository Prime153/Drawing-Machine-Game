const min = document.querySelector(".min")
const max = document.querySelector(".max")
const lives = document.querySelector(".lives-number")
const playersAnswer = document.querySelector(".players-answer")
// End caption
const endCaption =  document.querySelector(".win")



class Validation {
    
    constructor(min, max, lives) {
        this.arr = [parseInt(min.value), parseInt(max.value), parseInt(lives.value)]
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
            return "Podana liczba jest mniejsza od wyslosowanej"
        } else {
            return "Podana liczba jest większa od wylosowanej"
        }
    }
}

class RestartGame {
    constructor(lives) {
        this.lives = parseInt(lives.value)
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
        if (this.lives === 1 || this.lives === 0) {
            endCaption.innerText = ("Koniec gry :( spróbuj jeszcze raz")
            this.playAgain()
        } else {
            parseInt(lives.value--)
            const tip = new Hint(playersAnswer)
            alert(
                ` WRONG NUMBER
                
                Lives: ${parseInt(lives.value)}
                Tip: ${tip.getTip()}
                `
            )
        }
    } 
}


class CheckAnswer extends RestartGame {
    constructor(lives, playersAnswer) {
        super(lives)
        this.playersAnswer = parseInt(playersAnswer.value)
    }
    checkPlayersAnswer() {
        if (this.playersAnswer === random) {
            confetti.start();
            endCaption.innerText = "Gratulacje wygrałeś!"
            super.playAgain()
        } else {
            super.gameOver()
        }
    }
}

class Buttons {

    startButton() {
        document.querySelector(".start-button").addEventListener("click", () => {
            const getInputValue = new Validation(min, max, lives)
            
            getInputValue.checkInput()
            getRandomNumber()

        })
    }
    checkButton() { 
        document.querySelector(".check-button").addEventListener("click", () => {
            const check = new CheckAnswer(lives, playersAnswer)

            check.checkPlayersAnswer()
        })
    }
} 

class GameInitiation {

    clear() {
        min.value = "" 
        max.value = ""
        lives.value = ""
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






   

    

