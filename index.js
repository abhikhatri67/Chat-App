var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(4000, function () {
    console.log("listning to port")
})

app.use(express.static('public'));

var io = socket(server);

io.on('connection',function (socket){
    console.log("Socket Connection",socket.id);

    socket.on('chat', function(data){
    console.log(data);
    io.sockets.emit('chat',data);
    })
})