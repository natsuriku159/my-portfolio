const myName = document.getElementById("name")
const nameP = document.getElementById("name-p")
const university = document.getElementById("university")
const universityA = document.getElementById("university-a")
const home = document.getElementById("home")
const homeP = document.getElementById("home-p")
const sport = document.getElementById("sport")
const sportP = document.getElementById("sport-p")
const hobby = document.getElementById("hobby")
const hobbyP1 = document.getElementById("hobby-p1")
const hobbyUl1 = document.getElementById("hobby-ul1")
const hobbyP2 = document.getElementById("hobby-p2")
const hobbyUl2 = document.getElementById("hobby-ul2")
const count = document.getElementById("count")
const addButton = document.getElementById("add-button")

myName.onmouseover = function() {
    nameP.textContent = "Riku Natsume"
}

university.onmouseover = function() {
    universityA.textContent = "Takasaki City University of Economics"
}

home.onmouseover = function() {
    homeP.textContent = "Gunma"

    homeP.onclick = function() {
        homeP.textContent = "Germany"
    }
}

sport.onmouseover = function() {
    sportP.textContent = "Tennis, Baseball"
}

hobby.onmouseover = function() {
    hobbyP1.textContent = "Reading Comics"

    hobbyP1.onmouseover = function() {
        hobbyUl1.style.display = `block`
    }
    hobbyP1.onmouseout = function() {
        hobbyUl1.style.display = `none`
    }

    hobbyP2.textContent = "Listening Music"

    hobbyP2.onmouseover = function() {
        hobbyUl2.style.display = `block`
    }
    hobbyP2.onmouseout = function() {
        hobbyUl2.style.display = `none`
    }
}


let number = 0

if(localStorage.number) {
    const numberJson = localStorage.number
    number = JSON.parse(numberJson)

    count.textContent = number
}

addButton.onclick = function() {
    number += 1

    localStorage.number = JSON.stringify(number)

    count.textContent = number

}