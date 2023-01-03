enum Flags {
    A = 1 << 0
}
let action = ""
let roll = 0
let pitch = 0
radio.setGroup(1)
let LEFT_ROLL = -15
let RIGHT_ROLL = 15
let FORWARD_PITCH = 15
let BACKWARD_PITCH = 50
// display image
// open claw
basic.forever(function () {
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    // close claw
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
        action = "unpinch"
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . # . # .
            . # . # .
            `)
        action = "pinch"
    } else if (roll < LEFT_ROLL) {
        basic.showArrow(ArrowNames.West)
        action = "left"
    } else if (roll > RIGHT_ROLL) {
        basic.showArrow(ArrowNames.East)
        action = "right"
    } else if (pitch < FORWARD_PITCH) {
        basic.showArrow(ArrowNames.North)
        action = "forward"
    } else if (pitch > BACKWARD_PITCH) {
        basic.showArrow(ArrowNames.South)
        action = "backward"
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        action = "stop"
    }
    radio.sendString(action)
})
