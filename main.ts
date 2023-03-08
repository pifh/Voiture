function Initialisation () {
    enJeu = 0
    temps = 50
    chrono = 0
    x_voiture = 2
    obstacles = [
    -1,
    -1,
    -1,
    -1,
    -1
    ]
    Score = 0
}
input.onButtonPressed(Button.A, function () {
    if (x_voiture > 0) {
        x_voiture += -1
    } else {
        x_voiture = 0
    }
})
function Début () {
    basic.clearScreen()
    for (let ligne = 0; ligne <= 4; ligne++) {
        for (let colonne = 0; colonne <= 4; colonne++) {
            led.plot(colonne, ligne)
            basic.pause(50)
        }
    }
    while (!(input.buttonIsPressed(Button.AB))) {
    	
    }
}
input.onButtonPressed(Button.B, function () {
    if (x_voiture < 4) {
        x_voiture += 1
    } else {
        x_voiture = 4
    }
})
function Afficher () {
    basic.clearScreen()
    led.plot(x_voiture, 4)
    for (let index = 0; index <= obstacles.length; index++) {
        led.plot(obstacles[index], index)
    }
}
function Estce_perdu_ () {
    if (obstacles[4] == x_voiture) {
        return 1
    }
    return 0
}
function GameOver () {
    enJeu = 0
    for (let index = 0; index < 3; index++) {
        led.unplot(x_voiture, 4)
        basic.pause(200)
        led.plot(x_voiture, 4)
        basic.pause(200)
    }
    basic.clearScreen()
    basic.showString("GAME OVER")
    basic.showNumber(Score)
    basic.pause(500)
    basic.showNumber(Score)
    control.reset()
}
let Score = 0
let obstacles: number[] = []
let x_voiture = 0
let chrono = 0
let temps = 0
let enJeu = 0
Initialisation()
Début()
basic.clearScreen()
enJeu = 1
loops.everyInterval(10, function () {
    if (enJeu == 1) {
        chrono += 1
        if (chrono > Math.max(temps - Math.round(Score / 2), 0)) {
            if (obstacles.pop() != -1) {
                Score += 1
            }
            obstacles.unshift(randint(0, 4))
            chrono = 0
        }
    }
})
basic.forever(function () {
    Afficher()
    if (Estce_perdu_() == 1) {
        GameOver()
    }
})
