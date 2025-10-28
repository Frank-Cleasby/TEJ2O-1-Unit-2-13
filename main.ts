/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Frank
 * Created on: Oct 2025
 * This program counts down
*/

// variables
let counter: number = 4
let neoPixelStrip: neopixel.Strip = null

// clean start
neoPixelStrip = neopixel.create(DigitalPin.P16, counter, NeoPixelMode.RGB)
neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
neoPixelStrip.show()
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// start countdown
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showIcon(IconNames.Giraffe)
while (counter >= 0) {
    neoPixelStrip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.show()
    basic.pause(500)
    counter = counter -1
}
})
