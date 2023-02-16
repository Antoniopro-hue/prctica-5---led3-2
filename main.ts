let control2 = 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.pause(100)
    while (control2 < 1024) {
        control2 += 1
        pins.analogWritePin(AnalogPin.P0, control2)
        basic.pause(5000)
    }
    while (control2 < 0) {
        control2 += -1
        pins.analogWritePin(AnalogPin.P0, control2)
        basic.pause(5000)
    }
})
