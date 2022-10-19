let addHomeBtn = document.getElementById("home-score")
let scoreHome =0
let addGuestBtn = document.getElementById("guest-score")
let scoreGuest =0
let saveBtn = document.getElementById("score-p")


function add1Home() {
    scoreHome +=1
    addHomeBtn.textContent = scoreHome 
    
}



function add2Home() {
    scoreHome +=2
    addHomeBtn.textContent = scoreHome 
    
}


function add3Home() {
    scoreHome +=3
    addHomeBtn.textContent = scoreHome 
    
}

function add1Guest() {
    scoreGuest +=1
    addGuestBtn.textContent = scoreGuest 
    
}

function add2Guest() {
    scoreGuest +=2
    addGuestBtn.textContent = scoreGuest 
    
}



function add3Guest() {
    scoreGuest +=3
    addGuestBtn.textContent = scoreGuest 
    
}

function saveScore() {

    saveBtn.textContent = "Score: " + scoreHome + "-" + scoreGuest
    addGuestBtn.textContent = 0
    addHomeBtn.textContent = 0
    scoreGuest = 0
    scoreHome = 0
}