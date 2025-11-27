basic.forever(function () {
    basic.showLeds(`
        . . # # .
        . # . . .
        . # # # #
        . . . . #
        . # # # .
        `)
    basic.setLedColor(0x00ffff)
    calliBot2.setLed(C2Motor.beide, true)
    calliBot2.setRgbLed1(C2RgbLed.All, 0x00ffdc, 100000000000)
    calliBot2.setRgbLed(C2RgbLed.All, 10000000, 111100000, 1000000000)
    if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell) && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.dunkel)) {
        calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 100)
    } else if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.dunkel) && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.dunkel)) {
        calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, 100)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 100)
    } else {
        if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell) && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell)) {
            calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 100)
            calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, 20)
        }
    }
})
