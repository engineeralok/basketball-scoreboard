let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function homeScoreIncByOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    console.log(homeScore)
}

function homeScoreIncByTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    console.log(homeScore)
}

function homeScoreIncByThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
    console.log(homeScore)
}

function guestScoreIncByOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    console.log(guestScore)
}

function guestScoreIncByTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    console.log(guestScore)
}

function guestScoreIncByThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
    console.log(guestScore)
}

function newGame() {
    homeScore = 0
    guestScore = 0
    
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

console.log("welcom")