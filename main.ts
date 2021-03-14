function MM () {
    SM = 1
    menuLLL = 1
    while (SM == 1) {
        if (menuLLL == 1) {
            basic.showLeds(`
                . # . . #
                # # # . .
                . # . . .
                . # . . .
                . . # . .
                `)
        }
    }
}
function animationLOADING () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.pause(50)
    }
}
let menuLLL = 0
let SM = 0
let mt = 1
let mtr = 1
basic.showString("micro OS")
basic.pause(100)
bluetooth.setTransmitPower(0)
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # # . # #
    # # . # #
    `)
basic.pause(20)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.pause(1000)
animationLOADING()
basic.clearScreen()
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . #
    # . # . .
    # # # . #
    # . # . #
    `)
music.playMelody("C D - E F - - - ", 120)
basic.clearScreen()
MM()
basic.forever(function () {
	
})
