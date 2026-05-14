input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
radio.setGroup(44)
basic.forever(function () {
    basic.showString("L")
})
