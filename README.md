Socket.IOled
========================

## What is this?

![video](https://raw.githubusercontent.com/wiki/w4ilun/socket.ioled/images/video.gif)

A fun little project that connects an HTML Canvas to a SSD1306 OLED controller/display via Socket.IO. This is built on top of Rick Waldron's [johnny-five](https://github.com/rwaldron/johnny-five) project and Suz Hinton's [oled-js](https://github.com/noopkat/oled-js) project. Powered by the [Intel Edison](http://www.intel.com/content/www/us/en/do-it-yourself/edison.html)

![app](https://raw.githubusercontent.com/wiki/w4ilun/socket.ioled/images/app.JPG)

![oled](https://raw.githubusercontent.com/wiki/w4ilun/socket.ioled/images/oled.JPG)

## Install 

Make sure your Intel Edison has the latest updates.

1. Git clone this repository and transfer the files over to your Intel Edison
2. `npm install`
4. Replace the IP address in `index.html` then do `node index.js`
5. Head over to http://EDISON_IP_ADDRESS:3000
5. ???
6. Profit!!!

## I<sup>2</sup>C screens (SSD1306)
Connect your pins as follows (LEFT: OLED, RIGHT: INTEL EDISON):

+ VCC => 3.3V
+ GND => GND
+ SCL => SCL
+ SDA => SDA