pitch = 0
roll = 0
LEFT_ROLL = -15
RIGHT_ROLL = 15
FORWARD_PITCH = 25
BACKWARD_PITCH = 45
# display image
# open claw

def on_forever():
    global roll, pitch
    roll = input.rotation(Rotation.ROLL)
    pitch = input.rotation(Rotation.PITCH)
    # close claw
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
            . . . . .
                        . # . # .
                        # . . . #
                        . # . # .
                        . . . . .
        """)
    elif input.button_is_pressed(Button.B):
        basic.show_leds("""
            . . . . .
                        # . . . #
                        . # . # .
                        # . . . #
                        . . . . .
        """)
    elif pitch < FORWARD_PITCH:
        basic.show_arrow(ArrowNames.NORTH)
    elif pitch > BACKWARD_PITCH:
        basic.show_arrow(ArrowNames.SOUTH)
    elif roll < LEFT_ROLL:
        basic.show_arrow(ArrowNames.WEST)
    elif roll > RIGHT_ROLL:
        basic.show_arrow(ArrowNames.EAST)
    else:
        basic.show_icon(IconNames.SMALL_DIAMOND)
basic.forever(on_forever)
