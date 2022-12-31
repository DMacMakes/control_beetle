let pitch = 0
let roll = 0
let LEFT_ROLL = -15
let RIGHT_ROLL = 15
let FORWARD_PITCH = 25
let BACKWARD_PITCH = 45
// display image
// open claw
basic.forever(function () {
    roll = input.rotation(Rotation.Roll)
    pitch = input.rotation(Rotation.Pitch)
    // close claw
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # . # .
            . . . . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . .
            # . . . #
            . # . # .
            # . . . #
            . . . . .
            `)
    } else if (pitch < FORWARD_PITCH) {
        basic.showArrow(ArrowNames.North)
    } else if (pitch > BACKWARD_PITCH) {
        basic.showArrow(ArrowNames.South)
    } else if (roll < LEFT_ROLL) {
        basic.showArrow(ArrowNames.West)
    } else if (roll > RIGHT_ROLL) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
