const minimum = document.querySelector(".min")
const maximum = document.querySelector(".max")
const lifesNumber = document.querySelector(".lifes-number")
const theEnd =  document.querySelector(".win")
const playersAnswer = document.querySelector(".players-answer")

// Start button event
document.querySelector(".start-button").addEventListener("click", event => {
    validation()
    getRandomNumber()
})

// Check button event
document.querySelector(".check-button").addEventListener("click", event => {
    checkPlayerAnswer()
})

function validation () {
    const min = parseInt(minimum.value)
    const max = parseInt(maximum.value)
    const lifes = parseInt(lifesNumber.value)

    if(min < 0 || max < 0 || lifes < 0) {
        alert("Liczba nie może być ujemna")
    } else if( isNaN(min) || isNaN(max) || isNaN(lifes)) {
        alert("Miejsca nie mogą byc puste ani zawierać znaków specialnych i liter")
    } else if (min === max) {
        alert("Liczby są jednkowe")
    } else {
        document.querySelector(".wrapper").classList.add("hidden") 
        document.querySelector(".wrapper2").classList.remove("hidden") 
        document.querySelector(".numerical-range").innerText = `${minimum.value} do ${maximum.value}`
    }
}

function getRandomNumber() {
   const min = Math.ceil(minimum.value);
   const max = Math.floor(maximum.value);

    random =  Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log(random)
}

function checkPlayerAnswer() {
    const Answer = parseInt(playersAnswer.value)

    if (Answer === random) {
        confetti.start();
        theEnd.innerText = "Gratulacje wygrałeś!"
        playAgain()
   } else {
        gameOver()
   }
}

function gameOver() {

    if (parseInt(lifesNumber.value) === 1 || parseInt(lifesNumber.value) === 0) {
        theEnd.innerText = ("Koniec gry :( spróbuj jeszcze raz")
        playAgain()
        
    } else {
        parseInt(lifesNumber.value--)
        alert(
            `NIE ZGADŁEŚ
            
            Pozostało: ${parseInt(lifesNumber.value)} trafień 
            Podpowiedż: ${hint()}`
            )
    }
}

function hint() {
    const Answer = parseInt(playersAnswer.value)

    if(Answer < random) {
        return "Podana liczba jest mniejsza od wyslosowanej"
    } else {
        return "Podana liczba jest większa od wylosowanej"
    }
}

function playAgain() {
    clear()
   const check = document.querySelector(".check-button")
   const play = document.querySelector(".play-again")

    check.classList.add("hidden")
    play.classList.remove("hidden")

    play.addEventListener("click", event => {
        check.classList.remove("hidden")
        play.classList.add("hidden")
        
        document.querySelector(".win").innerText = ""
        confetti.stop()
        document.querySelector(".wrapper").classList.remove("hidden") 
        document.querySelector(".wrapper2").classList.add("hidden") 
    })
}

function clear() {
    minimum.value = 0 
    maximum.value = 2
    lifesNumber.value = 1
}

if (window.performance) {
    clear()
}

 
   


   

    

