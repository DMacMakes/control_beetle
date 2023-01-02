enum Flags {
    A = 1 << 0
}
let pitch = 0
let roll = 0
radio.setGroup(1)
let LEFT_ROLL = -20
let RIGHT_ROLL = 20
let FORWARD_PITCH = 20
let BACKWARD_PITCH = 45
// display image
// open claw
basic.forever(function () {
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
    } else if (roll < LEFT_ROLL) {
        basic.showArrow(ArrowNames.East)
        roll = input.rotation(Rotation.Roll)
    } else if (roll > RIGHT_ROLL) {
        basic.showArrow(ArrowNames.West)
        roll = input.rotation(Rotation.Roll)
    } else if (pitch < FORWARD_PITCH) {
        basic.showArrow(ArrowNames.North)
        pitch = input.rotation(Rotation.Pitch)
    } else if (pitch > BACKWARD_PITCH) {
        basic.showArrow(ArrowNames.South)
        pitch = input.rotation(Rotation.Pitch)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
