const minimum = document.querySelector(".min")
const maximum = document.querySelector(".max")
const lifesNumber = document.querySelector(".lifes-number")

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
    if(!minimum.value.indexOf("-") || !maximum.value.indexOf("-") || !lifesNumber.value.indexOf("-")) {
        alert("Liczba nie może być ujemna")
    } else if(minimum.value === "" || maximum.value === "" || lifesNumber.value === ""  ) {
        alert("Miejsca nie mogą byc puste ani zawierać znaków specialnych i liter")
    } else if (minimum.value == maximum.value) {
        alert("Liczby są jednkowe")
    } else {
        document.querySelector(".wrapper").classList.add("hidden") 
        document.querySelector(".wrapper2").classList.remove("hidden") 
        document.querySelector(".numerical-range").innerText = `${minimum.value} do ${maximum.value}`
    }
}

function getRandomNumber() {
    min = Math.ceil(minimum.value);
    max = Math.floor(maximum.value);
    random =  Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log(random)
}

function checkPlayerAnswer() {
    if (document.querySelector(".players-answer").value == random) {
        confetti.start();
        document.querySelector(".win").innerText = "Gratulacje wygrałeś!"
        playAgain()
   } else {
        gameOver()
   }
}

function gameOver() {
    if (lifesNumber.value == 1 || lifesNumber.value == 0) {
        document.querySelector(".win").innerText = ("Koniec gry :( spróbuj jeszcze raz")
        playAgain()
        
    } else {
        lifesNumber.value--
        alert(
            `NIE ZGADŁEŚ
            
            Pozostało: ${lifesNumber.value} trafień 
            Podpowiedż: ${hint()}`)
    }
}

function hint() {
    if(document.querySelector(".players-answer").value < random) {
        return "Podana liczba jest mniejsza od wyslosowanej"
    } else {
        return "Podana liczba jest większa od wylosowanej"
    }
}

function playAgain() {
    check = document.querySelector(".check-button")
    play = document.querySelector(".play-again")

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
 
   


   

    

