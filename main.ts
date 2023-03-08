function Initialisation () {
    temps = 50
    chrono = 0
    x_voiture = 2
    x_obstacle = randint(0, 4)
    x_obstacle_2 = randint(0, 4)
    x_obstacle_3 = randint(0, 4)
    x_obstacle_4 = randint(0, 4)
    x_obstacle_5 = randint(0, 4)
    ligne = 0
    Score = 0
    y_obstacle = 0
}
input.onButtonPressed(Button.A, function () {
    if (x_voiture > 0) {
        x_voiture += -1
    } else {
        x_voiture = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (x_voiture < 4) {
        x_voiture += 1
    } else {
        x_voiture = 4
    }
})
function Estce_perdu_ () {
    if (y_obstacle == 4) {
        if (x_obstacle == x_voiture) {
            return 1
        }
        return 0
    } else if (x_obstacle_2 == 4) {
        if (x_obstacle_2 == x_voiture) {
            return 1
        }
        return 0
    } else if (x_obstacle_3 == 4) {
        if (x_obstacle_3 == x_voiture) {
            return 1
        }
        return 0
    } else if (x_obstacle_4 == 4) {
        if (x_obstacle_4 == x_voiture) {
            return 1
        }
        return 0
    } else if (x_obstacle_5 == 4) {
        if (x_obstacle_5 == x_voiture) {
            return 1
        }
        return 0
    }
    return 0
}
function GameOver () {
    for (let index = 0; index < 3; index++) {
        led.unplot(x_obstacle, 4)
        basic.pause(200)
        led.plot(x_obstacle, 4)
        basic.pause(200)
    }
    basic.showNumber(Score)
    basic.pause(5000)
    control.reset()
}
let Score = 0
let x_obstacle_5 = 0
let x_obstacle_4 = 0
let x_obstacle_3 = 0
let x_obstacle_2 = 0
let x_obstacle = 0
let x_voiture = 0
let chrono = 0
let temps = 0
let y_obstacle = 0
let ligne = 0
let colonne = 0
Initialisation()
for (let index = 0; index < 5; index++) {
    colonne = 0
    for (let index = 0; index < 5; index++) {
        led.plot(colonne, ligne)
        basic.pause(50)
        colonne += 1
    }
    ligne += 1
}
while (!(input.buttonIsPressed(Button.AB))) {
	
}
basic.clearScreen()
y_obstacle = 0
let y_obstacle_2 = -1
let y_obstacle_3 = -2
let y_obstacle_4 = -3
let y_obstacle_5 = -4
loops.everyInterval(10, function () {
    chrono += 1
    if (chrono > temps) {
        if (y_obstacle >= 4) {
            y_obstacle = 0
            x_obstacle = randint(0, 4)
        } else {
            y_obstacle += 1
        }
        if (y_obstacle_2 >= 4) {
            y_obstacle_2 = 0
            x_obstacle_2 = randint(0, 4)
        } else {
            y_obstacle_2 += 1
        }
        if (y_obstacle_3 >= 4) {
            y_obstacle_3 = 0
            x_obstacle_3 = randint(0, 4)
        } else {
            y_obstacle_3 += 1
        }
        if (y_obstacle_4 >= 4) {
            y_obstacle_4 = 0
            y_obstacle_4 = randint(0, 4)
        } else {
            y_obstacle_4 += 1
        }
        if (y_obstacle_5 >= 4) {
            y_obstacle_5 = 0
            x_obstacle_5 = randint(0, 4)
        } else {
            y_obstacle_5 += 1
        }
        Score += 1
        chrono = 0
    }
})
basic.forever(function () {
    basic.clearScreen()
    led.plot(x_voiture, 4)
    led.plot(x_obstacle, y_obstacle)
    led.plot(x_obstacle_2, y_obstacle_2)
    led.plot(x_obstacle_3, y_obstacle_3)
    led.plot(x_obstacle_4, y_obstacle_4)
    led.plot(x_obstacle_5, y_obstacle_5)
    if (Estce_perdu_() == 1) {
        GameOver()
    }
})
