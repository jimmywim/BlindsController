# BlindsController
Window Blinds controller for Raspberry Pi

Currently experimental code that will be used to control a worm motor servo via a Raspberri Pi.

The idea is to remotely control a roman blind, making it go up and down, but not beyond it's limits.

The servo will be connected to a reel that winds in the cords of the blind.

The controlling software (this repo) will eventually allow you to calibrate the maximum and minimum height of the blind. The calibration sets the time taking to go from full closed to fully open. This duration sets the range of motion, so when to start and stop the motor.

The controlling software (this repo) also allows fine control of how open the blind is, and keeps track of how open or closed it is, so the "open fully" and "close fully" functions don't go beyond their bounds.

Finally, the open/close actions will happen automatically using the current user's sunset/sunrise times - or even using a Raspberry Pi light sensor - to close the blind when light level reaches a certain threshold.

At this current moment, there is no GPIO code in this at all, just a HTML/JS front end control panel, a backend server controller to receive actions from the control panel, and a class module that controls the position of the blind. This class module is where the GPIO code will go to start/stop the motor.