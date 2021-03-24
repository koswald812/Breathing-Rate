// when button is pressed
setWatch(function() {
    // set the accel updater
    Puck.on('accel', function(d) {
      Bluetooth.println(`${JSON.stringify(d)}`);
    });
  
    // turn on the accelerometer and LED
    Puck.accelOn(104);
    LED1.write(true);
   
    // in 10 seconds, stop reading data, turn off the LED.
    setTimeout(function() {
      Puck.accelOff();
      LED1.write(false);
    }, 20000);
   
  }, BTN, {edge: "rising", debounce:50, repeat:true});