enum Actions {
    Forward,
    Backward,
    Left,
    Right,
    Pinch,
    Unpinch,
    Stop
}
enum Flags {
    A = 1 << 0
}
function displayAction (anAction: number) {
    if (anAction == Actions.Pinch) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . # . # .
            . # . # .
            `)
    } else if (anAction == Actions.Unpinch) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (anAction == Actions.Left) {
        basic.showArrow(ArrowNames.West)
    } else if (anAction == Actions.Right) {
        basic.showArrow(ArrowNames.East)
    } else if (anAction == Actions.Forward) {
        basic.showArrow(ArrowNames.North)
    } else if (anAction == Actions.Backward) {
        basic.showArrow(ArrowNames.South)
    } else if (anAction == Actions.Stop) {
        basic.showIcon(IconNames.SmallDiamond)
    } else {
    	
    }
}
let input_action = 0
let roll = 0
let pitch = 0
let action = 0
let action_last_frame = Actions.Stop
displayAction(Actions.Stop)
radio.setGroup(1)
radio.sendNumber(action_last_frame)
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
        input_action = Actions.Unpinch
    } else if (input.buttonIsPressed(Button.B)) {
        input_action = Actions.Pinch
    } else if (roll < LEFT_ROLL) {
        input_action = Actions.Left
    } else if (roll > RIGHT_ROLL) {
        input_action = Actions.Right
    } else if (pitch < FORWARD_PITCH) {
        input_action = Actions.Forward
    } else if (pitch > BACKWARD_PITCH) {
        input_action = Actions.Backward
    } else {
        input_action = Actions.Stop
    }
    // If the user input has changed to something new, act on it.
    if (input_action != action_last_frame) {
        displayAction(input_action)
        radio.sendNumber(input_action)
        action_last_frame = input_action
    }
})
