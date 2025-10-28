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
neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.show()
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// start countdown
input.onButtonPressed(Button.A, function() {
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.show()
    basic.clearScreen()
    basic.pause(500)
while (counter >= 0) {
    neoPixelStrip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.show()
    basic.showNumber(counter)
    basic.pause(500)
    counter = counter -1
}
basic.clearScreen()
basic.showIcon(IconNames.Giraffe)
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    neoPixelStrip.show()
    counter = 4
})
