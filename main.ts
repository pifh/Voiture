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
let colonne = 0
let x_voiture = 0
let temps = 500
x_voiture = 2
let x_obstacle = randint(0, 4)
let ligne = 0
let Score = 0
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
let y_obstacle = -1
loops.everyInterval(500, function () {
    y_obstacle += 1
})
basic.forever(function () {
    basic.clearScreen()
    led.plot(x_voiture, 4)
    led.plot(x_obstacle, y_obstacle)
    if (y_obstacle > 4) {
        Score += 1
        temps += -100
        x_obstacle = randint(0, 4)
        y_obstacle = 0
    } else if (x_obstacle == x_voiture && y_obstacle == 4) {
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
})
