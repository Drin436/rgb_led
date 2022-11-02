input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.turnRgbLedOff()
})
basic.showString("hi!")
basic.forever(function () {
	
})
