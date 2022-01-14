function BlinkerLinks () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # . .
        . # # . .
        . . # . .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playTone(131, music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.A, function () {
    FahrerWunschBlinker = Rechts
})
input.onButtonPressed(Button.AB, function () {
    FahrerWunschBlinker = Aus
})
function BlinkerAus () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    FahrerWunschBlinker = Links
})
function BlinkerRechts () {
    basic.showLeds(`
        . . # . .
        . . # # .
        . . # # #
        . . # # .
        . . # . .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playTone(131, music.beat(BeatFraction.Whole))
}
let FahrerWunschBlinker = 0
let Rechts = 0
let Links = 0
let Aus = 0
music.setTempo(6000)
Aus = 0
Links = 1
Rechts = 2
FahrerWunschBlinker = Aus
basic.forever(function () {
    if (FahrerWunschBlinker == Rechts) {
        BlinkerRechts()
    } else if (FahrerWunschBlinker == Links) {
        BlinkerLinks()
    } else if (FahrerWunschBlinker == Aus) {
        BlinkerAus()
    } else {
        BlinkerAus()
    }
})
