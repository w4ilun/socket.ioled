/*
** @description Init Express, Socket.IO
*/
var express = require('express');
var app = express();
var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});
var io = require('socket.io')(server);

/*
** @description Pointing static directory to location of Socket.IO client library
*/
app.use(express.static('node_modules/socket.io/node_modules/socket.io-client'));

/*
** @description Root route serves index.html
*/
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

/*
** @description Bind socket events to display updates on connection
*/
io.on('connection', function (socket) {
    socket.on('draw', function (data) {
        draw(data);
    });
    socket.on('clear', function () {
        clearCanvas();
    });
    socket.on('invert', function (data) {
        invertCanvas(data);
    });    
});


/*
** @description Johnny-Five init for Intel Edison
*/
var five = require('johnny-five');
var edison = require("edison-io");
var board = new five.Board({
    io: new edison()
});


/*
** @description Global pointer of Oled instance
*/
var Oled = require('oled-js');
var oled;

/*
** @description Options for Oled display SSD1306
*/
var opts = {
    width: 128,
    height: 64, 
    address: 0x3C
};

/*
** @description Turn on and clear display on ready
*/
board.on('ready', function() {

  oled = new Oled(board, five, opts);

  oled.turnOnDisplay();
  oled.clearDisplay(true);
  oled.update();

});

/*
** @description Draw pixel on display
*/
function draw(data){
    var x = data.x <= opts.width ? data.x : opts.width;
    var y = data.y <= opts.height ? data.y : opts.height;
    oled.drawPixel([x,y,1]);
}

/*
** @description Invert pixels on display
*/
function invertCanvas(state){
  oled.invertDisplay(state);
  oled.update();    
}

/*
** @description Clear all pixels on display
*/
function clearCanvas(){
  oled.clearDisplay(true);
  oled.update();    
}
