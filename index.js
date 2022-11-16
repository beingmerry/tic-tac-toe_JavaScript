const allSquares = document.querySelectorAll("td")
const game = document.querySelector("#game")
const heading = document.querySelector("h1")
game.classList.add("x-turn")

const init = () => {
    allSquares.forEach(square => square.addEventListener("click", clickHandler))
}

const clickHandler = (e) => {
    let target = e.target
    const targetEmpty = (target.textContent === "")
    const xTurn = game.classList.contains("x-turn")
    if (targetEmpty) {
        target.textContent = (xTurn ? "X" : "O")
        game.classList.toggle("x-turn")
    }
    checkWin()
}

const checkWin = () => {

    const winRow    = ["top", "center", "bottom"]
    const winColumn = ["left", "middle", "right"]
    for (let i = 0; i < winRow.length; i++) {
        let xRowWin = false;
        let oRowWin = false;
        for (let j = 0; j < winColumn.length; j++) {
            const cell = document.querySelector(`.${winRow[i]}.${winColumn[j]}`)
            xRowWin = (cell.textContent !== "" && cell.textContent !== "O")
            oRowWin = (cell.textContent !== "" && cell.textContent !== "X")
        }
        console.log(xRowWin)
    }
}

document.addEventListener('DOMContentLoaded', init)